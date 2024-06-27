import {createContext, useContext, useState} from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children  }) => {
    const [currentUser, setCurrentUser] = useState((localStorage.getItem("id")));

    return <AuthContext.Provider value={{ currentUser, setCurrentUser }}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext)
