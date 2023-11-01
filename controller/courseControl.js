const courseModel = require('../models/courseModel');

const createCourse = async function (req, res){
    try{
        let course = req.body;
        let { Name, description, students } = course;

        let uniqueCode = await courseModel.findOne({Code});
        if(uniqueCode){
            res.send({message:"Course code already exists"})
        }
        let createCourse = await courseModel.create(course);
        return res.send({message : createCourse})
    }
    catch(err){
        console.log(err)
    }
}
module.exports.createCourse = createCourse;