<template>
  <v-app>
    <div class="containerLogin">
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
  padding: 5%;
  height: 450px;
  width: 550px;
  border: 1px solid #72a4ff;
  border-radius: 20px;
  margin: 85px auto; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
}
</style>