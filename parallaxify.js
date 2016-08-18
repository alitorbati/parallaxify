// Created by Ali Torbati
// ali.torbati@gmail.com
// 2016
// Version 2.0

var parallaxify = function(element) {
  var element = document.querySelectorAll(element)[0],
      elementOffsetTop = element.offsetTop,
      elementHeight = element.offsetHeight;

  function percentageSeen () {
    var viewportHeight = window.innerHeight,
        winScrollTop = window.scrollY;

    var distance = (winScrollTop + viewportHeight) - elementOffsetTop;
    var percentage = distance / ((viewportHeight + elementHeight) / 100);

    if (percentage < 0) return 0;
    else if (percentage > 100) return 100;
    else return percentage;
  }

  // initial
  element.style.backgroundPositionY = percentageSeen()+'%'

  // update
  window.addEventListener('scroll', function(){
    element.style.backgroundPositionY = percentageSeen()+'%'
  });
};
