// require('dotenv').config({path : './env'})
import app from './app.js';
import * as dotenv from 'dotenv'
dotenv.config()

import connectDB from "./db/index.js";




connectDB().then(
app.listen(process.env.PORT || 3000, ()=>{
console.log('connection started at port' + process.env.PORT)
})


)
.catch((err)=>{
    console.log("some error occoured in the conncection" + err);
})