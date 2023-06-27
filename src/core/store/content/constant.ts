import { IContent } from "./interfaces";
import heroBannerBgImage from "@images/Hero/banner.jpg";
import heroGalleryMain from "@images/Hero/gallery/main.jpg";
import heroGallerySmall_1 from "@images/Hero/gallery/small_1.jpg";
import heroGallerySmall_2 from "@images/Hero/gallery/small_2.jpg";

export const content: IContent = {
  sections: [
    { heading: "О студии", id: "about" },
    { heading: "Наши проекты", id: "projects" },
    { heading: "Услуги", id: "service" },
    { heading: "Мастер-классы", id: "master-classes" },
    { heading: "Контакты", id: "contacts" },
  ],
  contacts: {
    phoneNumber: 49542423532,
  },
  hero: {
    sectionHeading: "Работы участников предыдущего мастер-класса",
    banner: {
      bgImage: heroBannerBgImage,
      heading: ["Неоновый", "фотосет 2.0", "7 июля 20:00"],
      description: "Мастер-класс от Игоря Робова",
      hashtag: "мастеркласс",
    },
    gallery: [heroGalleryMain, heroGallerySmall_1, heroGallerySmall_2],
  },
};

export const DELAY = 1000;
