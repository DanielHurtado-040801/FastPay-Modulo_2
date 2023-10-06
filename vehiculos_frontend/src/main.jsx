import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-7mb4fpq4ypy8ice6.us.auth0.com"
      clientId="KYBa0pbEG4VzMhCQu5irJOnwy9X7OLFD"
      redirectUri={'http://localhost:5173/usuarios'}
    >
      <App/>
    </Auth0Provider>
  </React.StrictMode>
);
