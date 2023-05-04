import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  createVehiculo,
  deleteVehiculo,
  updateVehiculo,
  getOneVehiculo,
} from "../api/vehiculos.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

//para mejor validaciones en el form instalar las librerias yup y zod

export function VehiculosForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const parametros = useParams();

  const onSubmit = handleSubmit(async (data) => {
    //Validamos si estamos accediendo para actualizar o crear un usuario mediante la URL si tiene o no un id
    if (parametros.id) {
      await updateVehiculo(parametros.id, data);
      toast.success("Vehiculo Actualizado Correctamente!", {
        position: "top",
        style: { background: "#101010", color: "#FFFFFF" },
      });
    } else {
      await createVehiculo(data);
      toast.success("Vehiculo Creado Correctamente!", {
        position: "top",
        style: { background: "#101010", color: "#FFFFFF" },
      });
    }
    navigate("/vehiculos");
  });

  useEffect(() => {
    async function cargarVehiculo() {
      if (parametros.id) {
        //Obtenemos los datos del usuario por el id y llenamos el formulario con esos datos para poder actualizarlo
        const respuesta = await getOneVehiculo(parametros.id);
        setValue("placa", respuesta.data.placa);
        setValue("hora_ingreso", respuesta.data.hora_ingreso);
        setValue("hora_salida", respuesta.data.hora_salida);
        setValue("salida", respuesta.data.salida);
      }
    }
    cargarVehiculo();
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-20">
      <form
        onSubmit={onSubmit}
        action=""
        class="bg-white shadow-md shadow-zinc-500 rounded-lg px-8 pt-6 pb-8 flex flex-col"
      >
        <span className="font-bold text-zinc-600">Placa</span>
        <input
          type="text"
          placeholder="placa"
          {...register("placa", { required: true })}
          className="border-2 shadow-md shadow-zinc-200 p-3 rounded-lg block w-full mt-2"
        />
        {errors.placa && (
          <span className="text-red-500">** Este campo es requerido</span>
        )}

        <span className="font-bold text-zinc-600">Hora Ingreso</span>
        <input
          type="text"
          placeholder="hora_ingreso"
          {...register("hora_ingreso", { required: true })}
          className="border-2 shadow-md shadow-zinc-200 p-3 rounded-lg block w-full mb-0 mt-2"
        />
        {errors.hora_ingreso && (
          <span className="text-red-500">** Este campo es requerido</span>
        )}

<span className="font-bold text-zinc-600">Hora Salida</span>
        <input
          type="text"
          placeholder="hora_salida"
          {...register("hora_salida", { required: true })}
          className="border-2 shadow-md shadow-zinc-200 p-3 rounded-lg block w-full mb-0 mt-2  "
        />
        {errors.hora_salida && (
          <span className="text-red-500">** Este campo es requerido</span>
        )}

<span className="font-bold text-zinc-600">Salida</span>
        <input
          type="checkbox"
          {...register("salida")}
          className="border-2 shadow-md shadow-zinc-200 p-3 rounded-lg block w-full mb-0 mt-2  "
        />

<span className="font-bold text-zinc-600">Foto</span>
        <input
          type="file"
          {...register("img_placa", { required: false })}
          className="border-2 shadow-md shadow-zinc-200 p-3 rounded-lg block w-full mb-0 mt-2  "
        />
        {errors.img_placa && (
          <span className="text-red-500">** Este campo es requerido</span>
        )}

        <button className="shadow-md bg-blue-600 p-3 rounded-lg block w-full mt-3  shadow-zinc-400 text-white font-bold">
          Guardar
        </button>
      </form>
      {parametros.id && (
        <button
          className="bg-red-500 p-3 rounded-lg w-full mt-3  shadow-zinc-900 text-white font-bold"
          onClick={async () => {
            const confirmar = window.confirm("¿Estas seguro?");
            if (confirmar) {
              await deleteVehiculo(parametros.id);
              toast.success("Vehiculo Eliminado Correctamente!", {
                position: "top",
                style: { background: "#101010", color: "#FFFFFF" },
              });
              navigate("/vehiculos");
            }
          }}
        >
          Eliminar
        </button>
      )}
    </div>
  );
}
