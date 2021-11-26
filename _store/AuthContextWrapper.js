import React, { useState } from "react";
import AuthContext from "./AuthContext";

const AuthContextWrapper = ({ children }) => {
    const [token, setToken] = useState("");
    const [dashboardBlogsLanguage, setDashboardBlogsLanguage] = useState("tr");

    return (
        <AuthContext.Provider
            value={{
                token,
                dashboardBlogsLanguage,
                funcSetToken: (_token) => setToken(_token),
                funcSetDashboardBlogsLanguage: (_language) =>
                    setDashboardBlogsLanguage(_language),
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
export default AuthContextWrapper;
