import { useLocation, Navigate } from "react-router-dom";
import { useMemo } from "react";

// eslint-disable-next-line react/prop-types
const RequireAuth = ({ children }) => {
    const accessToken = useMemo(() => localStorage.getItem("accessToken"), []);

    const location = useLocation();

    if (!accessToken) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;
