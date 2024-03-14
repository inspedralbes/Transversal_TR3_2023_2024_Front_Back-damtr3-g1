<template>
    <v-app>
        <!-- APP BAR -->
    <v-app-bar app>
      <v-toolbar-title @click="goToHome">R6 PIXEL</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="goToOdoo">Odoo</v-btn>
      <v-btn text @click="goToDashboard">Dashboard</v-btn>
    </v-app-bar>

    <!--  -->
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
      </v-row>
    </v-container>



    <!-- Diálogo de Productos -->
    <v-dialog v-model="productosDialog" max-width="1900" max-height="1900" style="height: auto; width: auto;">
  <template v-slot:activator="{ on }"></template>
  <v-card>
    <v-card-title>Productos</v-card-title>
    <v-card-text>
      <v-row>
        <!-- Aquí cargarías los productos en v-cards -->
        <v-col v-for="(producto, index) in productos" :key="index" cols="12" md="4">
          <v-card>
            <v-card-title>{{ producto.nombre }}</v-card-title>
            <v-card-text>
              <div>Precio: ${{ producto.precio }}</div>
              <div>Descripción: {{ producto.descripcion }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn :color="producto.disponible ? 'success' : 'error'" text @click="toggleDisponibilidad(producto)">
                {{ producto.disponible ? 'Visible' : 'No Visible' }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
        <v-btn color="primary" text @click="closeProductosDialog">Cerrar</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>




</v-app>
</template>

<script>
export default {
    data() {
    return {
      odooServerRunning: false, 
      gameServersRunning: false,
      productosDialog: false,
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
      ] 
    };
  },
  methods: {
    goToOdoo() {
        this.$router.push('/odooConfig');
    },
    goToHome() {
        this.$router.push('/home');
    },
    goToDashboard() {
        this.$router.push('/dashboard');
    },

    toggleOdoo() {
      this.odooServerRunning = !this.odooServerRunning;
      // Lógica para parar/arrancar Odoo
      console.log(this.odooServerRunning ? 'Parando Odoo...' : 'Arrancando Odoo...');
    },

    // PILLAR ESTADO DE ODOO
    async odooEstado(){

    },

    // PILLAR ESTADO DEL SERVER
    async serverEstado(){

    },

    async sincroProductos(){
    // Lógica para sincronizar productos

    },

    async selectProductosOdoo(){

    },

    toggleGameServers() {
      this.gameServersRunning = !this.gameServersRunning;
      // Lógica para parar/arrancar servidores del juego
      console.log(this.gameServersRunning ? 'Parando servidores del juego...' : 'Arrancando servidores del juego...');
    },

    // ABRIR VDIALOG DE PRODUCTOS
    openProductosDialog() {
        this.productosDialog = true; 
      this.selectProductosOdoo(); // Cargar productos antes de abrir el diálogo
      //this.productosDialog = true; 
    },

    // CERRAR VDIALOG DE PRODUCTOS
    closeProductosDialog() {
      this.productosDialog = false; 
    },

    // DISPONIBILIDAD DE PRODUCTOS
    toggleDisponibilidad(producto) {
        producto.disponible = !producto.disponible;
    },
  }
};
</script>

<style scoped>

</style>