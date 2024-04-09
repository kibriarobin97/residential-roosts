import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    console.log(location)

    if (loading) {
        return (
            <div className="flex items-center justify-center mt-8 lg:mt-16">
                <span className="loading loading-bars loading-lg"></span>
            </div>
        )

    }

    if (user) {
        return children
    }
    return <Navigate state={location?.pathname || '/'} to='/login'></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;