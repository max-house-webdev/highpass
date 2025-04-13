import bannerBgImage from '../../../assets/images/Hero/banner.webp';
import main from '../../../assets/images/Hero/gallery/main.webp';
import small_1 from '../../../assets/images/Hero/gallery/small_1.webp';
import small_2 from '../../../assets/images/Hero/gallery/small_2.webp';

export const hero = {
  banner: {
    bgImage: bannerBgImage,
    heading: ['Неоновый', 'фотосет 2.0', '7 июля 20:00'],
    description: 'Мастер-класс от Игоря Робова',
    hashtag: 'мастеркласс',
    btnTextContent: 'Узнать больше',
  },
  gallery: { main, small: [small_1, small_2] },
};
