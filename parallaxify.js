// Created by Ali Torbati
// ali.torbati@gmail.com
// 2016
// Version 2.1

'use strict'

let parallaxify = function(elements) {
  elements = document.querySelectorAll(elements);
  for (let i = 0; i < elements.length; i++) {
    let element = elements[i],
        elementOffsetTop = element.offsetTop,
        elementHeight = element.offsetHeight;

    function percentSeen () {
      let viewportHeight = window.innerHeight,
          winScrollTop = window.scrollY;

      let distance = (winScrollTop + viewportHeight) - elementOffsetTop
      let percentage = distance / ((viewportHeight + elementHeight) / 100)

      if (percentage < 0) return 0
      else if (percentage > 100) return 100
      else return percentage
    }

    // initialize
    element.style.backgroundPositionY = percentSeen()+'%'

    // update
    window.addEventListener('scroll', function(){
      element.style.backgroundPositionY = percentSeen()+'%'
    })
  }
}
