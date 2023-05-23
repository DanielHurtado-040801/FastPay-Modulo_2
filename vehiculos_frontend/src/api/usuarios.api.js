import axios from "axios";
import { Auth0Provider } from "@auth0/auth0-react";

//Creamos la url base para solo agregar las rutas mas simples a la url base y tener el codigo mas ordenado
const usuariosApi = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

//Peticion GET para obtener todos los usuarios
export const getAllUsers = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return usuariosApi.get("/usuario/usuario/", {
      params: { token },
    });
  } else {
    window.location.href = "/";
  }
};

//Obtener un usuario por su id
export const getOneUser = (id) => usuariosApi.get(`/usuario/usuario/${id}`);

//Peticion post para crear un nuevo usuario
export const createUser = (usuario) => {
  const token = localStorage.getItem("token");
  if (token) {
    return usuariosApi.post("/usuario/usuario/", usuario, {
      params: { token },
    });
  } else {
    window.location.href = "/";
  }
};

//Peticion para eliminar un usuario mediante su ID
export const deleteUser = (id) => {
  const token = localStorage.getItem("token");
  if (token) {
    return usuariosApi.delete(`/usuario/usuario/${id}`, {
      params: { token },
    });
  } else {
    window.location.href = "/";
  }
};
//Petiicion para actualizar un usuario obteniendo sus datos mediante el id
export const updateUser = (id, usuario) => {
  const token = localStorage.getItem("token");
  if (token) {
    return usuariosApi.put(`/usuario/usuario/${id}/`, usuario, {
      params: { token },
    });
  } else {
    window.location.href = "/";
  }
};
//Login usuarios
export const loginUser = (usuario) => usuariosApi.post(`/login/`, usuario);

export const logoutUser = async () => {
  const token = localStorage.getItem("token");

  try {
    await usuariosApi.get(`/logout/`, {
      params: { token },
    });

    // Eliminar el token del localStorage
    localStorage.removeItem("token");

    // Redireccionar a la página principal
    window.location.href = "/";
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
};