<template>
  <v-app>
  <div class="containerLogin mx-auto" style="margin: 25px; align-items: center; width: auto; height: auto; max-width: 550px; max-height: 300px;">
    <form action="POST">
      <label for="username">Nom d'usuari: </label>
      <input type="text" id="username" v-model="user">
      <br>
      <label for="pwd" style="margin-top: 20px;">Contrasenya: </label>
      <input type="password" id="password"  style="margin-top: 20px;"v-model="pwd">
      <br><br>     
    <v-btn class="btn" @click="ferLogin(user, pwd)">LOGIN </v-btn>
    
    </form>

  </div>
</v-app>
</template>

<style>
.containerLogin{
  text-align: center;
  align-items: center;
  padding: 5%;
  height: 400px;
  width: 500px;
  border: 1px solid rgb(255, 0, 200);
  border-radius: 20px;
}

input{
  border: 1px solid rgb(255, 0, 200);
}

.btn{
border: 1px solid rgb(255, 0, 200);
border-radius: 20px;
padding: 10px;
}

</style>

<script>  
import { login } from '@/communicationsManager.js'
export default {
  name: 'IndexPage',
  data() {
    return {
      greeting: "Hello, Nuxt!",
      user: "",
      pwd: "",
    };
  },
  methods: {
    async ferLogin(usuari, pass){
      var logged = await login(usuari, pass);
      if(logged){
        alert("Usuario "+usuari +" valido");
          // Navegar a la página de inicio (home)
          this.$router.push('/home');
      }else{
        alert("Usuario o contraseña incorrectos")
      }
    }
    
  }
}
</script>
