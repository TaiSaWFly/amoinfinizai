import { IArticle } from "../ts/models/IArticle";
import { ICusromizeImage } from "../ts/models/ICusromizeImage";
import { INavigate } from "../ts/models/INavigate";

export const navigationList: INavigate[] = [
    {
        _id: "n1",
        name: "home"
    },
    {
        _id: "n2",
        name: "about"
    },
    {
        _id: "n3",
        name: "team"
    },
    {
        _id: "n4",
        name: "shop"
    },
    {
        _id: "n5",
        name: "pages"
    }
];

export const menuItems: INavigate[] = [
    {
        _id: "m1",
        name: "about"
    },
    {
        _id: "m2",
        name: "blog"
    },
    {
        _id: "m3",
        name: "shop"
    },
    {
        _id: "m4",
        name: "contact us"
    }
];

export const otherPages: INavigate[] = [
    {
        _id: "o1",
        name: "Styleguide"
    },
    {
        _id: "o2",
        name: "Changelog"
    },
    {
        _id: "o3",
        name: "licenses"
    },
    {
        _id: "o4",
        name: "team"
    }
];

export const cusromizeImageList: ICusromizeImage[] = [
    {
        _id: "i1",
        path: "assets/images/custimize_image_1.webp"
    },
    {
        _id: "i2",
        path: "assets/images/custimize_image_2.webp"
    },
    {
        _id: "i3",
        path: "assets/images/custimize_image_3.webp"
    }
];

export const articleNews: IArticle[] = [
    {
        _id: "a1",
        title: "Esports Group teams up with the Indianapolis Colts",
        path: "assets/images/article_1.webp",
        data: "April 2, 2021"
    },
    {
        _id: "a2",
        title: "NAVI reveals s1mple fifth anniversary",
        path: "assets/images/article_2.webp",
        data: "April 2, 2021"
    },
    {
        _id: "a3",
        title: "A1esports Shares New picture",
        path: "assets/images/article_3.webp",
        data: "April 2, 2021"
    },
    {
        _id: "a4",
        title: "T1 unveil partnership with Razer",
        path: "assets/images/article_4.webp",
        data: "April 2, 2021"
    },
    {
        _id: "a5",
        title: "RX Secures Content Partnership With",
        path: "assets/images/article_5.webp",
        data: "April 2, 2021"
    }
];
