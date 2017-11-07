/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener("DOMContentLoaded", function () {

  // INDEX PAGE  
  var sparky = document.getElementById("sparky");
  if (sparky != null && sparky !== undefined) {
    sparky.className += " loaded";
  }

  ///////////////////////////
  // Project Page Header
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    appearOnScroll();
  };

  function appearOnScroll() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      document.getElementById("project_header").className = " show";
    } else {
      document.getElementById("project_header").className = " hide";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  var top_btn = document.getElementById("go_top_btn");
  if (top_btn != null && top_btn !== undefined) {
    top_btn.addEventListener("click", function () {
      document.body.scrollTop = 0; // For Chrome, Safari and Opera 
      document.documentElement.scrollTop = 0; // For IE and Firefox
    });
  }

  ///////////////////////////
  // Adding the overlay feature for Project Pages, 
  // the user hovers over dots or images to access additional screengrabs
  var hover_container = document.getElementsByClassName("image_overlay_wrapper");
  // Mouse over function for the main container
  if (hover_container != null && hover_container !== undefined) {
    for (i = 0; i < hover_container.length; i++) {
      hover_container[i].addEventListener("mouseover", function () {
        this.classList.add("hovered");
      });
      hover_container[i].addEventListener("mouseout", function () {
        this.classList.remove("hovered");
      });
    }
    // Mouse over function for the dots and additional containers
    var pop_up = document.getElementsByClassName("feature_pop_up");
    var i;
    for (i = 0; i < pop_up.length; i++) {
      pop_up[i].addEventListener("mouseover", function () {
        this.classList.add("hovered");
      });
      pop_up[i].addEventListener("mouseout", function () {
        this.classList.remove("hovered");
      });
    }
  }
});

///////////////////////////////
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

// Referrence: 


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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);