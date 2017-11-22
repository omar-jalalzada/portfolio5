document.addEventListener("DOMContentLoaded", function(){


  // INDEX PAGE  
  var sparky = document.getElementById("sparky")
  if (sparky != null && sparky !== undefined) {
    sparky.className += " loaded";
  }


  ///////////////////////////
  // Project Page Header
  // When the user scrolls down 20px from the top of the document, show the button
  var project_header_scroll = document.getElementById("project_header");
  if (project_header_scroll != null && project_header_scroll !== undefined) {
    window.onscroll = function() {appearOnScroll()};
    function appearOnScroll() {
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
            document.getElementById("project_header").className = " show";
        } else {
            document.getElementById("project_header").className = " hide";
        }
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  var top_btn = document.getElementById("go_top_btn");
  if (top_btn != null && top_btn !== undefined) {
      top_btn.addEventListener("click", function(){
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
      hover_container[i].addEventListener("mouseover", function(){
        this.classList.add("hovered");
      });
      hover_container[i].addEventListener("mouseout", function(){
        this.classList.remove("hovered");
      });
    }
    // Mouse over function for the dots and additional containers
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













/////////////////////////
// Button toggler 


  /**
   * Get the closest matching element up the DOM tree.
   * @private
   * @param  {Element} elem     Starting element
   * @param  {String}  selector Selector to match against
   * @return {Boolean|Element}  Returns null if not match found
   */
  var getClosest = function ( elem, selector ) {

      // Element.matches() polyfill
      if (!Element.prototype.matches) {
          Element.prototype.matches =
              Element.prototype.matchesSelector ||
              Element.prototype.mozMatchesSelector ||
              Element.prototype.msMatchesSelector ||
              Element.prototype.oMatchesSelector ||
              Element.prototype.webkitMatchesSelector ||
              function(s) {
                  var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                      i = matches.length;
                  while (--i >= 0 && matches.item(i) !== this) {}
                  return i > -1;
              };
      }

      // Get closest match
      for ( ; elem && elem !== document; elem = elem.parentNode ) {
          if ( elem.matches( selector ) ) return elem;
      }

      return null;

  };

  
  // When the user clicks on the button, scroll to the top of the document
  var oj_toggler = document.getElementsByClassName("toggler_container");
  if (oj_toggler != null && oj_toggler !== undefined) {
      var switchers = document.getElementsByClassName('toggle_opt')
      var i;
      for (i = 0; i < switchers.length; i++) {
        switchers[i].addEventListener("click", function(){
          // oj_toggler.className = this.getAttribute("switch");
          var current_switch = this.getAttribute("switch")
          // oj_toggler[0].setAttribute("switch", current_switch);
          
          var parentToggler = getClosest(this, '.toggler_container');
          parentToggler.setAttribute("switch", current_switch);


          // remove active from other options, inside the same container
          var currentScopeOptions = parentToggler.getElementsByClassName('toggle_opt');
          // console.log(currentScopeOptions)
          for (i = 0; i < currentScopeOptions.length; i++) {
            currentScopeOptions[i].classList.remove("active");
          }
          
          // add active to the one clicked
          this.classList.add("active");
        });
      }
  }





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