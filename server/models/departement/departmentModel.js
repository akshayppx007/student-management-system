const mongoose = require("mongoose");


const DepartmentSchema = mongoose.Schema(
	{
        id: {
			type: Number,
		},
		name: {
			type: String,
			
			
		},
		email: {
			type: String,
			
		
		},
		mobileNumber: {
			type: String,
		},
		departmentName: {
			type: String,
		},
    },
	{
		timestamps: true,
	}
);

const Department = mongoose.model("Department", DepartmentSchema);
module.exports = Department;