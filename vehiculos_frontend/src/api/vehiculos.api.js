import axios from "axios";
import { toast } from "react-hot-toast";


//Creamos la url base para solo agregar las rutas mas simples a la url base y tener el codigo mas ordenado
const vehiculosApi = axios.create({
  baseURL: "http://localhost:8000/",
});

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

export const getOneVehiculo = (id) =>
  vehiculosApi.get(`/vehiculo/vehiculo/${id}`);

//Peticion post para crear un nuevo usuario
export const createVehiculo = (vehiculo) => {
  const token = localStorage.getItem("token");
  if (token) {
    return vehiculosApi.post("/vehiculo/vehiculo/", vehiculo, {
      params: { token },
    });
  } else {
    window.location.href = "/";
  }
};
//Peticion para eliminar un usuario mediante su ID
export const deleteVehiculo = (id) => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  if (token) {
    return vehiculosApi.delete(`/vehiculo/vehiculo/${id}`, {
      params: { token, userId},
    });
  } else {
    window.location.href = "/";
  }
};
//Petiicion para actualizar un usuario obteniendo sus datos mediante el id
export const updateVehiculo = (id, vehiculo) => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  if (token) {
    return vehiculosApi.put(`/vehiculo/vehiculo/${id}`, vehiculo, {
      params: { token, userId},
    });
  } else {
    window.location.href = "/";
  }
};

//Petiicion para actualizar un usuario obteniendo sus datos mediante el id
export const validarPago = (id) => {
  const token = localStorage.getItem("token");
  try {
    vehiculosApi.get(`/vehiculo/vehiculo/pagar/${id}`, {
      params: { token },
    });
    // Redireccionar a la página principal
    toast.success("Ya se ha calculado el valor a pagar 😃!!", {
      position: "top",
      style: { background: "#101010", color: "#FFFFFF" },
    });
  } catch (error) {
    console.error("Error al calcular valor a pagar", error);
    toast.error("Ya se ha pagado 😃!!", {
      position: "top",
      style: { background: "#101010", color: "#FFFFFF" },
    });
  }
};

export const pagar = (id, vehiculo) => {  
  const token = localStorage.getItem("token");
  console.log(vehiculo)
  try {
    vehiculosApi.put(`/vehiculo/vehiculo/pagar/${id}`, vehiculo , {
      params: { token },
    });
    // Redireccionar a la página principal
    toast.success("Pagado exitosamente😃!!", {
      position: "top",
      style: { background: "#101010", color: "#FFFFFF" },
    });
  } catch (error) {
    console.error("Error al pagar", error);
    toast.error("Error al pagar😃!!", {
      position: "top",
      style: { background: "#101010", color: "#FFFFFF" },
    });
  }
}
