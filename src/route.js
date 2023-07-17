import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import RootPage from "./pages/RootPage";
import NotFountPage from "./pages/NotFoundPage";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

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
  {
    path: '/blog',
    element: <Blog />
  },
  {
    path: '/blog/:id',
    element: <BlogPost />
  },
  {
    path: '*',
    element: <NotFountPage />
  }
]);