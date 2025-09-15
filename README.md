# Sistema de Gestión de Usuarios con Docker

## Descripción
Aplicación web completa desarrollada con arquitectura de microservicios utilizando Docker. El sistema permite el registro y gestión de usuarios mediante tres contenedores interconectados.

## 🏗Arquitectura
Usuario → Frontend (Nginx:8080) → Backend (Flask:5000) → Database (MySQL:3307)



## 🛠Tecnologías
- **Frontend:** HTML5, CSS3, JavaScript, Nginx
- **Backend:** Python 3.9, Flask, MySQL Connector
- **Database:** MySQL 8.0
- **Containerización:** Docker, Docker Compose

## Instalación y Ejecución

### Prerrequisitos
- Docker instalado
- Docker Compose instalado
- Git instalado

### Pasos para ejecutar

1. **Clonar el repositorio**
git clone https://github.com/Katy-Bejar/mi-app-docker.git
cd mi-app-docker

2. **Configurar variables de entorno**
cp .env.example .env
# Editar el archivo .env si es necesario

3. **Construir y ejecutar los contenedores**
docker-compose up --build

4. **Acceder a la aplicación**
Frontend: http://localhost:8080
API Backend: http://localhost:5000/api/health
MySQL: localhost:3307 (usuario: root, contraseña: rootpassword)



