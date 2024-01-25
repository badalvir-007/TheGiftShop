import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Layout from "./Layout";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Cakes from "./Pages/Cakes";
import Flower from "./Pages/Flower";
import Plant from "./Pages/Plant";
import Pencil from "./Pages/Pencil";
import Camera from "./Pages/Camera";
import Music from "./Pages/Music";
import BulkCart from "./Pages/BulkCart";
import Home from "./Pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="Cakes" element={<Cakes />} />

      <Route path="Flower" element={<Flower />} />
      <Route path="Pencil" element={<Pencil />} />
      <Route path="Plant" element={<Plant />} />
      <Route path="Camera" element={<Camera />} />
      <Route path="Music" element={<Music />} />
      <Route path="BulkCart" element={<BulkCart />} />
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
