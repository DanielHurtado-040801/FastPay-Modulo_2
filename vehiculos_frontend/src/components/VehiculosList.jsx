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
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg shadow-zinc-950 grow">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400 ">
          <tr>
            <th scope="col" className="p-4">
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
