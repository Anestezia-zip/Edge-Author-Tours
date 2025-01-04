import React from "react";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUsPage from "./pages/contact-form/ContactUsPage/ContactUsPage";
import HomePage from "./pages/home-page/HomePage";

const App = () => {
  return (
      <Router>
        <main className="relative min-h-screen w-screen overflow-x-hidden">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/contact-us" element={<ContactUsPage />} />
          </Routes>
          <section className="w-screen min-h-screen bg-gray-600"></section>
        </main>

      </Router>  
    );
};

export default App;
