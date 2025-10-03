import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Applications from "./pages/Applications";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Login />
        </>
      ),
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/Applications",
      element: (
        <>
          <Applications />
        </>
      ),
    },
    {
      path: "*",
      element: (
        <div className="text-center text-red-500 mt-10">
          404 - Page Not Found
        </div>
      ),
    },
  ]);

  return (
    <>
      <AppContextProvider>
        <ToastContainer />
        <RouterProvider router={router}>
          <Home />
        </RouterProvider>
      </AppContextProvider>
    </>
  );
}

export default App;
