import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
const app=express();

import userRoutes from './routes/users.js';


app.use(bodyParser.json());
app.use(cors());

app.use('/users',userRoutes)

app.get('/',(req,res)=>res.send('Hello from Homepage.'));

app.listen(8080,()=>{
    console.log(`app listening on 8080`)
});
