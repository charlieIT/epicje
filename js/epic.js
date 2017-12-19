$(document).ready(function() {
    var scrollTop = 0;
    $(window).scroll(function() {
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

    var showText = function(target, message, index, interval) {

        if (index < message.length) {

            //console.log(message[index]);

            $(target).append(message[index++]);

            setTimeout(function() {
                showText(target, message, index, interval);

            }, interval);
        }
    };
    $(function() {
        showText("#letras", "Because EPIC things happen", 0, 100);
    });

});

$(document).ready(function() {
  $('#scrollUp').hover(function() {
    $('#scrollTooltip').css('opacity', '1');
  },  function() {$('#scrollTooltip').css('opacity', '0');
}
);
  });



//para scroll suave quando se clica no logo da epic
//para aplicar a todos usar ('click','a[href^="#"]' ...
$(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 750);
});

$(document).ready(function() {
    var trigger = $('.hamburger'),
        updatable = $('.myhamb'),
        overlay = $('.overlay'),
        triggerMobile = $('.navbar-toggle'),
        isClosed = false;

    trigger.click(function() {
        hamburger_cross();
    });
    triggerMobile.click(function() {
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

    $('[data-toggle="offcanvas"]').click(function() {
        $('#wrapper').toggleClass('toggled');
    });
    $('#page-content-wrapper').click(function() {
        if (isClosed) {
            $('#wrapper').removeClass('toggled');
            hamburger_cross();
        }
    });
    $('.overlay').click(function() {
        if (isClosed) {
            $('#wrapper').removeClass('toggled');
            hamburger_cross();
        }
    });
});

$(function() {
    $('.material-card > .mc-btn-action').click(function() {
        var card = $(this).parent('.material-card');
        var icon = $(this).children('i');
        icon.addClass('fa-spin-fast');

        if (card.hasClass('mc-active')) {
            card.removeClass('mc-active');

            window.setTimeout(function() {
                icon
                    .removeClass('fa-arrow-left')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-bars');

            }, 800);
        } else {
            card.addClass('mc-active');

            window.setTimeout(function() {
                icon
                    .removeClass('fa-bars')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-arrow-left');

            }, 800);
        }
    });
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop(); // how many pixels you've scrolled
    var os = $('#contact-form').offset().top; // pixels to the top of div1
    var ht = $('#contact-form').height(); // height of div1 in pixels
    // if you've scrolled further than the top of div1 plus it's height
    // change the color. either by adding a class or setting a css property
    /*console.log(os);*/
    if (scroll >= os - 300) {
        /*$('#contact-form').addClass('inside');*/
    } else {
      /*$('#contact-form').removeClass('inside');*/
    }
});
