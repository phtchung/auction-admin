import { useState } from "react";

import {toast} from "react-toastify";
import USER from "../Services/userService.jsx";
import {useAuthContext} from "../Components/context/AuthContext.jsx";
import {useNavigate} from "react-router-dom";

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { currentUser, setCurrentUser } = useAuthContext();
    const navigate = useNavigate()
    const logout = async () => {
        setLoading(true);
        try {
            const res = await USER.logout()
            const data =  res.data
            if (data.error) {
                throw new Error(data.error);
            }
            localStorage.removeItem("data");
            localStorage.removeItem("id");
            localStorage.removeItem("accessToken");
            setCurrentUser(null);
            toast.success('Đăng xuất thành công')
            navigate('/login')
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, logout };
};
export default useLogout;
