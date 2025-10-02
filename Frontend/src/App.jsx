import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Applications from "./pages/Applications";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";

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
        <RouterProvider router={router}>
          <Home />
        </RouterProvider>
      </AppContextProvider>
    </>
  );
}

export default App;
