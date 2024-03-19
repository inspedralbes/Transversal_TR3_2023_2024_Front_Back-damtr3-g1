
<template>
  <v-app>
    <div>
    <v-app-bar app>
      <v-toolbar-title @click="goToHome">R6 PIXEL</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="goToProcesos">Procesos</v-btn>
    </v-app-bar>
   <br><br>
    
      
  </div>
  </v-app>
</template>

<script>
import { getUsuarios, getEstadisticas } from '@/services/communicationsManager.js'

export default {
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
