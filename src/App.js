import { Routes, Route, Navigate } from "react-router-dom";
// COMPONENTS
import Layout from "./components/layout/Layout";
// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ExpirementsPage from "./pages/ExpirementsPage";
import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/expirements" element={<ExpirementsPage />}></Route>
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </Layout>
  );
}

export default App;
