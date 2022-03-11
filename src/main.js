import $ from 'jquery'
import './features/pageProg.js'
import './features/pageHome.js'

$(function () {
  // GLOBAL | Calcul des hauteurs d'écrans
  const TwoWindows = window.innerHeight * 2
  const ThreeWindows = window.innerHeight * 3
  const FourWindows = window.innerHeight * 4
  const FiveWindows = window.innerHeight * 5
  const SixWindows = window.innerHeight * 6

  // PROGMARKET | Initial State de la section ProgMarket
  $('.layout--header-large.mb-48.chap-2').removeClass('show')
  $('.chap-obj__infos.chap-2').removeClass('show')
  $('.chap-obj__card.chap-2').removeClass('show')

  $('.layout--header-large.mb-48.chap-3').removeClass('show')
  $('.chap-obj__infos.chap-3').removeClass('show')
  $('.chap-obj__card.chap-3').removeClass('show')

  $('.layout--header-large.mb-48.chap-4').removeClass('show')
  $('.chap-obj__infos.chap-4').removeClass('show')
  $('.chap-obj__card.chap-4').removeClass('show')

  $('.layout--header-large.mb-48.chap-5').removeClass('show')
  $('.chap-obj__infos.chap-5').removeClass('show')
  $('.chap-obj__card.chap-5').removeClass('show')

  $('.layout--header-large.mb-48.chap-6').removeClass('show')
  $('.chap-obj__infos.chap-6').removeClass('show')
  $('.chap-obj__card.chap-6').removeClass('show')

  // GLOBAL | Animation au Scroll
  $(document).on('scroll', function () {
    // PROGMARKET | Animation au Scroll
    // PROGMARKET | Calcul de la distance de scroll séparant entre l'écran affiché et le top de ProgMarket
    const scrollFromTopProgMarket =
      $(window).scrollTop() -
      $('.prog-market__scroll').offset().top +
      window.innerHeight
    console.log(
      'from DIV: ' +
        scrollFromTopProgMarket +
        ' | from BODY: ' +
        $(window).scrollTop()
    )
    // PROGMARKET | Affichage conditionnel selon la distance de scroll à l'instant T
    if (scrollFromTopProgMarket < TwoWindows) {
      console.log('Introduction v2')
      $('.layout--header-large.mb-48.chap-2').removeClass('show')
      $('.chap-obj__infos.chap-2').removeClass('show')
      $('.chap-obj__card.chap-2').removeClass('show')

      $('.layout--header-large.mb-48.chap-1').delay(0).addClass('show')
      $('.chap-obj__infos.chap-1').delay(200).addClass('show')
      $('.chap-obj__card.chap-1').delay(400).addClass('show')
    } else if (
      scrollFromTopProgMarket > TwoWindows &&
      scrollFromTopProgMarket < ThreeWindows
    ) {
      console.log('Fondamentaux')
      $('.layout--header-large.mb-48.chap-1').removeClass('show')
      $('.chap-obj__infos.chap-1').removeClass('show')
      $('.chap-obj__card.chap-1').removeClass('show')

      $('.layout--header-large.mb-48.chap-3').removeClass('show')
      $('.chap-obj__infos.chap-3').removeClass('show')
      $('.chap-obj__card.chap-3').removeClass('show')

      $('.layout--header-large.mb-48.chap-2').delay(50).addClass('show')
      $('.chap-obj__infos.chap-2').delay(200).addClass('show')
      $('.chap-obj__card.chap-2').delay(400).addClass('show')
    } else if (
      scrollFromTopProgMarket > ThreeWindows &&
      scrollFromTopProgMarket < FourWindows
    ) {
      console.log('Medium')
      $('.layout--header-large.mb-48.chap-2').removeClass('show')
      $('.chap-obj__infos.chap-2').removeClass('show')
      $('.chap-obj__card.chap-2').removeClass('show')

      $('.layout--header-large.mb-48.chap-4').removeClass('show')
      $('.chap-obj__infos.chap-4').removeClass('show')
      $('.chap-obj__card.chap-4').removeClass('show')

      $('.layout--header-large.mb-48.chap-3').delay(50).addClass('show')
      $('.chap-obj__infos.chap-3').delay(200).addClass('show')
      $('.chap-obj__card.chap-3').delay(400).addClass('show')
    } else if (
      scrollFromTopProgMarket > FourWindows &&
      scrollFromTopProgMarket < FiveWindows
    ) {
      console.log('Avancé')
      $('.layout--header-large.mb-48.chap-3').removeClass('show')
      $('.chap-obj__infos.chap-3').removeClass('show')
      $('.chap-obj__card.chap-3').removeClass('show')

      $('.layout--header-large.mb-48.chap-5').removeClass('show')
      $('.chap-obj__infos.chap-5').removeClass('show')
      $('.chap-obj__card.chap-5').removeClass('show')

      $('.layout--header-large.mb-48.chap-4').delay(50).addClass('show')
      $('.chap-obj__infos.chap-4').delay(200).addClass('show')
      $('.chap-obj__card.chap-4').delay(400).addClass('show')
    } else if (
      scrollFromTopProgMarket > FiveWindows &&
      scrollFromTopProgMarket < SixWindows
    ) {
      console.log('Expert')
      $('.layout--header-large.mb-48.chap-4').removeClass('show')
      $('.chap-obj__infos.chap-4').removeClass('show')
      $('.chap-obj__card.chap-4').removeClass('show')

      $('.layout--header-large.mb-48.chap-6').removeClass('show')
      $('.chap-obj__infos.chap-6').removeClass('show')
      $('.chap-obj__card.chap-6').removeClass('show')

      $('.layout--header-large.mb-48.chap-5').delay(50).addClass('show')
      $('.chap-obj__infos.chap-5').delay(200).addClass('show')
      $('.chap-obj__card.chap-5').delay(400).addClass('show')
    } else {
      console.log('Conclusion')
      $('.layout--header-large.mb-48.chap-5').removeClass('show')
      $('.chap-obj__infos.chap-5').removeClass('show')
      $('.chap-obj__card.chap-5').removeClass('show')

      $('.layout--header-large.mb-48.chap-6').delay(50).addClass('show')
      $('.chap-obj__infos.chap-6').delay(200).addClass('show')
      $('.chap-obj__card.chap-6').delay(400).addClass('show')
    }
  })
})
