import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  createUser,
  deleteUser,
  updateUser,
  getOneUser,
} from "../api/usuarios.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

//para mejor validaciones en el form instalar las librerias yup y zod

export function UsuariosForm() {
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
      await updateUser(parametros.id, data);
      toast.success("Usuario Actualizado Correctamente!", {
        position: "top",
        style: { background: "#101010", color: "#FFFFFF" },
      });
    } else {
      await createUser(data);
      toast.success("Usuario Creado Correctamente!", {
        position: "top",
        style: { background: "#101010", color: "#FFFFFF" },
      });
    }
    navigate("/usuarios");
  });

  useEffect(() => {
    async function cargarUsuario() {
      if (parametros.id) {
        //Obtenemos los datos del usuario por el id y llenamos el formulario con esos datos para poder actualizarlo
        const respuesta = await getOneUser(parametros.id);
        setValue("username", respuesta.data.username);
        setValue("name", respuesta.data.name);
        setValue("last_name", respuesta.data.last_name);
        setValue("email", respuesta.data.email);
      }
    }
    cargarUsuario();
  }, []);

  return (
    <div className="max-w-lg mx-auto my-10 grow">
      <form
        onSubmit={onSubmit}
        action=""
        className="bg-white shadow-md shadow-zinc-500 rounded-lg px-8 pt-6 pb-8 flex flex-col"
      >
        <span className="font-bold text-zinc-600">Username</span>
        <input
          type="text"
          placeholder="username"
          {...register("username", { required: true })}
          className="border-2 shadow-md shadow-zinc-200 p-3 rounded-lg block w-full mt-2"
        />
        {errors.username && (
          <span className="text-red-500">** Este campo es requerido</span>
        )}

        <span className="font-bold text-zinc-600">Name</span>
        <input
          type="text"
          placeholder="name"
          {...register("name", { required: true })}
          className="border-2 shadow-md shadow-zinc-200 p-3 rounded-lg block w-full mb-0 mt-2"
        />
        {errors.name && (
          <span className="text-red-500">** Este campo es requerido</span>
        )}

<span className="font-bold text-zinc-600">Lastname</span>
        <input
          type="text"
          placeholder="lastname"
          {...register("last_name", { required: true })}
          className="border-2 shadow-md shadow-zinc-200 p-3 rounded-lg block w-full mb-0 mt-2  "
        />
        {errors.last_name && (
          <span className="text-red-500">** Este campo es requerido</span>
        )}

<span className="font-bold text-zinc-600">Email</span>
        <input
          type="email"
          placeholder="email"
          {...register("email", { required: true })}
          className="border-2 shadow-md shadow-zinc-200 p-3 rounded-lg block w-full mb-0 mt-2  "
        />
        {errors.email && (
          <span className="text-red-500">** Este campo es requerido</span>
        )}

<span className="font-bold text-zinc-600">Password</span>
        <input
          type="password"
          placeholder="password"
          {...register("password", { required: true })}
          className="border-2 shadow-md shadow-zinc-200 p-3 rounded-lg block w-full mb-0 mt-2  "
        />
        {errors.password && (
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
              await deleteUser(parametros.id);
              toast.success("Usuario Eliminado Correctamente!", {
                position: "top",
                style: { background: "#101010", color: "#FFFFFF" },
              });
              navigate("/usuarios");
            }
          }}
        >
          Eliminar
        </button>
      )}
    </div>
  );
}
