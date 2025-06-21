import LandingPage from "@/LandingPage";
import PageNotFound from "@/PageNotFound";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  }
]);

export default router;
