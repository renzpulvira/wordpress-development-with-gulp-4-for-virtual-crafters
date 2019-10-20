function slickInit() {
  $("#js-banner-slick").slick({
    arrows: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          arrows: false
        }
      }
    ]
  });
}

// function copyTitletoImage() {
//   $("#menu-main-nav li").each(function(i) {
//     let currTitle = $(this)
//       .find("a")
//       .attr("title");

//     if (
//       !$(this)
//         .find("a")
//         .attr("title")
//     ) {
//       $(this)
//         .find("img")
//         .attr("title", "Main nav image")
//         .attr("alt", "Main nav image");
//     } else {
//       $(this)
//         .find("img")
//         .attr("title", currTitle)
//         .attr("alt", currTitle);
//     }
//   });
// }

function slickServices() {
  $("#js-services-slider").slick({
    dots: true,
    arrows: false
  });
}

function initCocoen() {
  // new Cocoen(document.querySelector(".cocoen"));
  // new Cocoen(document.querySelector(".cocoen2"));
  document.querySelectorAll(".cocoen").forEach(function(element) {
    new Cocoen(element);
  });
}

function feedbackSlider() {
  $("#js-testimonial-slider").slick({
    dots: true,
    fadeEffect: true,
    draggable: false,
    swipe: false,
    autoplay: true,
    autoplaySpeed: 3000,
    loop: true
    // fade: true,
    // cssEase: "linear"
    // swipeToSlide: false
  });
}

function resMenu() {
  $("#menu-appen01, #menu-append02").append("#js-append-nav");
}

// Run functions on load
$(document).ready(function() {
  // Execute functions here
  initCocoen();
  slickInit();
  slickServices();
  feedbackSlider();
});
