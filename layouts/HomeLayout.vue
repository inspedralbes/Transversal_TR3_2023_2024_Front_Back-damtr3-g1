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
//import { redirect } from '@nuxt/context';

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
            // Verificar si estamos en el lado del cliente
            if (process.client) {
                setTimeout(() => {
                    if (localStorage.getItem('loggedIn')) {
                        localStorage.removeItem('loggedIn');
                    }
                    // Redirigir al inicio después de 2 segundos
                    return redirect('/');
                }, 2000);
            }
           
        }
    },
    created() {

    },
}
</script>

<style>
/* Estilos para el layout */
</style>