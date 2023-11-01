const mongoose = require('mongoose')
const courseSchema = new mongoose.Schema({
   Name :{
    type : String,
    required: true,
   },
   Duration :{
    type : String,
    require : true,
   },
   description :{
    type : String,
   },
   Code:{
    type : String,
    unique : true,
    require : true,
   },
   students :[
    {
    type : mongoose.Schema.Types.ObjectId,
    ref : 'Student',
    },
  ],  
 }, 
{timestamps : true}
);

module.exports = mongoose.model('Course',courseSchema)