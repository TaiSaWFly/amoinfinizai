import React from "react";
import UnleashGaming from "../UnleashGaming/UnleashGaming";
import Customize from "../Customize/Customize";
import News from "../News/News";

const Main: React.FC = () => {
    return (
        <>
            <UnleashGaming />
            <Customize />
            <News />
        </>
    );
};

export default Main;
