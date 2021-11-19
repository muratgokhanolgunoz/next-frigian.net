import React from "react";
import Banner from "./Banner";
import Video from "./Video";
import Why from "./Why";
import Widget from "./Widget";

const Index = () => {
    return (
        <div id="home">
            <Banner />
            <Widget />
            <Why />
            <Video />
        </div>
    );
};

export default Index;
