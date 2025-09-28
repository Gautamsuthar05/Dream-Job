// import { useState } from 'react'
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Applications from "./components/Applications";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext";

function App() {
  // const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
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
      <RouterProvider router={router}>
        <AppContextProvider>
          <Navbar />
          <Home />
        </AppContextProvider>
      </RouterProvider>
    </>
  );
}

export default App;
