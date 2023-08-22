import  express  from "express";
import * as dotenv  from 'dotenv';
import cors from 'cors';

import connectDB from "./MongoDB/connect.js";
import userRouter from './routes/user.routes.js';
import propertyRouter from "./routes/property.routes.js";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit:'50mb'}));

app.get('/', (req,res)=>{
    res.send({message:"Hello world"});
});

app.use('/api/v1/users', userRouter);
app.use('/api/v1/properties', propertyRouter);


const port= 4200;
const startserver= async()=>{
    try {
        connectDB(process.env.MongoDB_URL)
        
        app.listen(port,()=>{
            console.log('connected');
        })
    } catch (error) {
        console.error(error);
    }
}

startserver();

