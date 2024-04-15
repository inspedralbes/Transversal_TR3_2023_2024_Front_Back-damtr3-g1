exports.ids = [4];
exports.modules = {

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createBroadcastNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return createPersonaje; });
/* unused harmony export arma */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return crearSkin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return deleteMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return deletePersonaje; });
/* unused harmony export deleteArma */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return deleteSkin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return deleteBroadcastNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return updateMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return updatePersonaje; });
/* unused harmony export updateArma */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return updateSkin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return updateBroadcastNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return getMapa; });
/* unused harmony export getPersonaje */
/* unused harmony export getArma */
/* unused harmony export getSkin */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return getAssets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return getBroadcastNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return uploadMapimg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return uploadSkinimg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return uploadBroadcastImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return editMapimg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return editSkinimg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return editBroadcastimg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return getUsuarios; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return getEstadisticas; });
/* unused harmony export getBeneficios */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return updateCliente; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return detenerOdoo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return arrancarOdoo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return getOdooStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return getGameStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return detenerGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return arrancarGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return syncOdoo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return syncOdooClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return getImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return getImgGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return getImgGraphBeneficios; });
//r6pixel.duckdns.org
async function login(user, pwd) {
  const response = await fetch(`http://r6pixel.duckdns.org:3170/loginWeb`, {
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
  const response = await fetch(`http://r6pixel.duckdns.org:3170/mapa`, {
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
  const response = await fetch(`http://r6pixel.duckdns.org:3170/createBroadcastNews`, {
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
  const response = await fetch(`http://r6pixel.duckdns.org:3170/personaje`, {
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
async function arma(arma) {
  const response = await fetch(`http://r6pixel.duckdns.org:3170/arma`, {
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
  const response = await fetch(`http://r6pixel.duckdns.org:3170/skin`, {
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
    const response = await fetch(`http://r6pixel.duckdns.org:3170/deletemapa/${id}`, {
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
    const response = await fetch(`http://r6pixel.duckdns.org:3170/deletepersonaje/${id}`, {
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
async function deleteArma(id) {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3170/deletearma/${id}`, {
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
    const response = await fetch(`http://r6pixel.duckdns.org:3170/deleteskin/${id}`, {
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
    const response = await fetch(`http://r6pixel.duckdns.org:3170/deleteBroadcastNews/${id}`, {
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
    const response = await fetch(`http://r6pixel.duckdns.org:3170/updatemapa/${id}`, {
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
    const response = await fetch(`http://r6pixel.duckdns.org:3170/updatepersonaje/${id}`, {
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
async function updateArma(id, arma) {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3170/updatearma/${id}`, {
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
    const response = await fetch(`http://r6pixel.duckdns.org:3170/updateskin/${id}`, {
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
    const response = await fetch(`http://r6pixel.duckdns.org:3170/updateBroadcastNews/${id}`, {
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
    const response = await fetch(`http://r6pixel.duckdns.org:3170/getMapa`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener el mapa');
  }
}
async function getPersonaje() {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3170/getPersonaje`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener el personaje');
  }
}
async function getArma() {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3170/getArma`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener la arma');
  }
}
async function getSkin() {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3170/getSkin`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener la skin');
  }
}
async function getAssets() {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3170/getAssets`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener los assets');
  }
}
async function getBroadcastNews() {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3170/getBroadcastNews`);
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
    const response = await fetch(`http://r6pixel.duckdns.org:3170/uploadMap`, {
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
    formData.append('images', imageFile);
    const response = await fetch(`http://r6pixel.duckdns.org:3170/uploadSkin`, {
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
async function uploadBroadcastImg(imageFile) {
  try {
    let formData = new FormData();
    formData.append('image', imageFile);
    const response = await fetch(`http://r6pixel.duckdns.org:3170/uploadBroadcast`, {
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
    const response = await fetch(`http://r6pixel.duckdns.org:3170/editMap`, {
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
async function editSkinimg(imageFiles, id) {
  try {
    let formData = new FormData();
    for (const key in imageFiles) {
      if (imageFiles[key] instanceof File) {
        formData.append('images', imageFiles[key]);
      }
    }
    formData.append('id', id);
    const response = await fetch(`http://r6pixel.duckdns.org:3170/editSkin`, {
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
async function editBroadcastimg(imageFile, oldImageName) {
  try {
    let formData = new FormData();
    formData.append('image', imageFile);
    formData.append('oldImageName', oldImageName);
    const response = await fetch(`http://r6pixel.duckdns.org:3170/editBroadcast`, {
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
    const response = await fetch(`http://r6pixel.duckdns.org:3170/getUsuarios`);
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
    const response = await fetch(`http://r6pixel.duckdns.org:3170/getEstadisticas/${id}`, {
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

// SELECT A LOS BENEFICIOS
async function getBeneficios() {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3170/getCompras`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al actualizar los beneficios');
  }
}

// UPDATE CLIENTES
async function updateCliente(datosActualizadosCliente) {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3170/updateCliente`, {
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
    const response = await fetch(`http://r6pixel.duckdns.org:3170/detenerOdoo`, {
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
    const response = await fetch(`http://r6pixel.duckdns.org:3170/arrancarOdoo`, {
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
    const response = await fetch(`http://r6pixel.duckdns.org:3170/checkarOdoo`, {
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

// VER ESTADO game server
async function getGameStatus() {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3170/checkarGame`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener el estado de game');
  }
}
async function detenerGame() {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3170/detenerGame`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error('Error al detener Game');
    }
    alert('Game detenido correctamente.');
  } catch (error) {
    console.error('Error al detener game:', error);
    alert('Error al detener game.');
  }
}

// ARRANCAR SERVER Game
async function arrancarGame() {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3170/arrancarGame`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error('Error al arrancar game');
    }
    alert('game arrancar correctamente.');
  } catch (error) {
    console.error('Error al arrancar game:', error);
    alert('Error al arrancar game.');
  }
}
async function syncOdoo() {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3170/syncOdoo`, {
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
    const response = await fetch(`http://r6pixel.duckdns.org:3170/syncClientOdoo
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
async function getImg(path) {
  try {
    // console.log("Haciendo solicitud a:", `http://r6pixel.duckdns.org:3170/getImgBroadcast/${path}`);
    const response = await fetch(`http://r6pixel.duckdns.org:3170/getImgBroadcast/${path}`);
    //console.log("Respuesta de la solicitud:", response);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.url;
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener la imagen');
  }
}
async function getImgGraph() {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3170/getImgGraph`);
    //console.log("Respuesta de la solicitud:", response);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.url;
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener la imagen');
  }
}
async function getImgGraphBeneficios() {
  try {
    const response = await fetch(`http://r6pixel.duckdns.org:3170/getImgGraphBenefits`);
    //console.log("Respuesta de la solicitud:", response);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.url;
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener la imagen');
  }
}

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GraphMediaMontoGastado.vue?vue&type=template&id=1c0753fe
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "p-2 border border-gray-500 mt-4 text-center"
  }, [_vm._ssrNode("<label class=\"block mb-2 font-bold\">Media Global del Monto Gastado</label> "), _c('client-only', [_c('BarChart', {
    attrs: {
      "data": _vm.chartData
    }
  })], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/GraphMediaMontoGastado.vue?vue&type=template&id=1c0753fe

// EXTERNAL MODULE: ./services/communicationsManager.js
var communicationsManager = __webpack_require__(110);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GraphMediaMontoGastado.vue?vue&type=script&lang=js

/* harmony default export */ var GraphMediaMontoGastadovue_type_script_lang_js = ({
  data() {
    return {
      clientes: [],
      estadisticas: [],
      penilaianData: {},
      totalMontoGastado: 0,
      mediaMontoGastado: 0
    };
  },
  created() {
    console.log('CREATED');
    this.selectClientesLabs();
  },
  props: {
    penilaian: {
      type: Object,
      required: true
    }
  },
  computed: {
    chartData() {
      return {
        labels: ['Media Global del Monto Gastado'],
        datasets: [{
          label: 'Monto Gastado',
          data: [this.mediaMontoGastado],
          backgroundColor: 'rgba(0, 128, 0, 0.6)',
          borderColor: 'rgba(0, 128, 0, 1)',
          borderWidth: 2
        }]
      };
    }
  },
  methods: {
    async selectClientesLabs() {
      try {
        const usuarios = await Object(communicationsManager["y" /* getUsuarios */])();
        for (const usuario of usuarios) {
          const estadisticas = await Object(communicationsManager["r" /* getEstadisticas */])(usuario.idUser);
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
          this.clientes.push(cliente);
          this.totalMontoGastado += cliente.monto_gastado; // Sumar los montos gastados
        }
        this.calcularMediaMontoGastado(); // Calcular la media del monto gastado
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    },
    calcularMediaMontoGastado() {
      const numUsuarios = this.clientes.length;
      if (numUsuarios > 0) {
        this.mediaMontoGastado = this.totalMontoGastado / numUsuarios;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/GraphMediaMontoGastado.vue?vue&type=script&lang=js
 /* harmony default export */ var components_GraphMediaMontoGastadovue_type_script_lang_js = (GraphMediaMontoGastadovue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./components/GraphMediaMontoGastado.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_GraphMediaMontoGastadovue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7311dd94"
  
)

/* harmony default export */ var GraphMediaMontoGastado = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=graph-media-monto-gastado.js.map