$(window).on("load", function () {
    $(".pre-loader").fadeOut("500", function () {
      $(this).remove();
      $("body").removeClass("overflow");
    });
  });
$(document).ready(function(){





$("#openNav").click( function() {

    $('.sidenav').addClass('open');
    $('.overlay').fadeIn();
    $('body').addClass('ovh');
});

$(".closebtn,.overlay").click( function() {
    $('.sidenav').removeClass('open');
    $('.overlay').fadeOut();
    $('body').removeClass('ovh');
});


});

$('.slider-head').owlCarousel({
    autoplay:false,
    rtl: true,
    margin:15,
    loop:false,
    
    dots:false,
   
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 1
        },
        991: {
            items: 1   
        },
        1199: {
            items: 1
        },
        1200: {
            items: 1
        }
    }
});
$('.side-project').owlCarousel({
    autoplay: true,
    rtl: true,
    margin:15,
    loop:true,
    nav: false,
    dots:false,
    navText: ["<i class='fas fa-chevron-right'></i>","<i class='fas fa-chevron-left'></i>"],
    responsive: {
        0: {
            items: 1
        },
        480: {
            items: 3
        },
        767: {
            items: 3
        },
        991: {
            items: 4   
        },
        1199: {
            items: 4
        },
        1200: {
            items: 4
        }
    }
});
$(".partners .owl-carousel").owlCarousel({
    autoplay: true,
    loop: true,
    nav: false,
    dots: false,
    margin: 22,
   

    rtl: true,
    responsive: {
        0: {
            items: 1,
            dots: true
        },
        480: {
            items: 3,
            dots: true
        },
        768: {
            items: 4,
            dots: true
        },
        991: {
            items: 4,
            
           
        },
        1199: {
            items: 5,
           
        },
       
    }
});
$('.search-bar').on('click', function(event) {
    event.preventDefault();
    $('#search').addClass('open');
    $('#search > form > input[type="search"]').focus();
});

$('#search, #search button.close').on('click keyup', function(event) {
    if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
        $(this).removeClass('open');
    }
});

$(document).ready(function() {
    $("div.ftl-vertical-tab-menu>div.list-group>a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $("div.ftl-vertical-tab>div.ftl-vertical-tab-content").removeClass("active");
        $("div.ftl-vertical-tab>div.ftl-vertical-tab-content").eq(index).addClass("active");
    });
});

if ($(window).width() <= 768){ 
    $(".wow").removeClass("wow");
    }
    
