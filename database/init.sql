-- Crear base de datos (por si acaso)
CREATE DATABASE IF NOT EXISTS mi_app_db;
USE mi_app_db;

-- Crear tabla de usuarios
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insertar datos de ejemplo
INSERT IGNORE INTO users (name, email) VALUES 
('Juan Perez', 'juan@example.com'),
('María Garcia', 'maria@example.com'),
('Carlos Lopez', 'carlos@example.com');

-- Crear usuario para la aplicación (opcional pero recomendado)
CREATE USER IF NOT EXISTS 'app_user'@'%' IDENTIFIED BY 'app_password';
GRANT ALL PRIVILEGES ON mi_app_db.* TO 'app_user'@'%';
FLUSH PRIVILEGES;