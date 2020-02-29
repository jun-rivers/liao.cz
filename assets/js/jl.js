$(function() {

  $(window).scroll( function() {
    parallaxScroll();
  });
  $('body').on({
    'touchmove': function(e) {
        parallaxScroll();
    }
  });
});

// class "spatial"  data-depth="1.00" = normal
function parallaxScroll(){
  var scrolled_v = $(window).scrollTop();
  var scrolled_h = $(window).scrollLeft();
  $('.spatial').each(function(index, element) {
    var _v_offset = 0-(scrolled_v/$(element).data("depth"));
    var _h_offset = 0-(scrolled_h/$(element).data("depth"));
    $(element).css('margin-top', _v_offset+'px');
    $(element).css('margin-left', _h_offset+'px');
  });
  $('.spinning').each(function(index, element) {
    var _spin = scrolled_v/6 + $(element).data("rotation");
    $(element).css({'-webkit-transform' : 'rotate('+ _spin +'deg)',
            '-moz-transform' : 'rotate('+ _spin +'deg)',
            '-ms-transform' : 'rotate('+ _spin +'deg)',
            'transform' : 'rotate('+ _spin +'deg)'});
  });
}