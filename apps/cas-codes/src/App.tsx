import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutMe } from "./pages/about-me.tsx";
import { Links } from "./pages/links.tsx";
import { Home } from "./pages/home.tsx";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </BrowserRouter>
  );
};
