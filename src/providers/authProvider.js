// src/authProvider.js
import { fetchUtils } from 'react-admin';

const AUTH_URL = import.meta.env.VITE_AUTH_URL;
const API_URL = import.meta.env.VITE_API_URL; 

const authProvider = {
  login: async ({ username, password }) => {
    const email = username;
    const request = new Request(`${AUTH_URL}/auth/login`, { // Asume endpoint `/auth/login`
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });

    try {
      const response = await fetch(request);
      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }
      const auth = await response.json();
      localStorage.setItem('token', auth.token);
      localStorage.setItem('user', JSON.stringify(auth.user)); // Guarda el email para saber quién está logueado (opcional)

      return Promise.resolve();
    } catch (error) {
      console.error("Login error:", error);
      throw new Error('Network error or invalid credentials'); // Mejor manejo de errores
    }
  },
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user'); // Limpia el email al cerrar sesión
    return Promise.resolve();
  },
  checkAuth: () => {
    return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
  },
  checkError: (error) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  getPermissions: () => { // Asume que el rol/permisos vienen en el token (si no, ajusta)
    const token = localStorage.getItem('token');
    if (!token) {
      return Promise.resolve(null);
    }
    try {
      // Decodificar el token JWT para obtener la información de los roles/permisos
      const payload = JSON.parse(atob(token.split('.')[1])); // ¡Cuidado!  Validar la estructura del token
      return Promise.resolve(payload.roles || []); // Ajusta según la estructura de tu token
    } catch (error) {
      console.error("Error decoding token:", error);
      return Promise.resolve(null);
    }
  },
  getUserIdentity: () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        return Promise.reject();
      }
      const payload = JSON.parse(atob(token.split('.')[1]));
      // Asegúrate de que payload.email exista y tenga un valor
      if (payload && payload.email) {
        return Promise.resolve({
          id: payload.email, // Usa el email como ID (o el campo que uses como identificador único)
          fullName: payload.name || payload.email, // Usa el nombre si está disponible, sino el email
          avatar: payload.avatar, // Si tienes un campo para la URL del avatar
        });
      } else {
        return Promise.reject();
      }
    } catch (error) {
      return Promise.reject(error);
    }
  },
};

export { authProvider };