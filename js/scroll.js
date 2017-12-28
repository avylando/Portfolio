'use strict';

(function () {
  console.log('sss');
  var advantagesSection = $('.advantages__wrapper');
  var sliderSection = $('.portfolio__wrapper');
  var aboutMeSection = $('.about-me__wrapper');
  console.log(sliderSection);
  $(document).ready(function () {
    $(window).scroll(function () {
      var scrollValue = $(document).scrollTop();
      console.log(scrollValue);
      if (scrollValue > 150 && scrollValue < 1100) {
        window.debounce(advantagesSection.animate({ 'opacity': '1' }, 1000), 500);
      } else {
        window.debounce(advantagesSection.css('opacity', '0'), 500);
      }

      if (scrollValue > 600 && scrollValue < 2200) {
        // sliderSection.animate({
        //   step: function (now, fx) {
        //     console.log(now);
        //     $(this).css('transform', 'translateX(' + now + 'px)');
        //   }, duration: 'slow'
        // }, 'linear' );
        if (sliderSection.hasClass('portfolio--hide')) {
          window.debounce(sliderSection.removeClass('portfolio--hide'), 500);
        }
        window.debounce(sliderSection.addClass('portfolio--show'), 500);
      } else if (sliderSection.hasClass('portfolio--show')) {
        window.debounce(sliderSection.removeClass('portfolio--show'), 500);
      }

      if (scrollValue > 1300) {
        if (aboutMeSection.hasClass('about-me--hide')) {
          window.debounce(aboutMeSection.removeClass('about-me--hide'), 500);
        }
        window.debounce(aboutMeSection.addClass('about-me--show'), 500);
      } else if (aboutMeSection.hasClass('about-me--show')) {
        window.debounce(aboutMeSection.removeClass('about-me--show'), 500);
      }
    })
  })

})();
