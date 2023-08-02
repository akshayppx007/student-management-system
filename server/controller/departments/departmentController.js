// departmentController.js
const { v4: uuidv4 } = require('uuid');
const Department = require('../../models/departement/departmentModel');

let departments = [];

// Get all departments
exports.getAllDepartments = (req, res) => {
  res.json(departments);
};

// Create a new department
exports.createDepartment = (req, res) => {
  const { name } = req.body;
//   const newDepartment = { id: uuidv4(), name };
//   departments.push(newDepartment);
//   res.json(newDepartment);
//   console.log(object)
Department.create(req.body).then(()=>{
    res.send({
        status:"success"
    }
    
    )
}).catch((err)=>{
console.log
})
 console.log(req.body)
};

// Update a department by ID
exports.updateDepartment = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const department = departments.find((dept) => dept.id === id);
  if (!department) {
    return res.status(404).json({ error: 'Department not found' });
  }
  department.name = name;
  res.json(department);
};

// Delete a department by ID
exports.deleteDepartment = (req, res) => {
  const { id } = req.params;
  departments = departments.filter((dept) => dept.id !== id);
  res.sendStatus(200);
};
