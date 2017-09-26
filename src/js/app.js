// Get browser height and apply it to the index container on the homepage
// the height is dynamic to align the spark line with the first image properly

var ojWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var ojHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

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















// JavaScript
window.sr = ScrollReveal({ duration: 1000, scale: 1, distance: '10px', viewFactor: 0.03, easing: 'cubic-bezier(.18,.33,.59,1)' });
// sr.reveal('.img2_container', { distance: '20px', duration: 600, origin: 'left', delay: 200 });
// sr.reveal('.img1_container', { distance: '20px', duration: 600, origin: 'right', delay: 200 });
// sr.reveal('.img3_container', { distance: '10px', duration: 600 });
// sr.reveal('.index_project_desc', { distance: '5px', duration: 500, viewFactor: 0.05, scale: 1 });

sr.reveal('.sr_direction_left', { origin: 'right' });
sr.reveal('.sr_direction_right', { origin: 'left' });
sr.reveal('.sr_direction_down', { origin: 'down' });
sr.reveal('.sr_direction_up');
sr.reveal('.sr_delay_100', { delay: 100 });



document.addEventListener("DOMContentLoaded", function(){
  var sparkie = document.getElementById("sparkie")
  if (sparkie != null && sparkie !== undefined) {
    sparkie.className += " loaded";
  }
  
});