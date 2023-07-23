import React from "react";
import style from "./futureFire.module.scss";
import useSvgIcons from "../../../../hooks/useSvgIcons";

const FutureFire: React.FC = () => {
    const { Fire } = useSvgIcons();

    return (
        <div className={style.future_fire}>
            <Fire />
            <span>FUTURE OF eSPORTS</span>
        </div>
    );
};

export default FutureFire;
