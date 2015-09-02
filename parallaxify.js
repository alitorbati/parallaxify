$.fn.parallaxify = function() {
  return this.each(function() {
    var $element = $(this);

    function percentageSeen () {
      var viewportHeight = $(window).height(),
          scrollTop = $(window).scrollTop(),
          elementOffsetTop = $element.offset().top,
          elementHeight = $element.height();

      if (elementOffsetTop > (scrollTop + viewportHeight)) {
        return 0;
      } else if ((elementOffsetTop + elementHeight) < scrollTop) {
        return 100;
      } else {
        var distance = (scrollTop + viewportHeight) - elementOffsetTop;
        var percentage = distance / ((viewportHeight + elementHeight) / 100);
        return percentage;
      }
    }

    $element.css({ 'background-position-y' : percentageSeen()+'%' });

    $(window).on('scroll', function() {
      $element.css({ 'background-position-y' : percentageSeen()+'%' });
    });
  });
};
