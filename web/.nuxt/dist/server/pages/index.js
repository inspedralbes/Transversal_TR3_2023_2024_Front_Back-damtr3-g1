exports.ids = [6];
exports.modules = {

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createBroadcastNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createPersonaje; });
/* unused harmony export habilidad */
/* unused harmony export arma */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return crearSkin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return deleteMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return deletePersonaje; });
/* unused harmony export deleteHabilidad */
/* unused harmony export deleteArma */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return deleteSkin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return deleteBroadcastNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return updateMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return updatePersonaje; });
/* unused harmony export updateHabilidad */
/* unused harmony export updateArma */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return updateSkin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return updateBroadcastNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return getMapa; });
/* unused harmony export getPersonaje */
/* unused harmony export getHabilidad */
/* unused harmony export getArma */
/* unused harmony export getSkin */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getAssets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getBroadcastNews; });
/* unused harmony export uploadMapimg */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return uploadSkinimg; });
/* unused harmony export editMapimg */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return editSkinimg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return getUsuarios; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getEstadisticas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return updateCliente; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return detenerOdoo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return arrancarOdoo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return getOdooStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return getServerStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return syncOdoo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return syncOdooClient; });
async function login(user, pwd) {
  const response = await fetch(`http://r6pixel.duckdns.org:3169/loginWeb`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "user": user,
      "pwd": pwd
    })
  });
  const resultat = await response.json();
  return resultat.auth;
}
async function createMap(map) {
  const response = await fetch(`http://r6pixel.duckdns.org:3169/mapa`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(map)
  });
  const resultat = await response.text();
  const boolValue = resultat === "true";
  return boolValue;
}
async function createBroadcastNews(news) {
  const response = await fetch(`http://r6pixel.duckdns.org:3169/createBroadcastNews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(news)
  });
  const resultat = await response.text();
  const boolValue = resultat === "true";
  return boolValue;
}
async function createPersonaje(personaje) {
  const response = await fetch(`http://r6pixel.duckdns.org:3169/personaje`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(personaje)
  });
  const resultat = await response.text();
  const boolValue = resultat === "true";
  return boolValue;
}
async function habilidad(habilidad) {
  const response = await fetch(`http://r6pixel.duckdns.org:3169/habilidad`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(habilidad)
  });
  const resultat = await response.text();
  const boolValue = resultat === "true";
  return boolValue;
}
async function arma(arma) {
  const response = await fetch(`http://r6pixel.duckdns.org:3169/arma`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(arma)
  });
  const resultat = await response.text();
  const boolValue = resultat === "true";
  return boolValue;
}
async function crearSkin(skin) {
  const response = await fetch(`http://r6pixel.duckdns.org:3169/skin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(skin)
  });
  const resultat = await response.text();
  const boolValue = resultat === "true";
  return boolValue;
}
async function deleteMap(id) {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3169/deletemapa/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al borrar el mapa');
  }
}
async function deletePersonaje(id) {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3169/deletepersonaje/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al borrar el personaje');
  }
}
async function deleteHabilidad(id) {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3169/deletehabilidad/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al borrar la habilidad');
  }
}
async function deleteArma(id) {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3169/deletearma/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al borrar la arma');
  }
}
async function deleteSkin(id) {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3169/deleteskin/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al borrar la skin');
  }
}
async function deleteBroadcastNews(id) {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3169/deleteBroadcastNews/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al borrar la noticia');
  }
}
async function updateMap(id, map) {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3169/updatemapa/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(map)
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al actualizar el mapa');
  }
}
async function updatePersonaje(id, personaje) {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3169/updatepersonaje/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(personaje)
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al actualizar el personaje');
  }
}
async function updateHabilidad(id, habilidad) {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3169/updatehabilidad/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(habilidad)
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al actualizar la habilidad');
  }
}
async function updateArma(id, arma) {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3169/updatearma/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(arma)
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al actualizar la arma');
  }
}
async function updateSkin(id, skin) {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3169/updateskin/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(skin)
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al actualizar la skin');
  }
}
async function updateBroadcastNews(id, news) {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3169/updateBroadcastNews/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(news)
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al actualizar las noticias');
  }
}
async function getMapa() {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3169/getMapa`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener el mapa');
  }
}
async function getPersonaje() {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3169/getPersonaje`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener el personaje');
  }
}
async function getHabilidad() {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3169/getHabilidad`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener la habilidad');
  }
}
async function getArma() {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3169/getArma`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener la arma');
  }
}
async function getSkin() {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3169/getSkin`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener la skin');
  }
}
async function getAssets() {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3169/getAssets`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener los assets');
  }
}
async function getBroadcastNews() {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3169/getBroadcastNews`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener Broadcast News');
  }
}
async function uploadMapimg(imageFile) {
  try {
    let formData = new FormData();
    formData.append('image', imageFile);
    const response = await fetch(`http://r6pixel.duckdns.org:3169/uploadMap`, {
      method: 'POST',
      body: formData
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al subir la imagen al mapa');
  }
}
async function uploadSkinimg(imageFile) {
  try {
    let formData = new FormData();
    formData.append('image', imageFile);
    const response = await fetch(`http://r6pixel.duckdns.org:3169/uploadSkin`, {
      method: 'POST',
      body: formData
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al subir la imagen de la skin');
  }
}
async function editMapimg(imageFile, oldImageName) {
  try {
    let formData = new FormData();
    formData.append('image', imageFile);
    formData.append('oldImageName', oldImageName);
    const response = await fetch(`http://r6pixel.duckdns.org:3169/editMap`, {
      method: 'POST',
      body: formData
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al subir la nueva imagen o eliminar la antigua');
  }
}
async function editSkinimg(imageFile, oldImageName) {
  try {
    let formData = new FormData();
    formData.append('image', imageFile);
    formData.append('oldImageName', oldImageName);
    const response = await fetch(`http://r6pixel.duckdns.org:3169/editSkin`, {
      method: 'POST',
      body: formData
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al subir la nueva imagen o eliminar la antigua');
  }
}

// SELECT LOS USUARIOS
async function getUsuarios() {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3169/getUsuarios`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener usuarios');
  }
}

// SELECT A LAS ESTADISTICAS DE LOS USUARIOS
async function getEstadisticas(id) {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3169/getEstadisticas/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al actualizar las estadisticas');
  }
}

// UPDATE CLIENTES
async function updateCliente(datosActualizadosCliente) {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3169/updateCliente`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datosActualizadosCliente)
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al actualizar el cliente');
  }
}

// DETENER SERVER ODOO
async function detenerOdoo() {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3169/detenerOdoo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error('Error al detener Odoo');
    }
    alert('Odoo y db detenidas correctamente.');
  } catch (error) {
    console.error('Error al detener Odoo:', error);
    alert('Error al detener Odoo.');
  }
}

// ARRANCAR SERVER ODOO
async function arrancarOdoo() {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3169/arrancarOdoo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error('Error al arrancar Odoo');
    }
    alert('Odoo y db arrancar correctamente.');
  } catch (error) {
    console.error('Error al arrancar Odoo:', error);
    alert('Error al arrancar Odoo.');
  }
}

// VER ESTADO ODOO
async function getOdooStatus() {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3169/checkarOdoo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener el estado de Odoo');
  }
}

// VER ESTADO SERVER
async function getServerStatus() {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3169/checkarServidor`);
    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
}
async function syncOdoo() {
  try {
    const response = await fetch(`http://localhost:3169/syncOdoo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al sincronizar Odoo');
  }
}

// SYNC CLIENTES ODOO
async function syncOdooClient() {
  try {
    const response = await fetch(`http://localhost:3169/syncClientOdoo
        `, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al sincronizar Odoo');
  }
}

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(176);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0c531fc0", content, true, context)
};

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_795b2ada_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(142);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_795b2ada_prod_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_795b2ada_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_795b2ada_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_795b2ada_prod_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".btn,input{border:1px solid #ff00c8}.btn{border-radius:20px;padding:10px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(103);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=795b2ada


var lib_vue_loader_options_pagesvue_type_template_id_795b2ada_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('form', {
    attrs: {
      "action": "POST"
    }
  }, [_vm._ssrNode("<label for=\"username\">Nom d'usuari: </label> <input type=\"text\" id=\"username\"" + _vm._ssrAttr("value", _vm.user) + "> <br> <label for=\"pwd\" style=\"margin-top: 20px;\">Contrasenya: </label> <input type=\"password\" id=\"password\"" + _vm._ssrAttr("value", _vm.pwd) + " style=\"margin-top: 20px;\"> <br><br> "), _c(VBtn["a" /* default */], {
    staticClass: "btn",
    on: {
      "click": function ($event) {
        return _vm.ferLogin(_vm.user, _vm.pwd);
      }
    }
  }, [_vm._v("LOGIN ")])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=795b2ada

// EXTERNAL MODULE: ./services/communicationsManager.js
var communicationsManager = __webpack_require__(105);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js = ({
  layout: 'LoginLayout',
  // Asigna el layout definido en LoginLayout.vue
  name: 'LoginPage',
  data() {
    return {
      user: "",
      pwd: ""
    };
  },
  methods: {
    async ferLogin(usuari, pass) {
      var logged = await Object(communicationsManager["s" /* login */])(usuari, pass);
      if (logged) {
        alert("Usuario " + usuari + " válido");
        // Navegar a la página de inicio (home)
        this.$router.push('/home');
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pagesvue_type_script_lang_js = (lib_vue_loader_options_pagesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(175)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js,
  lib_vue_loader_options_pagesvue_type_template_id_795b2ada_render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4878e18f"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map