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
      requestOptions
    );
    const responseData = await response.json();

    // Manejar la respuesta de la API, por ejemplo:
    if (response.ok) {
      localStorage.setItem("token", responseData.token);

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
    <div className="max-w-lg mx-auto md:mt-40 mt-0 grid justify-items-center">
      <form
        onSubmit={onSubmit}
        action=""
        className="bg-white shadow-md shadow-zinc-500 rounded-lg px-8 pt-6 pb-8 flex flex-col"
      >
        <h1 className="text-center font-bold text-2xl">LOGIN</h1>
        <div className="w-full h-full grid justify-items-center">
          <img
            src="public/Logo FastPay (1).svg"
            alt="logo"
            className="w-20 h-20 mt-5  transform scale-150"
          />
        </div>
        <input
          type="text"
          placeholder="username"
          {...register("username", { required: true })}
          className="border-2 shadow-md shadow-zinc-200 p-3 rounded-lg block w-60 mt-5 "
        />
        {errors.username && (
          <span className="text-red-500">** Este campo es requerido</span>
        )}

        <input
          type="password"
          placeholder="password"
          {...register("password", { required: true })}
          className="border-2 shadow-md shadow-zinc-200 p-3 rounded-lg block w-full mb-0 mt-5  "
        />
        {errors.password && (
          <span className="text-red-500">** Este campo es requerido</span>
        )}

        <a href="/usuarios-create" className="text-blue-600 underline mt-3 ml-2 text-sm">
          Create a new account
        </a>

        <button className="shadow-md bg-blue-600 p-3 rounded-lg block w-full shadow-zinc-400 text-white font-bold mt-8 hover:bg-blue-800">
          Login
        </button>
      </form>
    </div>
  );
}
