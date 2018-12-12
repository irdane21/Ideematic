// Support component names relative to this directory:
var componentRequireContext = require.context("components", true)
var ReactRailsUJS = require("react_ujs")
ReactRailsUJS.useContext(componentRequireContext)

// var actu = setInterval(myTimer, 20000);

// function myTimer() {
//   $.ajax({
//       url: '/articles/new',
//       method: 'GET',
//   });
// }

// function eventFire(el, etype){
//   if (el.fireEvent) {
//     el.fireEvent('on' + etype);
//   } else {
//     var evObj = document.createEvent('Events');
//     evObj.initEvent(etype, true, false);
//     el.dispatchEvent(evObj);
//   }
// }
// const addflux = document.getElementById("addflux");
// if( addflux != null ) {
//   addflux.addEventListener("click", (event) => {
//     event.currentTarget.classList.toggle("hide");
//     const addform = document.getElementById("addform");
//     addform.classList.toggle("hide");
//   });
// }

// const clickread = document.querySelectorAll("a").forEach((a) => {
//   a.addEventListener("click", (event) => {
//     console.log("event");
//     const link = event.currentTarget.nextSibling;
//     console.log(link);
//   });
// });;
