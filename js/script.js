(function ($) {
  "use strict";
  $(document).ready(function () {
    var dom = $(".date");
    dom.jTimer({
      format: "%d %M %y %D <span>%hh:%mm</span>",
      lang: "en",
      ampm: true,
    });
  }); // End document ready
})(this.jQuery);

// slick
$(document).ready(function () {
  // $('.slider').slick({
  // 	dots: true,
  // 	infinite: true,
  // 	speed: 300,
  // 	slidesToShow: 4,
  // 	centermode: true,
  // });
  $(".dropdown").on("show.bs.dropdown", function (e) {
    $(this).find(".dropdown-menu").first().stop(true, true).slideDown(300);
  });

  $(".dropdown").on("hide.bs.dropdown", function (e) {
    $(this).find(".dropdown-menu").first().stop(true, true).slideUp(200);
  });
  var colWidth = $(".grid-item").width();

  window.onresize = function () {
    var colWidth = $(".grid-item").width();
  };
  console.log(colWidth);

  var $grid = $(".grid").masonry({
    // options
    itemSelector: ".grid-item",
    columnWidth: ".grid-item",
    // percentPosition: true,
    gutter: 15,
    fitWidth: true,
  });

  $grid.imagesLoaded().progress(function () {
    $grid.masonry("layout");
  });

});

var btn = $("#scrolltop");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});
//Theme Toggle JS

const storageKey = "theme-preference";
const onClick = () => {
  // flip current value
  theme.value = theme.value === "light" ? "dark" : "light";
  setPreference();
};
const getColorPreference = () => {
  if (localStorage.getItem(storageKey)) return localStorage.getItem(storageKey);
  else
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
};
const setPreference = () => {
  localStorage.setItem(storageKey, theme.value);
  reflectPreference();
};
const reflectPreference = () => {
  document.firstElementChild.setAttribute("data-theme", theme.value);
  document
    .querySelector("#theme-toggle")
    ?.setAttribute("aria-label", theme.value);
};
const theme = {
  value: getColorPreference(),
};
// set early so no page flashes / CSS is made aware
reflectPreference();
window.onload = () => {
  // set on load so screen readers can see latest value on the button
  reflectPreference();
  // now this script can find and listen for clicks on the control
  document.querySelector("#theme-toggle").addEventListener("click", onClick);
};
// sync with system changes
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    theme.value = isDark ? "dark" : "light";
    setPreference();
  });


// slick-slider
$(document).ready(function () {
  $('.slider-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    infinite: true,
    arrows: true,
    dots: true,
  });
  $('.slider-wrapper-packages').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    adaptiveHeight: true,
    infinite: true,
    arrows: true,
    dots: false,
    prevArrow: $('.slick-arrow-prev1'),
    nextArrow: $('.slick-arrow-next1')
  });
  $('.slider-wrapper-medical-packages').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    infinite: true,
    arrows: true,
    dots: false,
    centerPadding: '40px',
    prevArrow: $('.slick-arrow-prev2'),
    nextArrow: $('.slick-arrow-next2')
  });
  $('.slider-wrapper-test-health-packages').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    adaptiveHeight: true,
    infinite: true,
    arrows: true,
    dots: false,
    prevArrow: $('.slick-arrow-prev3'),
    nextArrow: $('.slick-arrow-next3')
  });
  $('.testimonial').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    infinite: true,
    arrows: true,
    dots: false,
    // centerMode: true,
    // centerPadding: '40px',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,

          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          // centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});


const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
  const inputValue = searchInput.value;
  alert(inputValue);
});




// About us page js
$(document).ready(function () {
  $('.txt').html(function (i, html) {
    var chars = $.trim(html).split("");

    return '<span>' + chars.join('</span><span>') + '</span>';
  });
});