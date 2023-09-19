import  express  from "express";
import dotenv  from 'dotenv';
import cors from 'cors';
import createProxyMiddleware from 'http-proxy-middleware';

const app = express();
app.use(cors(
    {
        origin: "http://localhost:3000",
        // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        // headers: 'Origin, X-Requested-With, Content-Type, Accept',
      }
));

import connectDB from "./MongoDB/connect.js";
import userRouter from './routes/user.routes.js';
import propertyRouter from "./routes/property.routes.js";



app.use(express.json({limit:'50mb'}));
dotenv.config();

app.get('/', (req,res)=>{
    res.send({message:"Hello world"});
});

app.use('/api/users', userRouter);
app.use('/api/properties', propertyRouter);


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

