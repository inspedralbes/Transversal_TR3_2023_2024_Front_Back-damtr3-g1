<template>
  <form action="POST">
    <label for="username">Nom d'usuari: </label>
    <input type="text" id="username" v-model="user">
    <br>
    <label for="pwd" style="margin-top: 20px;">Contrasenya: </label>
    <input type="password" id="password" style="margin-top: 20px;" v-model="pwd">
    <br><br>
    <v-btn class="btn" @click="ferLogin(user, pwd)">LOGIN </v-btn>
  </form>
</template>

<script>
import { login } from '@/services/communicationsManager.js'

export default {
  layout: 'LoginLayout', // Asigna el layout definido en LoginLayout.vue
  name: 'LoginPage',
  data() {
    return {
      user: "",
      pwd: "",
    };
  },
  methods: {
    async ferLogin(usuari, pass) {
      var logged = await login(usuari, pass);
      if (logged) {
        alert("Usuario " + usuari + " válido");
        // Navegar a la página de inicio (home)
        this.$router.push('/home');
      } else {
        alert("Usuario o contraseña incorrectos")
      }
    }
  }
}
</script>

<style>
input {
  border: 1px solid rgb(255, 0, 200);
}

.btn {
  border: 1px solid rgb(255, 0, 200);
  border-radius: 20px;
  padding: 10px;
}
</style>
