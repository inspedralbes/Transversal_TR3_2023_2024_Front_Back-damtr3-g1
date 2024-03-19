

<template>
  <v-app>
      <!-- APP BAR -->
  <v-app-bar app>
    <v-toolbar-title @click="goToHome">R6 PIXEL</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text @click="goToDashboard">Dashboard</v-btn>
  </v-app-bar>

  <!-- PANEL CONTROL SERVERS -->
  <v-container fluid style="margin-top: 75px;">
    <!-- SERVIDORES Y PRODUCTOS -->
    <v-row justify="center">
         <!-- Panel de Control Servidores -->
      <v-col cols="12" sm="6">
        <v-card class="mx-auto" max-width="400">
          <v-card-title>Panel de Control Servidores</v-card-title>
          <v-card-text>
              <v-btn @click="toggleOdoo" block>
              {{ odooServerRunning ? 'Parar Odoo' : 'Arrancar Odoo' }}
            </v-btn>
            <v-btn @click="toggleGameServers" block style="margin-top: 20px;">
              {{ gameServersRunning ? 'Parar Servidores del Juego' : 'Arrancar Servidores del Juego' }}
            </v-btn>
           </v-card-text>
        </v-card>
      </v-col>

      <!-- PANEL DE CONTROL PRODUCTOS -->
      <v-col cols="12" sm="6" >
        <v-card class="mx-auto" max-width="400">
          <v-card-title>Panel de Control Productos</v-card-title>
          <v-card-text>
              <v-btn @click="sincroProductos" block>Sincronizar Productos</v-btn>
            <v-btn @click="openProductosDialog" block style="margin-top: 20px;">Ver Productos</v-btn>
           </v-card-text>
        </v-card>
      </v-col>

        <!-- PANEL DE CONTROL CLIENTES -->
        <v-col cols="12" sm="6" >
        <v-card class="mx-auto" max-width="400">
          <v-card-title>Panel de Control Clientes</v-card-title>
          <v-card-text>
              <v-btn @click="sincroClientes" block>Sincronizar Clientes</v-btn>
            <v-btn @click="openClientesDialog" block style="margin-top: 20px;">Ver Clientes</v-btn>
           </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <!-- PANEL DE PRODUCTOS -->
  <v-dialog v-model="productosDialog" max-width="1900" max-height="1900" style="height: auto; width: auto;">
<template v-slot:activator="{ on }"></template>
<v-card>
  <v-card-title>Lista de Productos</v-card-title>
  <v-card-text>
    <v-row>
      <!-- Aquí cargarías los productos en v-cards -->
      <v-col v-for="(producto, index) in productos" :key="index" cols="12" md="4">
        <v-card>
          <v-card-title>{{ producto.nombre }}</v-card-title>
          <v-card-text>
            <div>Precio: {{ producto.precio }}€</div>
            <div>Descripción: {{ producto.descripcion }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn :color="producto.disponible ? 'success' : 'error'" text @click="toggleDisponibilidad(producto)">
              {{ producto.disponible ? 'Visible' : 'No Visible' }}
            </v-btn>
            <v-btn color="primary" text @click="editarProducto(producto)">Editar</v-btn>
            <v-btn color="primary" text @click="eliminarProducto(producto)">Eliminar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-card-text>
  <v-card-actions>
      <v-btn color="primary" text @click="closeProductosDialog">Cerrar</v-btn>
  </v-card-actions>
</v-card>

      <!-- Diálogo de Edición de Productos -->
      <v-dialog v-model="editarProductoDialog" max-width="500">
      <v-card>
        <v-card-title>Editar Producto</v-card-title>
        <v-card-text>
          <!-- Aquí agregar campos de edición para el producto -->
          <v-text-field v-model="productoEditado.nombre" label="Nombre"></v-text-field>
          <v-text-field v-model="productoEditado.precio" label="Precio"></v-text-field>
          <v-text-field v-model="productoEditado.descripcion" label="Descripción"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" text @click="guardarCambiosProducto">Guardar Cambios</v-btn>
          <v-btn color="primary" text @click="cancelarEdicionProducto">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-dialog>

  <!-- PANEL DE CLIENTES -->
  <v-dialog v-model="clientesDialog" max-width="1900" max-height="1900" style="height: auto; width: auto;">
<template v-slot:activator="{ on }"></template>
<v-card>
  <v-card-title>Lista de Clientes</v-card-title>
  <v-card-text>
    <v-row>
      <!-- Aquí cargarías los productos en v-cards -->
      <v-col v-for="(cliente, index) in clientes" :key="index" cols="12" md="4">
        <v-card>
          <v-card-title>{{ cliente.nombre_usuario }}</v-card-title>
          <v-card-text>
            <div>Contacto: {{ cliente.gmail }}</div>
            <div>Fecha de nacimiento: {{ cliente.fecha_nacimiento }}</div>
            <div>{{ cliente.horas_jugadas }} horas jugadas</div>
            <div v-if="cliente.ha_gastado_dinero">
                Ha gastado {{ cliente.monto_gastado }}€</div>
                <div v-else>
                No ha gastado dinero</div>
                <div>Última conexión: {{ cliente.ultima_conexion }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn :color="cliente.activo ? 'error' : 'success'" text @click="toggleClienteActivo(cliente)">
              {{ cliente.activo ? 'Jugador Vetado' : 'Jugador Activo' }}
            </v-btn>
            <v-btn color="primary" text @click="editarCliente(cliente)">Editar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-card-text>
  <v-card-actions>
      <v-btn color="primary" text @click="closeClientesDialog">Cerrar</v-btn>
  </v-card-actions>
</v-card>

 <!-- Diálogo de Edición de Clientes -->
 <v-dialog v-model="editarClienteDialog" max-width="500">
    <v-card>
      <v-card-title>Editar Cliente</v-card-title>
      <v-card-text>
        <v-text-field v-model="clienteEditado.gmail" label="Gmail"></v-text-field>
        <v-text-field v-model="clienteEditado.fecha_nacimiento" label="Fecha de nacimiento"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" text @click="guardarCambiosCliente">Guardar Cambios</v-btn>
        <v-btn color="primary" text @click="cancelarEdicionCliente">Cancelar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  </v-dialog>
  
</v-app>
</template>

<script>
import { getUsuarios, getEstadisticas, updateCliente, 
getOdooStatus,
arrancarOdoo,
detenerOdoo, } from '@/services/communicationsManager.js'

export default {
  data() {
  return {
    odooServerRunning: false, 
    gameServersRunning: false,
    productosDialog: false,
    editarProductoDialog: false,
    editarClienteDialog: false,
    clientesDialog: false,
    productos: [
    {
  "nombre": "Producto 1",
  "precio": 19.99,
  "descripcion": "Este es el producto 1, una descripción corta del mismo.",
  "disponible": true
},
{
  "nombre": "Producto 2",
  "precio": 29.99,
  "descripcion": "Este es el producto 2, una descripción corta del mismo.",
  "disponible": true
},
{
  "nombre": "Producto 3",
  "precio": 39.99,
  "descripcion": "Este es el producto 3, una descripción corta del mismo.",
  "disponible": true
},
{
  "nombre": "Producto 4",
  "precio": 49.99,
  "descripcion": "Este es el producto 4, una descripción corta del mismo.",
  "disponible": false
}
    ],
    productoEditado: {
      nombre: '',
      precio: 0,
      descripcion: ''
    },
    productoEditandoIndex: null,
    clientes: [],
    clienteEditado: {
      gmail: "",
      fecha_nacimiento: "",
      vetado: null
    },
    clienteEditandoIndex: null,
    estadisticas: []

  };
},
created() {
  console.log('CREATED');
},

mounted() {
  console.log('MOUNTED');
  this.selectClientesLabs(); 
  this.odooEstado();
},

updated() {
  console.log('UPDATED');
},
methods: {
  goToHome() {
      this.$router.push('/home');
  },

  goToDashboard() {
      this.$router.push('/dashboard');
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
  async serverEstado(){

  },

  // Lógica para sincronizar productos
  async sincroProductos(){
  
  }, 

  // Lógica para sincronizar clientes
  async sincroClientes(){
  
  },

  // HACER SELECT PRODUCTOS MONGO
  async selectProductosMongo(){

  },

  // HACER SELECT CLIENTES LABS (CLIENTES)(ESTADISTICAS)
  async selectClientesLabs(){
   
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
      fecha_nacimiento: new Date(usuario.fechaNacimiento).toLocaleDateString(),
      nombre_usuario: usuario.username,
      ha_gastado_dinero: usuario.ha_gastado_dinero,
      activo: usuario.vetado,
      horas_jugadas: estadisticas[0].Horas_Jugadas,
      ultima_conexion: new Date(estadisticas[0].Ultima_Conexion).toLocaleDateString(),
      monto_gastado: estadisticas[0].monto_gastado
    };

    // Agregar el usuario con sus estadísticas al array de clientes
    this.clientes.push(cliente);
  }
} catch (error) {
  console.error('Error al obtener usuarios:', error);
}
  },

  toggleGameServers() {
    this.gameServersRunning = !this.gameServersRunning;
    // Lógica para parar/arrancar servidores del juego
    console.log(this.gameServersRunning ? 'Parando servidores del juego...' : 'Arrancando servidores del juego...');
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
  editarProducto(producto) {
    // Cargar los datos del producto seleccionado en el diálogo de edición
    this.productoEditado = { ...producto };
    this.productoEditandoIndex = this.productos.indexOf(producto);
    this.editarProductoDialog = true;
  },

  // GUARDAR CAMBIOS DEL PRODUCTO
  guardarCambiosProducto() {
    // Guardar los cambios realizados en el producto
    if (this.productoEditandoIndex !== null) {
      this.$set(this.productos, this.productoEditandoIndex, this.productoEditado);
    }
    this.cancelarEdicionProducto();
  },

  // CACELAR EDICION
  cancelarEdicionProducto() {
    // Cancelar la edición y cerrar el diálogo de edición
    this.editarProductoDialog = false;
    this.productoEditado = {
      nombre: '',
      precio: 0,
      descripcion: ''
    };
    this.productoEditandoIndex = null;
  },

  // ELIMINAR PRODUCTO ?¿
  eliminarProducto(producto) {
          if (confirm("¿Estás seguro de que deseas eliminar este producto?")) {
              const index = this.productos.indexOf(producto);
              if (index !== -1) {
                  this.productos.splice(index, 1);
              }
          }
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
      const fechaFormateada = fecha ? fecha.split('/').reverse().join('-') : '';

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
      console.error('Error al actualizar el cliente:', error);
    
      }
  },

  // GUARDAR ESTADO DE BAN DE CLIENTES
  async updateClienteActivo() {
    try {
      // Convertir la fecha al formato deseado (año primero y separado por guiones)
      const fecha = this.clienteEditado.fecha_nacimiento;
      const fechaFormateada = fecha ? fecha.split('/').reverse().join('-') : '';

      // Asignar la fecha formateada al clienteEditado
      this.clienteEditado.fecha_nacimiento = fechaFormateada;

      // Realizar la petición de actualización del estado del cliente en el servidor
      await updateCliente(this.clienteEditado);

      // LMPIAR CLIENTES  
      this.limpiarClientes();

      // Actualizar la lista de clientes después de que la actualización sea exitosa
      this.selectClientesLabs();
    } catch (error) {
      console.error('Error al actualizar el estado del cliente:', error);
    }
  },

  // LIMPIAR LOS CLIENTES 
  limpiarClientes() {
    this.clientes = []; 
    this.clienteEditado= [];
  },

  // CANCELAR LA EDICION DEL CLIENTE
  cancelarEdicionCliente() {
    // Cerrar el diálogo de edición y restablecer los datos del cliente editado
    this.editarClienteDialog = false;
    this.clienteEditado = {
      gmail: "",
      fecha_nacimiento: "",
      vetado: null
    };
    this.clienteEditandoIndex = null;
  },

}
};
</script>

<style scoped>

</style>
