$(document).ready(function () {


    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


    // Owl-carousel

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

});

// Mode Dark

 let cont = 0;

 function mode_dark() {

     document.body.classList.toggle("dark");
     document.querySelector('.navbar').classList.toggle('bg-dark');
     
     if (cont == 0) {
         document.querySelector('.mode_dark').innerHTML = '<i class="fas fa-sun"></i>';
         document.querySelector('.logo').style.color = "white";
         document.querySelector('.link_mode').style.color = "white";
         document.querySelector('.link_mode1').style.color = "white";
         document.querySelector('.link_mode2').style.color = "white";
         document.querySelector('.Services-1').style.filter = "invert(100%)";
         document.querySelector('.Services-2').style.filter = "invert(100%)";
         document.querySelector('.Services-3').style.filter = "invert(100%)";
         document.querySelector('.Services-4').style.filter = "invert(100%)";
         cont = 1;
     } else {
         document.querySelector('.mode_dark').innerHTML = '<i class="fas fa-moon"></i>';
         document.querySelector('.logo').style.color = "black";
         document.querySelector('.link_mode').style.color = "#7f7f7f";
         document.querySelector('.link_mode1').style.color = "#7f7f7f";
         document.querySelector('.link_mode2').style.color = "#7f7f7f";
         document.querySelector('.Services-1').style.filter = "invert(0)";
         document.querySelector('.Services-2').style.filter = "invert(0)";
         document.querySelector('.Services-3').style.filter = "invert(0)";
         document.querySelector('.Services-4').style.filter = "invert(0)";
         cont = 0;
     }

 }


