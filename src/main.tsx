import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from "@/app/providers/AppProvider";
import { AppRoutes } from "@/app/routes";
import "./index.css";
import { UserProvider } from "./contexts/UserProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <UserProvider>
          <AppRoutes />
        </UserProvider>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
