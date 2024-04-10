<template>
    <v-app>
        <v-app-bar app>
            <v-toolbar-title @click="goToHome">R6 PIXEL</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text @click="goToProcesos">Procesos</v-btn>
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

        // Función para redireccionar a la página PRINCIPAL
        goToHome() {
            this.$router.push('/home');
        },

        // Función para cerrar sesión
        logout() {
            // Verificar si estamos en el lado del cliente
            if (process.client) {

                if (localStorage.getItem('loggedIn')) {
                    localStorage.removeItem('loggedIn');
                }
                // Redirigir al inicio 
                window.location.reload();
            }
        }
    }
}
</script>

<style>
/* Estilos para el layout */
</style>