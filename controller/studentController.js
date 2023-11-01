const studentModel = require('../models/studentModel');
const { validEmail, validPass, validPhone } = require("../validation/valid");
const createStudent = async function(req,res){
    try{
        let student = req.body;
        let { fname, lname, email, password, mobile, address } = student;

        if (!fname || !lname  || !email || !password || !mobile || !address ){
            return res.send({message : "Please provide all Information!!"})}
        
        if(!validEmail) return res.send({message : "Please enter valid email..."})
        if(!validPass) return res.send({message :"Please enter valid password..."})
        if(!validPhone) return res.send({message :"Please enter valid mobile number..."})

        let uniqueEmail = await studentModel.findOne({email})
        if(uniqueEmail) return res.send({message : "Email already exists!..."})

        let uniquePhone = await studentModel.findOne({mobile})
        if(uniquePhone) return res.send({message : "Mobile number already exists!..."})

        let createStu = await studentModel.create(student)
        return res.send({message:createStu})
    }catch(err){
        console.log(err);
    }
             
}
module.exports.createStudent = createStudent;