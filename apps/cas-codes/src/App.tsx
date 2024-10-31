import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AboutMe } from "./pages/about-me.tsx";
import { Links } from "./pages/links.tsx";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/about-me" replace />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </BrowserRouter>
  );
};
