// console.log("what up!");

// Eanble VRT grid for typography
var runVRT = vrt({ belowColor: "#ccc" });

// Turn on grid after page (re)load
setTimeout(() => {
  runVRT.belowGrid();
}, 500);

// Wait for images to load before runing resize
var resizeAfterImagesLoaded = document.querySelectorAll(".resize");
imagesLoaded(resizeAfterImagesLoaded, function() {
  rdm(".resize");
});

// Ger header element
var headr = document.querySelector("header");
// construct an instance of Headroom, passing the element
var headroom = new Headroom(headr, {
  offset: 50,
  tolerance: 5,
  classes: {
    initial: "animated",
    pinned: "slideDown",
    unpinned: "slideUp"
  }
});
// initialise
headroom.init();


var webpage = webpage || {};

webpage.helpers = (function() {
  function jsCheck() {
    // again, use classList to manipulate classes on elements
    var bodyClass = document.querySelector("html").classList;
    bodyClass.remove("no-js");
    bodyClass.add("js");
  }

  return {
    jsCheck: jsCheck
  };
})();

// start everything
// this isn't in a doc.ready - loaded at the bottom of the page so the DOM is already ready
webpage.helpers.jsCheck();
