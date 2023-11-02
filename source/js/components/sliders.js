import Splide from "../vendor/splide";
import vars from '../_vars';
const {slider} = vars;

slider && new Splide( slider, {
  type   : 'loop',
  perPage: 1,
  arrows: false,
  autoplay: true,
} ).mount();
