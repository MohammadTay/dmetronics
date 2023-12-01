import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import React from "react";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
// import Gigs from "./pages/gigs/Gigs";
// import Gig from "./pages/gig/Gig";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/navbar/Navbar";
import AdvertisingBar from "./components/advertisingbar/AdvertisingBar";
import Software from "./pages/software/Software";
import WiringDiagram from './pages/wiringdiagram/WiringDiagram'
import Tutorials from './pages/tutorials/Tutorials'
import PinOut from './pages/pinout/PinOut'
import Hardware from './pages/hardware/Hardware'
import SingleSoftware from "./pages/software/SingleSoftware";
import SingleWiringDiagram from "./pages/wiringdiagram/SingleWiringDiagram";
import Download from "./pages/downloads/Download";
import SingleTutorial from "./pages/tutorials/SingleTutorial";
import SingleHardware from "./pages/hardware/SingleHardware";
import Test from "./pages/test/Test";
import Chat from "./pages/chat/Chat";
import SinglePinOut from "./pages/pinout/SinglePinOut";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'


function App() {
  const queryClient = new QueryClient()


  const Layout = () => {
    return (

      <div className="app">
        <QueryClientProvider client={queryClient}>
          <AdvertisingBar />
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
          path: "/",
          element: <Home />,
        },
        {
          path: "/softwarepage",
          element: <Software />,
        },
        {
          path: "/software/:id",
          element: <SingleSoftware />,
        },
        {
          path: "/wiringdiagram",
          element: <WiringDiagram />,
        },
        {
          path: "/wiringdiagram/:id",
          element: <SingleWiringDiagram />,
        },
        {
          path: "/downloads",
          element: <Download />,
        },

        {
          path: "/tutorials",
          element: <Tutorials />,
        },
        {
          path: "/tutorials/:id",
          element: <SingleTutorial />,
        },
        {
          path: "/pinout/",
          element: <PinOut />,
        },
        {
          path: "/pinout/:id",
          element: <SinglePinOut />,
        },


        {
          path: "/hardware",
          element: <Hardware />,
        },
        {
          path: "/hardware/:id",
          element: <SingleHardware />,
        },
        {
          path: "/test",
          element: <Test />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/chat",
          element: <Chat />,
        },

      ],
    },


  ]);

  return <RouterProvider router={router} />;
}

export default App;
