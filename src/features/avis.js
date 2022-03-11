import Splide from '@splidejs/splide'

// SPLIDE | Slider Avis
export const SplideAvis = new Splide('.splide-avis', {
  type: 'loop',
  perPage: 4,
  perMove: 1,
  focus: 1,
  autoplay: true,
})
