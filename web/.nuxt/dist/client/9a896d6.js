(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{405:function(e,t,r){var content=r(465);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(28).default)("0c531fc0",content,!0,{sourceMap:!1})},464:function(e,t,r){"use strict";r(405)},465:function(e,t,r){var n=r(27)((function(i){return i[1]}));n.push([e.i,".btn,input{border:1px solid #ff00c8}.btn{border-radius:20px;padding:10px}",""]),n.locals={},e.exports=n},485:function(e,t,r){"use strict";r.r(t);var n=r(366),o=r(25),c=(r(91),r(374)),l={layout:"LoginLayout",name:"LoginPage",data:function(){return{user:"",pwd:""}},methods:{ferLogin:function(e,t){var r=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(c.s)(e,t);case 2:n.sent?(alert("Usuario "+e+" válido"),r.$router.push("/home")):alert("Usuario o contraseña incorrectos");case 4:case"end":return n.stop()}}),n)})))()}}},d=(r(464),r(42)),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("form",{attrs:{action:"POST"}},[t("label",{attrs:{for:"username"}},[e._v("Nom d'usuari: ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.user,expression:"user"}],attrs:{type:"text",id:"username"},domProps:{value:e.user},on:{input:function(t){t.target.composing||(e.user=t.target.value)}}}),e._v(" "),t("br"),e._v(" "),t("label",{staticStyle:{"margin-top":"20px"},attrs:{for:"pwd"}},[e._v("Contrasenya: ")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.pwd,expression:"pwd"}],staticStyle:{"margin-top":"20px"},attrs:{type:"password",id:"password"},domProps:{value:e.pwd},on:{input:function(t){t.target.composing||(e.pwd=t.target.value)}}}),e._v(" "),t("br"),t("br"),e._v(" "),t(n.a,{staticClass:"btn",on:{click:function(t){return e.ferLogin(e.user,e.pwd)}}},[e._v("LOGIN ")])],1)}),[],!1,null,null,null);t.default=component.exports}}]);