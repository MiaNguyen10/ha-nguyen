import { RouterProvider } from "react-router";
import router from "@/routes/Router";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import theme from "@/theme/Theme";

export default function App() {
  return (
    <ThemeProvider theme = {theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
