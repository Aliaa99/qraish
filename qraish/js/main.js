$('.one').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    rtl:true,
    dots:false,
    navText:["",""],
    autoplay:true,
    autoplayTimeout:5000,
    responsive:{
        0:{
            items:1
        }
    }
})
    

  $('.newsslider').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  vertical: true,
});


AOS.init({
  offset: 100,
  duration: 100,
  easing: 'ease-in-quad',
  delay: 0,
});



  $('.center').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1030,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});

//menu

$(document).ready(function(){
    $('.main .op').click(function(){
        $('.menu2').css({"width":"60%",})
        $('.main').css({"left":"40%",})
        $(this).toggle();
        $('.main span').toggle();

    });
    $('.menu2 .clo').click(function(){
        $(this).parent().css({"width":"0",})
        $('.main').css({"left":"0",})
        $('.main .op').toggle();
        $('.main span').toggle();
    });
        $('.opop').click(function(){
        $('.men').slideToggle();
    });

});

    //fancy box
    $('.various').fancybox({
        padding : 10,
        openEffect  : 'fade'
    });
    
    //scroll
    
    $('.bott a').click (function(){
      $('html,body').animate({
          scrollTop:$(".bighead").offset().top},1500);
   });
    $('.navabout').click (function(){
      $('html,body').animate({
          scrollTop:$("#about").offset().top},1500);
   });
    $('.navnews').click (function(){
      $('html,body').animate({
          scrollTop:$("#news_news").offset().top},1500);
   });
       $('.navimg').click (function(){
      $('html,body').animate({
          scrollTop:$("#images").offset().top},1500);
   });
       $('.navcontact').click (function(){
      $('html,body').animate({
          scrollTop:$("#contact").offset().top},1500);
   });


