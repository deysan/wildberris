import Swiper, { Navigation, Autoplay } from 'swiper';

Swiper.use([Navigation, Autoplay ]);

const slider = () => {
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev'
    },
  });
}

export default slider;
