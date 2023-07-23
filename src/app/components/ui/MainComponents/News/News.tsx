import React from "react";
import style from "./news.module.scss";
import ComponentConteiner from "../../../common/ComponentConteiner";
import FutureFire from "../FutureFire/FutureFire";
import Button from "../../../common/Button";
import { articleNews } from "../../../../data/mockData";

const News: React.FC = () => {
    return (
        <section className={style.news}>
            <ComponentConteiner>
                <div className={style.news_info}>
                    <div>
                        <FutureFire />

                        <h3 className={style.news_info_title}>
                            {"Latest News & \nArticles"}
                        </h3>
                    </div>

                    <Button>read more</Button>
                </div>

                <div className={style.news_articles}>
                    {articleNews.map((article) => (
                        <article
                            key={article._id}
                            className={style.news_article__item}
                        >
                            <div className={style.article_image}>
                                <img
                                    src={require(`/src/${article.path}`)}
                                    alt=""
                                />
                            </div>

                            <div className={style.article_data}>
                                {article.data}
                            </div>

                            <div className={style.article_title}>
                                {article.title}
                            </div>
                        </article>
                    ))}
                </div>
            </ComponentConteiner>
        </section>
    );
};

export default News;
