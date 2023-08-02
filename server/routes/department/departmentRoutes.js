


const express = require("express");
const { getAllDepartments, createDepartment, updateDepartment, deleteDepartment } = require("../../controller/departments/departmentController");
const router = express.Router();

router.route("/departments").post(createDepartment);
router.route("/departments").get(getAllDepartments);
router.route("/departments/:id").put(updateDepartment);
router.route("/departments/:id").delete(deleteDepartment);



module.exports = router;

