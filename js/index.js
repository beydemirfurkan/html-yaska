function showHamburger() {

    let hamEl = document.getElementById("hamburger")
    let closeEl = document.querySelector("#hamburger .close")
    let openEl = document.querySelector(".end-toggle");
    let navbarEl = document.querySelector(".navbar");

    closeEl.addEventListener('click', () => {
        hamEl.style.display = "none";
        navbarEl.classList.remove("navclick")
    })

    openEl.addEventListener("click", () =>{

        hamEl.style.display = "block";
        navbarEl.classList.add("navclick");        
    });   
}
if ( document.querySelector(".end-toggle") || document.querySelector("#hamburger .close")) { showHamburger() }


function showCall() {

    let callEl = document.getElementById("call")
    let openEl = document.querySelector(".end-call");
    let closeEl = document.querySelector("#call .close");
    let navbarEl = document.querySelector(".navbar");
    // let tEl = document.querySelector(".catalog-right .catalog-inner2 .bi-telephone-fill");
    closeEl.addEventListener('click', (event) => {
        event.preventDefault();
        callEl.style.display = "none";
        navbarEl.classList.remove("callClick")
    })

    openEl.addEventListener("click", () =>{
        callEl.style.display = "block";
        navbarEl.classList.add("callClick");        
    });

 }
if ( document.querySelector(".end-call") || document.querySelector("#call .close")) { showCall() }


function newsHeader() {

    let newsEl = document.querySelectorAll(".news-item a");
    let newsHead = document.querySelector(".news-left h2");
    let newsParent = document.querySelectorAll(".news-item");
    
    newsEl.forEach( (e, i) => {

        e.addEventListener("click", (event) =>{

            let currentDiv = newsParent[i];

            if (!currentDiv.classList.contains('newsclick') ){
   
                console.log(currentDiv.classList)
                event.preventDefault();                
                currentDiv.classList.add("newsclick")
                let newsText = e.querySelector("p").innerText;
                newsHead.innerText = newsText; 
            }       
        })
    })
    
}
if ( document.querySelector(".news-right") ) { newsHeader() }
 

function scrollMenu() {

  window.onscroll = function(){
      if (scrollY > 50) {
          document.querySelector(".navbar").classList.add("nav-scroll")
      } else {
          document.querySelector(".navbar").classList.remove("nav-scroll")
      }
  }
}
scrollMenu();



//home animation
function homegsap() {

  const elnavbar = document.querySelector("nav");
  var controller = new ScrollMagic.Controller();

  const t1 = gsap.timeline({ defaults: { ease: Expo.InOut } });
  t1.fromTo(elnavbar, 1, { y: "-10rem" }, { y: 0 });

  const t2 = gsap.timeline({ defaults: { ease: Expo.InOut } });
  t2.fromTo(".foldhome-left", 0.5, { x: "-12rem", opacity: 0 }, { x: 0, opacity: 1 } );
  t2.fromTo(".foldhome-right", 0.5, { x: "12rem", opacity: 0 }, { x: 0, opacity: 1 });

  new ScrollMagic.Scene({
    triggerElement: ".foldhome",
    triggerHook: 0.5,
    reverse: false,
  })
    .setTween(t2)
    .addTo(controller); 

  const t3 = gsap.timeline({ defaults: { ease: Expo.InOut } });
  t3.fromTo(".h-project-left", 0.5, { x: "-12rem", opacity: 0 }, { x: 0, opacity: 1 } );
  t3.fromTo(".h-project-left img", 0.5, { scale: 1.5 }, { scale: 1 });
  t3.fromTo(".h-project-right", 0.5, { x: "12rem", opacity: 0 }, { x: 0, opacity: 1 });

  new ScrollMagic.Scene({
    triggerElement: ".home-project",
    triggerHook: 0.5,
    reverse: false,
  })
    .setTween(t3)
    .addTo(controller);
 
}
if ( document.querySelector(".homepages") ) { homegsap() }


//pd animation
function pdgsap() {

  const pdH2El = document.querySelector(".pd-hero .container h2");
  var controller = new ScrollMagic.Controller();

  const t1 = gsap.timeline({ defaults: { ease: Expo.InOut } }); 
  t1.fromTo(pdH2El, 1, { x: "-15rem", opacity: 0 }, { x: 0, opacity: 1 });
  t1.fromTo(".pd-nav", .5, { x: "-15rem", opacity: 0 }, { x: 0, opacity: 1 });
  
  const t2 = gsap.timeline({ defaults: { ease: Expo.InOut } });
  t2.fromTo(".concept-text", 0.5, { x: "-12rem", opacity: 0 }, { x: 0, opacity: 1 });
  t2.fromTo(".concept-images", 0.5, { x: "12rem", opacity: 0 }, { x: 0, opacity: 1 });
  new ScrollMagic.Scene({
    triggerElement: ".concept",
    triggerHook: 0.5,
    reverse: false,
  })
  .setTween(t2)
  .addTo(controller);

  const t3 = gsap.timeline({ defaults: { ease: Expo.InOut } });
  t3.fromTo(".features-left", 0.5, { x: "-12rem", opacity: 0 }, { x: 0, opacity: 1 });
  t3.fromTo(".features-right", 0.5, { x: "12rem", opacity: 0 }, { x: 0, opacity: 1 });
  t3.fromTo(".features-bottom", 0.5, { x: "-12rem", opacity: 0 }, { x: 0, opacity: 1 });
  t3.fromTo(".features-mobile-btn", 0.5, { x: "12rem", opacity: 0 }, { x: 0, opacity: 1 });
  new ScrollMagic.Scene({
    triggerElement: ".features",
    triggerHook: 0.5,
    reverse: false,
  })
  .setTween(t3)
  .addTo(controller);

  const t4 = gsap.timeline({ defaults: { ease: Expo.InOut } });
  t4.fromTo(".location-left", 0.5, { x: "-12rem", opacity: 0 }, { x: 0, opacity: 1 });
  t4.fromTo(".location-right", 0.5, { x: "12rem", opacity: 0 }, { x: 0, opacity: 1 });
  new ScrollMagic.Scene({
    triggerElement: ".location",
    triggerHook: 0.5,
    reverse: false,
  })
  .setTween(t4)
  .addTo(controller);

  const t5 = gsap.timeline({ defaults: { ease: Expo.InOut } });
  t5.fromTo(".pd-contact-left", 0.5, { x: "-12rem", opacity: 0 }, { x: 0, opacity: 1 });
  t5.fromTo(".pd-contact-right", 0.5, { x: "12rem", opacity: 0 }, { x: 0, opacity: 1 });
  new ScrollMagic.Scene({
    triggerElement: ".pd-contact",
    triggerHook: 0.5,
    reverse: false,
  })
  .setTween(t5)
  .addTo(controller);    
}
if ( document.querySelector(".pd-page") ) { pdgsap() }


//select-box
function selectBox() {

  const selectedAll = document.querySelectorAll(".selected");
  selectedAll.forEach( selected => { 
    const selectedSpan = selected.querySelector("span");
    const optionsContainer = selected.nextElementSibling;
    const optionsList = optionsContainer.querySelectorAll(".option");

    selected.addEventListener("click", () => {
      if(optionsContainer.classList.contains("active")){
        optionsContainer.classList.remove("active");
      }else{
        let currentAtivex = document.querySelector(".options-container.active");
        if(currentAtivex){
          currentAtivex.classList.remove("active");
        }
        optionsContainer.classList.add("active")
      }
    });

    optionsList.forEach(o => {
      o.addEventListener("click", () => {
        selectedSpan.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
      });
    });
  });
}
if ( document.querySelector(".select-box") ) { selectBox() }


$(".projects-item").click(function(){

  const dataBar = $(this).attr("data-filter");

  if (dataBar == "all") {
    
    $(".p-portfolio-item").show("500");
  }else{
    $(".p-portfolio-item").not("." + dataBar).hide("500");
    $(".p-portfolio-item").filter("." + dataBar).show("500");
  }
})


///carousel
$(document).ready(function(){
  if (document.querySelector(".homepages")){
    homeNews();
    if ( $(window).width() > 992 ) {
      salesS();
    } else {
      $('.sales-slider .owl-carousel').addClass('off');
      $('.sales-thumb .owl-carousel').addClass('off');
    }    
  }
  if (document.querySelector(".pd-page")) {
    pdConsept();
    pdFeaturesImg();
    pdGallery();
  }
});


if (document.querySelector(".homepages")){
  //home-sales
  $(window).resize(function() {
      if ( $(window).width() > 992 ) {
        salesS();
      } else {
        stopCarousel();
      }
  });
}


//home-sales
function salesS() {
    //sales-slider
    var salSlider = $('.sales-slider .owl-carousel');
    salSlider.owlCarousel({
      loop:true,
      margin:0,
      items:1,
      center: true,
    })
    $('.sales-arrow-r').click(function() {
      salSlider.trigger('next.owl.carousel', [300]);
    })
    $('.sales-arrow-l').click(function() {
      salSlider.trigger('prev.owl.carousel', [300]);
    })
    //sales-thumb
    var salThumb = $('.sales-thumb .owl-carousel');
    $('.sales-thumb .item').each( function( index ) {
      $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
    });

    salThumb.owlCarousel({
      loop:true,
      margin:0,
      center: true,
      responsive:{
          0:{
              items:2
          },
          600:{
              items:2
          },
          900:{
              items:3
          }
      },
    })
    $('.sales-arrow-r').click(function() {
      salThumb.trigger('next.owl.carousel', [300]);
    })
    $('.sales-arrow-l').click(function() {
      salThumb.trigger('prev.owl.carousel', [300]);
    })
    /************************/
    salSlider.on('dragged.owl.carousel', function(event) {
      var yon = event.relatedTarget['_drag']['direction'];
      if (yon === "left") {
        salThumb.trigger("next.owl.carousel")
      }else(
        salThumb.trigger("prev.owl.carousel")
      ) 
    })
    salThumb.on('dragged.owl.carousel', function(event) {
      var yon = event.relatedTarget['_drag']['direction'];
      if (yon === "right") {
        salSlider.trigger("prev.owl.carousel")
      }else(
        salSlider.trigger("next.owl.carousel")
      ) 
    });

    $(".sales-thumb").each(function(){
      $(this).on("click",  "a", function (e) {
        e.preventDefault()
      })
    })
    $(document).on('click', '.owl-item>div', function() {
      var $speed = 300;  // in ms
      salThumb.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
    });

    salThumb.on('change.owl.carousel', function(event) {
      if (event.namespace && event.property.name === 'position') {
        var target = event.relatedTarget.relative(event.property.value, true);
        salSlider.owlCarousel('to', target, 300, true);
      }
    })
};

//home-sales
function stopCarousel() {
  var owl1 = $('.sales-slider .owl-carousel');
  var owl2 = $('.sales-thumb .owl-carousel');
  owl1.trigger('destroy.owl.carousel');
  owl2.trigger('destroy.owl.carousel');
  owl1.addClass('off');
  owl2.addClass('off');
}

//home-news
function homeNews() {
  $('.news-right .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    autoWidth:true,
    autoplay:true,
    items:1
  })
}

//pd-concept
function pdConsept() {
  var consept = $('.consept-carousel .owl-carousel');  
  consept.owlCarousel({
      loop:true,
      margin:10,
      dots: false,
      responsive:{
          0:{
              items:2
          },
          600:{
              items:2
          },
      }
  })
  $('.consept-carousel-l').click(function() {
    consept.trigger('next.owl.carousel');
  })
  $('.consept-carousel-r').click(function() {
    consept.trigger('prev.owl.carousel', [300]);
  })  
}

//pd-features
function pdFeaturesImg() {
  var fİmage = $('.features-image-carousel .owl-carousel');  
  fİmage.owlCarousel({
    loop:true,
    margin:0,
    mouseDrag: false,
    touchDrag: false,
    dots: false,
    autoplay:true,
    items: 1
  })
  $('.features-arrow-right').click(function() {
    fİmage.trigger('next.owl.carousel', [300]);
  })
  $('.features-arrow-left').click(function() {
    fİmage.trigger('prev.owl.carousel', [300]);
  })
}

//pd-galery
function pdGallery() {
  var pdgal = $('.pd-gallery-items .owl-carousel');
  pdgal.owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots: false,
    items: 1,
    onInitialized: ifc,
  })
  pdgal.on('changed.owl.carousel', function(e) {
    if (!e.namespace)  {
      return;
    }
    var carousel = e.relatedTarget;
    $('.pd-gallery-controls .divider').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
  });
  function ifc(event){
    var ifcx = event.relatedTarget;
    $('.pd-gallery-controls .divider').text(ifcx.relative(ifcx.current()) + 1 + '/' + ifcx.items().length);
  }
  $('.pd-gallery-arrow-r').click(function() {
    pdgal.trigger('next.owl.carousel', [300]);
  })
  $('.pd-gallery-arrow-l').click(function() {
    pdgal.trigger('prev.owl.carousel', [300]);
  })
}

if (document.querySelector("#mask")) {
  let mask = document.querySelector("#mask");
  let nnavbar = document.querySelector("nav.navbar");
  mask.addEventListener("transitionend", function(e) {
    if (mask.style.transform == "translate3d(0px, -100%, 0px)") {
      nnavbar.classList.add("mapnav");
    }else{
      nnavbar.classList.remove("mapnav");
    }
  });
}

if (document.querySelector(".pd-page")) {
  const pdS = document.querySelector(".project-details");
  let pdPage = document.querySelector(".pd-page");
  pdS.addEventListener("transitionend", function() {
    let pdSTop = 0 - this.getBoundingClientRect().top;
    let bTop = document.body.getBoundingClientRect().height;
    console.log(bTop);
    console.log(pdSTop);
    if (pdSTop > bTop ) {
      pdPage.classList.add("pdnav");
    }else{
      pdPage.classList.remove("pdnav");
    }
  });
}


if (document.querySelector(".f-ul")) {

  image = [
    "home-project-1",
    "home-project-2",
    "home-project-3"
  ]

  const li = document.querySelectorAll(".f-ul li");
  const a = document.querySelectorAll(".f-ul a");
  const item = document.querySelectorAll(".fold-item");
  const img = document.querySelector(".foldhome-images img");
  
  for (let i = 0; i < a.length; i++) {

    a[i].addEventListener("click", e => {
      e.preventDefault()

      for (let j = 0; j < item.length; j++) {
        item[j].classList.add("d-none"); 
      }

      document.querySelector(".f-ul li.active").classList.remove("active");
      li[i].classList.add("active")
      item[i].classList.remove("d-none");
      img.src = `img/${image[i]}.jpg`
    })

  }
}





////////////////////////////
// Home Project Slider
////////////////////////////
var hpSlider = $(".hp-slider .owl-carousel")
hpSlider.owlCarousel({
  loop:true,
  nav:false,
  dots:false,
  responsive:{
    0:{
        items:1
    },
    600:{
        items:2
    },
    1300:{
        items:3
    },
    1500:{
        items:4
    }
  }
})
$('.hp-slider .bi-chevron-compact-right').click(function() {
  hpSlider.trigger('next.owl.carousel', [300]);
})
$('.hp-slider .bi-chevron-compact-left').click(function() {
  hpSlider.trigger('prev.owl.carousel', [300]);
})


////////////////////////////
// Home Project Manager
////////////////////////////
$(".manager-thumb > div img").click(function (p) {
  $(".manager-thumb .active").removeClass("active");
  let index = $(this).attr("data-i");
  $(this).parent().addClass("active");
  $(".m-img").hide();
  $(".m-img").eq(index).fadeIn(1300);
  $(".htop-content-head div").hide();
  $(".htop-content-head div").eq(index).fadeIn(1300);
  $(".suykj").hide();
  $(".suykj").eq(index).fadeIn(1300);
})
////////////////////////////////










////////////////////////////////
////////////////////////////////
var galeryCarousel = $('.galeryCarousel');
galeryCarousel.owlCarousel({
  loop:false,
  margin:10,
  items:1,
  URLhashListener:true,
  startPosition: 'URLhash',

});


$(".galerySec .galeryItem").each(function (index) {
  $(this).attr('data-number', index);
});

$(".galery-menu-left ul li").each(function (index) {
  $(this).attr('data-number',index);
});

$(document).on('click', '.galery-menu-left ul li', function() {
  var galeryNumber = $(this).data('number');
  $(".galerySec .galeryItem").hide();  

  $(".galerySec .galeryItem").eq(galeryNumber).show(500);

  $(".galery-plain-detail-table table").hide();
  $(".galery-plain-detail-table table").eq(galeryNumber).show();
});



/////////////////////////////////////////////////////////////////
//reserveCarousel
/////////////////////////////////////////////////////////////////
var restoreCarousel = $('.restoreCarousel');
restoreCarousel.owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  items:1
});

$('.restoreCarousel .item').each( function( index ) {
  $(this).attr( 'data-number', index ); 
});

$('.pd-restore-ul li').each( function( index ) {
  $(this).attr( 'data-number', index ); 
});

$(document).on('click', '.pd-restore-ul li', function() {
  var restNumber = $(this).data('number');   
  restoreCarousel.trigger('to.owl.carousel', [restNumber, 300] );
  
  $(".pd-restore-text").hide();
  $(".pd-restore-text").eq(restNumber).show(500);
  
  $(".pd-restore-head").hide();
  $(".pd-restore-head").eq(restNumber).show(500);
});
/////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////
//reserveCarousel
/////////////////////////////////////////////////////////////////

$(document).ready(function  (){
    var reserveCarousel = $('.reserveCarousel .owl-carousel');
    reserveCarousel.owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      items:1
    });
  }
)

$('.reserveCarousel .owl-carousel .item').each( function( index ) {
  $(this).attr( 'data-number', index ); 
});

$('.reserve-inner-box-ul li').each( function( index ) {
  $(this).attr( 'data-number', index ); 
});

$(document).on('click', '.reserve-inner-box-ul li', function() {
  var rNumber = $(this).data('number');  
  reserveCarousel.trigger('to.owl.carousel', [rNumber, 300] );

  $(".res-text").hide();
  $(".res-text").eq(rNumber).show(500);
});


////////////////////////////////////////////////////
////////////statuscarusel
var statusCarousel = $('.statusCarousel .owl-carousel');
statusCarousel.owlCarousel({
loop:true,
nav:false,
margin:0,
items:1
});

$('.statusCarousel .owl-carousel .item').each( function( index ) {
  $(this).attr( 'data-number', index ); 
});

$('.status-inner-right-ul li').each( function( index ) {
  $(this).attr( 'data-number', index ); 
});

$(document).on('click', '.status-inner-right-ul li', function() {
  var number = $(this).data('number');   
  statusCarousel.trigger('to.owl.carousel', [number, 300] );;

  $(".pd-status-left-content").hide();
  $(".pd-status-left-content").eq(number).show(500);

  $(".inner-special .status-title2").hide();
  $(".inner-special .status-title2").eq(number).show(500);

});
///////////////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////
// 
////////////////////////////////////////////////////////////
$('.catalogCarousel .owl-carousel').owlCarousel({
loop:true,
margin:10,
nav:false,
items:1
});



///////////////////////////////
//popup
///////////////////////////////
$(".copyright a").click(function () {
  $(".yaskoPopup").fadeIn(500);
})
$(".yaskoPopup .close").click(function () {
  $(".yaskoPopup").fadeOut(500);
})


