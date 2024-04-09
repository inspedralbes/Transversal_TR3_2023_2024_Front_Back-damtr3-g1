<template>
    <v-app>
        <!-- APP BAR -->
        <v-app-bar app>
            <v-toolbar-title @click="goToHome">R6 PIXEL</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text @click="goToDashboard">Dashboard</v-btn>
            <v-btn text @click="logout">Cerrar sesión</v-btn>
        </v-app-bar>

        <v-main>
            <!-- Contenido de las páginas -->
            <nuxt />
        </v-main>
    </v-app>
</template>

<script>
export default {
    // Configuración del layout
    methods: {
        // Función para redireccionar a la página principals
        goToHome() {
            this.$router.push("/home");
        },

        // Función para redireccionar a la página de Dashboard
        goToDashboard() {
            this.$router.push('/dashboard');
        },

         // Función para cerrar sesión
         logout() {
            localStorage.removeItem('loggedIn'); // Limpiar el local storage
            this.$router.push('/'); // Redireccionar a la página principal
        }
    }
}
</script>

<style>
/* Estilos para el layout */
</style>