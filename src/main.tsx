import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root";
import Error from "./components/Error";
import Loader from "./components/Loader";

const Projects = lazy(() => import("./routes/Projects/Proyectos"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route errorElement={<Error />}>
        <Route index element={<App />} />
        <Route path='/proyectos' element={<Projects />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <React.Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </React.Suspense>
  </React.StrictMode>
);
