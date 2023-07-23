import React from "react";
import style from "./footer.module.scss";
import ComponentConteiner from "../../common/ComponentConteiner";
import { menuItems, otherPages } from "../../../data/mockData";
import useSvgIcons from "../../../hooks/useSvgIcons";

const Footer: React.FC = () => {
    const { LogoFoter } = useSvgIcons();

    return (
        <footer className={style.footer}>
            <ComponentConteiner>
                <div className={style.footer_wrap}>
                    <div className={style.footer_info}>
                        <div className={style.footer_info_logo}>
                            <LogoFoter />
                        </div>

                        <p>
                            Lorem ipsum dolor amet, consectetur adipiscing elit.
                            Eget nisl nunc quam ac sed turpis volutpat. Cursus
                            sed massa non
                        </p>
                    </div>

                    <div className={style.footer_navigate}>
                        <div className={style.footer_navigate__list}>
                            <div className={style.footer_navigate__list_title}>
                                menu items
                            </div>

                            <ul>
                                {menuItems.map((menu) => (
                                    <li key={menu._id}>{menu.name}</li>
                                ))}
                            </ul>
                        </div>

                        <div className={style.footer_navigate__list}>
                            <div className={style.footer_navigate__list_title}>
                                other pages
                            </div>

                            <ul>
                                {otherPages.map((menu) => (
                                    <li key={menu._id}>{menu.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </ComponentConteiner>
        </footer>
    );
};

export default Footer;
