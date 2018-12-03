
// Support component names relative to this directory:
var componentRequireContext = require.context("components", true)
var ReactRailsUJS = require("react_ujs")
ReactRailsUJS.useContext(componentRequireContext)


var actu = setInterval(myTimer, 20000);

function myTimer() {
  $.ajax({
      url: '/fluxes/actu',
      method: 'GET',
  });
}

// document.querySelectorAll("a").forEach((a) => {
//   a.addEventListener("click", function() {
//     $("a:parent:parent")
//     $.ajax({
//     url: 'articles/marklu',
//     });
//   });
// });
