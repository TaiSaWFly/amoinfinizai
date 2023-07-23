import React from "react";
import style from "./navigateList.module.scss";
import { navigationList } from "../../../../data/mockData";

const NavigateList: React.FC = () => {
    return (
        <nav>
            <ul className={style.navigate_list}>
                {navigationList.map((navItem) => (
                    <li key={navItem._id}>
                        <a>{navItem.name}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavigateList;
