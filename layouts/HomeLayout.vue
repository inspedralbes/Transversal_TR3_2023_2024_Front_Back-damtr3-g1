<template>
    <v-app>
        <v-app-bar app>
            <v-toolbar-title>R6 PIXEL</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text @click="goToProcesos">Procesos</v-btn>
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
        // Función para redireccionar a la página de Procesos
        goToProcesos() {
            this.$router.push('/procesos');
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