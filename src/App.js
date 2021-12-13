import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// COMPONENTS
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/routing/ScrollToTop";
// Pages
import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import ExperimentsPage from "./pages/ExperimentsPage";
// import Experiments from "./components/experiments/Experiments";
// CSS
import "./App.css";
// LAZY LOAD
const AboutPage = React.lazy(() => import("./pages/AboutPage"));
const ExperimentsPage = React.lazy(() => import("./pages/ExperimentsPage"));

function App() {
  return (
    <Layout>
      <ScrollToTop>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/experiments" element={<ExperimentsPage />}></Route>

            <Route path="/" element={<Navigate replace to="/home" />} />
          </Routes>
        </Suspense>
      </ScrollToTop>
    </Layout>
  );
}

export default App;
