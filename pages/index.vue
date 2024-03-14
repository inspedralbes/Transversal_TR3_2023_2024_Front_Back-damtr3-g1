<template>
  <v-container class="container">
    <form action="POST">
      <label for="username">Nom d'usuari: </label>
      <input type="text" id="username" v-model="user">

      <br><br>

      <label for="pwd">Contrasenya: </label>
      <input type="password" id="password" v-model="pwd">

      <br><br>


      <v-button @click="ferLogin(user, pwd)">LOGIN</v-button>
    
    
    </form>

  </v-container>
</template>


<style>
.container{
  text-align: center;
  align-items: center;
  padding: 5%;
  height: 400px;
  width: 500px;
  border: 1px solid black;
  border-radius: 20px;
}

input{
  border: 1px solid rgb(255, 0, 200);
}

button{
border: 1px solid rgb(255, 0, 200);
border-radius: 20px;
padding: 10px;
}
button:hover{
  background-color: rgb(255, 0, 200);
}

</style>
<script>  
import { login } from '@/communicaationsManager.js'
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
        alert("SI");
      }else{
        alert("NO")
      }
    }
    
  }
}
</script>
