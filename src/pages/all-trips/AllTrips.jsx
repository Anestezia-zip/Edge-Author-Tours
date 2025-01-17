import React from "react";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footer";

const AllTrips = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow mt-28">
        <h1 className="max-w-[55%] mx-auto font-zentry text-5xl max-md:text-3xl tracking-wide m-2 text-center">
          This space awaits your personalized content, crafted uniquely for you
        </h1>
        <img
          width={200}
          src="/videos/surf-car.gif"
          className="mx-auto"
          alt=""
        />
      </div>
      <Footer />
    </div>
  );
};

export default AllTrips;
