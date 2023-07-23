import { createBrowserRouter } from "react-router-dom";

import { Home } from "./Home";
import { ErrorBoundary } from "./Error";
import { Root } from "./Root";

// fetch functions

export const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
