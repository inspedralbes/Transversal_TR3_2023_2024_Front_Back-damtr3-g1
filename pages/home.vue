<template>
    <div>
    <v-app-bar app>
      <v-toolbar-title>R6 PIXEL</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="goToProcesos">Procesos</v-btn>
      <v-btn text @click="goToOdoo">Odoo</v-btn>
      <v-btn text @click="goToDashboard">Dashboard</v-btn>
    </v-app-bar>
    <!-- Contenido de tu aplicación -->
  </div>
</template>

<script>
export default {
  methods: {
    goToOdoo() {
        this.$router.push('/odooConfig');
    },
    goToProcesos() {
        this.$router.push('/procesos');
    },
    goToDashboard() {
        this.$router.push('/dashboard');
    }
  }
};
</script>

<style scoped>

</style>