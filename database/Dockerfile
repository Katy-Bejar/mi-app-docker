FROM mysql:8.0

#copiar script de inicialización
COPY ../init.sql /docker-entrypoint-initdb.d/

# Variables de entorno por defecto
ENV MYSQL_ROOT_PASSWORD=rootpassword
ENV MYSQL_DATABASE=mi_app_db
ENV MYSQL_USER=admin
ENV MYSQL_PASSWORD=password

EXPOSE 3306

#el comando por defecto de la imagen ya inicia MySQL