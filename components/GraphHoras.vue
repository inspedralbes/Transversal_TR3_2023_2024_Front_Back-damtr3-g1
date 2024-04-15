<template>
    <div class="p-2 border border-gray-500  mt-4 text-center">
        <label class="block mb-2 font-bold">Horas Medias Jugadas por Usuario</label>

        <client-only>
            <BarChart :data="chartData" />
        </client-only>
    </div>
</template>

<script>
import { getUsuarios, getEstadisticas } from '@/services/communicationsManager.js'

export default {

    data() {
        return {
            clientes: [],
            estadisticas: [],
            penilaianData: {},
            totalHorasJugadas: 0,
            mediaHorasJugadas: 0,
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
                labels: ['Media de Horas Jugadas'],
                datasets: [
                    {
                        label: 'Horas',
                        data: [this.mediaHorasJugadas],
                        backgroundColor: 'rgba(20, 255, 0, 0.3)',
                        borderColor: 'rgba(100, 255, 0, 1)',
                        borderWidth: 2,
                    },
                ],
            }
        },
    },

    methods: {
        // HACER SELECT CLIENTES LABS (CLIENTES)
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
                    this.totalHorasJugadas += cliente.horas_jugadas; 
                }

                this.calcularMedia(); // Calcula la media después de haber sumado todas las horas jugadas
            } catch (error) {
                console.error('Error al obtener usuarios:', error);
            }
        },

        // CALCULAMOS LA MEDIA DE HORAS
        calcularMedia() {
            const numUsuarios = this.clientes.length;
            if (numUsuarios > 0) {
                this.mediaHorasJugadas = this.totalHorasJugadas / numUsuarios;
            }
        },
    }
}
</script>