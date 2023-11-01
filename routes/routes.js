const express = require('express')

const router = express.Router()

const { createStudent } = require('../controller/studentController')

const { createCourse } = require('../controller/courseControl')

router.get('/', (req,res)=>{
    res.send("Router Method!!!")
});

router.post('/student', createStudent);
router.post('/course',createCourse);

module.exports = router;