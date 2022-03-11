import Splide from '@splidejs/splide'

import { SplideAvis } from './avis'

// SPLIDE | Slider Avis
SplideAvis.mount()

// SPLIDE | Slider Finalite
const SplideFinalite = new Splide('.splide-finalite', {
  type: 'loop',
  perPage: 5,
  perMove: 1,
  focus: 1,
  autoplay: true,
})
SplideFinalite.mount()
