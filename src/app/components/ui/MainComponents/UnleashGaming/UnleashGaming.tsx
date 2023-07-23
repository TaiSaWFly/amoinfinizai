import React from "react";
import style from "./unleashGaming.module.scss";
import ComponentConteiner from "../../../common/ComponentConteiner";
import FutureFire from "../FutureFire/FutureFire";
import Button from "../../../common/Button";
import useSvgIcons from "../../../../hooks/useSvgIcons";
import useAppImage from "../../../../hooks/useAppImage";

const UnleashGaming: React.FC = () => {
    const { Line } = useSvgIcons();
    const { images } = useAppImage();

    return (
        <section className={style.unleash_gaming}>
            <ComponentConteiner>
                <div className={style.unleash_gaming__wrap}>
                    <div className={style.unleash_gaming__info}>
                        <FutureFire />

                        <h1 className={style.unleash_gaming__title}>
                            Unleash the Next{" "}
                            <span className={style.unleash_gaming__title_trait}>
                                Generation
                                <Line />
                            </span>{" "}
                            of Gaming
                        </h1>

                        <p className={style.unleash_gaming__text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Felis, nec donec in morbi pulvinar. Enim non
                            pulvinar neque.
                        </p>

                        <div className={style.unleash_gaming__social}>
                            <a href="/">FACEBOOK</a>
                            <a href="/">INSTAGRAM</a>
                            <a href="/">TWITCH</a>
                        </div>

                        <div className={style.unleash_gaming__actions}>
                            <Button>Explore More</Button>
                            <a>View our team</a>
                        </div>
                    </div>

                    <div className={style.unleash_gaming__image}>
                        <img
                            src={require(`/src/${images.unleashGamingImage}`)}
                            alt=""
                        />
                    </div>
                </div>
            </ComponentConteiner>
        </section>
    );
};

export default UnleashGaming;
