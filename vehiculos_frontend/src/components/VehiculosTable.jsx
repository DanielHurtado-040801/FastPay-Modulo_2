import React from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import moment from "moment";
import "moment-timezone";

export function VehiculosTable({ vehiculo }) {
  const navigate = useNavigate();

  moment.tz.setDefault("America/Bogota");

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 ">
      <td className="w-4 p-4"></td>
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {vehiculo.placa}
      </td>
      <td className="px-6 py-4">
        {moment(vehiculo.hora_ingreso)
          .add(5, "hours")
          .format("MMMM Do YYYY, h:mm:ss a")}
      </td>
      <td className="px-6 py-4">
        {moment(vehiculo.hora_pago)
          .add(5, "hours")
          .format("MMMM Do YYYY, h:mm:ss a")}
      </td>
      <td className="px-6 py-4">
        {" "}
        <span>$ </span>
        {parseInt(vehiculo.valor_pagar).toLocaleString("es-ES")}
        <span> COP</span>
      </td>
      <td className="px-6 py-4">
        <a
          onClick={() => {
            navigate(`/vehiculos/pagar/${vehiculo.id}`);
          }}
          className="font-medium text-green-600 dark:text-green-700 hover:underline"
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
