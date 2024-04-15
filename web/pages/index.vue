<template>
  <div class="login-container">
    <form>
      <div class="form-group">
        <label for="username" class="titulos">Nombre de usuario:</label>
        <input type="text" id="username" v-model="user" placeholder="Ingrese su nombre de usuario">
      </div>
      <div class="form-group">
        <label for="password" class="titulos">Contraseña:</label>
        <input type="password" id="password" v-model="pwd" placeholder="Ingrese su contraseña">
      </div>
      <div class="form-group">
        <v-btn class="btn" @click="ferLogin(user, pwd)">Iniciar sesión</v-btn>
      </div>
    </form>
  </div>
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
    this.socket = io("http://r6pixel.duckdns.org:3170/");
  },

  methods: {
    async ferLogin(usuari, pass) {
      try {
        const logged = await login(usuari, pass);
        if (logged) {

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

<style scoped>
.titulos{
color: black;
}

.login-container {
  width: 450px !important;
  height: 300px !important;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #72a4ff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #72a4ff;
}
</style>
