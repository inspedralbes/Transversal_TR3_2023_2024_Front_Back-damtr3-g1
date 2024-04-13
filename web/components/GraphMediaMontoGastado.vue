<template>
    <div class="p-2 border border-gray-500 mt-4 text-center">
        <label class="block mb-2 font-bold">Media Global del Monto Gastado</label>

        <client-only>
            <BarChart :data="chartData" />
        </client-only>
    </div>
</template>

<script>
import { getUsuarios, getEstadisticas } from '@/services/communicationsManager.js';

export default {
    data() {
        return {
            clientes: [],
            estadisticas: [],
            penilaianData: {},
            totalMontoGastado: 0,
            mediaMontoGastado: 0,
        };
    },
    created() {
        console.log('CREATED');
        this.selectClientesLabs();
    },
    props: {
        penilaian: {
            type: Object,
            required: true,
        },
    },
    computed: {
        chartData() {
            return {
                labels: ['Media Global del Monto Gastado'],
                datasets: [
                    {
                        label: 'Monto Gastado',
                        data: [this.mediaMontoGastado],
                        backgroundColor: 'rgba(0, 128, 0, 0.6)', 
                        borderColor: 'rgba(0, 128, 0, 1)',
                        borderWidth: 2,
                    },
                ],
            };
        },
    },
    methods: {
        async selectClientesLabs() {
            try {
                const usuarios = await getUsuarios();

                for (const usuario of usuarios) {
                    const estadisticas = await getEstadisticas(usuario.idUser);

                    const cliente = {
                        idUser: usuario.idUser,
                        ha_gastado_dinero: usuario.ha_gastado_dinero,
                        activo: usuario.vetado,
                        horas_jugadas: estadisticas[0].Horas_Jugadas,
                        ultima_conexion: new Date(estadisticas[0].Ultima_Conexion).toLocaleDateString(),
                        monto_gastado: estadisticas[0].monto_gastado,
                        partidasJugadas: estadisticas[0].PartidasJugadas,
                        numVictorias: estadisticas[0].NumeroVictorias,
                        porcentageVictorias: estadisticas[0].PorcentageVictorias,
                        kills: estadisticas[0].Kills,
                        asistencias: estadisticas[0].Assistencies,
                        muertes: estadisticas[0].Muertes,
                        kda: estadisticas[0].KDA,
                    };

                    this.clientes.push(cliente);
                    this.totalMontoGastado += cliente.monto_gastado; // Sumar los montos gastados
                }

                this.calcularMediaMontoGastado(); // Calcular la media del monto gastado
            } catch (error) {
                console.error('Error al obtener usuarios:', error);
            }
        },

        calcularMediaMontoGastado() {
            const numUsuarios = this.clientes.length;
            if (numUsuarios > 0) {
                this.mediaMontoGastado = this.totalMontoGastado / numUsuarios;
            }
        },
    },
};
</script>