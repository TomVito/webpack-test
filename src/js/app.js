import "../scss/app.scss";

import "./demo.js";

import $ from "jquery";

import "slick-carousel";

$(document).ready(function () {
  $(".slick-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 1000,
    arrows: false,
  });
});
