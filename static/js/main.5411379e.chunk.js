(this.webpackJsonphunt=this.webpackJsonphunt||[]).push([[0],{159:function(e,t,n){e.exports=n(323)},164:function(e,t,n){},197:function(e,t){},222:function(e,t){},224:function(e,t){},257:function(e,t){},258:function(e,t){},323:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(32),o=n.n(c),i=(n(164),n(29)),u=n(5),l=n(14),s=n(1),f=n.n(s),m=n(10),p=n(149),d=n.n(p),h=n(48),y=n.n(h),b=n(6),g=function(e,t,n){return{method:e,headers:t?{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}:{"Content-Type":"application/json"},body:"POST"===e?JSON.stringify(Object(b.a)({},n)):null}},v=function(e){return 200!==e.status?e.json().then((function(e){throw console.log(e),new Error(e.error)})):e.json()},k=function(e,t){var n=e.message;t({type:C,error:n})},E=function(e,t,n){var r=localStorage.getItem("token"),a=g("POST",r,t);fetch("".concat("https://relay.raptor.pizza","/").concat(e),a).then(v).then((function(e){"verified"===e.message&&r&&n({type:S,token:r}),n({type:F,response:e.message})})).catch((function(e){return k(e,n)}))},O=function(e,t){var n=g("POST",null,{hash:t});fetch("".concat("https://relay.raptor.pizza","/").concat("new_token"),n).then(v).then((function(t){var n=t.token;localStorage.setItem("token",n),e({type:S,token:n})})).catch((function(t){return k(t,e)}))},j=function(){var e=localStorage.getItem("token"),t=g("GET",e,null);return console.log(t),fetch("".concat("https://relay.raptor.pizza","/").concat("all_series"),t).then(v).then((function(e){return e}))},w=function(){var e=Object(m.a)(f.a.mark((function e(t){var n,r,a,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.seriesId,r=t.email,"create_hunt",a=localStorage.getItem("token"),c=g("POST",a,{id:n,email:r}),e.next=6,fetch("".concat("https://relay.raptor.pizza","/").concat("create_hunt"),c).then(v).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(m.a)(f.a.mark((function e(t){var n,r,a,c,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.cat,r=t.description,a=t.name,"send_series",c=localStorage.getItem("token"),o=g("POST",c,{cat:n,description:r,name:a}),e.next=6,fetch("".concat("https://relay.raptor.pizza","/").concat("send_series"),o).then(v).then((function(e){console.log(e)}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(m.a)(f.a.mark((function e(t){var n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"create_marker",n=localStorage.getItem("token"),r=g("POST",n,t),fetch("".concat("https://relay.raptor.pizza","/").concat("create_marker"),r).then(v).then((function(e){return console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S="SET_TOKEN",C="ERROR",F="RESPONSE",A=function(){return function(){var e=Object(m.a)(f.a.mark((function e(t,n){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"LOADING"}),window.requestIdleCallback?requestIdleCallback((function(){y.a.get(function(){var e=Object(m.a)(f.a.mark((function e(r){var a,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=r.map((function(e){return e.value})),c=y.a.x64hash128(a.join(""),31),t({type:"DEVICE_INIT",hash:c}),n().device.token||E("auth_device",{device:c},t),t(_(1));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})):setTimeout((function(){y.a.get(function(){var e=Object(m.a)(f.a.mark((function e(r){var a,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=r.map((function(e){return e.value})),c=y.a.x64hash128(a.join(""),31),t({type:"DEVICE_INIT",hash:c}),n().device.token||E("auth_device",{device:c},t),t(_(1));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),500);case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},_=function(e){return function(t){setTimeout((function(){return t({type:"READY"})}),e)}},z=function(e){return function(){var t=Object(m.a)(f.a.mark((function t(n,r){var a,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=r(),c=a.device.hash,E("register_device",{email:e,hash:c},n),n({type:"LOADING"}),n(_(2e3));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},I=function(){return function(){var e=Object(m.a)(f.a.mark((function e(t,n){var r,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n(),a=r.device.hash,O(t,a),t({type:"LOADING"}),t(_(2e3));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},M=function(){return function(){var e=Object(m.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.setItem("token",""),t({type:"LOGOUT"});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};function N(e){return d()("".concat("wss://relay.raptor.pizza","?token=").concat(localStorage.getItem("token"),"&device=").concat(e),{path:"/socket.io",transport:["websocket"]})}var D=function(e){return function(t){t({type:"SOCKET_MESSAGE",message:e})}},K=function(e,t,n){"markers"===t&&e({type:"MAP_INIT",markers:n}),"marker_found"===t&&e({type:"MARKER_FOUND",markersFound:n})},R=function(e){return function(){var t=Object(m.a)(f.a.mark((function t(n,r){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r().socket.socket.on(e,(function(t){K(n,e,t),n(D(t))})),n({type:"LISTEN_TO",topic:e});case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},P=function(e,t){return function(){var n=Object(m.a)(f.a.mark((function n(r,a){var c,o,i;return f.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=a(),o=c.device.hash,n.next=3,N(o);case 3:(i=n.sent).on("error",(function(e){return r({type:C,error:e})})),r({type:"CONNECTED",socket:i}),i&&i.emit(e,t);case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},L=Object(l.b)((function(e){return e.socket}),(function(e){return{getMarkers:function(t){return e({type:"GET_MARKERS",hunt:t})}}}))((function(e){var t=e.getMarkers,n=e.hunt,c=e.status,o=Object(r.useState)("lala"),i=Object(u.a)(o,2),l=i[0],s=i[1];return Object(r.useEffect)((function(){window.addEventListener("focus",(function(){return s("focus")})),window.addEventListener("blur",(function(){return s("nofucs")}))}),[]),Object(r.useEffect)((function(){"focus"===l&&t(n)}),[l,t]),a.a.createElement("div",{style:{display:"none"}},c,"-",l)})),G=n(8),B=n(41),U=n(9),W=n(150),q=n.n(W);function V(){var e=Object(G.a)(["\n  margin: 0rem auto 0rem;\n  height: 100%;\n  max-width: 360px;\n  color: black;\n  display: block;\n"]);return V=function(){return e},e}var H=U.a.svg(V()),J=function(e){var t=e.bg,n=e.fill,r=void 0===n?"#FFFFFF":n,c=e.opacity,o=void 0===c?1:c,i=e.reff,u=e.stroke,l=void 0===u?"#FFFFFF":u;return a.a.createElement(H,{ref:i,x:"0px",y:"0px",viewBox:"0 0 864 864"},a.a.createElement("path",{fill:t,d:"M704.172,432.004c0-150.322-121.847-272.176-272.167-272.176c-150.313,0-272.177,121.854-272.177,272.176\r\nc0,150.321,121.863,272.169,272.177,272.169C582.325,704.172,704.172,582.325,704.172,432.004z"}),a.a.createElement("path",{stroke:l,fill:r,opacity:o,strokeWidth:"10",strokeMiterlimit:"10",d:"M623.373,394.194v-34.077l-120.796-34.103l-22.437,66.463\r\nl-129.417,60.525l-135.987-70.14l-6.756,15.581l133.588,116.586l57.817-7.664l19.241,32.798l-40.041,34.124\r\nc9.488,10.356,60.784,36.836,60.784,36.836l25.191-2.766l-34.262-35.532l25.89-17.396l12.872-58.715l62.837-24.296l-3.854,33.212\r\nl14.588,3.42l24.923-51.034l-46.001-18.883l15.536-49.255L623.373,394.194z"}))};function Y(){var e=Object(G.a)(["\n  height: 100vh;\n  width: 100%;\n"]);return Y=function(){return e},e}function Z(){var e=Object(G.a)(["\n  background: white;\n  color: black;\n  border: 2px solid white;\n  margin: 4px;\n"]);return Z=function(){return e},e}function Q(){var e=Object(G.a)(["\n  width: 8rem;\n  height: 8rem;\n  border-radius: 50%;\n  border: 2px solid #000000;\n  font-size: 1.6rem;\n  cursor: pointer;\n  background: white;\n  box-shadow: -5px 3px black;\n  line-height: 122px;\n"]);return Q=function(){return e},e}function X(){var e=Object(G.a)(["\n  text-align: center;\n  font-size: 22px;\n  font-family: Arial;\n  border: 2px black solid;\n  height: 56px;\n  box-shadow: 9px 10px black;\n  width: 79%;\n  max-width: 430px;\n"]);return X=function(){return e},e}function $(){var e=Object(G.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 80%;\n  max-width: 900px;\n  margin: auto;\n  div {\n    margin: 4% auto;\n    border-bottom: 4px dotted black;\n    padding: 3%;\n    width: 80%;\n  }\n\n  input,\n  button {\n    margin: 7% auto 7%;\n    align-self: center;\n    padding: 0;\n  }\n\n  @media only screen and (min-width: 700px) {\n    justify-content: flex-start;\n  }\n"]);return $=function(){return e},e}function ee(){var e=Object(G.a)(["\n  margin: 10% auto;\n  background: white;\n  border: 1px solid black;\n  color: black;\n  padding: 8%;\n  font-family: Arial;\n  font-weight: bold;\n  font-size: 2.4rem;\n  box-shadow: 13px 16px #ff0909;\n  height: 3rem;\n"]);return ee=function(){return e},e}var te=U.a.div(ee()),ne=U.a.div($()),re=U.a.input(X()),ae=U.a.button(Q()),ce=U.a.button(Z()),oe=U.a.div(Y());function ie(){var e=Object(G.a)(["\n  color: white;\n  font-size: 1.6rem;\n  text-align: center;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  width: 70%;\n  margin: auto;\n  text-shadow: 4px 4px black;\n  box-shadow: 7px 11px black;\n  background-color: white;\n  border: 1px solid black;\n  padding: 1rem;\n"]);return ie=function(){return e},e}function ue(){var e=Object(G.a)(["\n  height: 100%;\n  margin: 1rem;\n  background: white;\n  padding: 1rem;\n  display: grid;\n  grid-template-rows: 30% 40% 30%;\n  max-width: 700px;\n  @media only screen and (min-width: 700px) {\n    margin: 1rem auto;\n  }\n"]);return ue=function(){return e},e}var le=U.a.div(ue()),se=U.a.div(ie()),fe=function(e){var t=e.message,n=e.scanTainer,c=Object(r.useState)("scanning..."),o=Object(u.a)(c,2),i=o[0],l=o[1],s=Object(r.useRef)();return Object(r.useEffect)((function(){var e=n.current,r=s.current;r.getElementsByTagName("path")[0].style.stroke="red",r.getElementsByTagName("path")[0].style.strokeWidth="21px";var a,c=Date.now(),o=q.a.scale(["black","red"]),i=0;return function n(){if(t&&++i>200)return cancelAnimationFrame(a),e.style.color="black",e.style.background="white",e.style.boxShadow="13px 16px black",function(){var e=r.getElementsByTagName("path")[0].style;e.stroke="you already found this one!"===t?"yellow":"cool find!"===t?"#9dff9d":"red"}(),void l(t);var u=Date.now()-c,s=.5*(2+Math.sin(.001*u)),f=.5*(1+Math.cos(.001*u));e.style.color=o(s),e.style.background=o(f),e.style.boxShadow="13px 16px ".concat(o(s));var m=180+360*Math.sin(.001*u)*.5;r.style.transform="rotate(".concat(m,"deg)"),document.body.style.background=o(.8*f),a=requestAnimationFrame(n)}(),function(){return cancelAnimationFrame(a)}}),[t,n]),a.a.createElement(le,null,a.a.createElement(te,{ref:n},"scanning..."===i?"Scanning":"Scanned"),a.a.createElement("div",null,a.a.createElement(B.b,{to:"/"},a.a.createElement(J,{reff:s}))),a.a.createElement(se,null,i.toUpperCase()))},me=Object(l.b)((function(e){return e.socket}),(function(e){return{sendCode:function(t){return e((n="code",r=t,function(){var e=Object(m.a)(f.a.mark((function e(t,a){var c,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=a(),(o=c.socket).socket?o.socket.emit(n,r):t(P(n,r));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()));var n,r},listenToCodeResponse:function(){return e(R("code_response"))},listenToWin:function(){return e(R("win"))},listenToMarkers:function(){return e(R("markers"))}}}))((function(e){var t=e.connected,n=e.listenToCodeResponse,c=e.listenToMarkers,o=e.listenToWin,i=e.match,u=e.message,l=e.sendCode,s=Object(r.useRef)(),f=new RegExp("(?=.*m)(?=.*e)(?=.*p)(?=.*o)(?=.*3)").exec(i.params.code);return Object(r.useEffect)((function(){if(!f){var e=i.params.code;l(e)}}),[f,i,l]),Object(r.useEffect)((function(){t&&(n(),o(),c())}),[t,o,n,c]),a.a.createElement("div",{style:{height:"90%"}},f?a.a.createElement(te,{ref:s},"This is not a valid request for reasons I cannot explain :)"):a.a.createElement(fe,{scanTainer:s,message:u}))})),pe=n(59),de=n.n(pe),he={position:"absolute",width:70,height:70,left:-35,top:-35,borderRadius:70,textAlign:"center",color:"#3f51b5",fontSize:16,fontWeight:"bold",cursor:"pointer",userSelect:"none"},ye=Object(b.a)({},he),be=function(e){var t=e.found,n=Object(r.useState)("rgb(200,0,0)"),c=Object(u.a)(n,2),o=c[0],i=c[1];return Object(r.useEffect)((function(){var e,n=Date.now();return function r(){var a=Date.now()-n,c=200+40*Math.sin(.01*a),o="rgb(".concat(Math.floor(c),",0,0)");i(o),t?cancelAnimationFrame(e):e=requestAnimationFrame(r)}(),function(){return cancelAnimationFrame(e)}}),[t]),a.a.createElement("div",{style:ye,onPointerDown:console.log},a.a.createElement(J,{bg:t?"#7ffdcb":o,fill:"".concat(t?"#FF0000":"#FFFFFF")}))},ge=n(60),ve=function(e){var t=Object.assign({},e);return a.a.createElement("svg",Object.assign({x:"0px",y:"0px",viewBox:"0 0 400 400"},t),a.a.createElement("g",null,a.a.createElement("path",{d:"M210.51,51c81.3,0,147.57,66.36,147.35,147.56c-0.22,81.32-66.23,147.26-147.34,147.2\r c-81.38-0.07-147.64-66.42-147.35-147.55C63.47,116.8,129.33,51,210.51,51z M210.47,66.64C137.9,66.68,78.75,125.88,78.81,198.42\r c0.06,72.61,59.22,131.74,131.75,131.69c72.59-0.05,131.71-59.23,131.67-131.78C342.18,125.73,283.03,66.6,210.47,66.64z"}),a.a.createElement("path",{d:"M208.63,299.23c-29.03-0.67-54.45-12.82-74-36.98c-3.39-4.18-3.2-8.59,0.34-11.6c3.61-3.07,8.17-2.44,11.7,1.9\r c12.38,15.19,27.92,25.44,47.25,28.96c31.58,5.75,58.31-3.18,79.44-27.76c1.25-1.45,2.47-3.08,4.06-4.05\r c3.09-1.89,7.18-0.92,9.53,1.85c2.49,2.94,2.85,6.86-0.07,9.94c-6.23,6.56-12.34,13.41-19.44,18.92\r C251.26,292.95,231.11,299.19,208.63,299.23z"}),a.a.createElement("path",{d:"M125.31,175.16c-0.04-12.78,10.18-23.19,22.88-23.3c12.89-0.11,23.44,10.19,23.62,23.04\r c0.17,12.75-10.35,23.42-23.18,23.48C135.7,198.44,125.35,188.13,125.31,175.16z"}),a.a.createElement("path",{d:"M295.73,175.25c-0.04,12.91-10.49,23.23-23.42,23.13c-12.66-0.1-23.05-10.55-23.08-23.22\r c-0.03-12.8,10.5-23.31,23.35-23.31C285.48,151.86,295.77,162.26,295.73,175.25z"})))},ke=function(e){var t=e.history,n=e.mapKey,c=e.markers,o=e.markersFound,i=(e.places,Object(r.useState)()),l=Object(u.a)(i,2),s=l[0],f=l[1];return Object(r.useEffect)((function(){var e,t=Date.now();!function n(){var r=Date.now()-t;try{document.getElementById("smiler").style.opacity=Math.sin(r),e=requestAnimationFrame(n)}catch(a){cancelAnimationFrame(e)}}()}),[c]),Object(r.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,n=t.latitude,r=t.longitude;f({lat:n,lng:r})}))}),[]),0===c.length?a.a.createElement("div",null,a.a.createElement(ve,{id:"smiler",style:{fill:"red"}})):(console.log(o),a.a.createElement(oe,null,a.a.createElement(de.a,{defaultCenter:s,defaultZoom:15,bootstrapURLKeys:{key:n},options:{styles:ge},onChildClick:function(e){t.push("/map/pop/".concat(e))}},c.map((function(e,t){return a.a.createElement(be,{key:e.hash+t,id:e.hash,found:o.includes("".concat(e.id)),lat:e.lat,lng:e.lng})})))))};function Ee(){var e=Object(G.a)(["\n  background: black;\n  color: white;\n  width: 100px;\n  height: 47px;\n  border: 5px solid white;\n  font-family: monospace;\n  font-weight: bolder;\n  opacity: 67%;\n"]);return Ee=function(){return e},e}function Oe(){var e=Object(G.a)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 10;\n"]);return Oe=function(){return e},e}var je=U.a.div(Oe()),we=U.a.button(Ee()),xe=function(e){var t=e.logout;return a.a.createElement(je,{onClick:t},a.a.createElement(we,null,"Logout"))},Te=Object(l.b)((function(e){var t=e.map,n=t.mapKey,r=t.markers,a=t.markersFound,c=t.places;return{connected:e.socket.connected,mapKey:n,markers:r,markersFound:a,places:c}}),(function(e){return{connectToSocket:function(){return e(function(){var e=Object(m.a)(f.a.mark((function e(t,n){var r,a,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n(),a=r.device.hash,e.next=3,N(a);case 3:(c=e.sent).on("error",(function(e){return t({type:C,error:e})})),c.on("found",(function(e){return t({type:"FOUND",name:e})})),c.on("markers",(function(e){0===e.length&&t({type:C,error:"BAD_TOKEN"}),t({type:"MAP_INIT",markers:e})})),t({type:"CONNECTED",socket:c});case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},getMarkers:function(t){return e(function(e){return function(){var t=Object(m.a)(f.a.mark((function t(n){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"GET_MARKERS",hunt:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},logout:function(){return e(M())},listenToMarkerFound:function(){return e(R("marker_found"))},listenToWin:function(){return e(R("win"))},dispatch:e}}))((function(e){var t=e.connected,n=e.connectToSocket,c=e.getMarkers,o=e.history,i=e.hunt,u=e.logout,l=e.listenToMarkerFound,s=e.listenToWin,f=e.mapKey,m=e.markers,p=e.markersFound,d=e.places;return Object(r.useEffect)((function(){t||n()}),[n]),Object(r.useEffect)((function(){t&&(c(i),l(),s())}),[t,c]),a.a.createElement("div",null,a.a.createElement(L,{hunt:i}),a.a.createElement(xe,{logout:u}),a.a.createElement(ke,{history:o,mapKey:f,markers:m,markersFound:p,places:d}))})),Se={position:"fixed",left:0,top:0,bottom:0,right:0,backgroundColor:"rgba(0,0,0,.4)",color:"#FFF",fontSize:"40px"},Ce=function(e){var t=e.children,n=e.onClick;return Object(c.createPortal)(a.a.createElement("div",{style:Se,onClick:n},t),document.getElementById("modal_root"))};function Fe(){var e=Object(G.a)(["\n  margin: auto;\n  background: ",";\n  width: 60%;\n  display: block;\n  padding: 1rem;\n  max-height: ",";\n  overflow: hidden;\n  transition: max-height 1s, background 1s;\n"]);return Fe=function(){return e},e}var Ae=U.a.div(Fe(),(function(e){return e.background}),(function(e){return"".concat(e.maxHeight,"px")})),_e=function(e){var t=e.history,n=e.match,c=Object(r.useState)(0),o=Object(u.a)(c,2),i=o[0],l=o[1],s=Object(r.useState)("red"),f=Object(u.a)(s,2),m=f[0],p=f[1];return Object(r.useEffect)((function(){l(1e3)}),[]),a.a.createElement(Ce,{onClick:function(){p("white"),l(0),setTimeout((function(){return t.goBack()}),1e3)}},a.a.createElement(Ae,{background:m,maxHeight:i},n.params.marker))},ze=Object(l.b)((function(e){return{}}),(function(e){return{}}))((function(e){var t=e.history,n=e.match,r=n.params.hunt;return console.log("".concat(n.url)),a.a.createElement("div",null,a.a.createElement(i.a,{path:"/map/pop/:marker",render:function(e){var n=e.match;return a.a.createElement(_e,{history:t,match:n})}}),a.a.createElement(Te,{history:t,hunt:r}))}));function Ie(){var e=Object(G.a)(["\n  color: red;\n  font-size: 54px;\n  text-align: center;\n  font-family: Arial;\n  text-shadow: 4px 3px black;\n"]);return Ie=function(){return e},e}var Me=U.a.div(Ie()),Ne=function(e){var t=e.fill,n=void 0===t?"white":t,c=e.message,o=Object(r.useState)(1),i=Object(u.a)(o,2),l=i[0],s=i[1];return Object(r.useEffect)((function(){var e,t=Date.now();return function n(){e=requestAnimationFrame(n);var r=Date.now()-t;s(.5*(1.5+Math.sin(.003*r)))}(),function(){return cancelAnimationFrame(e)}}),[]),a.a.createElement("div",null,a.a.createElement(J,{opacity:l,fill:n}),a.a.createElement(Me,null,c))};var De=Object(l.b)((function(e){return e.device}),(function(e){return{getToken:function(){return e(I())},registerDevice:function(t){return e(z(t))}}}))((function(e){var t=e.getToken,n=e.hash,c=e.registerDevice,o=e.status,i=e.token,l=Object(r.useState)(""),s=Object(u.a)(l,2),f=s[0],m=s[1],p=Object(r.useRef)(),d=function(){""!==p.current&&(!function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(p.current)?m("This email is invalid..."):c(p.current))};if(Object(r.useEffect)((function(){window.addEventListener("keydown",(function(e){13===e.keyCode&&d()}))}),[]),console.log(n),!n)return a.a.createElement(Ne,null);if("device_not_registered"===o){return a.a.createElement(ne,null,a.a.createElement(ve,{style:{width:"35%",margin:"0 auto"}}),a.a.createElement("div",null,"hmm I don't recognize this device..."),a.a.createElement("div",null,"please sync it to your email"),a.a.createElement("div",{style:{color:"#f36060",display:f?"block":"none",borderBottom:"none",margin:"7% auto -8%",textAlign:"center"}},f),a.a.createElement(re,{onChange:function(e){return p.current=e.target.value},name:"email",placeholder:"email..."}),a.a.createElement(ae,{onClick:d},"Sync"))}return i?void 0:a.a.createElement(ne,null,a.a.createElement(ve,{style:{width:"35%",margin:"0 auto",fill:"#3ef3ff"}}),a.a.createElement("div",{style:{border:"2px solid black"}},a.a.createElement("div",null,"oh boy! welcome back :)"),a.a.createElement("div",null,"you are looking quite nice today"),a.a.createElement("div",null,"press connect below to sync")),a.a.createElement(ae,{onClick:t},"Connect"))})),Ke=n(27);function Re(){var e=Object(G.a)(["\n  position: absolute;\n  top: 0;\n  right: 0px;\n  background: black;\n  color: white;\n  z-index: 10;\n  width: 120px;\n  border: 5px white solid;\n  padding: 0.5rem;\n  opacity: 67%;\n\n  input {\n    width: 90%;\n    margin: 4px;\n    padding: 2px;\n  }\n"]);return Re=function(){return e},e}var Pe=U.a.div(Re()),Le=function(e){var t=e.mapKey,n=e.series,c=Object(r.useState)(),o=Object(u.a)(c,2),i=o[0],l=o[1],s=Object(r.useState)([]),f=Object(u.a)(s,2),m=f[0],p=f[1],d=Object(r.useState)({name:"",hash:"",details:"",type:""}),h=Object(u.a)(d,2),y=h[0],g=h[1];Object(r.useEffect)((function(){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,n=t.latitude,r=t.longitude;l({lat:n,lng:r})}))}),[]);var v=function(e){return g(Object(b.a)({},y,Object(Ke.a)({},e.target.name,e.target.value)))};return a.a.createElement(oe,null,i?a.a.createElement(r.Fragment,null,a.a.createElement(Pe,null,Object.keys(y).map((function(e){return a.a.createElement("input",{key:e,placeholder:e,name:e,onChange:v})})),a.a.createElement(ce,{onClick:function(){var e=Object(b.a)({},y,{series:n,lat:m.lat,lng:m.lng});T(e)}},"submit")),a.a.createElement(de.a,{defaultCenter:i,defaultZoom:17,bootstrapURLKeys:{key:t},options:{styles:ge},onClick:function(e){var t={key:"frog",id:"frog",found:!1,lat:e.lat,lng:e.lng};p(t)},onChildClick:function(e,t){console.log(e)}},a.a.createElement(be,{key:m.hash,id:m.hash,found:m.found,lat:m.lat,lng:m.lng}))):a.a.createElement(ve,{id:"smiler",style:{fill:"red"}}))};function Ge(){var e=Object(G.a)(["\n  margin: 2rem;\n  width: 200px;\n  height: 47px;\n  font-size: 18px;\n"]);return Ge=function(){return e},e}function Be(){var e=Object(G.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n  margin-top: 5rem;\n  font-size: 5rem;\n\n  input {\n    text-align: center;\n    height: 2rem;\n    width: 17rem;\n    margin: 1rem auto;\n    display: block;\n  }\n  input:last-child {\n    margin-bottom: 1rem;\n  }\n"]);return Be=function(){return e},e}var Ue=U.a.div(Be()),We=U.a.select(Ge()),qe=function(e){var t=e.setScene,n=e.setSelectedSeries,c=Object(r.useState)({name:"",cat:"",description:""}),o=Object(u.a)(c,2),i=o[0],l=o[1],s=Object(r.useState)(!1),p=Object(u.a)(s,2),d=p[0],h=p[1],y=Object(r.useRef)({name:"",cat:"",description:""}),g=Object(r.useState)(!1),v=Object(u.a)(g,2),k=v[0],E=v[1],O=Object(r.useState)([]),w=Object(u.a)(O,2),T=w[0],S=w[1],C=Object(r.useState)(),F=Object(u.a)(C,2),A=F[0],_=F[1],z=function(){var e=Object(m.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,S(t);try{_(t[0].id)}catch(n){console.log(n)}case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){!0!==k&&(E(!0),z())}),[k]),Object(r.useEffect)((function(){y.current=i}),[i]),Object(r.useEffect)((function(){window.addEventListener("keydown",(function(e){13===e.keyCode&&M()}))}),[]);var I=function(e){return l(Object(b.a)({},i,Object(Ke.a)({},e.target.name,e.target.value)))},M=function(){var e=Object(m.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object.keys(y.current),n=0;case 2:if(!(n<t.length)){e.next=8;break}if(""!==y.current[t[n]]){e.next=5;break}return e.abrupt("return");case 5:n++,e.next=2;break;case 8:return e.next=10,x(y.current);case 10:E(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement(Ue,null,a.a.createElement("div",null,"Series"),a.a.createElement("div",{style:{fontSize:"2rem",color:"red"},onClick:function(){return h(!d)}},"switch"),d&&a.a.createElement("div",null,a.a.createElement("form",null,a.a.createElement("input",{onChange:I,name:"name",placeholder:"name"}),a.a.createElement("input",{onChange:I,name:"cat",placeholder:"cat"}),a.a.createElement("input",{onChange:I,name:"description",placeholder:"description"})),a.a.createElement(ae,{style:{margin:"auto",display:"block"},onClick:M},"SEND")),a.a.createElement(We,{value:A,onChange:function(e){return _(e.target.value)}},T.map((function(e){return a.a.createElement("option",{key:e.name,name:e.name,value:e.id},e.name)}))),a.a.createElement(ae,{style:{margin:"auto",display:"block"},onClick:function(){t("MAP"),n(A)}},"Select"))},Ve=n(155);function He(){var e=Object(G.a)(["\n  margin: 2rem;\n  width: 200px;\n  height: 47px;\n  font-size: 18px;\n"]);return He=function(){return e},e}function Je(){var e=Object(G.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: center;\n  margin-top: 5rem;\n  font-size: 5rem;\n\n  input {\n    text-align: center;\n    height: 2rem;\n    width: 17rem;\n    margin: 1rem auto;\n    display: block;\n  }\n  input:last-child {\n    margin-bottom: 1rem;\n  }\n"]);return Je=function(){return e},e}var Ye=U.a.div(Je()),Ze=U.a.select(He()),Qe=function(e){Object(Ve.a)(e);var t=Object(r.useState)({email:""}),n=Object(u.a)(t,2),c=n[0],o=n[1],i=Object(r.useState)(!1),l=Object(u.a)(i,2),s=l[0],p=l[1],d=Object(r.useRef)({email:""}),h=Object(r.useState)([]),y=Object(u.a)(h,2),g=y[0],v=y[1],k=Object(r.useState)(),E=Object(u.a)(k,2),O=E[0],x=E[1],T=function(){var e=Object(m.a)(f.a.mark((function e(){var t;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j();case 2:t=e.sent,v(t);try{x(t[0].id)}catch(n){console.log(n)}case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){T()}),[]),Object(r.useEffect)((function(){d.current=c}),[c]);var S=function(){var e=Object(m.a)(f.a.mark((function e(){var t,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=Object.keys(d.current),n=0;case 2:if(!(n<t.length)){e.next=8;break}if(""!==d.current[t[n]]){e.next=5;break}return e.abrupt("return");case 5:n++,e.next=2;break;case 8:return e.next=10,w({email:d.current.email,seriesId:O});case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return a.a.createElement(Ye,null,a.a.createElement("div",{style:{fontSize:"2rem"}},"Create Hunt"),a.a.createElement("div",{style:{fontSize:"2rem",color:"red"},onClick:function(){return p(!s)}},"switch"),s&&a.a.createElement("div",null,a.a.createElement("form",null,a.a.createElement("input",{onChange:function(e){return o(Object(b.a)({},c,Object(Ke.a)({},e.target.name,e.target.value)))},name:"email",placeholder:"email"})),a.a.createElement(ae,{style:{margin:"auto",display:"block"},onClick:S},"SEND")),a.a.createElement(Ze,{value:O,onChange:function(e){return x(e.target.value)}},g.map((function(e){return a.a.createElement("option",{key:e.name,name:e.name,value:e.id},e.name)}))))},Xe=Object(l.b)((function(e){return{mapKey:e.map.mapKey}}),(function(e){return{logout:function(){return e(M())},dispatch:e}}))((function(e){var t=e.logout,n=e.mapKey,c=Object(r.useState)("series"),o=Object(u.a)(c,2),i=o[0],l=o[1],s=Object(r.useState)(),f=Object(u.a)(s,2),m=f[0],p=f[1];return a.a.createElement("div",null,m,a.a.createElement(xe,{logout:t}),"series"===i&&a.a.createElement("div",null,a.a.createElement(Qe,null),a.a.createElement(qe,{setScene:l,setSelectedSeries:p})),"MAP"===i&&a.a.createElement(Le,{mapKey:n,series:m}))}));var $e=Object(l.b)((function(e){var t=e.device,n=t.error,r=t.hash,a=t.status,c=t.token,o=e.ui;return{error:n,hash:r,loading:o.loading,status:a,token:c,welcome:o.welcome}}),(function(e){return{getToken:function(){return e(I())},registerDevice:function(){return e(z())}}}))((function(e){var t=e.hash,n=e.status,r=e.token,c=e.loading;return e.welcome?a.a.createElement(Ne,{fill:"yellow",message:"welcome!"}):c?a.a.createElement(Ne,{message:"loading ..."}):"device_not_registered"===n&&!t||!r?a.a.createElement(De,{hash:t,token:r,status:n}):a.a.createElement(a.a.Fragment,null,a.a.createElement(i.c,null,a.a.createElement(i.a,{path:"/status",component:L}),a.a.createElement(i.a,{path:"/code/:code",component:me}),a.a.createElement(i.a,{path:"/creator",component:Xe}),a.a.createElement(i.a,{path:"/map/:hunt",component:ze}),a.a.createElement(i.a,{path:"/",render:function(){return a.a.createElement("div",null,"nope")}})))})),et=n(33),tt=n(156),nt={hash:0,token:0,error:"",response:"",status:""},rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DEVICE_INIT":var n=t.hash;return Object(b.a)({},e,{hash:n});case S:var r=t.token;return Object(b.a)({},e,{token:r});case"LOGOUT":return Object(b.a)({},e,{token:0});case C:var a=t.error;return Object(b.a)({},e,{error:a,status:a});case F:var c=t.response;return Object(b.a)({},e,{response:c,status:c});default:return e}},at={places:{ppark:{lat:40.66257,lng:-73.968564}},mapKey:"",markers:[],markersFound:[]},ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MAP_INIT":var n=t.markers;return Object(b.a)({},e,{markers:n});case"MAP_KEY":var r=t.mapKey;return Object(b.a)({},e,{mapKey:r});case"MARKER_FOUND":var a=t.markersFound;return console.log(a),Object(b.a)({},e,{markersFound:a});default:return e}},ot=n(157),it={socket:null,connected:!1,status:"disconnected",listeners:[]},ut=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTING":return Object(b.a)({},e,{status:"connecting..."});case"CONNECTED":var n=t.socket;return Object(b.a)({},e,{status:"connected",connected:!0,socket:n});case"GET_MARKERS":var r=t.hunt;return e.socket.emit("get_markers",r),e;case"LISTEN_TO":var a=t.topic;return Object(b.a)({},e,{listeners:[].concat(Object(ot.a)(e.listeners),[a])});case"SOCKET_MESSAGE":var c=t.message;return Object(b.a)({},e,{message:c});default:return e}},lt={welcome:!1,loading:!1},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"WELCOME":return Object(b.a)({},e,{welcome:!0});case"LOADING":return Object(b.a)({},e,{loading:!0});case"READY":return Object(b.a)({},e,{loading:!1,welcome:!1});default:return e}},ft=Object(et.c)({device:rt,map:ct,socket:ut,ui:st}),mt=Object(et.d)(ft,Object(et.a)(tt.a,(function(e){var t=e.getState,n=e.dispatch;return function(e){return function(r){if(console.log(r),console.log(t()),r.type===C)switch(r.error){case"BAD_TOKEN":localStorage.removeItem("token");break;case"DEVICE_NOT_FOUND":n(A())}e(r)}}}))),pt=n(87),dt=localStorage.getItem("token");dt||mt.dispatch({type:"WELCOME"}),mt.dispatch(A()),mt.dispatch({type:S,token:dt});var ht=pt.AES.decrypt("U2FsdGVkX19z1wEquUJx8VDGTOQMRWcm1cRr0CmBxs1xAVPQP/TK1vjms9HfXfgFxbw5pLmMQbPHfprAkWxDsg==","ilovefroggy").toString(pt.enc.Utf8);mt.dispatch({type:"MAP_KEY",mapKey:ht}),o.a.render(a.a.createElement(l.a,{store:mt},a.a.createElement(B.a,{basename:"/"},a.a.createElement($e,null))),document.getElementById("root"))},60:function(e){e.exports=JSON.parse('[{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit","elementType":"geometry.fill","stylers":[{"color":"#000000"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}]')}},[[159,1,2]]]);
//# sourceMappingURL=main.5411379e.chunk.js.map