(function ($) {
    "use strict";

    
//window.alert("hello");

/*******************FOR THE PAGE LOAD TO SHOW SOME ANIMATIONS LIKE FADE-IN************/
$(".animsition").animsition({
    inClass: 'fade-in-down-lg',
    outClass: 'fade-out',
    inDuration: 3500,
    outDuration: 800,
    linkElement: '.animsition-link',
    loading: true,
    loadingParentElement: 'html',
    loadingClass: 'animsition-loading-1',
    loadingInner: '<div data-loader="ball-scale"></div>',
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ['animation-duration', '-webkit-animation-duration'],
    overlay: false,
    overlayClass: 'animsition-overlay-slide',
    overlayParentElement: 'html',
    transition: function (url) {
        window.location.href = url;
    }
});


$(".featured").animsition({
    inClass: 'ease-in-left',
    outClass: 'fade-out',
    inDuration: 2500,
    outDuration: 800,
    linkElement: '.animsition-link',
    loading: true,
    loadingParentElement: 'html',
    loadingClass: 'animsition-loading-1',
    loadingInner: '<div data-loader="ball-scale"></div>',
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ['animation-duration', '-webkit-animation-duration'],
    overlay: false,
    overlayClass: 'animsition-overlay-slide',
    overlayParentElement: 'html',
    transition: function (url) {
        window.location.href = url;
    }
});

$(".blog").animsition({
    inClass: 'zoom-in',
    outClass: 'fade-out',
    inDuration: 2500,
    outDuration: 800,
    linkElement: '.animsition-link',
    loading: true,
    loadingParentElement: 'html',
    loadingClass: 'animsition-loading-1',
    loadingInner: '<div data-loader="ball-scale"></div>',
    timeout: false,
    timeoutCountdown: 5000,
    onLoadEvent: true,
    browser: ['animation-duration', '-webkit-animation-duration'],
    overlay: false,
    overlayClass: 'animsition-overlay-slide',
    overlayParentElement: 'html',
    transition: function (url) {
        window.location.href = url;
    }
});
    
    
    
    
    
/**************FOR THE SLIDER OF GALLERY********************************/
$(".big-image").slick({

    dots: true,
    dotsClass: 'slick-dots',
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: true,
    pauseOnHover: false,
    zIndex: 1000,
    prevArrow:'<button type="button" data-role="none" class="slick-prev">Previous</button>', nextArrow:'<button type="button" data-role="none" class="slick-next">Next</button>',
    useCSS: true,
    centerPadding: true,
    focusOnSelect: true,
    accessibility: true,
    centerMode:true,
//    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='false'></i></button>",
//    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"   
});
    
 $("").slick({

    dots: true,
    dotsClass: 'slick-dots',
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 4500,
    arrows: true,
    pauseOnHover: false,
    zIndex: 1000,
    prevArrow:'<button type="button" data-role="none" class="slick-prev">Previous</button>', nextArrow:'<button type="button" data-role="none" class="slick-next">Next</button>',
    useCSS: true,
    centerPadding: true,
    focusOnSelect: true,
    accessibility: true,
    centerMode:true,
//    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='false'></i></button>",
//    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"   
});   


  /*****************************Back to top*******************************************/
    var windowH = $(window).height()/2;

    $(window).on('scroll',function(){
        if ($(this).scrollTop() > windowH) {
            $("#myBtn").css('display','inline');
        } else {
            $("#myBtn").css('display','none');
        }
    });

    $('#myBtn').on("click", function(){
        $('html, body').animate({scrollTop: 0}, 300);
    });
    
    
        /*const container = document.querySelector('.container');
        const ps = new PerfectScrollbar('.container', {
            wheelSpeed: 1,
            wheelPropagation: true,
            minScrollbarLength: 20,
            swipeEasing:true
        });*/

    

/************************POPMOTION**********************************8*/    
function box1Call(){
const {easing,tween,styler} = window.popmotion;
const divStyler = styler(document.querySelector('.box1'));

tween({
    from: {
        x: 0,
        background: 'hsla(125, 100, 50, 1)'
    },
    to: {
        x: 400,
        rotate: 360
    },
    duration: 1000,
    ease: easing.linear,
    flip: 0,
    //elapsed: 15000,
    loop: 0,
}).start(divStyler.set);
}

function box2Call(){   
const {easing,tween,styler} = window.popmotion;
const divStyler = styler(document.querySelector('.box2'));

tween({
    from: {
        x: 0,
        background: 'hsla(125, 100, 50, 1)'
    },
    to: {
        x: 450,
        rotate: 90
    },
    duration: 500,
    ease: easing.linear,
    flip: 2,
    //elapsed: 15000,
    loop: 0,
}).start(divStyler.set);    
}
    
function box3Call(){
const {easing,tween,styler} = window.popmotion;
const divStyler = styler(document.querySelector('.box3'));

tween({
    from: {
        x: 0,
        background: 'hsla(125, 100, 50, 1)'
    },
    to: {
        x: 450,
        rotate: 90
    },
    duration: 2500,
    ease: easing.linear,
    flip: 0,
    //elapsed: 15000,
    loop: 0,
}).start(divStyler.set);    
    
}

    

function getDate(){

    // Set the date we're counting down to
    var countDownDate = new Date("May 6, 2018 12:37:25").getTime();
    console.log(countDownDate);

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get todays date and time
        var now = new Date().getTime();
        console.log(now);
    
        // Find the distance between now an the count down date
        var distance = countDownDate - now;
        //console.log(distance);

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

       
        document.getElementById("days").innerHTML = days + " Days";
        document.getElementById("hours").innerHTML = hours + " Hours";
        document.getElementById("minutes").innerHTML = minutes+ " Min" ;
        document.getElementById("seconds").innerHTML =  seconds + " Sec";
        
        // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("days").innerHTML = "EXPIRED";
            document.getElementById("hours").innerHTML = "EXPIRED";
            document.getElementById("minutes").innerHTML = "EXPIRED" ;
            document.getElementById("seconds").innerHTML =  "EXPIRED";

        }

    }, 1000);
 
}    
    
    
box1Call();
box2Call();
box3Call();    
getDate();    
    
    
    
    
    
})(jQuery);