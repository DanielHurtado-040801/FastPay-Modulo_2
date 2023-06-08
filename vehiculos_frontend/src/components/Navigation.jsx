import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export function Navigation() {
  const token = localStorage.getItem("token");
  const [showLogoutButton, setShowLogoutButton] = useState(!!token);

  useEffect(() => {
    setShowLogoutButton(!!token);
  }, [token]);

  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="#" className="flex items-center">
            <img
              src="../public/Logo FastPay (2).svg"
              className="h-8 mr-3 transform scale-150"
              alt="FastPay Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Fast<span className="text-blue-600 dark:text-blue-400">Pay</span>
            </span>
          </a>
          <div className="flex items-center">
            <a
              href="tel:5541251234"
              className="mr-6 text-sm  text-gray-500 dark:text-white hover:underline"
            >
              (314) 430-400
            </a>
            {showLogoutButton && (
                <a
                  href="/logout"
                  className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
                  >
                  Logout
                </a>
            )}
          </div>
        </div>
      </nav>
      <nav className="bg-gray-200 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center flex-row-reverse">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <a
                  href="/usuarios"
                  className="text-gray-900 dark:text-white hover:underline hover:text-blue-600"
                  aria-current="page"
                >
                  Usuarios
                </a>
              </li>
              <li>
                <a
                  href="/usuarios-create"
                  className="text-gray-900 dark:text-white hover:underline hover:text-blue-600"
                >
                  Crear Usuario
                </a>
              </li>
              <li>
                <a
                  href="/vehiculos"
                  className="text-gray-900 dark:text-white hover:underline hover:text-blue-600"
                >
                  Vehiculos
                </a>
              </li>
              <li>
                <a
                  href="/vehiculos-create"
                  className="text-gray-900 dark:text-white hover:underline hover:text-blue-600"
                >
                  Crear Vehiculo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
