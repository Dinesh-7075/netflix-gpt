import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LogIn from "./LogIn";
import Browse from "./Browse";

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LogIn />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
