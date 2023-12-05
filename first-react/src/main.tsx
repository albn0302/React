import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CounterPage from "./pages/CounterPage";
import CalculatorPage from "./pages/CalculatorPage";
import TemperatureConverterPage from "./pages/TemperatureConverterPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/counter" Component={CounterPage} />
        <Route path="/calculator" Component={CalculatorPage} />
        <Route path="/tempcon" Component={TemperatureConverterPage}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
