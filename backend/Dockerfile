#Imagen base Python
FROM python:3.9-slim 

#Directorio de trabajo
WORKDIR /app                           

#instala dependencias del sistema para MySQL
RUN apt-get update && apt-get install -y \
    default-libmysqlclient-dev \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

#copia dependencias
COPY requirements.txt .  
#instalar dependencias Python              
RUN pip install --no-cache-dir -r requirements.txt  

COPY . .                
             
EXPOSE 5000                           

# Comando para ejecutar la app
CMD ["python", "app.py"]