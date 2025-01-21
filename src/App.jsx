import React from "react";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUsPage from "./pages/contact-form/ContactUsPage/ContactUsPage";
import HomePage from "./pages/home-page/HomePage";
import FuturePage from "./components/FuturePage";

const App = () => {
  return (
    <Router>
      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/tour-calendar"
            element={
              <FuturePage
                imagePath="/videos/calendar.gif"
                title="Explore our calendar"
              />
            }
          />
          <Route
            path="/all-trips"
            element={
              <FuturePage
                imagePath="/videos/surf-car.gif"
                title="Discover all our trips"
              />
            }
          />
          <Route
            path="/our-path"
            element={
              <FuturePage
                imagePath="/videos/path.gif"
                title="Our path to adventures"
              />
            }
          />
          <Route path="/custom-tours" element={<ContactUsPage />} />
          <Route
            path="/faqs"
            element={
              <FuturePage
                imagePath="/videos/airplane.gif"
                title="Frequently asked questions"
              />
            }
          />{" "}
        </Routes>
      </main>
    </Router>
  );
};

export default App;
