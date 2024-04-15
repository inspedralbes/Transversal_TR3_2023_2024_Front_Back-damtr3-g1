<template>
    <div class="p-2 border border-gray-500 mt-4 text-center">
        <label class="block mb-2 font-bold">Monto Total Gastado por Todos los Usuarios</label>

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
                labels: ['Monto Total Gastado'],
                datasets: [
                    {
                        label: 'Monto Gastado',
                        data: [this.totalMontoGastado],
                        backgroundColor: 'rgba(64, 224, 208, 0.6)', // Turquesa
                        borderColor: 'rgba(64, 224, 208, 1)', // Color del borde
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
                    this.totalMontoGastado += estadisticas[0].monto_gastado; // Sumar el monto gastado
                }
            } catch (error) {
                console.error('Error al obtener usuarios:', error);
            }
        },
    },
};
</script>