import os
import matplotlib.pyplot as plt
import pandas as pd
import requests
import sys
import json

# Ruta del archivo de imagen
ruta_imagen = 'grafico_usuarios.png'

# Verificar si el archivo de imagen existe y eliminarlo si es así
if os.path.exists(ruta_imagen):
    os.remove(ruta_imagen)
    print(f"Archivo {ruta_imagen} existente eliminado.")

# Resto del código para obtener usuarios y generar el gráfico (sin cambios)
# Definir la función para obtener usuarios
def get_usuarios():
    try:
        url = 'http://r6pixel.duckdns.org:3170/getUsuarios'
        response = requests.get(url)
        response.raise_for_status()  # Levanta una excepción en caso de error de solicitud HTTP
        print(response.json())
        return response.json()
    except requests.exceptions.RequestException as e:
        print('Error al obtener usuarios:', e)
        return None

# Obtener los usuarios utilizando la función del communicationsManager
usuarios = get_usuarios()

# Si la función retorna None, detener el proceso
if usuarios is None:
    print("No se pudieron obtener los usuarios. Saliendo del programa.")
    exit()

# Convertir la lista de usuarios a un DataFrame de Pandas
df_usuarios = pd.DataFrame(usuarios)

# Convertir la columna de fechas a tipo datetime
df_usuarios['fecha_altaUser'] = pd.to_datetime(df_usuarios['fecha_altaUser'])

# Filtros por día, mes y año
filtro_dia = df_usuarios.groupby(df_usuarios['fecha_altaUser'].dt.date).size()
filtro_mes = df_usuarios.groupby(df_usuarios['fecha_altaUser'].dt.to_period('M')).size()
filtro_anio = df_usuarios.groupby(df_usuarios['fecha_altaUser'].dt.to_period('Y')).size()

# Graficar
plt.figure(figsize=(12, 6))

plt.subplot(1, 3, 1)
filtro_dia.plot(kind='bar', color='blue')
plt.title('Usuarios Registrados por Día')
plt.xlabel('Fecha')
plt.ylabel('Cantidad de Usuarios')

plt.subplot(1, 3, 2)
filtro_mes.plot(kind='bar', color='green')
plt.title('Usuarios Registrados por Mes')
plt.xlabel('Mes')
plt.ylabel('Cantidad de Usuarios')

plt.subplot(1, 3, 3)
filtro_anio.plot(kind='bar', color='orange')
plt.title('Usuarios Registrados por Año')
plt.xlabel('Año')
plt.ylabel('Cantidad de Usuarios')

plt.tight_layout()

# Guarda el gráfico como una imagen
plt.savefig(ruta_imagen)
print(f"Gráfico de usuarios guardado en {ruta_imagen}.")