var navbarLinks = document.getElementById("nav");
var toggleButtonBurger = document.getElementById("toggleButton");


toggleButtonBurger.addEventListener("click", function(){
    navbarLinks.classList.toggle("active");
})
  $(function() {
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
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
            },

            {
              breakpoint: 360,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 280,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      });
});
