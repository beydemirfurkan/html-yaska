var suitCar =$('.suit-contain-right .owl-carousel');
suitCar.owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    responsive:{
        0:{
            items:1
        },
    }
})

$('.kar-suit-arrow-right').click(function() {
    suitCar.trigger('next.owl.carousel', [300]);
})
$('.kar-suit-arrow-left').click(function() {
    suitCar.trigger('prev.owl.carousel', [300]);
})

$(".suit-contain-right").on("mousemove", ".owl-item.active", function (e) {
    let lerWidth = $(".suit-contain-right").width()
    if (e.offsetX < lerWidth/2) {
        $(".kar-suit-arrow-right").css("display", "none")
        $(".kar-suit-arrow-left").css({
            "display": "block", "left":`${e.offsetX}px`, "top":`${e.offsetY}px`
        })
    }
    else{
        $(".kar-suit-arrow-left").css("display", "none")
        $(".kar-suit-arrow-right").css({
            "display": "block", "left":`${e.offsetX}px`, "top":`${e.offsetY}px`
        })
    }
}).mouseleave(function (e) {
    $(".kar-suit-arrow-right").css("display", "none")
    $(".kar-suit-arrow-left").css("display", "none")
})



////////////////////////////////
$(document).ready(function(){
    var platzCar = $('.karl-platz-carousel .owl-carousel')
    platzCar.owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        responsive:{
            0:{
                items:1
            },
        }
    })

    $('.karl-platz-arrow-right').click(function() {
        platzCar.trigger('next.owl.carousel', [300]);
    })
    $('.karl-platz-arrow-left').click(function() {
        platzCar.trigger('prev.owl.carousel', [300]);
    })

    $(".karl-platz-carousel").on("mousemove", ".owl-item.active", function (e) {
        let lerWidth = $(".karl-platz-carousel").width();
        let left = e.offsetX + 180;
        let right = e.offsetY + 145;
        console.log(e.offsetX)
        if (e.offsetX < lerWidth/2) {
            $(".karl-platz-arrow-right").css("display", "none")
            $(".karl-platz-arrow-left").css({
                "display": "block", "left":`${left}px`, "top":`${right}px`
            })
        }
        else{
            $(".karl-platz-arrow-left").css("display", "none")
            $(".karl-platz-arrow-right").css({
                "display": "block", "left":`${left}px`, "top":`${right}px`
            })
        }
    }).mouseleave(function (e) {
        $(".karl-platz-arrow-right").css("display", "none")
        $(".karl-platz-arrow-left").css("display", "none")
    })

    var tableCarousel =  $(".table-responsive-inner .owl-carousel");

    tableCarousel.owlCarousel({
      loop:true,
      margin:20,
      nav:true,
      navText:["<img src='img/slider_left.png'>", "<img src='img/slider_right.png'>"],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:3
          }
      }
  });
});



