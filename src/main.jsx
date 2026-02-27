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
    <MantineProvider
      theme={{
        defaultRadius: "md",
        fontFamily: '"Outfit", "Avenir Next", "Segoe UI", sans-serif',
        headings: {
          fontFamily: '"Outfit", "Avenir Next", "Segoe UI", sans-serif',
          sizes: {
            h1: { fontSize: "2rem", lineHeight: "1.2", fontWeight: "700" },
            h2: { fontSize: "1.5rem", lineHeight: "1.25", fontWeight: "600" },
            h3: { fontSize: "1.25rem", lineHeight: "1.3", fontWeight: "600" },
          },
        },
      }}
    >
      <BrowserRouter>
        <TweetsProvider>
          <App />
        </TweetsProvider>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
);
