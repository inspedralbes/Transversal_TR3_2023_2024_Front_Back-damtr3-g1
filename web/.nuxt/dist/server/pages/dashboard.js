exports.ids = [10,1,2,3,4,5,6];
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
    formData.append('image', imageFile);
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
async function editSkinimg(imageFile, oldImageName) {
  try {
    let formData = new FormData();
    formData.append('image', imageFile);
    formData.append('oldImageName', oldImageName);
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

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(116);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(4).default("398bddcc", content, true)

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".container{margin-left:auto;margin-right:auto;padding:12px;width:100%}@media(min-width:960px){.container{max-width:900px}}@media(min-width:1264px){.container{max-width:1185px}}@media(min-width:1904px){.container{max-width:1785px}}.container--fluid{max-width:100%}.row{display:flex;flex:1 1 auto;flex-wrap:wrap;margin:-12px}.row+.row{margin-top:12px}.row+.row--dense{margin-top:4px}.row--dense{margin:-4px}.row--dense>.col,.row--dense>[class*=col-]{padding:4px}.row.no-gutters{margin:0}.row.no-gutters>.col,.row.no-gutters>[class*=col-]{padding:0}.col,.col-1,.col-10,.col-11,.col-12,.col-2,.col-3,.col-4,.col-5,.col-6,.col-7,.col-8,.col-9,.col-auto,.col-lg,.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-lg-auto,.col-md,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-md-auto,.col-sm,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-sm-auto,.col-xl,.col-xl-1,.col-xl-10,.col-xl-11,.col-xl-12,.col-xl-2,.col-xl-3,.col-xl-4,.col-xl-5,.col-xl-6,.col-xl-7,.col-xl-8,.col-xl-9,.col-xl-auto{padding:12px;width:100%}.col{flex-basis:0;flex-grow:1;max-width:100%}.col-auto{flex:0 0 auto;max-width:100%;width:auto}.col-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-3{flex:0 0 25%;max-width:25%}.col-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-6{flex:0 0 50%;max-width:50%}.col-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-9{flex:0 0 75%;max-width:75%}.col-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-3{margin-left:25%}.v-application--is-rtl .offset-3{margin-right:25%}.v-application--is-ltr .offset-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-6{margin-left:50%}.v-application--is-rtl .offset-6{margin-right:50%}.v-application--is-ltr .offset-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-9{margin-left:75%}.v-application--is-rtl .offset-9{margin-right:75%}.v-application--is-ltr .offset-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-11{margin-right:91.6666666667%}@media(min-width:600px){.col-sm{flex-basis:0;flex-grow:1;max-width:100%}.col-sm-auto{flex:0 0 auto;max-width:100%;width:auto}.col-sm-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-sm-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-sm-3{flex:0 0 25%;max-width:25%}.col-sm-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-sm-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-sm-6{flex:0 0 50%;max-width:50%}.col-sm-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-sm-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-sm-9{flex:0 0 75%;max-width:75%}.col-sm-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-sm-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-sm-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-sm-0{margin-left:0}.v-application--is-rtl .offset-sm-0{margin-right:0}.v-application--is-ltr .offset-sm-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-sm-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-sm-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-sm-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-sm-3{margin-left:25%}.v-application--is-rtl .offset-sm-3{margin-right:25%}.v-application--is-ltr .offset-sm-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-sm-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-sm-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-sm-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-sm-6{margin-left:50%}.v-application--is-rtl .offset-sm-6{margin-right:50%}.v-application--is-ltr .offset-sm-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-sm-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-sm-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-sm-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-sm-9{margin-left:75%}.v-application--is-rtl .offset-sm-9{margin-right:75%}.v-application--is-ltr .offset-sm-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-sm-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-sm-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-sm-11{margin-right:91.6666666667%}}@media(min-width:960px){.col-md{flex-basis:0;flex-grow:1;max-width:100%}.col-md-auto{flex:0 0 auto;max-width:100%;width:auto}.col-md-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-md-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-md-3{flex:0 0 25%;max-width:25%}.col-md-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-md-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-md-6{flex:0 0 50%;max-width:50%}.col-md-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-md-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-md-9{flex:0 0 75%;max-width:75%}.col-md-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-md-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-md-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-md-0{margin-left:0}.v-application--is-rtl .offset-md-0{margin-right:0}.v-application--is-ltr .offset-md-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-md-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-md-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-md-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-md-3{margin-left:25%}.v-application--is-rtl .offset-md-3{margin-right:25%}.v-application--is-ltr .offset-md-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-md-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-md-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-md-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-md-6{margin-left:50%}.v-application--is-rtl .offset-md-6{margin-right:50%}.v-application--is-ltr .offset-md-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-md-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-md-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-md-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-md-9{margin-left:75%}.v-application--is-rtl .offset-md-9{margin-right:75%}.v-application--is-ltr .offset-md-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-md-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-md-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-md-11{margin-right:91.6666666667%}}@media(min-width:1264px){.col-lg{flex-basis:0;flex-grow:1;max-width:100%}.col-lg-auto{flex:0 0 auto;max-width:100%;width:auto}.col-lg-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-lg-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-lg-3{flex:0 0 25%;max-width:25%}.col-lg-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-lg-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-lg-6{flex:0 0 50%;max-width:50%}.col-lg-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-lg-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-lg-9{flex:0 0 75%;max-width:75%}.col-lg-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-lg-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-lg-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-lg-0{margin-left:0}.v-application--is-rtl .offset-lg-0{margin-right:0}.v-application--is-ltr .offset-lg-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-lg-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-lg-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-lg-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-lg-3{margin-left:25%}.v-application--is-rtl .offset-lg-3{margin-right:25%}.v-application--is-ltr .offset-lg-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-lg-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-lg-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-lg-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-lg-6{margin-left:50%}.v-application--is-rtl .offset-lg-6{margin-right:50%}.v-application--is-ltr .offset-lg-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-lg-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-lg-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-lg-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-lg-9{margin-left:75%}.v-application--is-rtl .offset-lg-9{margin-right:75%}.v-application--is-ltr .offset-lg-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-lg-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-lg-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-lg-11{margin-right:91.6666666667%}}@media(min-width:1904px){.col-xl{flex-basis:0;flex-grow:1;max-width:100%}.col-xl-auto{flex:0 0 auto;max-width:100%;width:auto}.col-xl-1{flex:0 0 8.3333333333%;max-width:8.3333333333%}.col-xl-2{flex:0 0 16.6666666667%;max-width:16.6666666667%}.col-xl-3{flex:0 0 25%;max-width:25%}.col-xl-4{flex:0 0 33.3333333333%;max-width:33.3333333333%}.col-xl-5{flex:0 0 41.6666666667%;max-width:41.6666666667%}.col-xl-6{flex:0 0 50%;max-width:50%}.col-xl-7{flex:0 0 58.3333333333%;max-width:58.3333333333%}.col-xl-8{flex:0 0 66.6666666667%;max-width:66.6666666667%}.col-xl-9{flex:0 0 75%;max-width:75%}.col-xl-10{flex:0 0 83.3333333333%;max-width:83.3333333333%}.col-xl-11{flex:0 0 91.6666666667%;max-width:91.6666666667%}.col-xl-12{flex:0 0 100%;max-width:100%}.v-application--is-ltr .offset-xl-0{margin-left:0}.v-application--is-rtl .offset-xl-0{margin-right:0}.v-application--is-ltr .offset-xl-1{margin-left:8.3333333333%}.v-application--is-rtl .offset-xl-1{margin-right:8.3333333333%}.v-application--is-ltr .offset-xl-2{margin-left:16.6666666667%}.v-application--is-rtl .offset-xl-2{margin-right:16.6666666667%}.v-application--is-ltr .offset-xl-3{margin-left:25%}.v-application--is-rtl .offset-xl-3{margin-right:25%}.v-application--is-ltr .offset-xl-4{margin-left:33.3333333333%}.v-application--is-rtl .offset-xl-4{margin-right:33.3333333333%}.v-application--is-ltr .offset-xl-5{margin-left:41.6666666667%}.v-application--is-rtl .offset-xl-5{margin-right:41.6666666667%}.v-application--is-ltr .offset-xl-6{margin-left:50%}.v-application--is-rtl .offset-xl-6{margin-right:50%}.v-application--is-ltr .offset-xl-7{margin-left:58.3333333333%}.v-application--is-rtl .offset-xl-7{margin-right:58.3333333333%}.v-application--is-ltr .offset-xl-8{margin-left:66.6666666667%}.v-application--is-rtl .offset-xl-8{margin-right:66.6666666667%}.v-application--is-ltr .offset-xl-9{margin-left:75%}.v-application--is-rtl .offset-xl-9{margin-right:75%}.v-application--is-ltr .offset-xl-10{margin-left:83.3333333333%}.v-application--is-rtl .offset-xl-10{margin-right:83.3333333333%}.v-application--is-ltr .offset-xl-11{margin-left:91.6666666667%}.v-application--is-rtl .offset-xl-11{margin-right:91.6666666667%}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GraphHoras.vue?vue&type=template&id=00788dcf
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "p-2 border border-gray-500 mt-4 text-center"
  }, [_vm._ssrNode("<label class=\"block mb-2 font-bold\">Horas Medias Jugadas por Usuario</label> "), _c('client-only', [_c('BarChart', {
    attrs: {
      "data": _vm.chartData
    }
  })], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/GraphHoras.vue?vue&type=template&id=00788dcf

// EXTERNAL MODULE: ./services/communicationsManager.js
var communicationsManager = __webpack_require__(110);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GraphHoras.vue?vue&type=script&lang=js

/* harmony default export */ var GraphHorasvue_type_script_lang_js = ({
  data() {
    return {
      clientes: [],
      estadisticas: [],
      penilaianData: {},
      totalHorasJugadas: 0,
      mediaHorasJugadas: 0
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
        labels: ['Media de Horas Jugadas'],
        datasets: [{
          label: 'Horas',
          data: [this.mediaHorasJugadas],
          backgroundColor: 'rgba(20, 255, 0, 0.3)',
          borderColor: 'rgba(100, 255, 0, 1)',
          borderWidth: 2
        }]
      };
    }
  },
  methods: {
    // HACER SELECT CLIENTES LABS (CLIENTES)
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
          this.totalHorasJugadas += cliente.horas_jugadas;
        }
        this.calcularMedia(); // Calcula la media después de haber sumado todas las horas jugadas
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    },
    // CALCULAMOS LA MEDIA DE HORAS
    calcularMedia() {
      const numUsuarios = this.clientes.length;
      if (numUsuarios > 0) {
        this.mediaHorasJugadas = this.totalHorasJugadas / numUsuarios;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/GraphHoras.vue?vue&type=script&lang=js
 /* harmony default export */ var components_GraphHorasvue_type_script_lang_js = (GraphHorasvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./components/GraphHoras.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_GraphHorasvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "ccee6a6c"
  
)

/* harmony default export */ var GraphHoras = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GraphKda.vue?vue&type=template&id=04a06b39
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "p-2 border border-gray-500 mt-4 text-center"
  }, [_vm._ssrNode("<label class=\"block mb-2 font-bold\">Media del KDA de todos los Usuarios</label> "), _c('client-only', [_c('BarChart', {
    attrs: {
      "data": _vm.chartData
    }
  })], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/GraphKda.vue?vue&type=template&id=04a06b39

// EXTERNAL MODULE: ./services/communicationsManager.js
var communicationsManager = __webpack_require__(110);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GraphKda.vue?vue&type=script&lang=js

/* harmony default export */ var GraphKdavue_type_script_lang_js = ({
  data() {
    return {
      clientes: [],
      estadisticas: [],
      penilaianData: {},
      totalKda: 0,
      mediaKda: 0
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
        labels: ['Media del KDA'],
        datasets: [{
          label: 'KDA',
          data: [this.mediaKda],
          backgroundColor: 'rgba(0, 0, 255, 0.3)',
          borderColor: 'rgba(0, 0, 255, 1)',
          borderWidth: 2
        }]
      };
    }
  },
  methods: {
    // OBTENEMOS LOS DATOS DE LOS USUARIOS Y SUS ESTADÍSTICAS
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
          this.totalKda += cliente.kda; // Sumamos el KDA de cada usuario
        }
        this.calcularMediaKda(); // Calculamos la media del KDA
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    },
    // CALCULAMOS LA MEDIA DEL KDA
    calcularMediaKda() {
      const numUsuarios = this.clientes.length;
      if (numUsuarios > 0) {
        this.mediaKda = this.totalKda / numUsuarios;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/GraphKda.vue?vue&type=script&lang=js
 /* harmony default export */ var components_GraphKdavue_type_script_lang_js = (GraphKdavue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./components/GraphKda.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_GraphKdavue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "72053af5"
  
)

/* harmony default export */ var GraphKda = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GraphPartidas.vue?vue&type=template&id=56e0ecee
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "p-2 border border-gray-500 mt-4 text-center"
  }, [_vm._ssrNode("<label class=\"block mb-2 font-bold\">Media de Partidas Jugadas por Usuario</label> "), _c('client-only', [_c('BarChart', {
    attrs: {
      "data": _vm.chartData
    }
  })], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/GraphPartidas.vue?vue&type=template&id=56e0ecee

// EXTERNAL MODULE: ./services/communicationsManager.js
var communicationsManager = __webpack_require__(110);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GraphPartidas.vue?vue&type=script&lang=js

/* harmony default export */ var GraphPartidasvue_type_script_lang_js = ({
  data() {
    return {
      clientes: [],
      estadisticas: [],
      penilaianData: {},
      totalPartidasJugadas: 0,
      mediaPartidasJugadas: 0
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
        labels: ['Media de Partidas Jugadas'],
        datasets: [{
          label: 'Partidas Jugadas',
          data: [this.mediaPartidasJugadas],
          backgroundColor: 'rgba(128, 0, 128, 0.3)',
          // Cambiar el color a lila
          borderColor: 'rgba(128, 0, 128, 1)',
          // Color del borde
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
          this.totalPartidasJugadas += cliente.partidasJugadas;
        }
        this.calcularMediaPartidasJugadas();
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    },
    calcularMediaPartidasJugadas() {
      const numUsuarios = this.clientes.length;
      if (numUsuarios > 0) {
        this.mediaPartidasJugadas = this.totalPartidasJugadas / numUsuarios;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/GraphPartidas.vue?vue&type=script&lang=js
 /* harmony default export */ var components_GraphPartidasvue_type_script_lang_js = (GraphPartidasvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./components/GraphPartidas.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_GraphPartidasvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0581fe83"
  
)

/* harmony default export */ var GraphPartidas = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GraphKills.vue?vue&type=template&id=150fe0fc
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "p-2 border border-gray-500 mt-4 text-center"
  }, [_vm._ssrNode("<label class=\"block mb-2 font-bold\">Media de Kills por Usuario</label> "), _c('client-only', [_c('BarChart', {
    attrs: {
      "data": _vm.chartData
    }
  })], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/GraphKills.vue?vue&type=template&id=150fe0fc

// EXTERNAL MODULE: ./services/communicationsManager.js
var communicationsManager = __webpack_require__(110);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GraphKills.vue?vue&type=script&lang=js

/* harmony default export */ var GraphKillsvue_type_script_lang_js = ({
  data() {
    return {
      clientes: [],
      estadisticas: [],
      penilaianData: {},
      totalKills: 0,
      mediaKills: 0
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
        labels: ['Media de Kills'],
        datasets: [{
          label: 'Kills',
          data: [this.mediaKills],
          backgroundColor: 'rgba(128, 0, 0, 0.6)',
          borderColor: 'rgba(128, 0, 0, 1)',
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
          this.totalKills += cliente.kills; // Sumar los kills
        }
        this.calcularMediaKills(); // Calcular la media de kills
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    },
    calcularMediaKills() {
      const numUsuarios = this.clientes.length;
      if (numUsuarios > 0) {
        this.mediaKills = this.totalKills / numUsuarios;
      }
    }
  }
});
// CONCATENATED MODULE: ./components/GraphKills.vue?vue&type=script&lang=js
 /* harmony default export */ var components_GraphKillsvue_type_script_lang_js = (GraphKillsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./components/GraphKills.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_GraphKillsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "8722143c"
  
)

/* harmony default export */ var GraphKills = __webpack_exports__["default"] = (component.exports);

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
  "5b26d6ca"
  
)

/* harmony default export */ var GraphMediaMontoGastado = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GraphMontoGastado.vue?vue&type=template&id=508b7dc4
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "p-2 border border-gray-500 mt-4 text-center"
  }, [_vm._ssrNode("<label class=\"block mb-2 font-bold\">Monto Total Gastado por Todos los Usuarios</label> "), _c('client-only', [_c('BarChart', {
    attrs: {
      "data": _vm.chartData
    }
  })], 1)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/GraphMontoGastado.vue?vue&type=template&id=508b7dc4

// EXTERNAL MODULE: ./services/communicationsManager.js
var communicationsManager = __webpack_require__(110);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/GraphMontoGastado.vue?vue&type=script&lang=js

/* harmony default export */ var GraphMontoGastadovue_type_script_lang_js = ({
  data() {
    return {
      clientes: [],
      estadisticas: [],
      penilaianData: {},
      totalMontoGastado: 0
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
        labels: ['Monto Total Gastado'],
        datasets: [{
          label: 'Monto Gastado',
          data: [this.totalMontoGastado],
          backgroundColor: 'rgba(64, 224, 208, 0.6)',
          // Turquesa
          borderColor: 'rgba(64, 224, 208, 1)',
          // Color del borde
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
          this.totalMontoGastado += estadisticas[0].monto_gastado; // Sumar el monto gastado
        }
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/GraphMontoGastado.vue?vue&type=script&lang=js
 /* harmony default export */ var components_GraphMontoGastadovue_type_script_lang_js = (GraphMontoGastadovue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./components/GraphMontoGastado.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_GraphMontoGastadovue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "61ee588d"
  
)

/* harmony default export */ var GraphMontoGastado = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(96);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(97);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(98);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(99);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(111);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(25);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1);
















 // no xs

const breakpoints = ['sm', 'md', 'lg', 'xl'];
const ALIGNMENT = ['start', 'end', 'center'];
function makeProps(prefix, def) {
  return breakpoints.reduce((props, val) => {
    props[prefix + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_16__[/* upperFirst */ "w"])(val)] = def();
    return props;
  }, {});
}
const alignValidator = str => [...ALIGNMENT, 'baseline', 'stretch'].includes(str);
const alignProps = makeProps('align', () => ({
  type: String,
  default: null,
  validator: alignValidator
}));
const justifyValidator = str => [...ALIGNMENT, 'space-between', 'space-around'].includes(str);
const justifyProps = makeProps('justify', () => ({
  type: String,
  default: null,
  validator: justifyValidator
}));
const alignContentValidator = str => [...ALIGNMENT, 'space-between', 'space-around', 'stretch'].includes(str);
const alignContentProps = makeProps('alignContent', () => ({
  type: String,
  default: null,
  validator: alignContentValidator
}));
const propMap = {
  align: Object.keys(alignProps),
  justify: Object.keys(justifyProps),
  alignContent: Object.keys(alignContentProps)
};
const classMap = {
  align: 'align',
  justify: 'justify',
  alignContent: 'align-content'
};
function breakpointClass(type, prop, val) {
  let className = classMap[type];
  if (val == null) {
    return undefined;
  }
  if (prop) {
    // alignSm -> Sm
    const breakpoint = prop.replace(type, '');
    className += `-${breakpoint}`;
  } // .align-items-sm-center

  className += `-${val}`;
  return className.toLowerCase();
}
const cache = new Map();
/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_14___default.a.extend({
  name: 'v-row',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    dense: Boolean,
    noGutters: Boolean,
    align: {
      type: String,
      default: null,
      validator: alignValidator
    },
    ...alignProps,
    justify: {
      type: String,
      default: null,
      validator: justifyValidator
    },
    ...justifyProps,
    alignContent: {
      type: String,
      default: null,
      validator: alignContentValidator
    },
    ...alignContentProps
  },
  render(h, {
    props,
    data,
    children
  }) {
    // Super-fast memoization based on props, 5x faster than JSON.stringify
    let cacheKey = '';
    for (const prop in props) {
      cacheKey += String(props[prop]);
    }
    let classList = cache.get(cacheKey);
    if (!classList) {
      classList = []; // Loop through `align`, `justify`, `alignContent` breakpoint props

      let type;
      for (type in propMap) {
        propMap[type].forEach(prop => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }
      classList.push({
        'no-gutters': props.noGutters,
        'row--dense': props.dense,
        [`align-${props.align}`]: props.align,
        [`justify-${props.justify}`]: props.justify,
        [`align-content-${props.alignContent}`]: props.alignContent
      });
      cache.set(cacheKey, classList);
    }
    return h(props.tag, Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(data, {
      staticClass: 'row',
      class: classList
    }), children);
  }
}));

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(90);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(92);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(96);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(97);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(98);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(99);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(111);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(25);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1);
















 // no xs

const breakpoints = ['sm', 'md', 'lg', 'xl'];
const breakpointProps = (() => {
  return breakpoints.reduce((props, val) => {
    props[val] = {
      type: [Boolean, String, Number],
      default: false
    };
    return props;
  }, {});
})();
const offsetProps = (() => {
  return breakpoints.reduce((props, val) => {
    props['offset' + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_16__[/* upperFirst */ "w"])(val)] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();
const orderProps = (() => {
  return breakpoints.reduce((props, val) => {
    props['order' + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_16__[/* upperFirst */ "w"])(val)] = {
      type: [String, Number],
      default: null
    };
    return props;
  }, {});
})();
const propMap = {
  col: Object.keys(breakpointProps),
  offset: Object.keys(offsetProps),
  order: Object.keys(orderProps)
};
function breakpointClass(type, prop, val) {
  let className = type;
  if (val == null || val === false) {
    return undefined;
  }
  if (prop) {
    const breakpoint = prop.replace(type, '');
    className += `-${breakpoint}`;
  } // Handling the boolean style prop when accepting [Boolean, String, Number]
  // means Vue will not convert <v-col sm></v-col> to sm: true for us.
  // Since the default is false, an empty string indicates the prop's presence.

  if (type === 'col' && (val === '' || val === true)) {
    // .col-md
    return className.toLowerCase();
  } // .order-md-6

  className += `-${val}`;
  return className.toLowerCase();
}
const cache = new Map();
/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_14___default.a.extend({
  name: 'v-col',
  functional: true,
  props: {
    cols: {
      type: [Boolean, String, Number],
      default: false
    },
    ...breakpointProps,
    offset: {
      type: [String, Number],
      default: null
    },
    ...offsetProps,
    order: {
      type: [String, Number],
      default: null
    },
    ...orderProps,
    alignSelf: {
      type: String,
      default: null,
      validator: str => ['auto', 'start', 'end', 'center', 'baseline', 'stretch'].includes(str)
    },
    tag: {
      type: String,
      default: 'div'
    }
  },
  render(h, {
    props,
    data,
    children,
    parent
  }) {
    // Super-fast memoization based on props, 5x faster than JSON.stringify
    let cacheKey = '';
    for (const prop in props) {
      cacheKey += String(props[prop]);
    }
    let classList = cache.get(cacheKey);
    if (!classList) {
      classList = []; // Loop through `col`, `offset`, `order` breakpoint props

      let type;
      for (type in propMap) {
        propMap[type].forEach(prop => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }
      const hasColClasses = classList.some(className => className.startsWith('col-'));
      classList.push({
        // Default to .col if no other col-{bp}-* classes generated nor `cols` specified.
        col: !hasColClasses || !props.cols,
        [`col-${props.cols}`]: props.cols,
        [`offset-${props.offset}`]: props.offset,
        [`order-${props.order}`]: props.order,
        [`align-self-${props.alignSelf}`]: props.alignSelf
      });
      cache.set(cacheKey, classList);
    }
    return h(props.tag, Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"])(data, {
      class: classList
    }), children);
  }
}));

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(185);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("4fbd5d9a", content, true, context)
};

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_5811e260_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_5811e260_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_5811e260_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_5811e260_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dashboard_vue_vue_type_style_index_0_id_5811e260_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "img[data-v-5811e260]{max-width:90%}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VApp/VApp.js
var VApp = __webpack_require__(106);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VCol.js
var VCol = __webpack_require__(164);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(163);

// CONCATENATED MODULE: ./node_modules/vuetify-loader/lib/loader.js??ref--4!./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--7!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard.vue?vue&type=template&id=5811e260&scoped=true




var dashboardvue_type_template_id_5811e260_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c(VApp["a" /* default */], [_c('div', [_c(VRow["a" /* default */], [_c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('GraphHoras', {
    attrs: {
      "penilaian": _vm.penilaianData
    }
  }), _vm._v(" "), _c('GraphPartidas', {
    staticStyle: {
      "margin-top": "20px"
    },
    attrs: {
      "penilaian": _vm.penilaianData
    }
  }), _vm._v(" "), _c('GraphMediaMontoGastado', {
    attrs: {
      "penilaian": _vm.penilaianData
    }
  }), _vm._v(" "), _c('GraphMontoGastado', {
    attrs: {
      "penilaian": _vm.penilaianData
    }
  })], 1), _vm._v(" "), _c(VCol["a" /* default */], {
    attrs: {
      "cols": "6"
    }
  }, [_c('GraphKda', {
    attrs: {
      "penilaian": _vm.penilaianData
    }
  }), _vm._v(" "), _c('GraphKills', {
    attrs: {
      "penilaian": _vm.penilaianData
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_c('button', {
    attrs: {
      "disabled": _vm.ejecutandoScript
    },
    on: {
      "click": _vm.ejecutarScript
    }
  }, [_vm._v("Ejecutar Script Python (Usuarios)")]), _vm._v(" "), _vm.imagenUrl ? _c('img', {
    attrs: {
      "src": _vm.imagenUrl,
      "alt": "Gráfico de Usuarios Registrados"
    }
  }) : _vm._e(), _vm._v(" "), !_vm.imagenUrl && _vm.scriptEjecutado ? _c('p', [_vm._v("Esperando la generación del gráfico...")]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-top": "15px"
    }
  }, [_c('button', {
    attrs: {
      "disabled": _vm.ejecutandoScriptBeneficios
    },
    on: {
      "click": _vm.ejecutarScriptBeneficios
    }
  }, [_vm._v("Ejecutar Script Python (Beneficios)")]), _vm._v(" "), _vm.imagenUrlBeneficios ? _c('img', {
    attrs: {
      "src": _vm.imagenUrlBeneficios,
      "alt": "Gráfico de Beneficios"
    }
  }) : _vm._e(), _vm._v(" "), !_vm.imagenUrlBeneficios && _vm.scriptEjecutadoBeneficios ? _c('p', [_vm._v("Esperando la generación del gráfico...")]) : _vm._e()])], 1)], 1)], 1)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/dashboard.vue?vue&type=template&id=5811e260&scoped=true

// EXTERNAL MODULE: ./components/GraphHoras.vue + 4 modules
var GraphHoras = __webpack_require__(157);

// EXTERNAL MODULE: ./components/GraphKda.vue + 4 modules
var GraphKda = __webpack_require__(158);

// EXTERNAL MODULE: ./components/GraphPartidas.vue + 4 modules
var GraphPartidas = __webpack_require__(159);

// EXTERNAL MODULE: ./components/GraphKills.vue + 4 modules
var GraphKills = __webpack_require__(160);

// EXTERNAL MODULE: ./components/GraphMediaMontoGastado.vue + 4 modules
var GraphMediaMontoGastado = __webpack_require__(161);

// EXTERNAL MODULE: ./components/GraphMontoGastado.vue + 4 modules
var GraphMontoGastado = __webpack_require__(162);

// EXTERNAL MODULE: ./services/communicationsManager.js
var communicationsManager = __webpack_require__(110);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/dashboard.vue?vue&type=script&lang=js








/* harmony default export */ var dashboardvue_type_script_lang_js = ({
  layout: 'DashboardLayout',
  middleware: 'auth',
  data() {
    return {
      penilaianData: {},
      imagenUrl: null,
      imagenUrlBeneficios: null,
      ejecutandoScript: false,
      scriptEjecutado: false,
      ejecutandoScriptBeneficios: null,
      scriptEjecutadoBeneficios: null
    };
  },
  components: {
    GraphHoras: GraphHoras["default"],
    GraphKda: GraphKda["default"],
    GraphPartidas: GraphPartidas["default"],
    GraphKills: GraphKills["default"],
    GraphMediaMontoGastado: GraphMediaMontoGastado["default"],
    GraphMontoGastado: GraphMontoGastado["default"]
  },
  created() {
    this.selectFoto();
    this.selectFotoBeneficios();
  },
  methods: {
    // HACER GRAFICO USUARIOS
    async ejecutarScript() {
      try {
        // Deshabilita el botón mientras se está ejecutando el script
        this.ejecutandoScript = true;

        // Realiza la solicitud para obtener la URL de la imagen
        const imageURL = await Object(communicationsManager["u" /* getImgGraph */])();

        // Asigna la URL de la imagen a la variable imagenUrl
        this.imagenUrl = imageURL;

        // Indica que el script se ha ejecutado correctamente
        this.scriptEjecutado = true;
      } catch (error) {
        console.error("Error loading news:", error);
      } finally {
        // Habilita el botón después de que se complete la ejecución del script
        this.ejecutandoScript = false;
      }
    },
    // HACER GRAFICO BENEFICIOS
    async ejecutarScriptBeneficios() {
      try {
        // Deshabilita el botón mientras se está ejecutando el script
        this.ejecutandoScriptBeneficios = true;

        // Realiza la solicitud para obtener la URL de la imagen
        const imageURL = await Object(communicationsManager["v" /* getImgGraphBeneficios */])();

        // Asigna la URL de la imagen a la variable imagenUrl
        this.imagenUrlBeneficios = imageURL;

        // Indica que el script se ha ejecutado correctamente
        this.scriptEjecutadoBeneficios = true;
      } catch (error) {
        console.error("Error loading news:", error);
      } finally {
        // Habilita el botón después de que se complete la ejecución del script
        this.ejecutandoScriptBeneficios = false;
      }
    },
    // SELECT GRAFICO USUARIOS
    async selectFoto() {
      try {
        // Realiza la solicitud para obtener la URL de la imagen
        const imageURL = await Object(communicationsManager["u" /* getImgGraph */])();

        // Asigna la URL de la imagen a la variable imagenUrl
        this.imagenUrl = imageURL;
      } catch (error) {
        console.error("Error loading news:", error);
      }
    },
    // SELECT GRAFICO BENEFICIOS
    async selectFotoBeneficios() {
      try {
        // Realiza la solicitud para obtener la URL de la imagen
        const imageURL = await Object(communicationsManager["v" /* getImgGraphBeneficios */])();

        // Asigna la URL de la imagen a la variable imagenUrl
        this.imagenUrlBeneficios = imageURL;
      } catch (error) {
        console.error("Error loading news:", error);
      }
    }
  }
});
// CONCATENATED MODULE: ./pages/dashboard.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_dashboardvue_type_script_lang_js = (dashboardvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(6);

// CONCATENATED MODULE: ./pages/dashboard.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(184)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_dashboardvue_type_script_lang_js,
  dashboardvue_type_template_id_5811e260_scoped_true_render,
  staticRenderFns,
  false,
  injectStyles,
  "5811e260",
  "f200505e"
  
)

/* harmony default export */ var dashboard = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {GraphHoras: __webpack_require__(157).default,GraphPartidas: __webpack_require__(159).default,GraphMediaMontoGastado: __webpack_require__(161).default,GraphMontoGastado: __webpack_require__(162).default,GraphKda: __webpack_require__(158).default,GraphKills: __webpack_require__(160).default})


/***/ })

};;
//# sourceMappingURL=dashboard.js.map