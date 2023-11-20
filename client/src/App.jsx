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
import Pay from "./pages/pay/Pay";
import Success from "./pages/success/Success";


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
          path:"/gig/:id",
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
        {
          path:"/pay/:id",
          element: <Pay/>
        },
        {
          path:"/success",
          element: <Success/>
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
