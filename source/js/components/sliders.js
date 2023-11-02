import Splide from "../vendor/splide";
const slider = document.querySelector('.splide');

slider && new Splide( slider, {
  type   : 'loop',
  perPage: 1,
  arrows: false,
  autoplay: true,
} ).mount();
