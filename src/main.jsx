import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

import "./index.css";
import App from "./App.jsx";

import { BrowserRouter } from "react-router";

import { TweetsProvider } from "./utils/useContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider>
      <BrowserRouter>
        <TweetsProvider>
          <App />
        </TweetsProvider>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
);
