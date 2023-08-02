const catchAsyncErrors = require("../utils/catchAsyncErrors");
const User = require("../models/user");
const ErrorHandler = require("../utils/errorHandler");
const sendToken = require("../utils/jwtToken");
const sendEmail = require("../utils/sendEmail");


// register a new user
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
	const { userName, email, password, role } = req.body;

	if (!userName|| !email || !password) {
		return next(new ErrorHandler("Please enter all fields", 400));
	}

	const userExists = await User.findOne({ email });
	const sameUserName = await User.findOne({ userName });
	if (userExists) {
		return next(new ErrorHandler("User already exists", 400));
	}

	if (sameUserName) {
		return next(new ErrorHandler("user with the same username already exists", 400))
	}

	const user = await User.create({
		userName,
		email,
		password,
        role
	});

	sendToken(user, 200, res);
});


// login user
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    return next(new ErrorHandler("Please enter username and password", 400));
  }

  const user = await User.findOne({ userName });

  if (!user) {
    return next(new ErrorHandler("Invalid username or password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid username or Password", 401));
  }
  sendToken(user, 200, res);
});

// get user profile
exports.getUserProfileLogin = catchAsyncErrors(async (req, res, next) => {
	const user = await User.findById(req.user.id);

	if (!user) {
		return next(new ErrorHandler("User not found", 404));
	}

	res.status(200).json({
		success: true,
		user,
	});
});

// logout user
exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
	res.cookie("token", null, {
		expires: new Date(Date.now()),
		httpOnly: true,
		path: "/",
	});

	res.status(200).json({
		success: true,
		message: "Logged out",
	});
});

// Forgot Password
exports.forgotPassword = async (req, res, next) => {

    const user = await User.findOne({ email: req.body.email });

    if (!user) {
        return next(new ErrorHandler("user not found", 404));
    }

    // Get reset token
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave: false });

    // Create reset password url
    const resetUrl = `${req.protocol}://${req.get('host')}/auth/password/reset/${resetToken}/confirm`;

    const message = `Your password reset token is as follow:\n\n${resetUrl}\n\nIf you have not requested this email, then ignore it.`

    try {

        await sendEmail({
            email: user.email,
            subject: "password recovery",
            message
        })

        res.status(200).json({
            success: true,
            message: `Email sent to: ${user.email}`
        })

    } catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave: false });

        return next(new ErrorHandler(error.message, 500));
    }

};

//  reset password
exports.resetPassword = async (req, res, next) => {
    
    // Hash URL token
    const resetPasswordToken = crypto.createHash('sha256').update(req.params.token).digest('hex')

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
    })

    if (!user) {
        return next(new ErrorHandler("Password reset token is invalid or has been expired", 400))
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHandler("Password does not match", 400))
    }

    // Setup new password
    user.password = req.body.password;

    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    sendToken(user, 200, res);
};
