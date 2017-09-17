// Get browser height and apply it to the index container on the homepage
// the height is dynamic to align the spark line with the first image properly

var ojWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var ojHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

// console.log("width: " + ojWidth);
// console.log("height: " + ojHeight);

if (ojHeight > 960) {
  document.getElementById("index_container").className += " index_imac";
} else if (ojHeight < 960 & ojHeight > 700 ) {
  document.getElementById("index_container").className += " index_macbook";
} else if (ojHeight < 700) {
  document.getElementById("index_container").className += " index_iphone";
} else {

}
// Ending get browser height




