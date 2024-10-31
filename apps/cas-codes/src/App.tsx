import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AboutMe } from "./pages/about-me.tsx";
import { Links } from "./pages/links.tsx";
import { AppContextProvider } from "./context/app-context.tsx";

export const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/about-me" replace />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/links" element={<Links />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
};
