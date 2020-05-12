// console.log("what up!");
vrt({ belowColor: "#ccc" });

// Wait for images to load before runing resize
var resizeAfterImagesLoaded = document.querySelectorAll(".resize");
imagesLoaded(resizeAfterImagesLoaded, function() {
  rdm(".resize");
});

// Headroom nav setup
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

// https://www.jamestease.co.uk/blether/add-remove-or-toggle-classes-using-vanilla-javascript

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
