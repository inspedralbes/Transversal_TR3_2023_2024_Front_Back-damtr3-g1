(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{483:function(e,t,r){"use strict";r.r(t);var n=r(362),o=r(365),c=r(366),l=r(363),f=r(134),d=(r(16),r(58),r(70),r(59),r(53),r(34),r(7),r(29),r(45),r(48),r(49),r(25)),h=(r(91),r(374));function v(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var y={data:function(){return{clientes:[],estadisticas:[],chart:null}},created:function(){console.log("CREATED"),this.selectClientesLabs()},mounted:function(){console.log("MOUNTED")},updated:function(){console.log("UPDATED")},methods:{selectClientesLabs:function(){var e=this;return Object(d.a)(regeneratorRuntime.mark((function t(){var r,n,o,c,l,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(h.r)();case 3:r=t.sent,n=v(r),t.prev=5,n.s();case 7:if((o=n.n()).done){t.next=16;break}return c=o.value,t.next=11,Object(h.n)(c.idUser);case 11:l=t.sent,f={idUser:c.idUser,ha_gastado_dinero:c.ha_gastado_dinero,activo:c.vetado,horas_jugadas:l[0].Horas_Jugadas,ultima_conexion:new Date(l[0].Ultima_Conexion).toLocaleDateString(),monto_gastado:l[0].monto_gastado,partidasJugadas:l[0].PartidasJugadas,numVictorias:l[0].NumeroVictorias,porcentageVictorias:l[0].PorcentageVictorias,kills:l[0].Kills,asistencias:l[0].Assistencies,muertes:l[0].Muertes,kda:l[0].KDA},e.clientes.push(f);case 14:t.next=7;break;case 16:t.next=21;break;case 18:t.prev=18,t.t0=t.catch(5),n.e(t.t0);case 21:return t.prev=21,n.f(),t.finish(21);case 24:t.next=29;break;case 26:t.prev=26,t.t1=t.catch(0),console.error("Error al obtener usuarios:",t.t1);case 29:case"end":return t.stop()}}),t,null,[[0,26],[5,18,21,24]])})))()},goToProcesos:function(){this.$router.push("/procesos")},goToHome:function(){this.$router.push("/home")}}},_=r(42),component=Object(_.a)(y,(function(){var e=this,t=e._self._c;return t(n.a,[t("div",[t(o.a,{attrs:{app:""}},[t(f.a,{on:{click:e.goToHome}},[e._v("R6 PIXEL")]),e._v(" "),t(l.a),e._v(" "),t(c.a,{attrs:{text:""},on:{click:e.goToProcesos}},[e._v("Procesos")])],1)],1)])}),[],!1,null,"2205e690",null);t.default=component.exports}}]);