<template>
    <v-app>
      <div class="containerLogin mx-auto">
        <!-- Contenido específico del inicio de sesión -->
        <nuxt />
      </div>
    </v-app>
  </template>
  
  <script>
  export default {
    // Configuración del layout
  }
  </script>
  
  <style scoped>
  .containerLogin {
    text-align: center;
    align-items: center;
    padding: 5%;
    height: 400px;
    width: 500px;
    border: 1px solid rgb(255, 0, 200);
    border-radius: 20px;
    margin-top: 85px;
  }
  </style>
  