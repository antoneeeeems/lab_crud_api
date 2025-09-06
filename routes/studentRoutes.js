const express = require('express');
const router = express.Router();
const studentCtrl = require('../controllers/studentController');

router.get('/students', studentCtrl.getStudents);
router.get('/students/:id', studentCtrl.getStudentById);
router.post('/students', studentCtrl.createStudent);
router.put('/students/:id', studentCtrl.updateStudent);
router.delete('/students/:id', studentCtrl.deleteStudent);

module.exports = router;