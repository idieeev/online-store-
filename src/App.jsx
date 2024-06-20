import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import LogIn from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import Layout from "./Layout/Layout";
import Products from "./Pages/Products/Products";
import Wishlist from "./Pages/Wishlist/Wishlist";
import Profile from "./Pages/Profile/Profile";
import NotFound from "./Pages/notFound/NotFound";
import Cart from "./Pages/Cart/Card";
import Korzina from "./Pages/Korzina/Korzina";
import Allproduct from "./Pages/Allproduct/Allproduct";


function App()
{


  const router = createBrowserRouter([
    {
      path: "/login",
      element: <LogIn />,
    },
    {
      path: "/registration",
      element: <Registration />,
    },
    {
      path: "/all",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "product",
          element: <Products />,
        },
        {
          path: "korzina",
          element: <Korzina />
        },
        {
          path: "wishlist",
          element: <Wishlist />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
        {
          path: "cart/:id",
          element: <Cart />,
        },
        
      ],
    },
  ]);

  return <RouterProvider router={router} />
}

export default App
