$(".slider-2").slick({
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 3,
  speed: 1400,
  dots: true,
  arrows: true,
  infinite: true,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
        arrows: false,
      },
    },

    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        arrows: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
});
