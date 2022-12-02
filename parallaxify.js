"use strict";

function parallaxify(selector) {
  const elements = document.querySelectorAll(selector);

  function getPercentSeen(el) {
    let distance = window.scrollY + window.innerHeight - el.offsetTop;
    let percentage = distance / ((window.innerHeight + el.offsetHeight) / 100);
    return Math.min(Math.max(percentage, 0), 100); // clamp between 0 and 100
  }

  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    el.style.backgroundPositionY = `${getPercentSeen(el)}%`;
    window.addEventListener("scroll", function () {
      el.style.backgroundPositionY = `${getPercentSeen(el)}%`;
    });
  }
}
