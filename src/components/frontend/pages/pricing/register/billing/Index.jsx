import React from "react";
import Header from "./Header";
import Selection from "./Selection";
import Campaign from "./campaign/Index";
import Aggrement from "./Aggrement";

const Index = (_) => {
    return (
        <div id="billing">
            <Header />
            <Selection />
            <Campaign />
            <Aggrement />
        </div>
    );
};

export default Index;
