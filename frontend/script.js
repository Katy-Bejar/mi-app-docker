const API_URL = 'http://localhost:5000/api';

// Elementos del DOM
const userForm = document.getElementById('userForm');
const usersContainer = document.getElementById('users');
const loadingElement = document.getElementById('loading');
const statusElement = document.getElementById('status');

// Cargar usuarios al iniciar
document.addEventListener('DOMContentLoaded', () => {
    loadUsers();
    checkHealth();
    setInterval(loadUsers, 5000); // Actualizar cada 5 segundos
    setInterval(checkHealth, 10000); // Chequear salud cada 10 segundos
});

// Form submit handler
userForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    try {
        const response = await fetch(`${API_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email })
        });

        const result = await response.json();

        if (response.ok) {
            alert('Usuario agregado correctamente');
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            loadUsers();
        } else {
            alert('Error: ' + result.error);
        }
    } catch (error) {
        alert('Error de conexión con el servidor');
    }
});

// Función para cargar usuarios
async function loadUsers() {
    try {
        const response = await fetch(`${API_URL}/users`);
        if (!response.ok) throw new Error('Error al cargar usuarios');
        
        const users = await response.json();
        
        loadingElement.style.display = 'none';
        usersContainer.innerHTML = '';
        
        if (users.length === 0) {
            usersContainer.innerHTML = '<p class="no-users">No hay usuarios registrados</p>';
            return;
        }

        users.forEach(user => {
            const userElement = document.createElement('div');
            userElement.className = 'user-card';
            userElement.innerHTML = `
                <div class="user-info">
                    <div class="user-name">${user.name}</div>
                    <div class="user-email"> ${user.email}</div>
                    <div class="user-date"> Registrado: ${new Date(user.created_at).toLocaleString()}</div>
                </div>
                <button class="delete-btn" onclick="deleteUser(${user.id})">Eliminar</button>
            `;
            usersContainer.appendChild(userElement);
        });
    } catch (error) {
        loadingElement.textContent = 'Error al cargar usuarios';
        console.error('Error loading users:', error);
    }
}

// Función para eliminar usuario
async function deleteUser(userId) {
    if (!confirm('¿Estás seguro de que quieres eliminar este usuario?')) return;

    try {
        const response = await fetch(`${API_URL}/users/${userId}`, {
            method: 'DELETE'
        });

        const result = await response.json();

        if (response.ok) {
            alert('Usuario eliminado correctamente');
            loadUsers();
        } else {
            alert('Error: ' + result.error);
        }
    } catch (error) {
        alert('Error de conexión');
    }
}

// Función para chequear salud del sistema
async function checkHealth() {
    try {
        const response = await fetch(`${API_URL}/health`);
        const health = await response.json();
        
        statusElement.textContent = `Sistema conectado | Backend: ${health.status} | Base de datos: ${health.database}`;
        statusElement.className = 'status connected';
    } catch (error) {
        statusElement.textContent = 'Error de conexión con el backend';
        statusElement.className = 'status error';
    }
}