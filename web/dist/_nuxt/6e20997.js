(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{374:function(r,e,t){"use strict";t.d(e,"s",(function(){return o})),t.d(e,"d",(function(){return l})),t.d(e,"c",(function(){return d})),t.d(e,"e",(function(){return m})),t.d(e,"b",(function(){return w})),t.d(e,"g",(function(){return v})),t.d(e,"h",(function(){return j})),t.d(e,"i",(function(){return E})),t.d(e,"f",(function(){return T})),t.d(e,"x",(function(){return C})),t.d(e,"y",(function(){return N})),t.d(e,"z",(function(){return z})),t.d(e,"v",(function(){return B})),t.d(e,"o",(function(){return A})),t.d(e,"l",(function(){return G})),t.d(e,"m",(function(){return M})),t.d(e,"A",(function(){return W})),t.d(e,"k",(function(){return K})),t.d(e,"r",(function(){return V})),t.d(e,"n",(function(){return Y})),t.d(e,"w",(function(){return $})),t.d(e,"j",(function(){return rr})),t.d(e,"a",(function(){return nr})),t.d(e,"p",(function(){return or})),t.d(e,"q",(function(){return ur})),t.d(e,"t",(function(){return ir})),t.d(e,"u",(function(){return lr}));var n=t(25);t(91),t(7);function o(r,e){return c.apply(this,arguments)}function c(){return(c=Object(n.a)(regeneratorRuntime.mark((function r(e,t){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("http://r6pixel.duckdns.org:3169/loginWeb",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:e,pwd:t})});case 2:return n=r.sent,r.next=5,n.json();case 5:return o=r.sent,r.abrupt("return",o.auth);case 7:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function l(r){return h.apply(this,arguments)}function h(){return(h=Object(n.a)(regeneratorRuntime.mark((function r(map){var e,t,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("http://r6pixel.duckdns.org:3169/mapa",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(map)});case 2:return e=r.sent,r.next=5,e.text();case 5:return t=r.sent,n="true"===t,r.abrupt("return",n);case 8:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function d(r){return f.apply(this,arguments)}function f(){return(f=Object(n.a)(regeneratorRuntime.mark((function r(e){var t,n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("http://r6pixel.duckdns.org:3169/createBroadcastNews",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 2:return t=r.sent,r.next=5,t.text();case 5:return n=r.sent,o="true"===n,r.abrupt("return",o);case 8:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function m(r){return x.apply(this,arguments)}function x(){return(x=Object(n.a)(regeneratorRuntime.mark((function r(e){var t,n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("http://r6pixel.duckdns.org:3169/personaje",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 2:return t=r.sent,r.next=5,t.text();case 5:return n=r.sent,o="true"===n,r.abrupt("return",o);case 8:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function w(r){return y.apply(this,arguments)}function y(){return(y=Object(n.a)(regeneratorRuntime.mark((function r(e){var t,n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,fetch("http://r6pixel.duckdns.org:3169/skin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 2:return t=r.sent,r.next=5,t.text();case 5:return n=r.sent,o="true"===n,r.abrupt("return",o);case 8:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function v(r){return k.apply(this,arguments)}function k(){return(k=Object(n.a)(regeneratorRuntime.mark((function r(e){var t,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("http://r6pixel.duckdns.org:3169/deletemapa/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 3:return t=r.sent,r.next=6,t.json();case 6:return n=r.sent,r.abrupt("return",n);case 10:throw r.prev=10,r.t0=r.catch(0),console.error(r.t0),new Error("Error al borrar el mapa");case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))).apply(this,arguments)}function j(r){return O.apply(this,arguments)}function O(){return(O=Object(n.a)(regeneratorRuntime.mark((function r(e){var t,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("http://r6pixel.duckdns.org:3169/deletepersonaje/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 3:return t=r.sent,r.next=6,t.json();case 6:return n=r.sent,r.abrupt("return",n);case 10:throw r.prev=10,r.t0=r.catch(0),console.error(r.t0),new Error("Error al borrar el personaje");case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))).apply(this,arguments)}function E(r){return R.apply(this,arguments)}function R(){return(R=Object(n.a)(regeneratorRuntime.mark((function r(e){var t,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("http://r6pixel.duckdns.org:3169/deleteskin/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 3:return t=r.sent,r.next=6,t.json();case 6:return n=r.sent,r.abrupt("return",n);case 10:throw r.prev=10,r.t0=r.catch(0),console.error(r.t0),new Error("Error al borrar la skin");case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))).apply(this,arguments)}function T(r){return S.apply(this,arguments)}function S(){return(S=Object(n.a)(regeneratorRuntime.mark((function r(e){var t,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("http://r6pixel.duckdns.org:3169/deleteBroadcastNews/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 3:return t=r.sent,r.next=6,t.json();case 6:return n=r.sent,r.abrupt("return",n);case 10:throw r.prev=10,r.t0=r.catch(0),console.error(r.t0),new Error("Error al borrar la noticia");case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))).apply(this,arguments)}function C(r,e){return P.apply(this,arguments)}function P(){return(P=Object(n.a)(regeneratorRuntime.mark((function r(e,map){var t,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("http://r6pixel.duckdns.org:3169/updatemapa/".concat(e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(map)});case 3:return t=r.sent,r.next=6,t.json();case 6:return n=r.sent,r.abrupt("return",n);case 10:throw r.prev=10,r.t0=r.catch(0),console.error(r.t0),new Error("Error al actualizar el mapa");case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))).apply(this,arguments)}function N(r,e){return J.apply(this,arguments)}function J(){return(J=Object(n.a)(regeneratorRuntime.mark((function r(e,t){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("http://r6pixel.duckdns.org:3169/updatepersonaje/".concat(e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return n=r.sent,r.next=6,n.json();case 6:return o=r.sent,r.abrupt("return",o);case 10:throw r.prev=10,r.t0=r.catch(0),console.error(r.t0),new Error("Error al actualizar el personaje");case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))).apply(this,arguments)}function z(r,e){return D.apply(this,arguments)}function D(){return(D=Object(n.a)(regeneratorRuntime.mark((function r(e,t){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("http://r6pixel.duckdns.org:3169/updateskin/".concat(e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return n=r.sent,r.next=6,n.json();case 6:return o=r.sent,r.abrupt("return",o);case 10:throw r.prev=10,r.t0=r.catch(0),console.error(r.t0),new Error("Error al actualizar la skin");case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))).apply(this,arguments)}function B(r,e){return L.apply(this,arguments)}function L(){return(L=Object(n.a)(regeneratorRuntime.mark((function r(e,t){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("http://r6pixel.duckdns.org:3169/updateBroadcastNews/".concat(e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return n=r.sent,r.next=6,n.json();case 6:return o=r.sent,r.abrupt("return",o);case 10:throw r.prev=10,r.t0=r.catch(0),console.error(r.t0),new Error("Error al actualizar las noticias");case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))).apply(this,arguments)}function A(){return F.apply(this,arguments)}function F(){return(F=Object(n.a)(regeneratorRuntime.mark((function r(){var e,t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("http://r6pixel.duckdns.org:3169/getMapa");case 3:return e=r.sent,r.next=6,e.json();case 6:return t=r.sent,r.abrupt("return",t);case 10:throw r.prev=10,r.t0=r.catch(0),console.error(r.t0),new Error("Error al obtener el mapa");case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))).apply(this,arguments)}function G(){return I.apply(this,arguments)}function I(){return(I=Object(n.a)(regeneratorRuntime.mark((function r(){var e,t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("http://r6pixel.duckdns.org:3169/getAssets");case 3:return e=r.sent,r.next=6,e.json();case 6:return t=r.sent,r.abrupt("return",t);case 10:throw r.prev=10,r.t0=r.catch(0),console.error(r.t0),new Error("Error al obtener los assets");case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))).apply(this,arguments)}function M(){return U.apply(this,arguments)}function U(){return(U=Object(n.a)(regeneratorRuntime.mark((function r(){var e,t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("http://r6pixel.duckdns.org:3169/getBroadcastNews");case 3:return e=r.sent,r.next=6,e.json();case 6:return t=r.sent,r.abrupt("return",t);case 10:throw r.prev=10,r.t0=r.catch(0),console.error(r.t0),new Error("Error al obtener Broadcast News");case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))).apply(this,arguments)}function W(r){return H.apply(this,arguments)}function H(){return(H=Object(n.a)(regeneratorRuntime.mark((function r(e){var t,n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,(t=new FormData).append("image",e),r.next=5,fetch("http://r6pixel.duckdns.org:3169/uploadSkin",{method:"POST",body:t});case 5:return n=r.sent,r.next=8,n.json();case 8:return o=r.sent,r.abrupt("return",o);case 12:throw r.prev=12,r.t0=r.catch(0),console.error(r.t0),new Error("Error al subir la imagen de la skin");case 16:case"end":return r.stop()}}),r,null,[[0,12]])})))).apply(this,arguments)}function K(r,e){return Q.apply(this,arguments)}function Q(){return(Q=Object(n.a)(regeneratorRuntime.mark((function r(e,t){var n,o,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,(n=new FormData).append("image",e),n.append("oldImageName",t),r.next=6,fetch("http://r6pixel.duckdns.org:3169/editSkin",{method:"POST",body:n});case 6:return o=r.sent,r.next=9,o.json();case 9:return c=r.sent,r.abrupt("return",c);case 13:throw r.prev=13,r.t0=r.catch(0),console.error(r.t0),new Error("Error al subir la nueva imagen o eliminar la antigua");case 17:case"end":return r.stop()}}),r,null,[[0,13]])})))).apply(this,arguments)}function V(){return X.apply(this,arguments)}function X(){return(X=Object(n.a)(regeneratorRuntime.mark((function r(){var e,t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("http://r6pixel.duckdns.org:3169/getUsuarios");case 3:return e=r.sent,r.next=6,e.json();case 6:return t=r.sent,r.abrupt("return",t);case 10:throw r.prev=10,r.t0=r.catch(0),console.error(r.t0),new Error("Error al obtener usuarios");case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))).apply(this,arguments)}function Y(r){return Z.apply(this,arguments)}function Z(){return(Z=Object(n.a)(regeneratorRuntime.mark((function r(e){var t,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("http://r6pixel.duckdns.org:3169/getEstadisticas/".concat(e),{method:"GET",headers:{"Content-Type":"application/json"}});case 3:return t=r.sent,r.next=6,t.json();case 6:return n=r.sent,r.abrupt("return",n);case 10:throw r.prev=10,r.t0=r.catch(0),console.error(r.t0),new Error("Error al actualizar las estadisticas");case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))).apply(this,arguments)}function $(r){return _.apply(this,arguments)}function _(){return(_=Object(n.a)(regeneratorRuntime.mark((function r(e){var t,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("http://r6pixel.duckdns.org:3169/updateCliente",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});case 3:return t=r.sent,r.next=6,t.json();case 6:return n=r.sent,r.abrupt("return",n);case 10:throw r.prev=10,r.t0=r.catch(0),console.error(r.t0),new Error("Error al actualizar el cliente");case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))).apply(this,arguments)}function rr(){return er.apply(this,arguments)}function er(){return(er=Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("http://r6pixel.duckdns.org:3169/detenerOdoo",{method:"POST",headers:{"Content-Type":"application/json"}});case 3:if(r.sent.ok){r.next=6;break}throw new Error("Error al detener Odoo");case 6:alert("Odoo y db detenidas correctamente."),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(0),console.error("Error al detener Odoo:",r.t0),alert("Error al detener Odoo.");case 13:case"end":return r.stop()}}),r,null,[[0,9]])})))).apply(this,arguments)}function nr(){return ar.apply(this,arguments)}function ar(){return(ar=Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("http://r6pixel.duckdns.org:3169/arrancarOdoo",{method:"POST",headers:{"Content-Type":"application/json"}});case 3:if(r.sent.ok){r.next=6;break}throw new Error("Error al arrancar Odoo");case 6:alert("Odoo y db arrancar correctamente."),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(0),console.error("Error al arrancar Odoo:",r.t0),alert("Error al arrancar Odoo.");case 13:case"end":return r.stop()}}),r,null,[[0,9]])})))).apply(this,arguments)}function or(){return cr.apply(this,arguments)}function cr(){return(cr=Object(n.a)(regeneratorRuntime.mark((function r(){var e,t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("http://r6pixel.duckdns.org:3169/checkarOdoo",{method:"POST",headers:{"Content-Type":"application/json"}});case 3:return e=r.sent,r.next=6,e.json();case 6:return t=r.sent,r.abrupt("return",t);case 10:throw r.prev=10,r.t0=r.catch(0),console.error(r.t0),new Error("Error al obtener el estado de Odoo");case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))).apply(this,arguments)}function ur(){return sr.apply(this,arguments)}function sr(){return(sr=Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("http://r6pixel.duckdns.org:3169/checkarServidor");case 3:if(!r.sent.ok){r.next=8;break}return r.abrupt("return",!0);case 8:return r.abrupt("return",!1);case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(0),console.error(r.t0),r.abrupt("return",!1);case 15:case"end":return r.stop()}}),r,null,[[0,11]])})))).apply(this,arguments)}function ir(){return pr.apply(this,arguments)}function pr(){return(pr=Object(n.a)(regeneratorRuntime.mark((function r(){var e,t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("http://localhost:3169/syncOdoo",{method:"POST",headers:{"Content-Type":"application/json"}});case 3:return e=r.sent,r.next=6,e.json();case 6:return t=r.sent,r.abrupt("return",t);case 10:throw r.prev=10,r.t0=r.catch(0),console.error(r.t0),new Error("Error al sincronizar Odoo");case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))).apply(this,arguments)}function lr(){return dr.apply(this,arguments)}function dr(){return(dr=Object(n.a)(regeneratorRuntime.mark((function r(){var e,t;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,fetch("http://localhost:3169/syncClientOdoo\n        ",{method:"POST",headers:{"Content-Type":"application/json"}});case 3:return e=r.sent,r.next=6,e.json();case 6:return t=r.sent,r.abrupt("return",t);case 10:throw r.prev=10,r.t0=r.catch(0),console.error(r.t0),new Error("Error al sincronizar Odoo");case 14:case"end":return r.stop()}}),r,null,[[0,10]])})))).apply(this,arguments)}}}]);