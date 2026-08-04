import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import PredicationsPage from "./pages/PredicationsPage";

function App() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/predications" element={<PredicationsPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
