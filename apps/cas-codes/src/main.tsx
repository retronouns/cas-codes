import "./index.css";
import "./fonts/VictorMono-Bold.ttf";
import "./fonts/VictorMono-BoldItalic.ttf";
import "./fonts/VictorMono-ExtraLight.ttf";
import "./fonts/VictorMono-ExtraLightItalic.ttf";
import "./fonts/VictorMono-Italic.ttf";
import "./fonts/VictorMono-Light.ttf";
import "./fonts/VictorMono-LightItalic.ttf";
import "./fonts/VictorMono-Medium.ttf";
import "./fonts/VictorMono-MediumItalic.ttf";
import "./fonts/VictorMono-Regular.ttf";
import "./fonts/VictorMono-SemiBold.ttf";
import "./fonts/VictorMono-SemiBoldItalic.ttf";
import "./fonts/VictorMono-Thin.ttf";
import "./fonts/VictorMono-ThinItalic.ttf";
// @deno-types="@types/react"
import { StrictMode } from "react";
// @deno-types="@types/react-dom/client"
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
