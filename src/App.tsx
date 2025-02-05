import "./App.css";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";

import "./i18n";

import * as amplitude from "@amplitude/analytics-browser";

amplitude.init("5fe11ecd8d119639f6fa9598b8347fb8", {
  autocapture: true,
  serverZone: "EU",
});

function App() {
  return <RouterProvider router={router} />;
}

export default App;
