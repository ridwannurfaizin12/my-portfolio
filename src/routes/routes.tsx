import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/Home";
import About from "../pages/About";
import Projects from "../pages/Project";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "projects", element: <Projects /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;
