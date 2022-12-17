import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";

import "./styles.css";

import App from "./App";
import Footer from "./Footer";
import Search from "./Search";
import WeatherResult from "./WeatherResult";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />

    <Search />

    <WeatherResult />

    <Footer />
  </StrictMode>
);
