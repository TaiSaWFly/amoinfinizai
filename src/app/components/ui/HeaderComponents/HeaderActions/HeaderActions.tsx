import React from "react";
import style from "./headerActions.module.scss";
import useSvgIcons from "../../../../hooks/useSvgIcons";
import Button from "../../../common/Button";

const HeaderActions: React.FC = () => {
    const { Cart } = useSvgIcons();

    return (
        <div className={style.header_actions}>
            <div className={style.header_actions__cart}>
                <Cart />

                <div className={style.header_actions__cart_qty}>
                    <span>0</span>
                </div>
            </div>

            <Button>contact us</Button>
        </div>
    );
};

export default HeaderActions;
