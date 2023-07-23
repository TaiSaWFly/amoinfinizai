import React from "react";
import style from "./header.module.scss";
import ComponentConteiner from "../../../common/ComponentConteiner";
import NavigateList from "../NavigateList/NavigateList";
import HeaderActions from "../HeaderActions/HeaderActions";
import useSvgIcons from "../../../../hooks/useSvgIcons";

const Header: React.FC = () => {
    const { Logo } = useSvgIcons();

    return (
        <header className={style.header}>
            <ComponentConteiner>
                <div className={style.header__wrap}>
                    <div className={style.header__logo}>
                        <Logo />
                    </div>

                    <NavigateList />
                    <HeaderActions />
                </div>
            </ComponentConteiner>
        </header>
    );
};

export default Header;
