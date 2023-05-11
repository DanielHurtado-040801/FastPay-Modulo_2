import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../api/usuarios.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

//para mejor validaciones en el form instalar las librerias yup y zod

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(data),
    };

    const response = await fetch(
      "http://localhost:8000/login/",
      requestOptions,
    );
    const responseData = await response.json();


    // Manejar la respuesta de la API, por ejemplo:
    if (response.ok) {
      localStorage.setItem('token', responseData.token);

      toast.success("Usuario Loggeado Correctamente!", {
        position: "top",
        style: { background: "#101010", color: "#FFFFFF" },
      });
      navigate("/usuarios");
    } else {
      // Manejar el caso en que la API devuelve un error
      console.error(responseData);
      toast.error("Usuario o contraseña incorrectos!! ☹️", {
        position: "top",
        style: { background: "#101010", color: "#FFFFFF" },
      });
    }
  });

  return (
    <div className="max-w-lg mx-auto mt-20">
      <form
        onSubmit={onSubmit}
        action=""
        class="bg-white shadow-md shadow-zinc-500 rounded-lg px-8 pt-6 pb-8 flex flex-col"
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
          Login
        </button>
      </form>
    </div>
  );
}
