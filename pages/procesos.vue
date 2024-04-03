

<template>
  <v-app>
    <!-- APP BAR -->
    <v-app-bar app>
      <v-toolbar-title @click="goToHome">R6 PIXEL</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="goToDashboard">Dashboard</v-btn>
    </v-app-bar>

    <!-- PANEL CONTROL -->
    <v-container fluid style="margin-top: 75px">
      <!-- SERVIDORES Y PRODUCTOS -->
      <v-row justify="center">
        <!-- Panel de Control Servidores -->
        <v-col cols="12" sm="6">
          <v-card class="mx-auto" max-width="400">
            <v-card-title>Panel de Control Servidores</v-card-title>
            <v-card-text>
              <v-btn @click="toggleOdoo" block>
                {{ odooServerRunning ? "Parar Odoo" : "Arrancar Odoo" }}
              </v-btn>
              <v-btn @click="toggleGameServers" block style="margin-top: 20px">
                {{
                  gameServersRunning
                    ? "Parar Servidores del Juego"
                    : "Arrancar Servidores del Juego"
                }}
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>

        <!-- PANEL DE CONTROL PRODUCTOS -->
        <v-col cols="12" sm="6">
          <v-card class="mx-auto" max-width="400">
            <v-card-title>Panel de Control Productos</v-card-title>
            <v-card-text>
              <v-btn @click="sincroProductos" block
                >Sincronizar Productos</v-btn
              >
              <v-btn @click="openProductosDialog" block style="margin-top: 20px"
                >Ver Productos</v-btn
              >
            </v-card-text>
          </v-card>
        </v-col>

        <!-- PANEL DE CONTROL CLIENTES -->
        <v-col cols="12" sm="6">
          <v-card class="mx-auto" max-width="400">
            <v-card-title>Panel de Control Clientes</v-card-title>
            <v-card-text>
              <v-btn @click="sincroClientes" block>Sincronizar Clientes</v-btn>
              <v-btn @click="openClientesDialog" block style="margin-top: 20px"
                >Ver Clientes</v-btn
              >
            </v-card-text>
          </v-card>
        </v-col>

        <!-- PANEL DE CONTROL MAPAS -->
        <v-col cols="12" sm="6">
          <v-card class="mx-auto" max-width="400">
            <v-card-title>Panel de Control Mapas</v-card-title>
            <v-card-text>
              <v-btn @click="sincroMapas" block>Sincronizar Mapas</v-btn>
              <v-btn @click="openMapaDialog" block style="margin-top: 20px">
                Ver Mapas</v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- PANEL DE PRODUCTOS -->
    <v-dialog
      v-model="productosDialog"
      max-width="1900"
      max-height="1900"
      style="height: auto; width: auto"
    >
      <template v-slot:activator="{ on }"></template>
      <v-card>
        <v-card-title>Lista de Productos</v-card-title>
        <v-card-text>
          <v-row>
            <!-- Columna de Personajes -->
            <v-col cols="12" md="6">
              <v-card-title style="color: white">Personajes</v-card-title>
              <v-spacer></v-spacer>
              <!-- Esto empuja el botón a la derecha -->
              <v-btn color="primary" @click="dialogPersonaje = true"
                >Crear Personaje</v-btn
              >
              <v-row>
                <v-col
                  v-for="(personaje, index) in productos.personajes"
                  :key="index"
                  cols="12"
                  md="6">
                  <v-card>
                    <v-card-title>{{ personaje.nombre }}</v-card-title>
                    <v-card-text>
                      <div>Nivel Desbloqueo: {{ personaje.lvlDesbloqueo }}</div>
                      <div>Skin: {{ personaje.idSkin }}</div>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn
                        color="primary"
                        text
                        @click="editarPersonaje(personaje)"
                        >Editar</v-btn
                      >
                      <v-btn
                        color="error"
                        text
                        @click="eliminarPersonaje(personaje)"
                        >Eliminar</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>

            <!-- Línea Separadora -->
            <v-col cols="12" md="1" class="d-flex justify-center align-center">
              <v-divider vertical></v-divider>
            </v-col>

            <!-- Columna de Skins -->
            <v-col cols="12" md="5">
              <v-card-title style="color: white">Skins</v-card-title>
              <v-spacer></v-spacer>
              <!-- Esto empuja el botón a la derecha -->
              <v-btn color="primary" @click="dialogSkin = true"
                >Crear Pack Skin</v-btn
              >
              <v-row>
                <v-col
                  v-for="(skin, index) in productos.skins"
                  :key="index"
                  cols="12"
                  md="6"
                >
                  <v-card>
                    <v-card-title>{{ skin.nombre }}</v-card-title>
                    <v-card-text>
                      <div>Valor en Monedas: {{ skin.valorMonedas }}</div>
                      <div>Valor en Gemas: {{ skin.valorGemas }}</div>
                      <div>Imagen: {{ skin.pngSkin }}</div>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn color="primary" text @click="editarSkin(skin)"
                        >Editar</v-btn
                      >
                      <v-btn color="error" text @click="eliminarSkin(skin)"
                        >Eliminar</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="closeProductosDialog"
            >Cerrar</v-btn
          >
        </v-card-actions>
      </v-card>

      <!-- Diálogo de Edición de Productos -->
      <v-dialog v-model="editarPersonajeDialog" max-width="500">
        <v-card>
          <v-card-title>Editar Personaje</v-card-title>
          <v-card-text>
            <!-- Aquí agregar campos de edición para el producto -->
            <v-text-field
              v-model="personajeEditado.nombre"
              label="Nombre"
            ></v-text-field>
            <v-text-field
              v-model="personajeEditado.lvlDesbloqueo"
              label="Nivel Desbloqueo"
            ></v-text-field>
            <v-text-field
              v-model="personajeEditado.descripcion"
              label="Descripción"
            ></v-text-field>
            <v-row>
              <v-col
                v-for="skin in productos.skins"
                :key="skin._id"
                cols="12"
                sm="6"
                md="4"
              >
                <v-checkbox
                  v-model="personajeEditado.packSkins"
                  :label="skin.nombre"
                  :value="skin._id"
                  :input-value="
                    personajeEditado.packSkins &&
                    personajeEditado.packSkins.includes(skin._id)
                  "
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" text @click="guardarCambiosPersonaje"
              >Guardar Cambios</v-btn
            >
            <v-btn color="primary" text @click="cancelarEdicionPersonaje">
              Cancelar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- EDITAR SKIN -->
      <v-dialog v-model="editarSkinDialog" max-width="500">
        <v-card>
          <v-card-title>Editar Skin</v-card-title>
          <v-card-text>
            <!-- Aquí agregar campos de edición para el producto -->
            <v-text-field
              v-model="skinEditado.nombre"
              label="Nombre"
            ></v-text-field>
            <v-text-field
              v-model="skinEditado.descripcion"
              label="Descripción"
            ></v-text-field>
            <v-file-input
              v-model="skinEditado.pngSkin"
              label="Archivo PNG"
              accept="image/png"
            />
            <v-text-field
              v-model="skinEditado.valorMonedas"
              label="Precio Monedas"
            ></v-text-field>
            <v-text-field
              v-model="skinEditado.valorGemas"
              label="Precio Gemas"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" text @click="guardarCambioSkin"
              >Guardar Cambios</v-btn
            >
            <v-btn color="primary" text @click="cancelarEdicionSkin"
              >Cancelar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- Dialog para CREAR PERSONAJE  -->
      <v-dialog v-model="dialogPersonaje" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Nuevo Personaje</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="formPersonaje" v-model="valid">
                <v-text-field
                  v-model="personajeNuevo.nombre"
                  label="Nombre"
                  required
                ></v-text-field>
                <v-text-field
                  v-model.number="personajeNuevo.lvlDesbloqueo"
                  label="Nivel de Desbloqueo"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="personajeNuevo.descripcion"
                  label="Descripción"
                  required
                ></v-text-field>
                <v-row>
                  <v-col
                    v-for="skin in productos.skins"
                    :key="skin._id"
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-checkbox
                      v-model="personajeNuevo.packSkins"
                      :label="skin.nombre"
                      :value="skin._id"
                    ></v-checkbox>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialogPersonaje = false"
              >Cancelar</v-btn
            >
            <v-btn color="blue darken-1" text @click="crearPersonaje"
              >Guardar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- Dialog para crear skin -->
      <v-dialog v-model="dialogSkin" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Nueva Skin</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-form ref="formSkin" v-model="valid">
                <v-text-field
                  v-model="skinNuevo.nombre"
                  label="Nombre"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="skinNuevo.descripcion"
                  label="Descripción"
                  required
                ></v-text-field>
                <v-file-input
                  v-model="skinNuevo.pngSkin"
                  label="Archivo PNG"
                  accept="image/png"
                />
                <v-text-field
                  v-model.number="skinNuevo.valorMonedas"
                  label="Valor en Monedas"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="skinNuevo.valorGemas"
                  label="Valor en Gemas"
                  type="number"
                  required
                ></v-text-field>
              </v-form>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialogSkin = false"
              >Cancelar</v-btn
            >
            <v-btn color="blue darken-1" text @click="crearSkin">Guardar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-dialog>

    <!-- PANEL DE CLIENTES -->
    <v-dialog
      v-model="clientesDialog"
      max-width="1900"
      max-height="1900"
      style="height: auto; width: auto"
    >
      <template v-slot:activator="{ on }"></template>
      <v-card>
        <v-card-title>Lista de Clientes</v-card-title>
        <v-card-text>
          <v-row>
            <!-- Aquí cargarías los productos en v-cards -->
            <v-col
              v-for="(cliente, index) in clientes"
              :key="index"
              cols="12"
              md="4"
            >
              <v-card>
                <v-card-title>{{ cliente.nombre_usuario }}</v-card-title>
                <v-card-text>
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
                  <v-btn
                    :color="cliente.activo ? 'error' : 'success'"
                    text
                    @click="toggleClienteActivo(cliente)"
                  >
                    {{ cliente.activo ? "Jugador Vetado" : "Jugador Activo" }}
                  </v-btn>
                  <v-btn color="primary" text @click="editarCliente(cliente)"
                    >Editar</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="closeClientesDialog"
            >Cerrar</v-btn
          >
        </v-card-actions>
      </v-card>

      <!-- Diálogo de Edición de Clientes -->
      <v-dialog v-model="editarClienteDialog" max-width="500">
        <v-card>
          <v-card-title>Editar Cliente</v-card-title>
          <v-card-text>
            <v-text-field
              v-model="clienteEditado.gmail"
              label="Gmail"
            ></v-text-field>
            <v-text-field
              v-model="clienteEditado.fecha_nacimiento"
              label="Fecha de nacimiento"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" text @click="guardarCambiosCliente"
              >Guardar Cambios</v-btn
            >
            <v-btn color="primary" text @click="cancelarEdicionCliente"
              >Cancelar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-dialog>

       <!-- Dialog para mostrar los mapas -->
   <v-dialog v-model="mapaDialog" max-width="800">
      <v-card>
        <v-card-title>Mapas</v-card-title>
        <v-card-text>
          <!-- Mostrar los mapas aquí -->
          <v-list>
            <v-list-item v-for="(mapa, index) in mapas" :key="index">
              <v-list-item-content>
                <v-list-item-title>{{ mapa.nombre }}</v-list-item-title>
                <v-list-item-subtitle>{{ mapa.pngMapa }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ mapa.probabilidadSpawn }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ mapa.descripcion }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-btn color="blue" @click="openEditarMapaDialog(mapa, index)">
                  Editar Mapa
                </v-btn>
                <v-btn style="margin-left: 15px;" color="red" @click="eliminarMapa(mapa)">Eliminar Mapa</v-btn>
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="openAgregarMapaDialog">
                  Añadir Mapa
          </v-btn>
          <v-btn color="red" text @click="mapaDialog = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

     <!-- Dialog para agregar Mapa -->
     <v-dialog v-model="agregarMapaDialog" max-width="600">
      <v-card>
        <v-card-title>Añadir Mapa</v-card-title>
        <v-card-text>
          <v-text-field v-model="nuevoMapa.nombre" label="Nombre"></v-text-field>
          <v-text-field v-model="nuevoMapa.pngMapa" label="pngMapa"></v-text-field>
          <v-text-field v-model.number="nuevoMapa.probabilidadSpawn" label="Probabilidad de Spawn"></v-text-field>
          <v-text-field v-model="nuevoMapa.descripcion" label="Descripción"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="guardarMapa">Guardar</v-btn>
          <v-btn color="red" text @click="agregarMapaDialog = false">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Dialog para editar mapa -->
<v-dialog v-model="editarMapaDialog" max-width="600">
  <v-card>
    <v-card-title>Editar Mapa</v-card-title>
    <v-card-text>
      <v-text-field v-model="mapaEditado.nombre" label="Nombre"></v-text-field>
      <v-text-field v-model="mapaEditado.pngMapa" label="pngMapa"></v-text-field>
      <v-text-field v-model.number="mapaEditado.probabilidadSpawn" label="Probabilidad de Spawn"></v-text-field>
      <v-text-field v-model="mapaEditado.descripcion" label="Descripción"></v-text-field>
    </v-card-text>
    <v-card-actions>
      <v-btn color="blue darken-1" text @click="guardarEdicionMapa">Guardar</v-btn>
      <v-btn color="red" text @click="cancelarEdicionMapa">Cancelar</v-btn>
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
  syncOdooClient
} from "@/services/communicationsManager.js";

export default {
  data() {
    return {
      imagenSkinEdit: null,
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
        valorGemas: 0,
        pngSkin: null,
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
        pngSkin: null,
        valorMonedas: 0,
        valorGemas: 0,
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
        nombre: '',
        pngMapa: '',
        probabilidadSpawn: 0,
        descripcion: ''
    },
    mapaEditandoIndex: null,
    mapaEditado: {
      mapaEditandoId:null,
        nombre: '',
        pngMapa: '',
        probabilidadSpawn: 0,
        descripcion: ''
    },

    };
  },
  created() {
    console.log("CREATED");
  },

  mounted() {
    console.log("MOUNTED");
    this.selectClientesLabs();
    this.odooEstado();
    this.getProductos();
    this.selectMapas();
    console.log("productasos", this.productos);
  },

  updated() {
    console.log("UPDATED");
  },
  methods: {
    goToHome() {
      this.$router.push("/home");
    },

    goToDashboard() {
      this.$router.push("/dashboard");
    },

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

    // PILLAR ESTADO DEL SERVIDOR DE ODOO
    async odooEstado() {
      const odooStatus = await getOdooStatus();
      if (odooStatus) {
        this.odooServerRunning = odooStatus;
        //console.log(this.odooServerRunning);
      }
    },

    async startOdoo() {
      await arrancarOdoo();
    },

    async stopOdoo() {
      await detenerOdoo();
    },

    // PILLAR ESTADO DEL SERVER DEL JUEGO
    async serverEstado() {},

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
    async selectProductosMongo() {},

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

    toggleGameServers() {
      this.gameServersRunning = !this.gameServersRunning;
      // Lógica para parar/arrancar servidores del juego
      console.log(
        this.gameServersRunning
          ? "Parando servidores del juego..."
          : "Arrancando servidores del juego..."
      );
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

    // EDITAR EL PRODUCTO
    editarPersonaje(producto) {
      // Cargar los datos del producto seleccionado en el diálogo de edición
      this.personajeEditado = { ...producto };
      this.idEditada = producto._id;
      this.editarPersonajeDialog = true;

    },
    editarSkin(producto) {
      this.imagenSkinEditado = producto.pngSkin;

      this.skinEditado = { ...producto };
      this.idEditada = producto._id;
      this.editarSkinDialog = true;
      console.log("fotaca", this.imagenSkinEditado);

    },

    // GUARDAR CAMBIOS DEL PRODUCTO
    async guardarCambiosPersonaje() {
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

    async guardarCambioSkin() {
      // Guardar los cambios realizados en el producto
      if (this.idEditada !== null) {
        this.$set(this.productos, this.idEditada, this.skinEditado);

        let skinEditadoSinId = { ...this.skinEditado };
        skinEditadoSinId.pngSkin = this.skinEditado.pngSkin.name;
        delete skinEditadoSinId._id;

        console.log("foto a subir", this.skinEditado.pngSkin);
        console.log("foto nompre para eliminar", this.imagenSkinEditado);
        await editSkinimg(this.skinEditado.pngSkin, this.imagenSkinEditado);

        await updateSkin(this.idEditada, skinEditadoSinId);
        this.getProductos();
      }
      this.cancelarEdicionSkin();
    },

    // CACELAR EDICION
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
    cancelarEdicionSkin() {
      // Cancelar la edición y cerrar el diálogo de edición
      this.editarSkinDialog = false;
      (this.skinEditado = {
        nombre: "",
        valorMonedas: 0,
        valorGemas: 0,
        pngSkin: null,
        descripcion: "",
      }),
        (this.idEditada = null);
    },

    // ELIMINAR PRODUCTO ?¿
    async eliminarSkin(producto) {
      if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
        await deleteSkin(producto._id);
        this.getProductos();
      }
    },

    async eliminarPersonaje(producto) {
      if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
        await deletePersonaje(producto._id);
        this.getProductos();
      }
    },

    async crearPersonaje() {
      await createPersonaje(this.personajeNuevo);
      this.personajeNuevo = {
        nombre: "",
        lvlDesbloqueo: 0,
        descripcion: "",
        packSkins: [],
      };
      this.dialogPersonaje = false;
      this.getProductos();
    },
    async crearSkin() {
      let skinNuevoCopy = { ...this.skinNuevo };
      skinNuevoCopy.pngSkin = skinNuevoCopy.pngSkin.name;
      await crearSkin(skinNuevoCopy);

      await uploadSkinimg(this.skinNuevo.pngSkin);
      this.skinNuevo = {
        nombre: "",
        valorMonedas: 0,
        valorGemas: 0,
        pngSkin: null,
        descripcion: "",
      };
      this.dialogSkin = false;
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
        // Convertir la fecha al formato deseado (año primero y separado por guiones)
        const fecha = this.clienteEditado.fecha_nacimiento;
        const fechaFormateada = fecha
          ? fecha.split("/").reverse().join("-")
          : "";

        // Asignar la fecha formateada al clienteEditado
        this.clienteEditado.fecha_nacimiento = fechaFormateada;

        console.log(this.clienteEditado);
        // Realizar la petición de actualización del cliente en la base de datos
        await updateCliente(this.clienteEditado); // Asume que el ID del cliente está presente en clienteEditado

        // LMPIAR CLIENTES
        this.limpiarClientes();

        // Actualizar la lista de clientes después de que la actualización sea exitosa
        this.selectClientesLabs();

        // Cerrar el diálogo de edición
        this.cancelarEdicionCliente();
      } catch (error) {
        console.error("Error al actualizar el cliente:", error);
      }
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
 async selectMapas(){      
      try {
      // Obtener mapas utilizando el método getUsuarios
      const mapas= await getMapa();
  
      // Iterar sobre cada mapa
      for (const mapa of mapas) {
        
        // Asignar valores a del mapa
        const maps = {
          id: mapa._id,
          nombre: mapa.nombre,
          pngMapa: mapa.pngMapa,
          probabilidadSpawn: mapa.probabilidadSpawn,
          descripcion: mapa.descripcion
        };

        this.mapas.push(maps);
        }
      } catch (error) {
        console.error('Error al obtener mapas:', error);
      }
 },

 // AGREGAR MAPA
 async guardarMapa() {
    // Verificar si algún campo está vacío
  if (
    this.nuevoMapa.nombre.trim() === '' ||
    this.nuevoMapa.pngMapa.trim() === '' ||
    this.nuevoMapa.probabilidadSpawn < 0.1 ||
    this.nuevoMapa.descripcion.trim() === ''
  ) {
    alert('Por favor, complete todos los campos antes de guardar el mapa.');
    return;
  }

  // Crear el mapa si todos los campos están llenos
 await createMap(this.nuevoMapa);

      // cerrar el diálogo
      this.agregarMapaDialog = false;

      this.limpiarMapas();
      this.selectMapas();
 },

 // GUARDAR CAMBIOS MAPAS
async updateMapas(){
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

// GUARDAR LOS DATOS EDITADOS
async guardarEdicionMapa(){
  // Verificar si algún campo está vacío
  if (
    this.mapaEditado.nombre.trim() === '' ||
    this.mapaEditado.pngMapa.trim() === '' ||
    this.mapaEditado.probabilidadSpawn < 0.1 ||
    this.mapaEditado.descripcion.trim() === ''
  ) {
    alert('Por favor, complete todos los campos antes de guardar la edición del mapa.');
    return;
  }

  try {
    // Eliminar el campo 'id' del objeto mapaEditado
    delete this.mapaEditado.id;

    // Utiliza la ID del mapa editando para actualizar los datos
    await updateMap(this.mapaEditandoId, this.mapaEditado);

    // Actualiza los datos en el array de mapas local si es necesario
    if (this.mapaEditandoIndex !== null) {
      this.$set(this.mapas, this.mapaEditandoIndex, this.mapaEditado);
    }

    // Cierra el diálogo de edición
    this.cancelarEdicionMapa();
  } catch (error) {
    console.error("Error al actualizar el mapa:", error);
  }
},

 // SINCRO MAPAS CON ODOO
 async sincroMapas(){

 },

 limpiarMapas(){
// resetear los campos del nuevo mapa
this.nuevoMapa = {
        nombre: '',
        pngMapa: '',
        probabilidadSpawn: 0,
        descripcion: ''
      };
      this.mapas=[];
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

  // Establecer datos del mapa seleccionado en mapaEditado
  this.mapaEditado = { ...mapa };
     
  // Guardar el índice y la ID del mapa editando
  this.mapaEditandoIndex = index;
  this.mapaEditandoId = mapa.id;
},

// CANCELAR EDICION MAPA
cancelarEdicionMapa(){
  this.editarMapaDialog = false;
 this.mapaEditado= {
        nombre: '',
        pngMapa: '',
        probabilidadSpawn: 0,
        descripcion: ''
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
</style>
