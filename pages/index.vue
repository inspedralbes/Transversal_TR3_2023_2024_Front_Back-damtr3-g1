<template>
  <form>
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
import io from "socket.io-client";

export default {
  layout: 'LoginLayout',
  name: 'LoginPage',
  data() {
    return {
      user: "",
      pwd: "",
    };
  },

  created() {
    this.socket = io("http://r6pixel.duckdns.org:3169/");
  },

  methods: {
    async ferLogin(usuari, pass) {
      try {
        const logged = await login(usuari, pass);
        if (logged) {
          localStorage.removeItem('loggedIn');
          // Almacenar la sesión en el localStorage
          localStorage.setItem('loggedIn', true);
          alert("Usuario " + usuari + " válido");
          // Redirigir a la página de inicio (home)
          this.$router.push('/home');
        } else {
          alert("Usuario o contraseña incorrectos")
        }
      } catch (error) {
        console.error("Error durante el inicio de sesión:", error);
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
