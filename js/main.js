var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       100,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
        $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
});

$('.scroll-to-top').on('click', function(e) {
  e.preventDefault();
    $('html, body').animate({scrollTop : 0}, 800);
});

$(document).on('click','.navbar-collapse.in',function(e) {
  if( $(e.target).is('a') ) {
      $(this).collapse('hide');
  }
});
