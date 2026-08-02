// import React, { Suspense, lazy } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Layout from "./components/layout";

// const Dashboard = lazy(() => import("./pages/dashboard"));
// const Konsultasi = lazy(() => import("./pages/consultation"));
// const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
// const About = lazy(() => import("./pages/about"));
// const Contact = lazy(() => import("./pages/contact"));
// const PrivacyPolicy = lazy(() => import("./pages/privacy"));

// const LoadingScreen = () => (
//   <div className="w-full min-h-[80vh] flex flex-col items-center justify-center bg-white">
//     <div className="w-12 h-12 border-4 border-[#15503E]/20 border-t-[#15503E] rounded-full animate-spin mb-4"></div>
//     <p className="text-[#15503E] font-medium animate-pulse">
//       Memuat Halaman...
//     </p>
//   </div>
// );

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route
//             index
//             element={
//               <Suspense fallback={<LoadingScreen />}>
//                 <Dashboard />
//               </Suspense>
//             }
//           />

//           <Route
//             path="konsultasi"
//             element={
//               <Suspense fallback={<LoadingScreen />}>
//                 <Konsultasi />
//               </Suspense>
//             }
//           />

//           <Route
//             path="konsultasi/:slug"
//             element={
//               <Suspense fallback={<LoadingScreen />}>
//                 <ServiceDetail />
//               </Suspense>
//             }
//           />

//           <Route
//             path="about"
//             element={
//               <Suspense fallback={<LoadingScreen />}>
//                 <About />
//               </Suspense>
//             }
//           />

//           <Route
//             path="contact"
//             element={
//               <Suspense fallback={<LoadingScreen />}>
//                 <Contact />
//               </Suspense>
//             }
//           />

//           <Route
//             path="/privacy"
//             element={
//               <Suspense fallback={<LoadingScreen />}>
//                 <PrivacyPolicy />
//               </Suspense>
//             }
//           />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React, { Suspense, lazy, useState } from "react";
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
  // State untuk sistem password
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [password, setPassword] = useState("");

  // Fungsi untuk mengecek password
  const handleLogin = (e) => {
    e.preventDefault();
    // Ubah "aldiora2026" di bawah ini dengan password kesepakatanmu dengan klien
    if (password === "aldiora2026") {
      setIsUnlocked(true);
    } else {
      alert("Password salah! Silakan coba lagi.");
    }
  };

  // Tampilan halaman form password (jika belum di-unlock)
  if (!isUnlocked) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded-xl shadow-md text-center max-w-sm w-full border border-gray-100"
        >
          <div className="w-16 h-16 bg-[#15503E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-[#15503E] text-2xl">🔒</span>
          </div>
          <h2 className="text-2xl font-bold text-[#15503E] mb-2">
            Akses Terbatas
          </h2>
          <p className="text-gray-500 mb-6 text-sm">
            Website sedang dalam tahap pengembangan. Masukkan kata sandi untuk
            melihat pratinjau.
          </p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#15503E]"
            placeholder="Masukkan Password"
          />
          <button
            type="submit"
            className="w-full bg-[#15503E] hover:bg-[#15503E]/90 transition-colors text-white py-3 rounded-lg font-semibold"
          >
            Buka Website
          </button>
        </form>
      </div>
    );
  }

  // Tampilan routing asli website (jika password benar)
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
