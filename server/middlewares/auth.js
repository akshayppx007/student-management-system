const ErrorHandler = require("../utils/errorHandler");
const jwt = require("jsonwebtoken");
const User = require("../models/user");


// ckecking for user authentication
exports.isAuthenticatedUser = async (req, res, next) => {
	const { token } = req.cookies;
    if(!token) {
        return next(new ErrorHandler("login required to access this resource", 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    
    next()
};

// verify if user is an admin
exports.veryfyAdmin = async (req, res, next) => {
	if (req.user && req.user.role === "Admin") {
		next();
	} else {
		return next(new ErrorHandler("Unauthorized. Admin required", 403));
	}
};

