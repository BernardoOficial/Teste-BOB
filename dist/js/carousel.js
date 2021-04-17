const carouselFirst = $(".banner__carousel-content");

carouselFirst.owlCarousel({
  center: true,
  items: 1,
  loop: true,
  margin: 10,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 10000,
  autoplayHoverPause: true,
  responsive: {
    1000: {
      mouseDrag: false,
      touchDrag: false,
    },
  },
});