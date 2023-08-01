const catchAsyncErrors = require("../utils/catchAsyncErrors");
const User = require("../models/user");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/jwtToken");


// register a new user
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
	const { firstName, lastName, email, password, role } = req.body;

	if (!firstName || !lastName || !email || !password) {
		return next(new ErrorHandler("Please enter all fields", 400));
	}

	const userExists = await User.findOne({ email });
	if (userExists) {
		return next(new ErrorHandler("User already exists", 400));
	}

	const user = await User.create({
		firstName,
		lastName,
		email,
		password,
        role
	});

	sendToken(user, 200, res);
});


// login user
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please enter email and password", 400));
  }

  const user = await User.findOne({ email });

  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid Email or Password", 401));
  }
  sendToken(user, 200, res);
});
