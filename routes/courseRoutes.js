const express = require('express');
const router = express.Router();
const courseCtrl = require('../controllers/courseController');

router.get('/courses', courseCtrl.getCourses);
router.get('/courses/:id', courseCtrl.getCoursesById);
router.post('/courses', courseCtrl.createCourses);
router.put('/courses/:id', courseCtrl.updateCourses);
router.delete('/courses/:id', courseCtrl.deleteCourses);

module.exports = router;