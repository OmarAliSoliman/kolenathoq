$(document).ready(function () {
  "use strict";

  AOS.init();

  $(".owl-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    margin: 0,
    responsiveClass: true,
    nav: false,
    navigation: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1024: {
        items: 3,
        nav: false,
        loop: false,
      },
      1280: {
        items: 4,
        nav: false,
        loop: false,
      },
    },
  });
});
