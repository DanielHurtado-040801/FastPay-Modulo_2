import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { updateParkingParameters, getParameter } from "../api/parking.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { format } from "date-fns";
import { PUBLIC_URL } from "/postcss.config.js";

export function ParkingParametersForm() {
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
    await updateParkingParameters(data);
    toast.success("Parametros Actualizados Correctamente!", {
      position: "top",
      style: { background: "#101010", color: "#FFFFFF" },
    });
    navigate("/vehiculos");
  });

  useEffect(() => {
    async function cargarParametros() {
      //Obtenemos los datos del usuario por el id y llenamos el formulario con esos datos para poder actualizarlo
      const respuesta = await getParameter(parametros.id);
      setValue("valor_minuto", respuesta.data.valor_minuto);
      setValue("tarifa_minima", respuesta.data.tarifa_minima);
      setValue("tarifa_maxima", respuesta.data.tarifa_maxima);
      console.log(respuesta);
    }
    cargarParametros();
  }, []);

  return (
    <div className="max-w-lg mx-auto md:mt-28 grow mt-0">
      <form
        onSubmit={onSubmit}
        action=""
        className="bg-white shadow-md shadow-zinc-500 rounded-lg px-8 pt-4 pb-8 flex flex-col"
      >
        <h2 className="text-2xl font-bold mt-4 mb-2 text-blue-600 block w-full">Configuración Parametros de Parqueadero</h2>
        <span className="font-bold text-zinc-600">Valor del Minuto</span>
        <input
          type="number"
          placeholder="Valor Minuto"
          {...register("valor_minuto", { required: true })}
          className="border-2 shadow-md shadow-zinc-200 p-3 rounded-lg block w-full mt-2"
        />
        {errors.valor_minuto && (
          <span className="text-red-500">** Este campo es requerido</span>
        )}

        <span className="font-bold text-zinc-600 mt-1">
          Valor Tarifa Minima (min 800)
        </span>
        <input
          type="number"
          placeholder="tarifa_minima"
          {...register("tarifa_minima", { required: true })}
          className="border-2 shadow-md shadow-zinc-200 p-3 rounded-lg block w-full mb-0 mt-2"
        />
        {errors.tarifa_minima && (
          <span className="text-red-500">** Este campo es requerido</span>
        )}

        <span className="font-bold text-zinc-600  mt-1">
          Tarifa Maxima (tarifa plena)
        </span>
        <input
          type="number"
          placeholder="tarifa_maxima"
          {...register("tarifa_maxima", { required: false, null: true })}
          className="border-2 shadow-md shadow-zinc-200 p-3 rounded-lg block w-full mb-0 mt-2  "
        />
        {errors.tarifa_maxima && (
          <span className="text-red-500">** Este campo es requerido</span>
        )}
        <button className="shadow-md bg-blue-600 p-3 rounded-lg block w-full mt-3  shadow-zinc-400 text-white font-bold">
          Guardar
        </button>
      </form>
    </div>
  );
}
