import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";

const Dashboard = lazy(() => import("./pages/dashboard"));
const Konsultasi = lazy(() => import("./pages/consultation"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));
const PrivacyPolicy = lazy(() => import("./pages/privacy"));

const LoadingScreen = () => (
  <div className="w-full min-h-[80vh] flex flex-col items-center justify-center bg-white">
    <div className="w-12 h-12 border-4 border-[#15503E]/20 border-t-[#15503E] rounded-full animate-spin mb-4"></div>
    <p className="text-[#15503E] font-medium animate-pulse">
      Memuat Halaman...
    </p>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<LoadingScreen />}>
                <Dashboard />
              </Suspense>
            }
          />

          <Route
            path="konsultasi"
            element={
              <Suspense fallback={<LoadingScreen />}>
                <Konsultasi />
              </Suspense>
            }
          />

          <Route
            path="konsultasi/:slug"
            element={
              <Suspense fallback={<LoadingScreen />}>
                <ServiceDetail />
              </Suspense>
            }
          />

          <Route
            path="about"
            element={
              <Suspense fallback={<LoadingScreen />}>
                <About />
              </Suspense>
            }
          />

          <Route
            path="contact"
            element={
              <Suspense fallback={<LoadingScreen />}>
                <Contact />
              </Suspense>
            }
          />

          <Route
            path="/privacy"
            element={
              <Suspense fallback={<LoadingScreen />}>
                <PrivacyPolicy />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
