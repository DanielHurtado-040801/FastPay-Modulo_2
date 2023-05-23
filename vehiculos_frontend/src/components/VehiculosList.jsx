import { useEffect, useState } from "react";
import { getAllVehicles } from "../api/vehiculos.api";
import { VehiculosTable } from "./VehiculosTable";

export function VehiculosList() {
  const [vehiculos, setVehiculos] = useState([]);

  useEffect(() => {
    //En esta funcion asincrona realizamos la consulta a nuestro back para obtener todos los usuarios
    async function cargarVehiculos() {
      const respuesta = await getAllVehicles();
      setVehiculos(respuesta.data);
    }
    cargarVehiculos();
  }, []);

  return (
    <div className="relative overflow-x-auto shadow-lg sm:rounded-lg shadow-zinc-950">
      <div className="pb-4 bg-white dark:bg-gray-900 pt-2 pl-2">
        <div className="relative mt-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for items"
          />
        </div>
      </div>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <input
                  id="checkbox-all-search"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              id
            </th>
            <th scope="col" className="px-6 py-3">
              Placa
            </th>
            <th scope="col" className="px-6 py-3">
              Hora Ingreso
            </th>
            <th scope="col" className="px-6 py-3">
              Hora Salida
            </th>
            <th scope="col" className="px-6 py-3">
              Valor Pago
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {vehiculos.map((vehiculo) => (
            <VehiculosTable
              key={vehiculo.id}
              vehiculo={vehiculo}
            ></VehiculosTable>
          ))}
        </tbody>
      </table>
    </div>
  );
}
