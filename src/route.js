import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import RootPage from "./pages/RootPage";

export const route = createBrowserRouter([
  {
    path: '/',
    exact: true,
    element: <RootPage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/contacts',
    element: <ContactPage />
  },
]);