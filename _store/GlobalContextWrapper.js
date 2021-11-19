import React, { useState } from "react";
import GlobalContext from "./GlobalContext";

const GlobalContextWrapper = ({ children }) => {
    const [modalStyle, setModalStyle] = useState(false);

    return (
        <GlobalContext.Provider
            value={{
                modalStyle,
                funcSetModalStyleState: (_show) => setModalStyle(_show),
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
export default GlobalContextWrapper;
