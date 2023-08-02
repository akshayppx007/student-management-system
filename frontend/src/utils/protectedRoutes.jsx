import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const ProtectedRoutes = ({admin}) => {
	const dispatch = useDispatch();
    const { loading, error, user, isAuthenticated } = useSelector(
		(state) => state.persistReducer.authUser
	);

    useEffect(() => {
        if(!user) {
            dispatch(getUserProfile());
        }
    }, [isAuthenticated, user, loading, dispatch]);

    if (
        isAuthenticated === true &&
        user &&
        user.role === "Admin" &&
        admin === true
      ) {
        return <Outlet />;
      } else if (
        isAuthenticated === true &&
        user &&
        user.role != "Admin" &&
        admin === false
      ) {
        return <Outlet />;
      } else if (isAuthenticated === true && user && user.role != "Admin" ) {
        return (
            <Navigate to="/" />
        );
      } else {
        return <Navigate to="/login" />;
      }
    
};

export default ProtectedRoutes;
