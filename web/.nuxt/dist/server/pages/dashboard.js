exports.ids = [4];
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

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VApp/VApp.js
var VApp = __webpack_require__(99);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VAppBar/VAppBar.js + 3 modules
var VAppBar = __webpack_require__(102);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VBtn/VBtn.js + 2 modules
var VBtn = __webpack_require__(103);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VSpacer.js
var VSpacer = __webpack_require__(100);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VToolbar/index.js
var VToolbar = __webpack_require__(19);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard.vue?vue&type=template&id=2205e690&scoped=true






var dashboardvue_type_template_id_2205e690_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VApp["a" /* default */], [_c('div', [_c(VAppBar["a" /* default */], {
    attrs: {
      "app": ""
    }
  }, [_c(VToolbar["a" /* VToolbarTitle */], {
    on: {
      "click": _vm.goToHome
    }
  }, [_vm._v("R6 PIXEL")]), _vm._v(" "), _c(VSpacer["a" /* default */]), _vm._v(" "), _c(VBtn["a" /* default */], {
    attrs: {
      "text": ""
    },
    on: {
      "click": _vm.goToProcesos
    }
  }, [_vm._v("Procesos")])], 1)], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/dashboard.vue?vue&type=template&id=2205e690&scoped=true

// EXTERNAL MODULE: ./services/communicationsManager.js
var communicationsManager = __webpack_require__(105);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard.vue?vue&type=script&lang=js

/* harmony default export */ var dashboardvue_type_script_lang_js = ({
  data() {
    return {
      clientes: [],
      estadisticas: [],
      chart: null
    };
  },
  created() {
    console.log('CREATED');
    this.selectClientesLabs();
  },
  mounted() {
    console.log('MOUNTED');
  },
  updated() {
    console.log('UPDATED');
  },
  methods: {
    // HACER SELECT CLIENTES LABS (CLIENTES)
    async selectClientesLabs() {
      try {
        // Obtener usuarios utilizando el método getUsuarios
        const usuarios = await Object(communicationsManager["r" /* getUsuarios */])();

        // Iterar sobre cada usuario
        for (const usuario of usuarios) {
          // Obtener las estadísticas del usuario actual
          const estadisticas = await Object(communicationsManager["n" /* getEstadisticas */])(usuario.idUser);

          // Asignar las estadísticas al usuario actual
          const cliente = {
            idUser: usuario.idUser,
            ha_gastado_dinero: usuario.ha_gastado_dinero,
            activo: usuario.vetado,
            horas_jugadas: estadisticas[0].Horas_Jugadas,
            ultima_conexion: new Date(estadisticas[0].Ultima_Conexion).toLocaleDateString(),
            monto_gastado: estadisticas[0].monto_gastado,
            partidasJugadas: estadisticas[0].PartidasJugadas,
            numVictorias: estadisticas[0].NumeroVictorias,
            porcentageVictorias: estadisticas[0].PorcentageVictorias,
            kills: estadisticas[0].Kills,
            asistencias: estadisticas[0].Assistencies,
            muertes: estadisticas[0].Muertes,
            kda: estadisticas[0].KDA
          };

          // Agregar el usuario con sus estadísticas al array de clientes
          this.clientes.push(cliente);
        }
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    },
    goToProcesos() {
      this.$router.push('/procesos');
    },
    goToHome() {
      this.$router.push('/home');
    }
  }
});
// CONCATENATED MODULE: ./pages/dashboard.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_dashboardvue_type_script_lang_js = (dashboardvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(8);

// CONCATENATED MODULE: ./pages/dashboard.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_dashboardvue_type_script_lang_js,
  dashboardvue_type_template_id_2205e690_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "2205e690",
  "f200505e"
  
)

/* harmony default export */ var dashboard = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=dashboard.js.map