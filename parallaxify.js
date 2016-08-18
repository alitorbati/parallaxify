// Created by Ali Torbati
// ali.torbati@gmail.com
// 2016
// Version 2.2

'use strict'

let parallaxify = function(selector) {
  let elements = document.querySelectorAll(selector)
  let lastPercent = 0

  for (let i = 0; i < elements.length; i++) {
    let element = elements[i]
    let elementOffsetTop = element.offsetTop
    let elementHeight = element.offsetHeight
    let viewportHeight = 0
    let winScrollTop = 0

    function percentSeen () {
      winScrollTop = window.scrollY
      let distance = (winScrollTop + viewportHeight) - elementOffsetTop
      let percentage = distance / ((viewportHeight + elementHeight) / 100)

      if (percentage < 0) return 0
      else if (percentage > 100) return 100
      else return percentage
    }

    let updateWindowCalcs = function () {
      viewportHeight = window.innerHeight
    }

    // update background position only if it has changed
    let updateBgPosition = function () {
      if (lastPercent != percentSeen()) {
        element.style.backgroundPositionY = percentSeen()+'%'
      }
      lastPercent = percentSeen()
    }

    // initialize
    updateWindowCalcs()
    updateBgPosition()

    // update background position on scroll
    window.addEventListener('scroll', function(){
      updateBgPosition()
    })

    // update calculations on resize
    window.addEventListener('resize', function(){
      updateWindowCalcs()
    })
  }
}
