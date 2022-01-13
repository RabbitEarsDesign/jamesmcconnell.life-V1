import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// COMPONENTS
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/routing/ScrollToTop";
// Pages
import HomePage from "./pages/HomePage";

// CSS
import "./App.css";

// LAZY LOAD
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const ExperimentsPage = React.lazy(() => import("./pages/ExperimentsPage"));
const ArtPage = React.lazy(() => import("./pages/ArtPage"));
const UploadPage = React.lazy(() => import("./pages/UploadPage"));

function App() {
  return (
    <Layout>
      <ScrollToTop>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/experiments" element={<ExperimentsPage />}></Route>
            <Route path="/art" element={<ArtPage />}></Route>
            <Route path="/upload" element={<UploadPage />}></Route>
            <Route path="/" element={<Navigate replace to="/home" />} />
          </Routes>
        </Suspense>
      </ScrollToTop>
    </Layout>
  );
}

export default App;
