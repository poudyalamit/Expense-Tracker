const express = require('express');
const app = express();
const cors = require('cors')

require('dotenv').config({ path: "./config.env" });
const port = process.env.PORT || 5000; 

//use middlewares
app.use(cors());
app.use(express.json());

//using routes
app.use('/api/categories', require('./routes/route'));

//mongodb Connection
const conn=require('./database/Connection');

conn.then(db=>{
    if(!db) return process.exit(1);

//listening the sever
app.listen(port, () => {
    console.log(`Xpense backend running at: http://localhost:${port}`);
})
app.on('error',err=>{console.log(`Failed to Connect with server:${err}`)})

}).catch(error=>{
    console.log(`Connection Failed...!${error}`)
});