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

    middleware: 'auth',
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
            // Verificar si estamos en el lado del cliente
            if (process.client) {

                if (localStorage.getItem('loggedIn')) {
                    localStorage.removeItem('loggedIn');
                }
                alert("Se ha cerrado sesion");
                // Redirigir a la página de inicio (home)
                this.$router.push('/');
            }
        },

        // COMPROBAR ACCESO
        comprobarSesion() {
            // Verificar si el código se está ejecutando en el lado del cliente (navegador)
            if (process.client) {
                // Verificar si el usuario ha iniciado sesión
                const loggedIn = localStorage.getItem('loggedIn');

                if (!loggedIn && route.path !== '/') {
                    // Si el usuario no está autenticado y la ruta no es la de inicio ('/'), redirigir a la raíz
                    this.$router.push('/');
                }
            }
        }
    },

    created() {
        this.comprobarSesion();
    },

    updated() {
        this.comprobarSesion();
    }
}
</script>

<style>
/* Estilos para el layout */
</style>