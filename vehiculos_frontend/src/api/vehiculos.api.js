import axios from 'axios'

//Creamos la url base para solo agregar las rutas mas simples a la url base y tener el codigo mas ordenado
const vehiculosApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
})

//Peticion GET para obtener todos los vehiculos
export const getAllVehicles = () => {
    const token = localStorage.getItem("token");
    if (token) {
      return vehiculosApi.get("/vehiculo/vehiculo/", {
        params: { token },
      });
    } else {
      window.location.href = "/";
    }
  };

export const getOneVehiculo = (id) => vehiculosApi.get(`/vehiculo/vehiculo/${id}`);
//Peticion post para crear un nuevo usuario
export const createVehiculo = (vehiculo) => vehiculosApi.post('/vehiculo/vehiculo/', vehiculo);
//Peticion para eliminar un usuario mediante su ID
export const deleteVehiculo = (id) => vehiculosApi.delete(`/vehiculo/vehiculo/${id}`);
//Petiicion para actualizar un usuario obteniendo sus datos mediante el id
export const updateVehiculo = (id, vehiculo) => vehiculosApi.put(`/vehiculo/vehiculo/${id}`, vehiculo);