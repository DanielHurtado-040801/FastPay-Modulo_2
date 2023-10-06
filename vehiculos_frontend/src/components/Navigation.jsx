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
        <div className="flex flex-wrap sm:text-sm justify-between items-center mx-auto max-w-screen-xl p-4">
          <div className="">
            <a href="#" className="flex items-center">
              <img
                src="/Logo FastPay (2).svg"
                className="h-8 mr-3 transform scale-150"
                alt="FastPay Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-900 dark:text-white ml-2">
                Fast
                <span className="text-blue-400 dark:text-blue-400">Pay</span>
                <span className="self-center text-md font-semibold whitespace-nowrap text-blue-900 dark:text-white ml-2">
                  Administración
                </span>
              </span>
            </a>
          </div>
          <div className="flex items-center mt-4 ml-auto">
            <a
              href="tel:3144530400"
              className="mr-6 text-sm text-gray-500 dark:text-white hover:underline dark:hover:text-blue-400"
            >
              (314) 430-400
            </a>
            {showLogoutButton && (
              <div>
                <a
                  href="/usuarios"
                  className="text-sm text-blue-600 dark:text-blue-500 dark:hover:text-white mr-2"
                  aria-current="page"
                >
                  Home
                </a>
                <a
                  href="/logout"
                  className="text-sm text-blue-600 dark:text-blue-500 dark:hover:text-white"
                >
                  Logout
                </a>
              </div>
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
                  className="text-gray-900 dark:text-white hover:text-blue-600"
                  aria-current="page"
                >
                  Usuarios
                </a>
              </li>
              <li>
                <a
                  href="/usuarios-create"
                  className="text-gray-900 dark:text-white  hover:text-blue-600"
                >
                  Crear Usuario
                </a>
              </li>
              <li>
                <a
                  href="/vehiculos"
                  className="text-gray-900 dark:text-white  hover:text-blue-600"
                >
                  Vehículos
                </a>
              </li>
              <li>
                <a
                  href="/parking-parameters/1"
                  className="text-gray-900 dark:text-white  hover:text-blue-600"
                >
                  Parametros Parking
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
