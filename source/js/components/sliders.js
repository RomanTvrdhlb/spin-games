import Splide from "../vendor/splide";
const slider = document.querySelector('.splide');

new Splide( slider, {
  type   : 'loop',
  perPage: 1,
  arrows: false,
  // autoplay: true,
} ).mount();