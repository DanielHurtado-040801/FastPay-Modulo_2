import axios from "axios";
import { toast } from "react-hot-toast";


//Creamos la url base para solo agregar las rutas mas simples a la url base y tener el codigo mas ordenado
const parkingApi = axios.create({
  baseURL: "http://localhost:8000/",
});

//Peticion GET para obtener todos los vehiculos
export const getParkingParameters = () => {
  const token = localStorage.getItem("token");

  if (token) {
    return parkingApi.get("/parking/parking/1", {
      params: { token },
    });
  } else {
    window.location.href = "/";
  }
};

export const getParameter = (id) =>
  parkingApi.get(`/parking/parking/1`);


//Petiicion para actualizar un usuario obteniendo sus datos mediante el id
export const updateParkingParameters = (parking_parameters) => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  if (token) {
    return parkingApi.put(`/parking/parking/1`, parking_parameters, {
      params: { token, userId},
    });
  } else {
    window.location.href = "/";
  }
};
