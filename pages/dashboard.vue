<template>
  <v-app>
    <div>
    <v-app-bar app>
      <v-toolbar-title @click="goToHome">R6 PIXEL</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="goToProcesos">Procesos</v-btn>
    </v-app-bar>

    <!-- PANEL CONTROL -->
    <v-container fluid style="margin-top: 75px">
        <v-row justify="center">
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
  </div>

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
              <v-btn color="primary" @click="openEditarMapaDialog(mapa, index)">
                  Editar Mapa
                </v-btn>
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

     <!-- Dialog para agregar producto -->
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
import { getMapa, 
  createMap,
  updateMap, 
  getUsuarios,
  getEstadisticas, } from '@/services/communicationsManager.js'

export default {
data() {
  return {
    clientes: [],
    estadisticas: [],
    chart: null,
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
  console.log('CREATED');
  this.selectClientesLabs(); 
  this.selectMapas();
},

mounted() {
  console.log('MOUNTED');
},

updated() {
  console.log('UPDATED');
},

  methods: {
  // HACER SELECT CLIENTES LABS (CLIENTES)
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

cancelarEdicionMapa(){
  this.editarMapaDialog = false;
 this.mapaEditado= {
        nombre: '',
        pngMapa: '',
        probabilidadSpawn: 0,
        descripcion: ''
    };
},
  goToProcesos() {
        this.$router.push('/procesos');
    },
    
    goToHome() {
      this.$router.push('/home');
      },
  }
};
</script>

<style scoped>

</style>