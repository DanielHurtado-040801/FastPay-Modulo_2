import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function Navigation() {
  const token = localStorage.getItem("token");
  const [showLogoutButton, setShowLogoutButton] = useState(!!token);

  useEffect(() => {
    setShowLogoutButton(!!token);
  }, [token]);

  return (
    <nav className="flex justify-between items-center py-5 mb-5 bg-zinc-800 shadow-lg shadow-gray-400">
      <div className="flex items-center">
        <img src="../public/LOGO-2-FASTPAY.svg"  alt="Logo" className="w-10 h-10 ml-5" />
        <span class="font-semibold text-xl tracking-tight text-blue-600 ml-2">FASTPAY</span>
      </div>

      <div className="flex space-x-4 mr-5">
        {[
          ["Home Usuarios", "/usuarios"],
          ["Crear Usuario", "/usuarios-create"],
          ["Home Vehiculos", "/vehiculos"],
          ["Crear Vehiculos", "/vehiculos-create"],
        ].map(([title, url], index) => (
          <div key={index} className="h-full">
            <a
              href={url}
              className="px-3 py-8 my-5 text-white font-medium hover:bg-blue-700 hover:text-white hover:font-bold"
            >
              {title}
            </a>
          </div>
        ))}

        {showLogoutButton && (
          <div className="h-full">
            <a
              href="/logout"
              className="px-3 py-8 my-4 text-white font-medium hover:bg-blue-700 hover:text-white hover:font-bold"
            >
              Logout
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
