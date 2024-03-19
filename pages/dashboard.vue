<template>
    <v-app>
      <div>
      <v-app-bar app>
        <v-toolbar-title @click="goToHome">R6 PIXEL</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text @click="goToProcesos">Procesos</v-btn>
      </v-app-bar>
      <!-- Contenido de tu aplicación -->
    </div>
    </v-app>
  </template>
  
  <script>
  export default {
    methods: {
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