// Created by Ali Torbati
// ali.torbati@gmail.com
// 2015

(function ($) {

  $.fn.parallaxify = function() {

    return this.each(function() {
      var $element = $(this);

      function percentageSeen () {
        var viewportHeight = $(window).height(),
            winScrollTop = $(window).scrollTop(),
            elementOffsetTop = $element.offset().top,
            elementHeight = $element.height();

        var distance = (winScrollTop + viewportHeight) - elementOffsetTop;
        var percentage = distance / ((viewportHeight + elementHeight) / 100);

        if (percentage < 0) return 0;
        else if (percentage > 100) return 100;
        else return percentage;
      }

      $element.css({ 'background-position-y' : percentageSeen()+'%' });

      $(window).on('scroll', function() {
        $element.css({ 'background-position-y' : percentageSeen()+'%' });
      });
    });
  };

}(jQuery));
