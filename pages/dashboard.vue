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


export default {
  layout: 'DashboardLayout',
  data() {
    return {
      penilaianData: {}
    };
  },

  components: {
    GraphHoras,
    GraphKda,
    GraphPartidas,
    GraphKills,
    GraphMediaMontoGastado,
    GraphMontoGastado,

  },

  methods: {

  }
};
</script>

<style scoped></style>