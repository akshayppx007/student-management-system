// // studentController.js
// const { v4: uuidv4 } = require('uuid');

// let students = [];

// // Get all students assigned to a staff member
// exports.getAllStudents = (req, res) => {
//   const { id } = req.params;
//   const assignedStudents = students.filter((student) => student.staffId === id);
//   res.json(assignedStudents);
// };

// // Create a new student assigned to a staff member
// exports.createStudent = (req, res) => {
//   const { id } = req.params;
//   const { name } = req.body;
//   const newStudent = { id: uuidv4(), name, staffId: id };
//   students.push(newStudent);
//   res.json(newStudent);
// };

// // Update a student by ID
// exports.updateStudent = (req, res) => {
//   const { staffId, id } = req.params;
//   const { name } = req.body;
//   const student = students.find((student) => student.staffId === staffId && student.id === id);
//   if (!student) {
//     return res.status(404).json({ error: 'Student not found' });
//   }
//   student.name = name;
//   res.json(student);
// };

// // Delete a student by ID
// exports.deleteStudent = (req, res) => {
//   const { staffId, id } = req.params;
//   students = students.filter((student) => !(student.staffId === staffId && student.id === id));
//   res.sendStatus(200);
// };
