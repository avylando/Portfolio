'use strict';

(function () {
  var skillsSection = $('.skills__wrapper');
  var sliderSection = $('.portfolio__wrapper');
  var aboutMeSection = $('.about-me__wrapper');
  console.log(sliderSection);
  $(document).ready(function () {
    $(window).scroll(function () {
      var scrollValue = $(document).scrollTop();
      console.log(scrollValue);
      if (scrollValue > 400 && scrollValue < 1100) {
        window.debounce(skillsSection.animate({ 'opacity': '1' }, 1000), 500);
      } else {
        window.debounce(skillsSection.css('opacity', '0'), 200);
      }

      if (scrollValue > 750 && scrollValue < 2100) {
        // sliderSection.animate({
        //   step: function (now, fx) {
        //     console.log(now);
        //     $(this).css('transform', 'translateX(' + now + 'px)');
        //   }, duration: 'slow'
        // }, 'linear' );
        if (sliderSection.hasClass('portfolio--hide')) {
          window.debounce(sliderSection.removeClass('portfolio--hide'), 100);
        }
        window.debounce(sliderSection.addClass('portfolio--show'), 200);
      } else if (sliderSection.hasClass('portfolio--show')) {
        window.debounce(sliderSection.removeClass('portfolio--show'), 200);
      }

      if (scrollValue > 1500) {
        if (aboutMeSection.hasClass('about-me--hide')) {
          window.debounce(aboutMeSection.removeClass('about-me--hide'), 100);
        }
        window.debounce(aboutMeSection.addClass('about-me--show'), 200);
      } else if (aboutMeSection.hasClass('about-me--show')) {
        window.debounce(aboutMeSection.removeClass('about-me--show'), 200);
      }
    })
  })

})();
