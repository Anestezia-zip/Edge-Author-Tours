import React from "react";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUsPage from "./pages/contact-form/ContactUsPage/ContactUsPage";
import HomePage from "./pages/home-page/HomePage";
import TourCalendar from "./pages/tour-calendar/TourCalendar";
import AllTrips from "./pages/all-trips/AllTrips";
import OurPath from "./pages/our-path/OurPath";
import Reviews from "./pages/faqs/Reviews";

const App = () => {
  return (
      <Router>
        <main className="relative min-h-screen w-screen overflow-x-hidden">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/tour-calendar" element={<TourCalendar />} />
            <Route path="/all-trips" element={<AllTrips />} /> 
            <Route path="/our-path" element={<OurPath />} /> 
            <Route path="/custom-tours" element={<ContactUsPage />} />
            <Route path="/faqs" element={<Reviews />} />
          </Routes>
        </main>

      </Router>  
    );
};

export default App;
