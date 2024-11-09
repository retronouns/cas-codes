import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AboutMe } from "~/pages/about-me.tsx";
import { Posts } from "~/pages/posts.tsx";
import { Projects } from "~/pages/projects.tsx";
import { Links } from "~/pages/links.tsx";
import { AppContextProvider } from "~/context/app-context.tsx";

export const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/about-me" replace />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/links" element={<Links />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
};
