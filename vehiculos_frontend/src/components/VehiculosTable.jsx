import React from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import moment from 'moment';


export function VehiculosTable({ vehiculo }) {
  const navigate = useNavigate();

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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
      <td className="px-6 py-4">{moment(vehiculo.hora_ingreso).format('MMMM Do YYYY, h:mm:ss a')}</td>
      <td className="px-6 py-4">{moment(vehiculo.hora_pago).format('MMMM Do YYYY, h:mm:ss a')}</td>
      <td className="px-6 py-4">
        {" "}
        <span>$ </span>
        {parseInt(vehiculo.valor_pagar).toLocaleString('es-ES')}
        <span> COP</span>
      </td>
      <td className="px-6 py-4">
        <a
          onClick={() => {
            navigate(`/vehiculos/pagar/${vehiculo.id}`);
          }}
          className="font-medium text-blue-600 dark:text-green-700 hover:underline"
        >
          PAGAR
        </a>
      </td>
      <td className="px-6 py-4">
        <a
          onClick={() => {
            navigate(`/vehiculos/${vehiculo.id}`);
          }}
          className="font-medium text-blue-600 dark:text-blue-600 hover:underline"
        >
          EDIT
        </a>
      </td>
    </tr>
  );
}
