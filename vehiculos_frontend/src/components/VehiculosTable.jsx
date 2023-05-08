import React from "react";
import { useNavigate } from "react-router-dom";

export function VehiculosTable({ vehiculo }) {
  const navigate = useNavigate();

  return (
    <tr
      onClick={() => {
        navigate(`/vehiculos/${vehiculo.id}`);
      }}
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
    >
      <td className="w-4 p-4">
        <div className="">
          <input
            id="checkbox-table-search-1"
            type="checkbox"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
        </div>
      </td>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {vehiculo.id}
      </th>
      <td className="px-6 py-4">{vehiculo.placa}</td>
      <td className="px-6 py-4">{vehiculo.hora_ingreso}</td>
      <td className="px-6 py-4">{vehiculo.hora_salida}</td>
      <td className="px-6 py-4">
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </a>
      </td>
    </tr>
  );
}
