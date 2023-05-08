import axios from 'axios'
import {Auth0Provider} from '@auth0/auth0-react'

//Creamos la url base para solo agregar las rutas mas simples a la url base y tener el codigo mas ordenado
const usuariosApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
})

//Peticion GET para obtener todos los usuarios
export const getAllUsers = () => usuariosApi.get('/usuario/usuario/');

export const getOneUser = (id) => usuariosApi.get(`/usuario/usuario/${id}`);
//Peticion post para crear un nuevo usuario
export const createUser = (usuario) => usuariosApi.post('/usuario/usuario/', usuario);
//Peticion para eliminar un usuario mediante su ID
export const deleteUser = (id) => usuariosApi.delete(`/usuario/usuario/${id}`);
//Petiicion para actualizar un usuario obteniendo sus datos mediante el id
export const updateUser = (id, usuario) => usuariosApi.put(`/usuario/usuario/${id}/`, usuario);
//Login usuarios
export const login = () => usuariosApi.post(`/login`);