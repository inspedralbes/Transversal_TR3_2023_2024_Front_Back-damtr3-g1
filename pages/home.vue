<template>
  <v-app>
    <div>
      <v-app-bar app>
        <v-toolbar-title>R6 PIXEL</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text @click="goToProcesos">Procesos</v-btn>
        <v-btn text @click="goToDashboard">Dashboard</v-btn>
      </v-app-bar>

      <!-- BTN para entrar en modo editor de noticias style="margin-top: 90px; margin-left: 20px;"  -->
      <v-btn fab dark color="primary" class="fab-btn" @click="openDialog">
        <v-icon>mdi-plus</v-icon>
      </v-btn>

      <!-- ver brodcast news -->
      <div class="broadcast-news">
        <div v-for="(news, index) in newsList" :key="index" class="news-item">
          <img :src="news.image" alt="News Image" class="news-image">
          <div class="news-content">
            <h2 class="news-title">{{ news.title }}</h2>
            <p class="news-description">{{ news.description }}</p>
          </div>
        </div>
      </div>

      <!-- DIALOG CON LAS NOTICIAS -->
      <v-dialog v-model="dialogVisible" max-width="2000">
        <v-card>
          <v-card-title class="d-flex justify-space-between align-center">
            <span class="headline">Administrar noticias</span>
            <v-btn @click="openCreateDialog">Crear noticias</v-btn>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col v-for="(news, index) in newsList" :key="index" cols="6">
                <v-card class="news-item" style="margin: 20px; width: 700px;" max-width="100%">
                  <v-card-text class="d-flex justify-space-between align-center">
                    <h2 style="color: black;">{{ news.title }}</h2>
                    <v-btn @click="openUpdateDialog">Editar</v-btn>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn color="blue darken-1" text @click="saveNews">Guardar</v-btn>
            <v-btn color="red" text @click="closeDialog">Cancelar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- DIALOG para crear noticia -->
      <v-dialog v-model="createDialogVisible" max-width="600">
        <v-card>
          <v-card-title>
            <span class="headline">Crear Noticia</span>
          </v-card-title>
          <v-card-text>

            <v-text-field v-model="newsCreateList.title" label="Título"></v-text-field>
            <v-text-field v-model="newsCreateList.description" label="Descripción"></v-text-field>
            <input type="file" @change="onFileChange" class="black-text">

          </v-card-text>
          <v-card-actions>
            <v-btn color="blue darken-1" text @click="createNews">Guardar</v-btn>
            <v-btn color="red" text @click="closeCreateDialog">Cancelar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-app>
</template>

<script>
import { getBroadcastNews, updateBroadcastNews, createBroadcastNews, deleteBroadcastNews } from "@/services/communicationsManager.js";

export default {
  data() {
    return {
      newsList: [],
      newsCreateList: {
        image: "",
        title: "",
        description: ""
      },
      newsEditList: {
        image: "",
        title: "",
        description: ""
      },
      file: "",
      dialogVisible: false,
      createDialogVisible: false,
      updateDialogVisible: false
    };
  },
  created() {
    console.log('CREATED');
    this.loadNews();
  },

  mounted() {
    console.log('MOUNTED');
  },

  updated() {
    console.log('UPDATED');
  },

  methods: {

    // UPDATE NOTICIAS
    async saveNews() {

      // Realizar la petición de actualización del estado
      await updateBroadcastNews(id, this.newsEditList);

      // LMPIAR CAMPOS
      this.limpiarCampos();

      // Actualizar la lista
      this.loadNews();

      this.closeDialog();
    },

    // CREAR NOTICIAS
    async createNews() {
      await createBroadcastNews(this.newsCreateList);
      // LIMPIAR CAMPOS
      this.limpiarCampos();
      // HACER SELECT
      this.loadNews();
      this.closeCreateDialog();
    },

    // SELECT NOTICIAS
    async loadNews() {
      try {
        this.newsList = await getBroadcastNews();
      } catch (error) {
        console.error('Error loading news:', error);
      }
    },

    goToProcesos() {
      this.$router.push('/procesos');
    },
    goToDashboard() {
      this.$router.push('/dashboard');
    },

    openCreateDialog() {
      this.createDialogVisible = true;
    },
    closeCreateDialog() {
      this.limpiarCampos();
      this.createDialogVisible = false;
    },

    openDialog() {
      this.dialogVisible = true;
    },
    closeDialog() {
      this.limpiarCampos();
      this.dialogVisible = false;
    },

    // LIMPIAR LOS CAMPOS
    limpiarCampos() {
      this.newsCreateList = {
        image: "",
        title: "",
        description: ""
      };
      this.newsEditList = {
        image: "",
        title: "",
        description: ""
      };
      this.file = "";
    },
    openUpdateDialog(noticia) {
      // Cargar los datos del producto seleccionado en el diálogo de edición
      this.newsEditList = { ...noticia };
      this.idEditada = noticia._id;
      this.updateDialogVisible = true;
    },
    closeUpdateDialog() {
      this.limpiarCampos();
      this.updateDialogVisible = false;
    },
    onFileChange(event) {
      this.file = event.target.files[0];
      // Asignar el archivo a la propiedad image
      this.newsCreateList.image = this.file;
    }
  }
};
</script>

<style scoped>
.black-text {
  color: rgb(118, 118, 255);
}

.fab-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
}

.broadcast-news {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
}

.news-item {
  width: calc(50% - 20px);
  margin-bottom: 20px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.news-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.news-content {
  padding: 20px;
}

.news-title {
  margin-top: 0;
  font-size: 1.2rem;
}

.news-description {
  color: #555;
}
</style>