(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{532:function(t,e,r){"use strict";r.r(e);r(17),r(58),r(69),r(59),r(54),r(33),r(8),r(30),r(46),r(49),r(50);var n=r(26),o=(r(93),r(513));function c(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var l={data:function(){return{clientes:[],estadisticas:[],penilaianData:{},totalPartidasJugadas:0,mediaPartidasJugadas:0}},created:function(){console.log("CREATED"),this.selectClientesLabs()},props:{penilaian:{type:Object,required:!0}},computed:{chartData:function(){return{labels:["Media de Partidas Jugadas"],datasets:[{label:"Partidas Jugadas",data:[this.mediaPartidasJugadas],backgroundColor:"rgba(128, 0, 128, 0.3)",borderColor:"rgba(128, 0, 128, 1)",borderWidth:2}]}}},methods:{selectClientesLabs:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,d,l,f,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(o.y)();case 3:r=e.sent,n=c(r),e.prev=5,n.s();case 7:if((d=n.n()).done){e.next=17;break}return l=d.value,e.next=11,Object(o.r)(l.idUser);case 11:f=e.sent,h={idUser:l.idUser,ha_gastado_dinero:l.ha_gastado_dinero,activo:l.vetado,horas_jugadas:f[0].Horas_Jugadas,ultima_conexion:new Date(f[0].Ultima_Conexion).toLocaleDateString(),monto_gastado:f[0].monto_gastado,partidasJugadas:f[0].PartidasJugadas,numVictorias:f[0].NumeroVictorias,porcentageVictorias:f[0].PorcentageVictorias,kills:f[0].Kills,asistencias:f[0].Assistencies,muertes:f[0].Muertes,kda:f[0].KDA},t.clientes.push(h),t.totalPartidasJugadas+=h.partidasJugadas;case 15:e.next=7;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(5),n.e(e.t0);case 22:return e.prev=22,n.f(),e.finish(22);case 25:t.calcularMediaPartidasJugadas(),e.next=31;break;case 28:e.prev=28,e.t1=e.catch(0),console.error("Error al obtener usuarios:",e.t1);case 31:case"end":return e.stop()}}),e,null,[[0,28],[5,19,22,25]])})))()},calcularMediaPartidasJugadas:function(){var t=this.clientes.length;t>0&&(this.mediaPartidasJugadas=this.totalPartidasJugadas/t)}}},f=r(35),component=Object(f.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-2 border border-gray-500 mt-4 text-center"},[e("label",{staticClass:"block mb-2 font-bold"},[t._v("Media de Partidas Jugadas por Usuario")]),t._v(" "),e("client-only",[e("BarChart",{attrs:{data:t.chartData}})],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);