(this["webpackJsonproom-planner"]=this["webpackJsonproom-planner"]||[]).push([[0],{12:function(n,e,t){n.exports=t(20)},17:function(n,e){},20:function(n,e,t){"use strict";t.r(e);var o=t(0),r=t.n(o),a=t(6),i=t.n(a),c=t(10),l=t(1),s=t(2);t(17);function u(){var n=Object(l.a)(["\n\tfont-weight: bold;\n"]);return u=function(){return n},n}function f(){var n=Object(l.a)(["\n\twidth: calc(14% - 100px);\n\tmargin: 50px; \n"]);return f=function(){return n},n}function d(){var n=Object(l.a)(["\n\tdisplay: flex;\n\tflex-wrap: wrap;\n"]);return d=function(){return n},n}var p=s.a.div(d()),h=s.a.div(f()),v=s.a.p(u()),w=function(){var n=Array.from(Array(26).keys()),e=Array.from(Array(7).keys()),t=Object(o.useState)(n),a=Object(c.a)(t,2),i=a[0];a[1];return r.a.createElement(p,null,e.map((function(n,e){return r.a.createElement(h,{key:"Day ".concat(e)},r.a.createElement("h3",null,"Day ",e+1),function(n){if(i.length<=3||7===n+1){var e=i.splice(1,25);return i.pop(),e}var t=function(n){return Math.floor(Math.random()*n+1)},o=t(6);return i.reduce((function(n,e,r){if(r<o){var a=i.splice(t(i.length-1),1)[0];a&&n.push(a)}return n}),[])}(e).map((function(n,t){return r.a.createElement(v,{key:"Day ".concat(e," Room ").concat(t)},"Room ",n)})))})))},g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}i.a.render(r.a.createElement(w,null),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/room-planner",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/room-planner","/service-worker.js");g?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):m(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):m(e,n)}))}}()}},[[12,1,2]]]);
//# sourceMappingURL=main.6c4263ad.chunk.js.map