<template>
 <v-app-bar app>
      <v-toolbar-title @click="goToHome">R6 PIXEL</v-toolbar-title>
      <v-spacer></v-spacer>
      
      <v-btn text @click="goToDashboard">Dashboard</v-btn>
    </v-app-bar>
</template>

<script>
export default {
  methods: {
    goToHome() {
        this.$router.push('/home');
    },
    goToDashboard() {
        this.$router.push('/dashboard');
    }
  }
};
</script>

<style scoped>

</style>