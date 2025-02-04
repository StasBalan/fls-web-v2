import "./App.css";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";

import "./i18n";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
