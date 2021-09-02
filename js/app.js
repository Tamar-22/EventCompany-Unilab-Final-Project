// const hamburger = document.querySelector(".hamburger");
// const navlinks = document.querySelector (".nav-links");
// const links = document.querySelector (".nav-links li");


// hamburger.addEventListener("click", () => {
//     navlinks.classList.toggle("open");
// })

var navbarLinks = document.getElementById("nav");
var toggleButtonBurger = document.getElementById("toggleButton");


toggleButtonBurger.addEventListener("click", function(){
    navbarLinks.classList.toggle("active");
})

$(function(){
    $('.single-item').slick({
        arrows: false,
        autoplay:true,
        autoplayspeed: 3000,
    });
   
});

  $(function() {
    $('.multiple-items').slick({
        infinite: true,
        //რამდენი სურათი უნდა გამოჩნდეს ჩემს გვერდზე
        slidesToShow: 3,
        //სლაიდის დროს რამდენი ელემნტით უნდა გადავიდეს ჩემი სლაიდერი
        slidesToScroll: 1,
        //რომ ცამოჩნდეს ღილაკები (previuos & next)
        arrows: true,
        // prevtArrow: false,
        // nextArrow: false,
        //რომ გამოჩნდეს ბურთულები
        // dots:true,
        // centerMode: true,
        // pauseOnHover: true,
        // autoplay:true,
        // autoplayspeed: 2000,
        nextArrow: $(".next"),
        prevArrow: $(".prev"),


        //რესფონსივის სტილები
        responsive: [
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 481,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
});
