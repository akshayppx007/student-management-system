// // staffController.js
// const { v4: uuidv4 } = require('uuid');

// let staff = [];

// // Get all staff members for a department
// exports.getAllStaff = (req, res) => {
//   const { id } = req.params;
//   const staffMembers = staff.filter((staff) => staff.departmentId === id);
//   res.json(staffMembers);
// };

// // Create a new staff member for a department
// exports.createStaff = (req, res) => {
//   const { id } = req.params;
//   const { name } = req.body;
//   const newStaff = { id: uuidv4(), name, departmentId: id };
//   staff.push(newStaff);
//   res.json(newStaff);
// };

// // Update a staff member by ID
// exports.updateStaff = (req, res) => {
//   const { id } = req.params;
//   const { name } = req.body;
//   const staffMember = staff.find((staff) => staff.id === id);
//   if (!staffMember) {
//     return res.status(404).json({ error: 'Staff member not found' });
//   }
//   staffMember.name = name;
//   res.json(staffMember);
// };

// // Delete a staff member by ID
// exports.deleteStaff = (req, res) => {
//   const { id } = req.params;
//   staff = staff.filter((staff) => staff.id !== id);
//   res.sendStatus(200);
// };
