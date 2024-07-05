import { useLocation, Navigate } from "react-router-dom";

import {useAuthContext} from "./AuthContext.jsx";

// eslint-disable-next-line react/prop-types
const RequireAuth = ({ children }) => {
    const {currentUser}  = useAuthContext()
    const location = useLocation();

    if (!currentUser) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};
export default RequireAuth;
