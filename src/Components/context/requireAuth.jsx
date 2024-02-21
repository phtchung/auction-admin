import { useLocation, Navigate } from "react-router-dom";
import {useEffect, useMemo, useState} from "react";
import USER from "../../Services/userService.jsx";

// eslint-disable-next-line react/prop-types
const RequireAuth = ({ children }) => {

    const [handle, setHandle] = useState(false)
    const location = useLocation();

    useEffect(() => {
        ;(async () => {
            let result = await USER.me()

            if (result.data._id && result.data.roles[0] === 'admin') {
                setHandle(true)
            }
        })()
    }, [])

    if (handle === false) {
        return <> </>
    }
    return <>{handle === true ? children : <Navigate to="/login" state={{ from: location }} replace />}</>

};

export default RequireAuth;
