app = {};
AOS.init();

app.slideshowPics = [`pic1`, `pic2`, `pic3`, `pic4`];

app.startSlides = function() {
    let i = 0;

    setInterval(function() {
        $(`.${app.slideshowPics[i]}`).addClass(`slideOff`);
        i !== 3 ? i++ : i = 0;
        $(`.${app.slideshowPics[i]}`).removeClass(`slideOff`);
    }, 500);
}
// Initiate smooth scroll
app.smoothScroll = function (){
  $('a').smoothScroll({
    speed: 1000
  });
}

// Hambuger uncheck checkbox when clicked
app.hamburger = function (){
  $(".header__link").on("click", function(){
    $("input[type=checkbox]").prop("checked", false);
  });
}

// remove aos
app.removeAos = function () {
  if ($(window).width() <= 500) {
    $('.vintagefilm__laptop').removeAttr("data-aos");
    $('.switchone__laptop').removeAttr("data-aos");
    $('.projectspace__item').removeAttr("data-aos");
  }
}

// Video on hover
app.playVideo = function () {
   $('video').hover(function(){
      $(this)[0].play();
    });
}

// INIT FUNCTION 
app.init = function () {
  // app.startSlides();
  app.smoothScroll();
  app.hamburger();
  app.aosScroll();
  app.removeAos();
  app.playVideo();
  app.startSlides();
};

//Document Ready
$(function() {
  app.init()
});