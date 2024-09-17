import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home/Home";
import Layout from "../Components/Home/Home/Layout";
import Details from "../Components/Share/Details/Details";


 const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: '/',
          element:<Home></Home>
        },
        {
          path: 'product/:code',
          element: <Details></Details>,
          loader: ({ params }) => fetch(`http://localhost:5000/banner/${params.code}`)

        }
      ]
    },
  ]);


  export default router;