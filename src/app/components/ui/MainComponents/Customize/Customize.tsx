import React from "react";
import style from "./customize.module.scss";
import ComponentConteiner from "../../../common/ComponentConteiner";
import FutureFire from "../FutureFire/FutureFire";
import useAppImage from "../../../../hooks/useAppImage";

const Customize: React.FC = () => {
    const { images, cusromizeImageList } = useAppImage();

    return (
        <section className={style.customize}>
            <ComponentConteiner>
                <div className={style.customize_wrap}>
                    <div className={style.customize_image}>
                        <img
                            src={require(`/src/${images.customizeImage}`)}
                            alt=""
                        />
                    </div>

                    <div className={style.customize_info}>
                        <FutureFire />

                        <h2 className={style.customize_info_title}>
                            Customize your Own Character
                        </h2>

                        <p className={style.customize_info_text}>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae.
                        </p>

                        <ul className={style.customize_info__image_list}>
                            {cusromizeImageList.map((image) => (
                                <li key={image._id}>
                                    <img
                                        src={require(`/src/${image.path}`)}
                                        alt=""
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </ComponentConteiner>
        </section>
    );
};

export default Customize;
