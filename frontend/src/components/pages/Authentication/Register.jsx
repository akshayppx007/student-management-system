import React, { useEffect, useRef, useState } from "react";
import { login } from "../../imagepath";
import { Link, useNavigate } from "react-router-dom";
import ReactPasswordToggleIcon from "react-password-toggle-icon";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, registerUser } from "../../../actions/userActions";

const Register = () => {
	const [validated, setValidated] = useState(false);
    const [passwordValidation, setPasswordValidation] = useState("")
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { loading, error, user, isAuthenticated } = useSelector(
		(state) => state.persistReducer.authUser
	);

	let inputRef = useRef();
	let inputRef2 = useRef();
	const showIcon = () => (
		<i class="feather feather-eye" aria-hidden="true">
			<FeatherIcon icon="eye" />
		</i>
	);
	const hideIcon = () => (
		<i class="feather feather-eye-slash" aria-hidden="true">
			<FeatherIcon icon="eye-off" />
		</i>
	);

	useEffect(() => {
		if (isAuthenticated) {
			navigate("/");
			console.log("registration successfull");
		}
		if (error) {
			console.log(error);
			// dispatch(clearErrors());
		}
	}, [dispatch, isAuthenticated, error, navigate]);
	const handleSubmit = (event) => {
		event.preventDefault();
		const form = event.currentTarget;

		if (form.checkValidity() === false) {
			event.stopPropagation();
		} else {
			const formData = new FormData();
			formData.set("userName", event.target.userName.value);
			formData.set("email", event.target.email.value);
			formData.set("password", event.target.password.value);
			dispatch(registerUser(formData));
		}
		setValidated(true);
	};

	const onChange = (e) => {
		const password = e.target.form.querySelector("input[name=password]");
		const confirmPassword = e.target.form.querySelector(
			"input[name=confirmPassword]"
		);

		if (password.value === confirmPassword.value) {
            setPasswordValidation("");
		} else {
			setPasswordValidation("passwords don't match");
		}
	};

	return (
		<>
			{/* Main Wrapper */}
			<div className="main-wrapper login-body">
				<div className="login-wrapper">
					<div className="container">
						<div className="loginbox">
							<div className="login-left">
								<img className="img-fluid" src={login} alt="Logo" />
							</div>
							<div className="login-right">
								<div className="login-right-wrap">
									<h1>Sign Up</h1>
									<p className="account-subtitle">
										Enter details to create your account
									</p>
									{/* Form */}
									<form
										encType="application/json"
										noValidate
										validated={validated}
										onSubmit={handleSubmit}
									>
										<div className="form-group">
											<label>
												Username <span className="login-danger">*</span>
											</label>
											<input
												className="form-control"
												type="text"
												name="userName"
											/>
											<span className="profile-views">
												<i className="fas fa-user-circle" />
											</span>
										</div>
										<div className="form-group">
											<label>
												Email <span className="login-danger">*</span>
											</label>
											<input
												className="form-control"
												type="text"
												name="email"
											/>
											<span className="profile-views">
												<i className="fas fa-envelope" />
											</span>
										</div>
										<div className="form-group">
											<label>
												Password <span className="login-danger">*</span>
											</label>
											<input
												ref={inputRef}
												className="form-control pass-input"
												type="password"
												name="password"
												onChange={onChange}
											/>
											<ReactPasswordToggleIcon
												inputRef={inputRef}
												showIcon={showIcon}
												hideIcon={hideIcon}
											/>
											{/* <input className="form-control pass-input" type="text" />
                                            <span className="profile-views feather-eye toggle-password">
                                                <FeatherIcon icon="eye" />
                                            </span> */}
										</div>
										<div className="form-group">
											<label>
												Confirm password <span className="login-danger">*</span>
											</label>
											{/* <input className="form-control pass-confirm" type="text" /> */}
											<input
												ref={inputRef2}
												className="form-control pass-confirm"
												type="password"
												name="confirmPassword"
												onChange={onChange}
                                                required
											/>
                                            <p className="textMuted">{passwordValidation}</p>
											<ReactPasswordToggleIcon
												inputRef={inputRef2}
												showIcon={showIcon}
												hideIcon={hideIcon}
											/>
											{/* <span className="profile-views feather-eye reg-toggle-password">
                                                <FeatherIcon icon="eye" />
                                            </span> */}
										</div>
										<div className=" dont-have">
											Already Registered? <Link to="/login">Login</Link>
										</div>
										<div className="form-group mb-0">
											<button
												className="btn btn-primary btn-block"
												type="submit"
											>
												Register
											</button>
										</div>
									</form>
									{/* /Form */}
									<div className="login-or">
										<span className="or-line" />
										<span className="span-or">or</span>
									</div>
									{/* Social Login */}
									<div className="social-login">
										<Link to="#">
											<i className="fab fa-google-plus-g" />
										</Link>
										<Link to="#">
											<i className="fab fa-facebook-f" />
										</Link>
										<Link to="#">
											<i className="fab fa-twitter" />
										</Link>
										<Link to="#">
											<i className="fab fa-linkedin-in" />
										</Link>
									</div>
									{/* /Social Login */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
