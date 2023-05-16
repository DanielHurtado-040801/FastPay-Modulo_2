import { Link } from "react-router-dom";

export function Navigation() {
  return (
      <nav className="flex sm:justify-left space-x-4 py-5 mb-5 bg-zinc-800 shadow-lg shadow-gray-400">
        {[
          ["Home Usuarios", "/usuarios"],
          ["Crear Usuario", "/usuarios-create"],
          ["Home Vehiculos", "/vehiculos"],
          ["Crear Vehiculos", "/vehiculos-create"],
          ["Logout", "/logout"],
        ].map(([title, url], index) => (
          <div key={index} className=" h-full">
            <a
              href={url}
              className="px-3 py-6 my-4 text-white font-medium hover:bg-blue-700 ml-5 hover:text-white hover:font-bold"
            >
              {title}
            </a>
          </div>
        ))}
      </nav>
  );
}
