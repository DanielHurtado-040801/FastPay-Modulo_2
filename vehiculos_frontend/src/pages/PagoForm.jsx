import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { validarPago, getOneVehiculo, pagar } from "../api/vehiculos.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { format } from "date-fns";
import { PUBLIC_URL } from "/postcss.config.js";

//para mejor validaciones en el form instalar las librerias yup y zod

export function PagoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const parametros = useParams();
  const [imagenPlaca, setImagenPlaca] = useState(null);

  const onSubmit = handleSubmit(async (data) => {
    //Validamos si estamos accediendo para actualizar o crear un usuario mediante la URL si tiene o no un id
    if (parametros.id) {
      await pagar(parametros.id, data);
      toast.success("Parqeuadero Pago Correctamente!", {
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
        const horaIngresoFormateada = format(
          new Date(respuesta.data.hora_ingreso),
          "yyyy-MM-dd HH:mm:ss"
        );
        const horaPagoFormateada = format(
          new Date(respuesta.data.hora_ingreso),
          "yyyy-MM-dd HH:mm:ss"
        );
        setValue("hora_ingreso", respuesta.data.hora_ingreso);
        setValue("hora_pago", respuesta.data.hora_pago);
        setValue("hora_pago", respuesta.data.hora_pago);
        setValue("valor_pagar", respuesta.data.valor_pagar);
        setImagenPlaca(`${PUBLIC_URL + respuesta.data.img_placa}`);
        console.log(respuesta);
      }
    }
    cargarVehiculo();
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-10">
      <form
        onSubmit={onSubmit}
        action=""
        className="bg-white shadow-md shadow-zinc-500 rounded-lg px-8 pt-6 pb-8 flex flex-col"
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

        <span className="font-bold text-zinc-600 mt-1">Hora Ingreso</span>
        <input
          type="text"
          placeholder="hora_ingreso"
          {...register("hora_ingreso", { required: true })}
          className="border-2 shadow-md shadow-zinc-200 p-3 rounded-lg block w-full mb-0 mt-2"
        />
        {errors.hora_ingreso && (
          <span className="text-red-500">** Este campo es requerido</span>
        )}
        <span className="font-bold text-zinc-600">Hora de Pago</span>
        <input
          type="text"
          placeholder="Hora Salida"
          {...register("hora_pago", { required: false })}
          className="border-2 shadow-md shadow-zinc-200 p-3 rounded-lg block w-full mb-0 mt-2"
        />
        {errors.hora_ingreso && (
          <span className="text-red-500">** Este campo es requerido</span>
        )}
        <span className="font-bold text-zinc-600">Valor a Pagar</span>
        <input
          type="number"
          placeholder="Valor a pagar"
          {...register("valor_pagar", { required: false })}
          className="border-2 shadow-md shadow-zinc-200 p-3 rounded-lg block w-full mb-0 mt-2"
        />
        {errors.hora_ingreso && (
          <span className="text-red-500">** Este campo es requerido</span>
        )}
        {imagenPlaca && (
          <img src={imagenPlaca} alt="Foto del vehículo" className="mt-3" />
        )}
        <button className="shadow-md bg-green-600 p-3 rounded-lg block w-full mt-3  shadow-zinc-400 text-white font-bold">
          Pagar
        </button>
      </form>
    </div>
  );
}
