
// Support component names relative to this directory:
var componentRequireContext = require.context("components", true)
var ReactRailsUJS = require("react_ujs")
ReactRailsUJS.useContext(componentRequireContext)


// var actu = setInterval(myTimer, 20000);

// function myTimer() {
//   $.ajax({
//       url: '/fluxes/actu',
//       method: 'GET',
//       success: function(err, data) { alert()
//         console.log('coucou')
//   }});
// }
