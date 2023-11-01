const express = require('express');
const route = require('./routes/routes');
const app = express()
const mongoose = require('mongoose')
app.use(express.json())
const PORT = 8080
mongoose.connect('mongodb+srv://abyanmohammed2002:abyanmohd@cluster0.o8egxjw.mongodb.net/')
.then(() => {console.log("Database connected...")})
.catch((error)=>{ console.log(error)})
app.use('/',route);
app.listen( PORT, ()=>{
    console.log(`Server is Running ${PORT}`);
})