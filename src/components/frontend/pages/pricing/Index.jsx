/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import PricingContext from "../../../../../_store/PricingContext";
import Packages from "./Packages";
import Register from "./register/Index";

const Index = (_) => {
    const pricingContext = useContext(PricingContext);
    useEffect(() => {
        pricingContext.setDefault();
    }, []);

    return (
        <div>
            {pricingContext.state.packageId === "" ? (
                <Packages />
            ) : (
                <Register />
            )}
        </div>
    );
};

export default Index;
