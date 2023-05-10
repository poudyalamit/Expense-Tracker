 const express=require('express');
const app =express();
const cors=require('cors');
require('dotenv').config({path:'./config.env'});

const port= process.env.PORT || 5000;
//use middlewares
app.use(cors);
app.use(express.json());

//mongodb connection
const conn=require('./db/connection');

//using routes
app.use(require('./routes/route.js'));

conn.then(db=>{
    if(!db) return process.exit(1);

app.listen(port,()=>{
    console.log(`Xpense backend server running on port: http://localhost:${port}`)
})
app.on('error',err=>console.log(`Failed To Connect with HTTP Server:${err}`));
//error in mongodb connection
}).catch(error=>{
    console.log(`Connection Failed...!${error}`);
})