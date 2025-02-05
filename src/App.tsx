import "./App.css";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";

import "./i18n";

import { eventService } from "./services";

eventService.init();

function App() {
  return <RouterProvider router={router} />;
}

export default App;
