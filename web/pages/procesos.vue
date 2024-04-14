<template>
  <v-app>
    <v-main>
      <!-- PANEL CONTROL -->
      <v-container fluid>
        <!-- SERVIDORES Y PRODUCTOS -->
        <v-row justify="center">
          <!-- Panel de Control Servidores -->
          <v-col cols="12" sm="6">
            <v-card class="mx-auto panel-card" max-width="400">
              <v-card-title class="panel-title">Panel de Control Servidores</v-card-title>
              <v-card-text class="panel-text">
                <v-btn @click="toggleOdoo" block class="panel-btn">
                  {{ odooServerRunning ? "Parar Odoo" : "Arrancar Odoo" }}
                </v-btn>
                <v-btn @click="toggleGame" block class="panel-btn">
                  {{ gameServersRunning ? "Parar servidores del juego" : "Arrancar servidores del juego" }}

                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- PANEL DE CONTROL PRODUCTOS -->
          <v-col cols="12" sm="6">
            <v-card class="mx-auto panel-card" max-width="400">
              <v-card-title class="panel-title">Panel de Control Productos</v-card-title>
              <v-card-text class="panel-text">
                <v-btn @click="sincroProductos" block class="panel-btn">
                  Sincronizar Productos
                </v-btn>
                <v-btn @click="openProductosDialog" block class="panel-btn">
                  Ver Productos
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- PANEL DE CONTROL CLIENTES -->
          <v-col cols="12" sm="6">
            <v-card class="mx-auto panel-card" max-width="400">
              <v-card-title class="panel-title">Panel de Control Clientes</v-card-title>
              <v-card-text class="panel-text">
                <v-btn @click="sincroClientes" block class="panel-btn">
                  Sincronizar Clientes
                </v-btn>
                <v-btn @click="openClientesDialog" block class="panel-btn">
                  Ver Clientes
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- PANEL DE CONTROL MAPAS -->
          <v-col cols="12" sm="6">
            <v-card class="mx-auto panel-card" max-width="400">
              <v-card-title class="panel-title">Panel de Control Mapas</v-card-title>
              <v-card-text class="panel-text">
                <v-btn @click="openMapaDialog" block class="panel-btn">
                  Ver Mapas
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- PANEL DE PRODUCTOS -->
    <v-dialog v-model="productosDialog" max-width="1900" max-height="1900" style="height: auto; width: auto">
      <template v-slot:activator="{ on }"></template>
      <v-card class="dialog-card">
        <v-card-title class="dialog-title">Lista de Productos</v-card-title>
        <v-card-text class="dialog-text">
          <v-row>
            <!-- Columna de Personajes -->
            <v-col cols="12" md="6">
              <v-card>
                <v-card-title class="inner-title">Personajes</v-card-title>
                <v-spacer></v-spacer>
                <!-- Esto empuja el botón a la derecha -->
                <v-btn color="primary" @click="dialogPersonaje = true" class="dialog-btn">Crear Personaje</v-btn>
                <v-row>
                  <v-col v-for="(personaje, index) in productos.personajes" :key="index" cols="12" md="6">
                    <v-card class="inner-card">
                      <v-card-title class="inner-title-2">{{ personaje.nombre }}</v-card-title>
                      <v-card-text class="inner-text">
                        <div>Nivel Desbloqueo: {{ personaje.lvlDesbloqueo }}</div>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="primary" text @click="editarPersonaje(personaje)" class="dialog-btn">Editar</v-btn>
                        <v-btn color="error" text @click="eliminarPersonaje(personaje)"
                          class="dialog-btn">Eliminar</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>

            <!-- Línea Separadora -->
            <v-col cols="12" md="1" class="d-flex justify-center align-center">
              <v-divider vertical></v-divider>
            </v-col>

            <!-- Columna de Skins -->
            <v-col cols="12" md="5">
              <v-card>
                <v-card-title class="inner-title">Skins</v-card-title>
                <v-spacer></v-spacer>
                <!-- Esto empuja el botón a la derecha -->
                <v-btn color="primary" @click="dialogSkin = true" class="dialog-btn">Crear Pack Skin</v-btn>
                <v-row>
                  <v-col v-for="(skin, index) in productos.skins" :key="index" cols="12" md="6">
                    <v-card class="inner-card">
                      <v-card-title class="inner-title-2">{{ skin.nombre }}</v-card-title>
                      <v-card-text class="inner-text">
                        <div>Descripcion: {{ skin.descripcion }}</div>
                        <br />
                        <div>Valor en Monedas: {{ skin.valorMonedas }}</div>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn color="primary" text @click="editarSkin(skin)" class="dialog-btn">Editar</v-btn>
                        <v-btn color="error" text @click="eliminarSkin(skin)" class="dialog-btn">Eliminar</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="closeProductosDialog" class="dialog-btn">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Diálogo de Edición de Productos -->
    <v-dialog v-model="editarPersonajeDialog" max-width="500">
      <v-card class="dialog-card">
        <v-card-title class="dialog-title">Editar Personaje</v-card-title>
        <v-card-text class="dialog-text">
          <!-- Aquí agregar campos de edición para el producto -->
          <v-text-field v-model="personajeEditado.nombre" label="Nombre" class="dialog-text-field"></v-text-field>
          <v-text-field v-model="personajeEditado.lvlDesbloqueo" label="Nivel Desbloqueo"
            class="dialog-text-field"></v-text-field>
          <v-text-field v-model="personajeEditado.descripcion" label="Descripción"
            class="dialog-text-field"></v-text-field>
          <v-row>
            <v-col v-for="skin in productos.skins" :key="skin._id" cols="12" sm="6" md="4">
              <v-checkbox v-model="personajeEditado.packSkins" :label="skin.nombre" :value="skin._id"
                class="dialog-checkbox" :input-value="personajeEditado.packSkins &&
                  personajeEditado.packSkins.includes(skin._id)
                  "></v-checkbox>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="guardarCambiosPersonaje" class="dialog-btn">Guardar Cambios</v-btn>
          <v-btn color="primary" text @click="cancelarEdicionPersonaje" class="dialog-btn">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- EDITAR SKIN -->
    <v-dialog v-model="editarSkinDialog" max-width="500">
      <v-card class="dialog-card">
        <v-card-title class="dialog-title">Editar Skin</v-card-title>
        <v-card-text class="dialog-text">
          <!-- Aquí agregar campos de edición para el producto -->
          <v-text-field v-model="skinEditado.nombre" label="Nombre" class="dialog-text-field"></v-text-field>
          <v-text-field v-model="skinEditado.descripcion" label="Descripción" class="dialog-text-field"></v-text-field>
          <v-file-input v-model="skinEditado.pngSkin.arriba" label="Archivo PNG (Arriba)" accept="image/png"
            class="dialog-text-field" />
          <v-file-input v-model="skinEditado.pngSkin.abajo" label="Archivo PNG (Abajo)" accept="image/png"
            class="dialog-text-field" />
          <v-file-input v-model="skinEditado.pngSkin.izq" label="Archivo PNG (Izquierda)" accept="image/png"
            class="dialog-text-field" />
          <v-file-input v-model="skinEditado.pngSkin.derecha" label="Archivo PNG (Derecha)" accept="image/png"
            class="dialog-text-field" />
          <v-text-field v-model="skinEditado.valorMonedas" label="Precio Monedas"
            class="dialog-text-field"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="guardarCambioSkin" class="dialog-btn">Guardar Cambios</v-btn>
          <v-btn color="primary" text @click="cancelarEdicionSkin" class="dialog-btn">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Dialog para CREAR PERSONAJE  -->
    <v-dialog v-model="dialogPersonaje" persistent max-width="600px">
      <v-card class="dialog-card">
        <v-card-title class="dialog-title">
          <span class="headline">Nuevo Personaje</span>
        </v-card-title>
        <v-card-text class="dialog-text">
          <v-container>
            <v-form ref="formPersonaje" v-model="valid">
              <v-text-field v-model="personajeNuevo.nombre" label="Nombre" required
                class="dialog-text-field"></v-text-field>
              <v-text-field v-model.number="personajeNuevo.lvlDesbloqueo" label="Nivel de Desbloqueo" required
                class="dialog-text-field"></v-text-field>
              <v-text-field v-model="personajeNuevo.descripcion" label="Descripción" required
                class="dialog-text-field"></v-text-field>
              <v-row>
                <v-col v-for="skin in productos.skins" :key="skin._id" cols="12" sm="6" md="4">
                  <v-checkbox v-model="personajeNuevo.packSkins" :label="skin.nombre" :value="skin._id"
                    class="dialog-checkbox"></v-checkbox>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialogPersonaje = false" class="dialog-btn">Cancelar</v-btn>
          <v-btn color="blue darken-1" text @click="crearPersonaje" class="dialog-btn">Guardar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


    <!-- Dialog para crear skin -->
    <v-dialog v-model="dialogSkin" persistent max-width="600px">
      <v-card class="dialog-card">
        <v-card-title class="dialog-title">
          <span class="headline">Nueva Skin</span>
        </v-card-title>
        <v-card-text class="dialog-text">
          <v-container>
            <v-form ref="formSkin" v-model="valid">
              <v-text-field v-model="skinNuevo.nombre" label="Nombre" required class="dialog-text-field"></v-text-field>
              <v-text-field v-model="skinNuevo.descripcion" label="Descripción" required
                class="dialog-text-field"></v-text-field>
              <v-file-input v-model="skinNuevo.pngSkin.arriba" label="Archivo PNG (Arriba)" accept="image/png"
                class="dialog-text-field" />
              <v-file-input v-model="skinNuevo.pngSkin.abajo" label="Archivo PNG (Abajo)" accept="image/png"
                class="dialog-text-field" />
              <v-file-input v-model="skinNuevo.pngSkin.izq" label="Archivo PNG (Izquierda)" accept="image/png"
                class="dialog-text-field" />
              <v-file-input v-model="skinNuevo.pngSkin.derecha" label="Archivo PNG (Derecha)" accept="image/png"
                class="dialog-text-field" />
              <v-text-field v-model.number="skinNuevo.valorMonedas" label="Valor en Monedas" required
                class="dialog-text-field"></v-text-field>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialogSkin = false" class="dialog-btn">Cancelar</v-btn>
          <v-btn color="blue darken-1" text @click="crearSkins" class="dialog-btn">Guardar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- PANEL DE CLIENTES -->
    <v-dialog v-model="clientesDialog" max-width="1900" max-height="1900" style="height: auto; width: auto">
      <template v-slot:activator="{ on }"></template>
      <v-card class="dialog-card">
        <v-card-title class="dialog-title">Lista de Clientes</v-card-title>
        <v-card-text class="dialog-text">
          <v-row>
            <!-- Aquí cargarías los productos en v-cards -->
            <v-col v-for="(cliente, index) in clientes" :key="index" cols="12" md="4">
              <v-card class="inner-card">
                <v-card-title>{{ cliente.nombre_usuario }}</v-card-title>
                <v-card-text style="color: black;">
                  <div>Contacto: {{ cliente.gmail }}</div>
                  <div>Fecha de nacimiento: {{ cliente.fecha_nacimiento }}</div>
                  <div>{{ cliente.horas_jugadas }} horas jugadas</div>
                  <div v-if="cliente.ha_gastado_dinero">
                    Ha gastado {{ cliente.monto_gastado }}€
                  </div>
                  <div v-else>No ha gastado dinero</div>
                  <div>Última conexión: {{ cliente.ultima_conexion }}</div>
                </v-card-text>
                <v-card-actions>
                  <v-btn :color="cliente.activo ? 'error' : 'success'" text @click="toggleClienteActivo(cliente)"
                    class="dialog-btn">
                    {{ cliente.activo ? "Jugador Vetado" : "Jugador Activo" }}
                  </v-btn>
                  <v-btn color="primary" text @click="editarCliente(cliente)" class="dialog-btn">Editar</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="closeClientesDialog" class="dialog-btn">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Diálogo de Edición de Clientes -->
    <v-dialog v-model="editarClienteDialog" max-width="500">
      <v-card class="dialog-card">
        <v-card-title class="dialog-title">Editar Cliente</v-card-title>
        <v-card-text class="dialog-text">
          <v-text-field v-model="clienteEditado.gmail" label="Gmail" class="dialog-text-field"></v-text-field>
          <v-text-field v-model="clienteEditado.fecha_nacimiento" label="Fecha de nacimiento"
            class="dialog-text-field"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="guardarCambiosCliente" class="dialog-btn">Guardar Cambios</v-btn>
          <v-btn color="primary" text @click="cancelarEdicionCliente" class="dialog-btn">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Dialog para mostrar los mapas -->
    <v-dialog v-model="mapaDialog" max-width="800">
      <v-card>
        <v-card-title class="dialog-title">Mapas</v-card-title>
        <v-card-text>
          <!-- Mostrar los mapas aquí -->
          <v-list>
            <v-list-item v-for="(mapa, index) in mapas" :key="index" class="inner-card">
              <v-list-item-content>
                <v-list-item-title>{{ mapa.nombre }}</v-list-item-title>
                <v-list-item-subtitle style="color: black;">{{ mapa.pngMapa }}</v-list-item-subtitle>
                <v-list-item-subtitle style="color: black;">{{ mapa.probabilidadSpawn }}</v-list-item-subtitle>
                <v-list-item-subtitle style="color: black;">{{ mapa.descripcion }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-btn color="blue" @click="openEditarMapaDialog(mapa, index)" class="dialog-btn">
                Editar Mapa
              </v-btn>
              <v-btn style="margin-left: 15px" color="red" @click="eliminarMapa(mapa)" class="dialog-btn">Eliminar
                Mapa</v-btn>
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="openAgregarMapaDialog" class="dialog-btn">
            Añadir Mapa
          </v-btn>
          <v-btn color="red" text @click="mapaDialog = false" class="dialog-btn">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


    <!-- Dialog para agregar Mapa -->
    <v-dialog v-model="agregarMapaDialog" max-width="600">
      <v-card>
        <v-card-title class="dialog-title">Añadir Mapa</v-card-title>
        <v-card-text class="dialog-text">
          <v-text-field v-model="nuevoMapa.nombre" label="Nombre" class="dialog-text-field"></v-text-field>
          <v-file-input v-model="nuevoMapa.pngMapa" label="Archivo PNG" accept="image/png" class="dialog-text-field" />
          <v-text-field v-model.number="nuevoMapa.probabilidadSpawn" label="Probabilidad de Spawn"
            class="dialog-text-field"></v-text-field>
          <v-text-field v-model="nuevoMapa.descripcion" label="Descripción" class="dialog-text-field"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="guardarMapa" class="dialog-btn">Guardar</v-btn>
          <v-btn color="red" text @click="agregarMapaDialog = false" class="dialog-btn">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Dialog para editar mapa -->
    <v-dialog v-model="editarMapaDialog" max-width="600">
      <v-card>
        <v-card-title class="dialog-title">Editar Mapa</v-card-title>
        <v-card-text class="dialog-text">
          <v-text-field v-model="mapaEditado.nombre" label="Nombre" class="dialog-text-field"></v-text-field>
          <v-file-input v-model="mapaEditado.pngMapa" label="Archivo PNG" accept="image/png" class="dialog-text-field" />
          <v-text-field v-model.number="mapaEditado.probabilidadSpawn" label="Probabilidad de Spawn"
            class="dialog-text-field"></v-text-field>
          <v-text-field v-model="mapaEditado.descripcion" label="Descripción" class="dialog-text-field"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="guardarEdicionMapa" class="dialog-btn">Guardar</v-btn>
          <v-btn color="red" text @click="cancelarEdicionMapa" class="dialog-btn">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import {
  getUsuarios,
  getEstadisticas,
  updateCliente,
  getOdooStatus,
  getGameStatus,
  detenerGame,
  arrancarGame,
  arrancarOdoo,
  detenerOdoo,
  getAssets,
  deleteSkin,
  deletePersonaje,
  updatePersonaje,
  updateSkin,
  createPersonaje,
  crearSkin,
  uploadSkinimg,
  editSkinimg,
  getMapa,
  createMap,
  updateMap,
  deleteMap,
  syncOdoo,
  syncOdooClient,
  uploadMapimg,
  editMapimg,
} from "@/services/communicationsManager.js";

export default {
  layout: "ProcesosLayout",
  middleware: 'auth',
  data() {
    return {
      imagenSkinEdit: { arriba: null, abajo: null, izq: null, derecha: null },
      imagenMapaEdit: null,
      dialogPersonaje: false,
      dialogSkin: false,
      valid: true,
      odooServerRunning: false,
      gameServersRunning: false,
      productosDialog: false,
      editarPersonajeDialog: false,
      editarSkinDialog: false,
      editarClienteDialog: false,
      clientesDialog: false,
      productos: [],
      personajeEditado: {
        nombre: "",
        lvlDesbloqueo: 0,
        descripcion: "",
        packSkins: [],
      },
      skinEditado: {
        nombre: "",
        valorMonedas: 0,
        pngSkin: { arriba: null, abajo: null, izq: null, derecha: null },
        descripcion: "",
      },
      personajeNuevo: {
        nombre: "",
        lvlDesbloqueo: 0,
        descripcion: "",
        packSkins: [],
      },
      skinNuevo: {
        nombre: "",
        descripcion: "",
        pngSkin: { arriba: null, abajo: null, izq: null, derecha: null },
        valorMonedas: 0,
      },
      idEditada: null,
      clientes: [],
      clienteEditado: {
        gmail: "",
        fecha_nacimiento: "",
        vetado: null,
      },
      clienteEditandoIndex: null,
      estadisticas: [],
      mapas: [],
      mapaDialog: false,
      agregarMapaDialog: false,
      editarMapaDialog: false,
      nuevoMapa: {
        nombre: "",
        pngMapa: "",
        probabilidadSpawn: 0,
        descripcion: "",
      },
      mapaEditandoIndex: null,
      mapaEditado: {
        mapaEditandoId: null,
        nombre: "",
        pngMapa: "",
        probabilidadSpawn: 0,
        descripcion: "",
      },
    };
  },
  created() {
    console.log("CREATED");
  },

  mounted() {
    console.log("MOUNTED");
    this.selectClientesLabs();
    this.gameEstado();
    this.odooEstado();
    this.getProductos();
    this.selectMapas();
    console.log("productasos", this.productos);
  },

  updated() {
    console.log("UPDATED");
  },
  methods: {
    async getProductos() {
      const assets = await getAssets();
      this.productos = {
        skins: assets.skins,
        personajes: assets.personajes,
      };
    },

    async toggleOdoo() {
      // Lógica para parar/arrancar Odoo
      if (!this.odooServerRunning) {
        await this.startOdoo();
        this.odooServerRunning = true;
      } else {
        await this.stopOdoo();
        this.odooServerRunning = false;
      }
    },

    async toggleGame() {
      // Lógica para parar/arrancar Odoo
      if (!this.gameServersRunning) {
        await this.startGame();
        this.gameServersRunning = true;
      } else {
        await this.stopGame();
        this.gameServersRunning = false;
      }
    },

    // PILLAR ESTADO DEL SERVIDOR DE ODOO

    async odooEstado() {
      const odooStatus = await getOdooStatus();
      if (odooStatus) {
        this.odooServerRunning = odooStatus;
        //console.log(this.odooServerRunning);
      }
    },

    async gameEstado() {
      const gameStatus = await getGameStatus();
      if (gameStatus) {
        this.gameServersRunning = gameStatus;
        //console.log(this.odooServerRunning);
      }
    },

    async startOdoo() {
      await arrancarOdoo();
    },

    async stopOdoo() {
      await detenerOdoo();
    },

    async startGame() {
      await arrancarGame();
    },

    async stopGame() {
      await detenerGame();
    },


    // Lógica para sincronizar productos
    async sincroProductos() {
      await syncOdoo();
      window.alert("Productos sincronizados correctamente");
    },

    // Lógica para sincronizar clientes
    async sincroClientes() {
      await syncOdooClient();
      window.alert("Clientes sincronizados correctamente");
    },

    // HACER SELECT PRODUCTOS MONGO
    async selectProductosMongo() { },

    // HACER SELECT CLIENTES LABS (CLIENTES)(ESTADISTICAS)
    async selectClientesLabs() {
      try {
        // Obtener usuarios utilizando el método getUsuarios
        const usuarios = await getUsuarios();

        // Iterar sobre cada usuario
        for (const usuario of usuarios) {
          // Obtener las estadísticas del usuario actual
          const estadisticas = await getEstadisticas(usuario.idUser);

          // Asignar las estadísticas al usuario actual
          const cliente = {
            idUser: usuario.idUser,
            gmail: usuario.mail,
            fecha_nacimiento: new Date(
              usuario.fechaNacimiento
            ).toLocaleDateString(),
            nombre_usuario: usuario.username,
            ha_gastado_dinero: usuario.ha_gastado_dinero,
            activo: usuario.vetado,
            horas_jugadas: estadisticas[0].Horas_Jugadas,
            ultima_conexion: new Date(
              estadisticas[0].Ultima_Conexion
            ).toLocaleDateString(),
            monto_gastado: estadisticas[0].monto_gastado,
          };

          // Agregar el usuario con sus estadísticas al array de clientes
          this.clientes.push(cliente);
        }
      } catch (error) {
        console.error("Error al obtener usuarios:", error);
      }
    },

    // ABRIR VDIALOG DE PRODUCTOS
    openProductosDialog() {
      this.productosDialog = true;
      this.selectProductosMongo();
    },

    // ABRIR VDIALOG DE CLIENTES
    openClientesDialog() {
      this.clientesDialog = true;
    },

    // CERRAR VDIALOG DE PRODUCTOS
    closeProductosDialog() {
      this.productosDialog = false;
    },

    // CERRAR VDIALOG DE CLIENTES
    closeClientesDialog() {
      this.clientesDialog = false;
    },

    // DISPONIBILIDAD DE PRODUCTOS
    toggleDisponibilidad(producto) {
      producto.disponible = !producto.disponible;
    },

    // ACTIVAR O DESACTIVAR CUENTA
    toggleClienteActivo(cliente) {
      if (confirm("¿Estás seguro de que quieres vetar el usuario?")) {
        // Guardar la opción seleccionada en clienteEditado
        this.clienteEditado = { ...cliente };
        this.clienteEditado.activo = !cliente.activo;

        // Realizar el toggle del estado del cliente
        cliente.activo = !cliente.activo;

        // Actualizar la lista de clientes
        this.updateClienteActivo();
      }
    },

    // EDITAR EL Personaje
    editarPersonaje(producto) {
      // Cargar los datos del producto seleccionado en el diálogo de edición
      this.personajeEditado = { ...producto };
      this.idEditada = producto._id;
      this.editarPersonajeDialog = true;
    },

    // EDITAR SKIN
    editarSkin(producto) {
      this.imagenSkinEditado = {
        arriba: producto.pngSkin.arriba,
        abajo: producto.pngSkin.abajo,
        izq: producto.pngSkin.izq,
        derecha: producto.pngSkin.derecha
      };

      this.skinEditado = { ...producto };
      this.idEditada = producto._id;
      this.editarSkinDialog = true;
      console.log("fotaca", this.imagenSkinEditado);
    },

    // GUARDAR CAMBIOS SKIN
    async guardarCambioSkin() {
      if (
        !this.skinEditado ||
        this.skinEditado.nombre.trim() === "" ||
        this.skinEditado.descripcion.trim() === "" ||
        this.skinEditado.nombre.length > 65 ||
        this.skinEditado.descripcion.length > 200 ||
        isNaN(this.skinEditado.valorMonedas) ||
        this.skinEditado.valorMonedas.toString().length > 10 ||
        !this.skinEditado.pngSkin || // Verificar si this.skinEditado.pngSkin es null o undefined
        (!this.skinEditado.pngSkin.arriba && this.skinEditado.pngSkin.arriba !== null) || // Verificar si this.skinEditado.pngSkin.arriba es null o undefined
        (!this.skinEditado.pngSkin.abajo && this.skinEditado.pngSkin.abajo !== null) || // Verificar si this.skinEditado.pngSkin.abajo es null o undefined
        (!this.skinEditado.pngSkin.izq && this.skinEditado.pngSkin.izq !== null) || // Verificar si this.skinEditado.pngSkin.izq es null o undefined
        (!this.skinEditado.pngSkin.derecha && this.skinEditado.pngSkin.derecha !== null) // Verificar si this.skinEditado.pngSkin.derecha es null o undefined
      ) {
        // Mostrar un mensaje de error
        alert("Por favor, complete todos los campos correctamente.");
        return; // Salir de la función si hay algún error
      }

      // Guardar los nombres de las imágenes antiguas
      const nombresImagenesAntiguas = {
        arriba: this.imagenSkinEditado.arriba,
        abajo: this.imagenSkinEditado.abajo,
        izq: this.imagenSkinEditado.izq,
        derecha: this.imagenSkinEditado.derecha
      };

      console.log("nombresImagenesAntiguas", nombresImagenesAntiguas);
      // Asignar nombres de imágenes antiguas si las nuevas no están definidas
      if (this.imagenSkinEditado !== null && this.imagenSkinEditado !== undefined) {
        if (this.skinEditado.pngSkin.arriba === undefined) {
          this.skinEditado.pngSkin.arriba = nombresImagenesAntiguas.arriba;
        }
        if (this.skinEditado.pngSkin.abajo === undefined) {
          this.skinEditado.pngSkin.abajo = nombresImagenesAntiguas.abajo;
        }
        if (this.skinEditado.pngSkin.izq === undefined) {
          this.skinEditado.pngSkin.izq = nombresImagenesAntiguas.izq;
        }
        if (this.skinEditado.pngSkin.derecha === undefined) {
          this.skinEditado.pngSkin.derecha = nombresImagenesAntiguas.derecha;
        }
      }

      console.log("skinEditado", this.skinEditado);
      // Guardar los cambios realizados en el producto
      if (this.idEditada !== null) {
        this.$set(this.productos, this.idEditada, this.skinEditado);

        let skinEditadoSinId = { ...this.skinEditado };
        skinEditadoSinId.pngSkin = {};

        // Iterar sobre las propiedades del objeto this.skinEditado.pngSkin
        for (const key in this.skinEditado.pngSkin) {
          // Verificar si el valor es de tipo File
          if (this.skinEditado.pngSkin[key] instanceof File) {
            // Asignar el nombre del archivo a la propiedad correspondiente
            skinEditadoSinId.pngSkin[key] = this.skinEditado.pngSkin[key].name;
          } else {
            // Dejar el valor tal cual si no es de tipo File
            skinEditadoSinId.pngSkin[key] = this.skinEditado.pngSkin[key];
          }
        }
        delete skinEditadoSinId._id;
        console.log("skinEditadoSinId", skinEditadoSinId);

        await updateSkin(this.idEditada, skinEditadoSinId);

        // Verificar si las imágenes han cambiado y actualizarlas si es necesario
        if (
          this.imagenSkinEditado && // Verificar si this.imagenSkinEditado está definido y no es null
          (this.skinEditado.pngSkin.arriba !== nombresImagenesAntiguas.arriba ||
            this.skinEditado.pngSkin.abajo !== nombresImagenesAntiguas.abajo ||
            this.skinEditado.pngSkin.izq !== nombresImagenesAntiguas.izq ||
            this.skinEditado.pngSkin.derecha !== nombresImagenesAntiguas.derecha)
        ) {
          await editSkinimg(this.skinEditado.pngSkin);
        }

        this.getProductos();
      }
      this.cancelarEdicionSkin();
    },

    // GUARDAR CAMBIOS DEL Personaje
    async guardarCambiosPersonaje() {
      // Verificar que los campos no estén vacíos y cumplan con las restricciones
      if (
        this.personajeEditado.nombre === "" ||
        this.personajeEditado.descripcion === "" ||
        this.personajeEditado.nombre.length > 65 ||
        this.personajeEditado.descripcion.length > 200 ||
        isNaN(this.personajeEditado.lvlDesbloqueo) ||
        this.personajeEditado.lvlDesbloqueo.toString().length > 3 ||
        !this.personajeEditado.packSkins ||
        this.personajeEditado.packSkins.length === 0
      ) {
        // Mostrar un mensaje de error
        alert("Por favor, complete todos los campos correctamente.");
        return; // Salir de la función si hay algún error
      }

      // Guardar los cambios realizados en el producto
      if (this.idEditada !== null) {
        this.$set(this.productos, this.idEditada, this.personajeEditado);

        let personajeEditadoSinId = { ...this.personajeEditado };
        delete personajeEditadoSinId._id;

        await updatePersonaje(this.idEditada, personajeEditadoSinId);
        this.getProductos();
      }
      this.cancelarEdicionPersonaje();
    },


    // CACELAR EDICION Personaje
    cancelarEdicionPersonaje() {
      // Cancelar la edición y cerrar el diálogo de edición
      this.editarPersonajeDialog = false;
      (this.personajeEditado = {
        nombre: "",
        lvlDesbloqueo: 0,
        descripcion: "",
      }),
        (this.idEditada = null);
    },

    // CACELAR EDICION SKIN
    cancelarEdicionSkin() {
      // Cancelar la edición y cerrar el diálogo de edición
      this.editarSkinDialog = false;
      (this.skinEditado = {
        nombre: "",
        valorMonedas: 0,
        pngSkin: { arriba: null, abajo: null, izq: null, derecha: null } ,
        descripcion: "",
      }),
        (this.idEditada = null);
    },

    // ELIMINAR PRODUCTO
    async eliminarSkin(producto) {
      if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
        await deleteSkin(producto._id);
        this.getProductos();
      }
    },

    // ELIMINAR PERSONAJE
    async eliminarPersonaje(producto) {
      if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
        await deletePersonaje(producto._id);
        this.getProductos();
      }
    },

    // CREAR PERSONAJE
    async crearPersonaje() {
      // Verificar que los campos no estén vacíos y cumplan con las restricciones
      if (
        this.personajeNuevo.nombre.trim() === "" ||
        this.personajeNuevo.descripcion.trim() === "" ||
        this.personajeNuevo.nombre.length > 40 ||
        isNaN(this.personajeNuevo.lvlDesbloqueo) ||
        this.personajeNuevo.lvlDesbloqueo.toString().length > 3 ||
        !this.personajeNuevo.packSkins ||
        this.personajeNuevo.packSkins.length === 0
      ) {
        // Mostrar un mensaje de error
        alert("Por favor, complete todos los campos correctamente.");
        return; // Salir de la función si hay algún error
      }

      // Crear el nuevo personaje
      await createPersonaje(this.personajeNuevo);

      // Restablecer los valores a los predeterminados
      this.personajeNuevo = {
        nombre: "",
        lvlDesbloqueo: 0,
        descripcion: "",
        packSkins: [],
      };

      // Cerrar el diálogo de creación de personaje
      this.dialogPersonaje = false;

      // Actualizar la lista de productos
      this.getProductos();
    },

    // CREAR SKIN
    async crearSkins() {
      // Verificar que los campos no estén vacíos y cumplan con las restricciones
      if (
        this.skinNuevo.nombre === ""

      ) {
        // Mostrar un mensaje de error
        alert("Por favor, complete todos los campos correctamente.");
        return; // Salir de la función si hay algún error
      }

      console.log(this.skinNuevo.pngSkin);

      // Crear la nueva skin
      let skinNuevoCopy = { ...this.skinNuevo };
      skinNuevoCopy.pngSkin = {
        arriba: this.skinNuevo.pngSkin.arriba.name,
        abajo: this.skinNuevo.pngSkin.abajo.name,
        izq: this.skinNuevo.pngSkin.izq.name,
        derecha: this.skinNuevo.pngSkin.derecha.name
      };
      await crearSkin(skinNuevoCopy);

      // Subir las imágenes de la skin
      await Promise.all([
        uploadSkinimg(this.skinNuevo.pngSkin.arriba),
        uploadSkinimg(this.skinNuevo.pngSkin.abajo),
        uploadSkinimg(this.skinNuevo.pngSkin.izq),
        uploadSkinimg(this.skinNuevo.pngSkin.derecha)
      ]);

      // Restablecer los valores a los predeterminados
      this.skinNuevo = {
        nombre: "",
        valorMonedas: 0,
        descripcion: "",
        pngSkin: {
          arriba: null,
          abajo: null,
          izq: null,
          derecha: null
        }
      };

      // Cerrar el diálogo de creación de skin
      this.dialogSkin = false;

      // Actualizar la lista de productos
      this.getProductos();
    },


    // EDITAR CLIENTE
    editarCliente(cliente) {
      // Abrir diálogo de edición
      this.editarClienteDialog = true;
      // Establecer datos del cliente seleccionado en clienteEditado
      this.clienteEditado = { ...cliente };
      // Guardar el índice del cliente editando (opcional, dependiendo de tus necesidades)
      this.clienteEditandoIndex = this.clientes.indexOf(cliente);
    },

    // GUARDAR CAMBIOS CLIENTE
    async guardarCambiosCliente() {
      try {
        // Validar si el campo de correo electrónico es una dirección de correo electrónico válida
        const correoValido = this.validarCorreoElectronico(
          this.clienteEditado.gmail
        );
        if (!correoValido) {
          alert(
            "Por favor, ingrese una dirección de correo electrónico válida."
          );
          return; // Salir de la función si el correo electrónico no es válido
        }

        // Convertir la fecha al formato deseado (año primero y separado por guiones)
        const fecha = this.clienteEditado.fecha_nacimiento;
        const fechaFormateada = fecha
          ? fecha.split("/").reverse().join("-")
          : "";

        // Asignar la fecha formateada al clienteEditado
        this.clienteEditado.fecha_nacimiento = fechaFormateada;

        // Realizar la petición de actualización del cliente en la base de datos
        await updateCliente(this.clienteEditado);

        // Limpiar clientes
        this.limpiarClientes();

        // Actualizar la lista de clientes después de que la actualización sea exitosa
        this.selectClientesLabs();

        // Cerrar el diálogo de edición
        this.cancelarEdicionCliente();
      } catch (error) {
        console.error("Error al actualizar el cliente:", error);
      }
    },

    // validar una dirección de correo electrónico
    validarCorreoElectronico(correo) {
      const expresion = /\S+@\S+\.\S+/;
      return expresion.test(correo);
    },

    // GUARDAR ESTADO DE BAN DE CLIENTES
    async updateClienteActivo() {
      try {
        // Convertir la fecha al formato deseado (año primero y separado por guiones)
        const fecha = this.clienteEditado.fecha_nacimiento;
        const fechaFormateada = fecha
          ? fecha.split("/").reverse().join("-")
          : "";

        // Asignar la fecha formateada al clienteEditado
        this.clienteEditado.fecha_nacimiento = fechaFormateada;

        // Realizar la petición de actualización del estado del cliente en el servidor
        await updateCliente(this.clienteEditado);

        // LMPIAR CLIENTES
        this.limpiarClientes();

        // Actualizar la lista de clientes después de que la actualización sea exitosa
        this.selectClientesLabs();
      } catch (error) {
        console.error("Error al actualizar el estado del cliente:", error);
      }
    },

    // LIMPIAR LOS CLIENTES
    limpiarClientes() {
      this.clientes = [];
      this.clienteEditado = [];
    },

    // CANCELAR LA EDICION DEL CLIENTE
    cancelarEdicionCliente() {
      // Cerrar el diálogo de edición y restablecer los datos del cliente editado
      this.editarClienteDialog = false;
      this.clienteEditado = {
        gmail: "",
        fecha_nacimiento: "",
        vetado: null,
      };
      this.clienteEditandoIndex = null;
    },

    // SELECT MAPAS
    async selectMapas() {
      try {
        // Obtener mapas utilizando el método getUsuarios
        const mapas = await getMapa();

        // Limpiar la lista de mapas
        this.mapas = [];

        // Iterar sobre cada mapa
        for (const mapa of mapas) {
          // Asignar valores a del mapa
          const maps = {
            id: mapa._id,
            nombre: mapa.nombre,
            pngMapa: mapa.pngMapa,
            probabilidadSpawn: mapa.probabilidadSpawn,
            descripcion: mapa.descripcion,
          };

          this.mapas.push(maps);
        }
      } catch (error) {
        console.error("Error al obtener mapas:", error);
      }
    },
    // AGREGAR MAPA
    async guardarMapa() {
      // Verificar si algún campo está vacío
      if (
        this.nuevoMapa.nombre === "" ||
        this.nuevoMapa.pngMapa === "" ||
        this.nuevoMapa.probabilidadSpawn < 0.1 ||
        this.nuevoMapa.probabilidadSpawn > 0.9 ||
        this.nuevoMapa.descripcion === "" ||
        this.nuevoMapa.nombre.length > 65 ||
        this.nuevoMapa.descripcion.length > 200
      ) {
        alert("Por favor, complete todos los campos antes de guardar el mapa.");
        return;
      }

      let mapaNuevoCopy = { ...this.nuevoMapa };
      mapaNuevoCopy.pngMapa = mapaNuevoCopy.pngMapa.name;
      await createMap(mapaNuevoCopy);

      await uploadMapimg(this.nuevoMapa.pngMapa);

      // Crear el mapa si todos los campos están llenos

      // cerrar el diálogo
      this.agregarMapaDialog = false;

      this.limpiarMapas();
      this.selectMapas();
    },

    // GUARDAR CAMBIOS MAPAS
    async updateMapas() {
      try {
        this.guardarEdicionMapa();

        // LMPIAR MAPAS
        this.limpiarMapas();

        // Actualizar la lista de mapas
        this.selectMapas();

        // Cerrar el diálogo de edición
        this.cancelarEdicionMapa();
      } catch (error) {
        console.error("Error al actualizar el mapa:", error);
      }
    },

    // GUARDAR LOS DATOS EDITADOS MAPAS
    async guardarEdicionMapa() {
      // Verificar que los campos no estén vacíos y cumplan con las restricciones
      if (
        this.mapaEditado.nombre === "" ||
        this.mapaEditado.pngMapa === "" ||
        this.mapaEditado.probabilidadSpawn < 0.1 ||
        this.mapaEditado.probabilidadSpawn > 0.9 ||
        this.mapaEditado.descripcion === "" ||
        this.mapaEditado.nombre.length > 65 ||
        this.mapaEditado.descripcion.length > 200
      ) {
        // Mostrar un mensaje de error
        alert("Por favor, complete todos los campos correctamente.");
        return; // Salir de la función si hay algún error
      }

      // Guardar los cambios realizados en el mapa
      if (this.mapaEditandoId !== null) {
        this.$set(this.mapas, this.mapaEditandoIndex, this.mapaEditado);

        let mapaEditadoSinId = { ...this.mapaEditado };
        mapaEditadoSinId.pngMapa = this.mapaEditado.pngMapa.name;
        delete mapaEditadoSinId._id;

        console.log("foto a subir", this.mapaEditado.pngMapa);
        console.log("foto nombre para eliminar", this.imagenMapaEditado);
        if (this.mapaEditado.pngMapa !== this.imagenMapaEditado) {
          await editMapimg(this.mapaEditado.pngMapa, this.imagenMapaEditado);
        }
        await updateMap(this.mapaEditandoId, mapaEditadoSinId);
        this.selectMapas();
      }
      this.cancelarEdicionMapa();
    },

    // LIMPIAR CAMPOS MAPAS
    limpiarMapas() {
      // resetear los campos del nuevo mapa
      this.nuevoMapa = {
        nombre: "",
        pngMapa: "",
        probabilidadSpawn: 0,
        descripcion: "",
      };
      this.mapas = [];
    },

    // VDIALOG VER MAPAS
    openMapaDialog() {
      this.mapaDialog = true;
    },

    // VDIALOG INSERTAR MAPAS
    openAgregarMapaDialog() {
      this.agregarMapaDialog = true;
    },

    // VDIALOG EDITAR MAPAS
    openEditarMapaDialog(mapa, index) {
      this.editarMapaDialog = true;
      this.imagenMapaEditado = mapa.pngMapa;

      // Establecer datos del mapa seleccionado en mapaEditado
      this.mapaEditado = { ...mapa };

      // Guardar el índice y la ID del mapa editando
      this.mapaEditandoIndex = index;
      this.mapaEditandoId = mapa.id;
    },

    // CANCELAR EDICION MAPA
    cancelarEdicionMapa() {
      this.editarMapaDialog = false;
      this.mapaEditado = {
        nombre: "",
        pngMapa: "",
        probabilidadSpawn: 0,
        descripcion: "",
      };
    },

    // ELIMINAR MAPA
    async eliminarMapa(mapa) {
      if (confirm("¿Estás seguro de que deseas eliminar este mapa?")) {
        await deleteMap(mapa.id);
        this.limpiarMapas();
        this.selectMapas();
      }
    },
  },
};
</script>

<style scoped>
/* Estilos para los diálogos */
.inner-card {
  background-color: white;
  color: black !important;
  margin: 20px;
}

.inner-title {
  color: rgb(255, 255, 255);
}

.inner-title-2 {
  color: rgb(0, 0, 0);
}

.inner-text {
  color: black !important;
}

.dialog-title {
  background-color: #1976d2;
  color: #ffffff;
}

.dialog-text {
  color: #333333;
}

/* Estilos para los text fields dentro de los diálogos */
.dialog-text-field {
  width: 100%;
}

/* Estilos para los botones dentro de los diálogos */
.dialog-btn {
  color: #ffffff;
}

/* Estilos para los checkboxes dentro de los diálogos */
.dialog-checkbox {
  color: #1976d2;
}

/* Estilos para los botones */
.panel-btn {
  margin-top: 20px;
}

/* Animación para los botones */
@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}

/* Aplicar la animación a los botones */
.panel-btn:hover {
  animation: pulse 0.5s ease infinite alternate;
}

/* Estilos para los v-card */
.panel-card {
  background-color: #ffffff;
  text-align: center;
  padding: 20px;
}

/* Estilos para el texto dentro de los v-card */
.panel-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333333;
}

.panel-text {
  font-size: 16px;
  color: #666666;
}
</style>
