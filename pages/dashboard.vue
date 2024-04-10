<template>
  <v-app>
    <div>

      <v-row>
        <!-- Primera columna -->
        <v-col cols="6">
          <!-- GRAFICO HORAS MEDIAS -->
          <GraphHoras :penilaian="penilaianData" />

          <!-- GRAFICO PARTIDAS MEDIAS POR USUARIO-->
          <GraphPartidas :penilaian="penilaianData" style="margin-top: 20px;" />

          <!-- GRAFICO MEDIA MONTO GASTADO MEDIAS POR USUARIO-->
          <GraphMediaMontoGastado :penilaian="penilaianData" />

          <!-- GRAFICO MEDIA MONTO GASTADO POR USUARIO-->
          <GraphMontoGastado :penilaian="penilaianData" />
        </v-col>

        <!-- Segunda columna -->
        <v-col cols="6">
          <!-- GRAFICO KDA MEDIO POR USUARIO-->
          <GraphKda :penilaian="penilaianData" />

          <!-- GRAFICO KILLS MEDIAS POR USUARIO-->
          <GraphKills :penilaian="penilaianData" />

          <!-- GRAFICO USUARIOS ODOO -->
          <div style="margin-top: 15px;">
            <button @click="ejecutarScript" :disabled="ejecutandoScript">Ejecutar Script Python</button>
            <img v-if="imagenUrl" :src="imagenUrl" alt="Gráfico de Usuarios Registrados">
            <p v-if="!imagenUrl && scriptEjecutado">Esperando la generación del gráfico...</p>
          </div>

        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script>
import GraphHoras from '@/components/GraphHoras.vue';
import GraphKda from '@/components/GraphKda.vue';
import GraphPartidas from '@/components/GraphPartidas.vue';
import GraphKills from '@/components/GraphKills.vue';
import GraphMediaMontoGastado from '@/components/GraphMediaMontoGastado.vue';
import GraphMontoGastado from '@/components/GraphMontoGastado.vue';
import { getImgGraph } from "@/services/communicationsManager.js";

export default {
  layout: 'DashboardLayout',
  middleware: 'auth',
  data() {
    return {
      penilaianData: {},
      imagenUrl: null,
      ejecutandoScript: false,
      scriptEjecutado: false
    };
  },

  components: {
    GraphHoras,
    GraphKda,
    GraphPartidas,
    GraphKills,
    GraphMediaMontoGastado,
    GraphMontoGastado
  },

  created() {
    this.selectFoto();
  },

  methods: {
    async ejecutarScript() {
      try {
        // Deshabilita el botón mientras se está ejecutando el script
        this.ejecutandoScript = true;

        // Realiza la solicitud para obtener la URL de la imagen
        const imageURL = await getImgGraph();

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

    async selectFoto() {
      try {
        // Realiza la solicitud para obtener la URL de la imagen
        const imageURL = await getImgGraph();

        // Asigna la URL de la imagen a la variable imagenUrl
        this.imagenUrl = imageURL;
      } catch (error) {
        console.error("Error loading news:", error);
      }
    }
  }
};
</script>

<style scoped>
img {
  max-width: 90%;
}
</style>