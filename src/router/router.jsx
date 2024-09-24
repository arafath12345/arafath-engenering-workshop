import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home/Home";
import Layout from "../Components/Home/Home/Layout";
import Details from "../Components/Share/Details/Details";
import Error from "../Components/Error/Error";
import Card_items from "../Components/Home/Card_item/Card_items";


 const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: '/',
          element:<Home></Home>,
          errorElement: <Error></Error>
        },
        {
          path: 'product/:code',
          element: <Details></Details>,
          loader: ({ params }) => fetch(`https://s-hop-murex.vercel.app/banner/${params.code}`)

        },
        {
          path: 'carder/:code',
          element: <Card_items></Card_items>,
          loader: ({ params }) => fetch(`https://s-hop-murex.vercel.app/carder/${params.code}`)
        }
      ]
    },
  ]);


  export default router;