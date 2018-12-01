
// Support component names relative to this directory:
var componentRequireContext = require.context("components", true)
var ReactRailsUJS = require("react_ujs")
ReactRailsUJS.useContext(componentRequireContext)


var actu = setInterval(myTimer, 10000);

function myTimer() {
  console.log('*' * 23)
  console.log("FIRST")
  console.log("*" * 23)

    $.ajax({
        url: 'fluxes#actu',
        success: function () {

        }
    });
}
