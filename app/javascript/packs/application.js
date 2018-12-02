
// Support component names relative to this directory:
var componentRequireContext = require.context("components", true)
var ReactRailsUJS = require("react_ujs")
ReactRailsUJS.useContext(componentRequireContext)


var actu = setInterval(myTimer, 20000);

function myTimer() {
  console.log('*' * 23)
  console.log("FIRST")
  console.log("*" * 23)

    $.ajax({
        url: '/fluxes/actu',
        method: 'GET',
        success: function(err, data) { alert(data)
    }});
    console.log("second")
}
