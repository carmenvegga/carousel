/* $(document).ready(function() {
  var opts = {
    arrowRight: '.arrow-right',
    arrowLeft: '.arrow-left',
    speed: 700,
    slideDuration: 3000
  }
  $('.carousel').slideDown(opts);
  console.log("pupas");
}); */

$(document).ready(loadPage);

var target = 0;

var loadPage = function () {
  var $buttons = $('.control');
  var $previous = $('.previous');
  var $next = $('.next');

  $buttons.click(changeImage);
  $previous.click(previousImage);
  $next.click(nextImage);
};

var changeImage = function() {
  target = parseInt($(this).data('target'));
  showImage(target);
};

var previousImage = function (e) {
  e.preventDefault();
  target = target -1;
  target = (target < 0) ? 4 : target;
  showImage(target);
};

var nextImage = function (e) {
  e.preventDefault();
  target = target +1;
  target = (target > 4) ? 0 : target;
  showImage(target);
};

var showImage = function (target) {
  var $lastSlide = $("div.active");
  var $slide = $("div[data-slide='" + target + "']");
  $lastSlide.removeClass("active");
  $slide.addClass("active");
};
