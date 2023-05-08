import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { UsuariosPage } from "./pages/UsuariosPage";
import { UsuariosForm } from "./pages/UsuariosForm";

import { VehiculosPage } from "./pages/VehiculosPage";
import { VehiculosForm } from "./pages/VehiculosForm";

import { Login } from "./pages/Login";

import { Navigation } from "./components/Navigation";
("./components/Navigation");
import { Footer } from "./components/Footer";
("./components/Footer");
import { Toaster } from "react-hot-toast";


function App() {


  return (
    <BrowserRouter>
      <Navigation></Navigation>
      <div className="mb-20 w-full px-10">
        <Routes>
          <Route path="/" element={<Login/>}/> //Esta ruta
          redirecciona la ruta principal a la que yo quiero que sea mi ruta
          principal
          <Route path="/usuarios" element={<UsuariosPage />} />
          <Route path="/usuarios-create" element={<UsuariosForm />} />
          <Route path="/usuarios/:id" element={<UsuariosForm />} />
          <Route path="/vehiculos" element={<VehiculosPage />} />
          <Route path="/vehiculos/:id" element={<VehiculosForm />} />
          <Route path="/vehiculos-create" element={<VehiculosForm />} />

        </Routes>
        <Toaster></Toaster>
      </div>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
