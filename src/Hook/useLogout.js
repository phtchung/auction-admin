import { useState } from "react";

import {toast} from "react-toastify";
import USER from "../Services/userService.jsx";
import {useAuthContext} from "../Components/context/AuthContext.jsx";

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { currentUser, setCurrentUser } = useAuthContext();

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
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { loading, logout };
};
export default useLogout;
