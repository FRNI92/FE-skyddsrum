import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { LoadingPage } from "./components/layout/LoadingPage";
import { initAnalytics } from "./utils/analytics";
import "./styles.css";

const HomePage = lazy(() => import("./pages/HomePage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ActionsPage = lazy(() => import("./pages/ActionsPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const FaqPage = lazy(() => import("./pages/FaqPage"));
const ArticlesPage = lazy(() => import("./pages/ArticlesPage"));
const ArticlePage = lazy(() => import("./pages/ArticlePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

initAnalytics();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="tjanster" element={<ServicesPage />} />
            <Route path="vanliga-fragor" element={<FaqPage />} />
            <Route path="artiklar" element={<ArticlesPage />} />
            <Route path="artiklar/:slug" element={<ArticlePage />} />
            <Route path="vanliga-atgarder" element={<ActionsPage />} />
            <Route path="om-oss" element={<AboutPage />} />
            <Route path="kontakt" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>
);
