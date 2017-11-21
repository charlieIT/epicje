$(document).ready(function(){
var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
     $('.counter').html(scrollTop);

    if (scrollTop >= 70) {
      $('#nav').addClass('scrolled-nav');
      $('#nav').removeClass('not-scrolled');
      $('#hamburger').addClass('scrolled-nav');
      $('#hamburger').removeClass('not-scrolled');
      $('#navigation').addClass('scrolled-nav');
      $('#navigation').removeClass('not-scrolled');
    } else if (scrollTop < 70) {
      $('#nav').removeClass('scrolled-nav');
      $('#nav').addClass('not-scrolled');
      $('#hamburger').removeClass('scrolled-nav');
      $('#hamburger').addClass('not-scrolled');
      $('#navigation').removeClass('scrolled-nav');
      $('#navigation').addClass('not-scrolled');
    }

  });

});
//para scroll suave quando se clica no logo da epic
//para aplicar a todos usar ('click','a[href^="#"]' ...
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
});

$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
      triggerMobile = $('.navbar-toggle'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();
    });
    triggerMobile.click(function () {
      hamburger_cross();
    });

    function hamburger_cross() {

      if (isClosed === true) {
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        triggerMobile.removeClass('is-open');
        triggerMobile.addClass('is-closed');
        isClosed = false;
      } else {
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        triggerMobile.removeClass('is-closed');
        triggerMobile.addClass('is-open');
        isClosed = true;
      }
  }

  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });
  $('#page-content-wrapper').click(function() {
    if(isClosed){
      $('#wrapper').removeClass('toggled');
      hamburger_cross();
    }
  });
  $('.overlay').click(function() {
    if(isClosed){
      $('#wrapper').removeClass('toggled');
      hamburger_cross();
    }
  });
});
