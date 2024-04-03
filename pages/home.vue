<template>
  <v-app>
    <div>
      <v-app-bar app>
        <v-toolbar-title>R6 PIXEL</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text @click="goToProcesos">Procesos</v-btn>
        <v-btn text @click="goToDashboard">Dashboard</v-btn>
      </v-app-bar>

      <!-- BTN para entrar en modo editor de noticias -->
      <v-btn fab dark color="primary" class="fab-btn" @click="openDialog">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      
      <!-- ver broadcast news -->
      <div style="margin-top: 70px;" class="broadcast-news">
        <v-row>
          <v-col v-for="(news, index) in newsList" :key="index" cols="6">
            <v-card style="width: 900px; height: 500px;">
              <v-card-title>{{ news.title }}</v-card-title>
              <v-row>
                <v-col cols="6">
                  <v-card-text>{{ news.description }}</v-card-text>
                </v-col>
                <v-col cols="6">
                  <img :src="news.image" alt="News Image" class="news-image">
                </v-col>  
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </div>


      <!-- DIALOG CON LAS NOTICIAS EDITAR + ELIMINAR-->
      <v-dialog v-model="dialogVisible" max-width="2000">
        <v-card>
          <v-card-title class="d-flex justify-space-between align-center">
            <span class="headline">Administrar noticias</span>
            <v-btn color="blue" @click="openCreateDialog">Crear noticias</v-btn>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col v-for="(news, index) in newsList" :key="index" cols="6">
                <v-card class="news-item" style="margin: 20px; width: 700px;" max-width="100%">
                  <v-card-text class="d-flex justify-space-between align-center">
                    <h2 style="color: black;">{{ news.title }}</h2>
                    <v-spacer></v-spacer>
                    <v-icon @click="openUpdateDialog(news)" dark color="black" style="margin-right: 10px;">mdi-pencil</v-icon>

                    <v-icon @click="eliminarNoticia(news)" dark color="red">mdi-delete</v-icon>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn color="red" text @click="closeDialog">Cerrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- DIALOG para EDITAR noticia -->
      <v-dialog v-model="updateDialogVisible" max-width="600">
        <v-card style="max-height: 1900px;">
          <v-card-title>
            <span class="headline">Editar Noticia</span>
          </v-card-title>
          <v-card-text>

            <v-text-field v-model="newsEditList.title" label="Título"></v-text-field>
            <v-textarea v-model="newsEditList.description" label="Descripción" auto-grow></v-textarea>
            <input type="file" @change="onFileChangeUpdate" class="black-text">

          </v-card-text>
          <v-card-actions>
            <v-btn color="blue darken-1" text @click="saveNews">Guardar</v-btn>
            <v-btn color="red" text @click="closeUpdateDialog">Cancelar</v-btn>
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
            <v-textarea v-model="newsCreateList.description" label="Descripción" auto-grow></v-textarea>
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
      updateFile: "",
      idEditada:null,
      noticiaEditadaIndex: null,
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

       // Guardar los cambios realizados en la noticia
       if (this.idEditada !== null) {

      let noticiaEditadaSinId = { ...this.newsEditList };
      delete noticiaEditadaSinId._id;

      // Actualizar la noticia existente en newsList con los datos modificados
      this.$set(this.newsList, this.noticiaEditadaIndex, noticiaEditadaSinId);

      try {
      // Realizar la petición de actualización del estado
      await updateBroadcastNews(this.idEditada, noticiaEditadaSinId);
      
      // LMPIAR CAMPOS
      this.limpiarCampos();

      this.updateDialogVisible= false;

      // Actualizar la lista
      await this.loadNews();

    } catch (error) {
      console.error('Error updating news:', error);
    }
      }
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
    openUpdateDialog(news) {
      // Cargar los datos del producto seleccionado en el diálogo de edición
      this.newsEditList = { ...news };
      this.idEditada = news._id;
      // Guardar el índice de la noticia editanda
      this.noticiaEditadaIndex = this.newsList.indexOf(news);
      this.updateDialogVisible = true;
    },

    // ELIMINAR NOTICIA
    async eliminarNoticia(news) {
      if (confirm("¿Estás seguro de que deseas eliminar esta noticia?")) {
        await deleteBroadcastNews(news._id);
        this.limpiarCampos();
        this.loadNews();
      }
    },
    closeUpdateDialog() {
      this.limpiarCampos();
      this.updateDialogVisible = false;
    },
    onFileChange(event) {
      this.file = event.target.files[0];
      // Asignar el archivo a la propiedad image
      this.newsCreateList.image = this.file;
    },
    onFileChangeUpdate(event) {
      this.updateFile = event.target.files[0];
      // Asignar el archivo a la propiedad image
      this.newsEditList.image = this.updateFile;
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