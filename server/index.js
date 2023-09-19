import  express  from "express";
import dotenv  from 'dotenv';
import cors from 'cors';
import createProxyMiddleware from 'http-proxy-middleware';

import connectDB from "./MongoDB/connect.js";
import userRouter from './routes/user.routes.js';
import propertyRouter from "./routes/property.routes.js";


const app = express();
// app.use(cors());
app.use(express.json({limit:'50mb'}));
dotenv.config();

// Create a proxy for your API running on a different port
const apiProxy = createProxyMiddleware('/api', {
    target: 'http://localhost:3800', // The address of your API
    changeOrigin: true,
  });

app.use('/api/users', apiProxy);

app.get('/', (req,res)=>{
    res.send({message:"Hello world"});
});

app.use('/api/v1/users', userRouter);
app.use('/api/v1/properties', propertyRouter);


const port= 3800;
const startserver= async()=>{
    try {
        connectDB(process.env.MongoDB_URL)
        
        app.listen(port,()=>{
            console.log(`connected at port ${port}`);
        })
    } catch (error) {
        console.error(error);
    }
}

startserver();

