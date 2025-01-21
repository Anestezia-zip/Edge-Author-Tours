import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";

const FuturePage = ({ imagePath, title }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow mt-28">
        <h1 className="max-w-[55%] max-md:max-w-[70%] mx-auto font-general uppercase text-lg max-md:text-base m-2 mb-10 text-center">
          <span className="text-3xl text-gray-500 mx-4">~</span>
          {title}
          <span className="text-3xl text-gray-500 mx-4">~</span>
        </h1>
        <h2 className="max-w-[55%] mx-auto font-zentry text-5xl max-md:text-3xl tracking-wide m-2 text-center">
          This space awaits your personalized content, crafted uniquely for you
        </h2>
        <img
          width={200}
          src={imagePath}
          className="mx-auto"
          alt="Illustration"
        />
      </div>
      <Footer />
    </div>
  );
};

export default FuturePage;
