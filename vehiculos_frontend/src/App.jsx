import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { UsuariosPage } from "./pages/UsuariosPage";
import { UsuariosForm } from "./pages/UsuariosForm";

import { VehiculosPage } from "./pages/VehiculosPage";
import { VehiculosForm } from "./pages/VehiculosForm";

import { Login } from "./pages/Login";
import { logoutUser } from "./api/usuarios.api";


import { Navigation } from "./components/Navigation";
("./components/Navigation");
import { Footer } from "./components/Footer";
("./components/Footer");
import { Toaster } from "react-hot-toast";

import React, { useEffect } from 'react';

import { useParams } from "react-router-dom";
import { PagoForm } from "./pages/PagoForm";
import { ParkingParametersForm } from "./pages/ParkingParametersForm";





function App() {
  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <div className="w-full px-10 bg-white dark:bg-gray-900 md:mb-20 md:mt-5 mb-5 mt-5">
        <Routes>
          <Route path="/" element={<Login />} /> //Esta ruta redirecciona la
          ruta principal a la que yo quiero que sea mi ruta principal
          <Route path="/usuarios" element={<UsuariosPage />} />
          <Route path="/usuarios-create" element={<UsuariosForm />} />
          <Route path="/usuarios/:id" element={<UsuariosForm />} />
          <Route path="/vehiculos" element={<VehiculosPage />} />
          <Route path="/vehiculos/:id" element={<VehiculosForm />} />
          <Route path="/vehiculos-create" element={<VehiculosForm />} />
          <Route path="/logout" element={<LogoutRedirect />} />
          <Route path="/vehiculos/pagar/:id" element={<PagoForm />} />
          <Route path="/parking-parameters/1" element={<ParkingParametersForm />} />
        </Routes>
        <Toaster></Toaster>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

// Componente LogoutRedirect para usar la funcion de la api users
function LogoutRedirect() {
  // Ejecutar la función logoutUser
  logoutUser();
}


export default App;
