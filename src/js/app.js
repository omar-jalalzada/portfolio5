// Get browser height and apply it to the index container on the homepage
// the height is dynamic to align the spark line with the first image properly

// var ojWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
// var ojHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

// console.log("width: " + ojWidth);
// console.log("height: " + ojHeight);

// if (ojHeight > 960) {
//   document.getElementById("index_container").className += " index_imac";
// } else if (ojHeight < 960 & ojHeight > 700 ) {
//   document.getElementById("index_container").className += " index_macbook";
// } else if (ojHeight < 700) {
//   // document.getElementById("index_container").className += " index_iphone";
// } else {

// }
// Ending get browser height











// Scroll Reveal Config & Setup
window.sr = ScrollReveal({ duration: 500, scale: 1, distance: '10px', viewFactor: .3, easing: 'cubic-bezier(.18,.33,.59,1)' });

sr.reveal('.sr_direction_left', { origin: 'right' });
sr.reveal('.sr_direction_right', { origin: 'left' });
sr.reveal('.sr_direction_down', { origin: 'top' });
sr.reveal('.sr_direction_up');
sr.reveal('.sr_delay_100', { delay: 100 });
sr.reveal('.sr_delay_200', { delay: 200 });
sr.reveal('.sr_delay_300', { delay: 300 });
sr.reveal('.sr_delay_400', { delay: 400 });
sr.reveal('.sr_delay_500', { delay: 500 });
sr.reveal('.sr_delay_600', { delay: 600 });
sr.reveal('.sr_delay_700', { delay: 700 });

sr.reveal('.flat_grid .img_container', 100);
sr.reveal('.p_features_container li', { origin: 'left' }, 300);














// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {appearOnScroll()};

// function appearOnScroll() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         document.getElementById("project_header").className = " show";
//     } else {
//         document.getElementById("project_header").className = " hide";
//     }
// }

// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0; // For Chrome, Safari and Opera 
//     document.documentElement.scrollTop = 0; // For IE and Firefox
// }












document.addEventListener("DOMContentLoaded", function(){
  // INDEX PAGE  
  var sparky = document.getElementById("sparky")
  if (sparky != null && sparky !== undefined) {
    sparky.className += " loaded";
  }





  // // first add raf shim
  // // http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
  // window.requestAnimFrame = (function(){
  //   return  window.requestAnimationFrame       ||
  //           window.webkitRequestAnimationFrame ||
  //           window.mozRequestAnimationFrame    ||
  //           function( callback ){
  //             window.setTimeout(callback, 1000 / 60);
  //           };
  // })();

  // // main function
  // function scrollToY(scrollTargetY, speed, easing) {
  //     // scrollTargetY: the target scrollY property of the window
  //     // speed: time in pixels per second
  //     // easing: easing equation to use

  //     var scrollY = window.scrollY || document.documentElement.scrollTop,
  //         scrollTargetY = scrollTargetY || 0,
  //         speed = speed || 2000,
  //         easing = easing || 'easeOutSine',
  //         currentTime = 0;

  //     // min time .1, max time .8 seconds
  //     var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

  //     // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
  //     var easingEquations = {
  //             easeOutSine: function (pos) {
  //                 return Math.sin(pos * (Math.PI / 2));
  //             },
  //             easeInOutSine: function (pos) {
  //                 return (-0.5 * (Math.cos(Math.PI * pos) - 1));
  //             },
  //             easeInOutQuint: function (pos) {
  //                 if ((pos /= 0.5) < 1) {
  //                     return 0.5 * Math.pow(pos, 5);
  //                 }
  //                 return 0.5 * (Math.pow((pos - 2), 5) + 2);
  //             }
  //         };

  //     // // add animation loop
  //     // function tick() {
  //     //     currentTime += 1 / 60;

  //     //     var p = currentTime / time;
  //     //     var t = easingEquations[easing](p);

  //     //     if (p < 1) {
  //     //         requestAnimFrame(tick);

  //     //         window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
  //     //     } else {
  //     //         console.log('scroll done');
  //     //         window.scrollTo(0, scrollTargetY);
  //     //     }
  //     // }

  //     // // call it once to get started
  //     // tick();
  // };

  // var el = document.getElementById("go_top_btn");
  // el.addEventListener("click", scrollToY(0, 1500, 'easeInOutQuint'), false);









  var hover_container = document.getElementsByClassName("image_overlay_wrapper");

  
  if (hover_container != null && hover_container !== undefined) {

    for (i = 0; i < hover_container.length; i++) {
        
        hover_container[i].addEventListener("mouseover", function(){
          this.classList.add("hovered");
        });
        hover_container[i].addEventListener("mouseout", function(){
          this.classList.remove("hovered");
        });
    }


    var pop_up = document.getElementsByClassName("feature_pop_up");
    var i;

    for (i = 0; i < pop_up.length; i++) {

        pop_up[i].addEventListener("mouseover", function(){
          this.classList.add("hovered");
        });
        pop_up[i].addEventListener("mouseout", function(){
          this.classList.remove("hovered");
        });
    }


  }

});


