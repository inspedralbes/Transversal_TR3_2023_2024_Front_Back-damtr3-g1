import os
import matplotlib.pyplot as plt
import pandas as pd
import requests

# Ruta del archivo de imagen
ruta_imagen = 'grafico_beneficios.png'

# Verificar si el archivo de imagen existe y eliminarlo si es así
if os.path.exists(ruta_imagen):
    os.remove(ruta_imagen)
    print(f"Archivo {ruta_imagen} existente eliminado.")

# Definir la función para obtener los beneficios
def getBeneficios():
    try:
        url = 'http://r6pixel.duckdns.org:3170/getCompras'
        response = requests.get(url)
        response.raise_for_status()  # Levanta una excepción en caso de error de solicitud HTTP
        return response.json()
    except requests.exceptions.RequestException as e:
        print('Error al obtener beneficios:', e)
        return None

# Obtener los beneficios
beneficios = getBeneficios()

# Si la función retorna None, detener el proceso
if beneficios is None:
    print("No se pudieron obtener los beneficios. Saliendo del programa.")
    exit()

# Convertir la lista de beneficios a un DataFrame de Pandas
df_beneficios = pd.DataFrame(beneficios)

# Convertir la columna de fechas a tipo datetime
df_beneficios['fecha'] = pd.to_datetime(df_beneficios['fecha'])

# Agrupar los beneficios por día, mes y año y sumarlos
beneficios_por_dia = df_beneficios.groupby(df_beneficios['fecha'].dt.date)['dinero_gastado'].sum()
beneficios_por_mes = df_beneficios.groupby(df_beneficios['fecha'].dt.to_period('M'))['dinero_gastado'].sum()
beneficios_por_anio = df_beneficios.groupby(df_beneficios['fecha'].dt.to_period('Y'))['dinero_gastado'].sum()

# Graficar
plt.figure(figsize=(12, 6))

plt.subplot(1, 3, 1)
beneficios_por_dia.plot(kind='bar', color='blue')
plt.title('Beneficios Generados por Día')
plt.xlabel('Fecha')
plt.ylabel('Beneficios Generados')

plt.subplot(1, 3, 2)
beneficios_por_mes.plot(kind='bar', color='green')
plt.title('Beneficios Generados por Mes')
plt.xlabel('Mes')
plt.ylabel('Beneficios Generados')

plt.subplot(1, 3, 3)
beneficios_por_anio.plot(kind='bar', color='orange')
plt.title('Beneficios Generados por Año')
plt.xlabel('Año')
plt.ylabel('Beneficios Generados')

plt.tight_layout()

# Guarda el gráfico como una imagen
plt.savefig(ruta_imagen)
print(f"Gráfico de beneficios guardado en {ruta_imagen}.")