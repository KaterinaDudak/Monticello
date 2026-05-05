$(".slider").slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 1400,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade: true,
  cssEase: "linear",

  responsive: [
    {
      breakpoint: 950,
      settings: {
        dots: false,
        arrows: true,
      },
    },
    {
      breakpoint: 430,
      settings: {
        arrows: false,
        dots: false,
      },
    },
  ],
});
