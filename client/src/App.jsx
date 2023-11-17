import Navbar from "./components/navbar/Navbar"

import Add from "./pages/add/Add"
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home"
import Gigs from "./pages/gigs/Gigs"
import Gig from "./pages/gig/Gig"
import Login from "./pages/login/Login"
import Message from "./pages/message/Message"
import Messages from "./pages/messages/Messages"
import MyGigs from "./pages/mygigs/MyGigs"
import Orders from "./pages/orders/Orders"
import Register from "./pages/register/Register"
import { createBrowserRouter, Outlet, RouterProvider, } from "react-router-dom";
import './App.scss'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'


function App() {

  const queryClient = new QueryClient()

  const Layout = () => {
    return(
      <div className="app">
       <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
       </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path:"/",
          element: <Home />
        },

        {
          path:"/Gig/:id",
          element: <Gig/>
        },
        {
          path:"/gigs",
          element: <Gigs/>
        },
        {
          path:"/add",
          element: <Add/>
        },
        {
          path:"/message/:id",
          element: <Message/>
        },
        {
          path:"/messages",
          element: <Messages/>
        },
        {
          path:"/mygigs",
          element: <MyGigs/>
        },
        {
          path:"/orders",
          element: <Orders/>
        },
        {
          path:"/register",
          element: <Register/>
        },
        {
          path:"/login",
          element: <Login/>
        },
      ]
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
