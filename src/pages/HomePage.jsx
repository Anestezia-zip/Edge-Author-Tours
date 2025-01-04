import React from "react";
import Hero from "./Hero";
import About from "./About";


const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <section className="stats-section bg-gray-100 py-10 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">
            Affordable Vacations Without the Stress
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            With thousands of partnerships across places, transportation
            providers, excursion agencies, adventure parks, and more, we’re able
            to offer some of the best discounts in the industry. No matter your
            travel style—luxury retreats, budget-friendly escapes, or family
            vacations—we've got exclusive deals tailored just for you.
            <br />
            <br />
            **Ensuring your trip remains budget-friendly while covering our
            costs,** we charge a small, transparent service fee that is directly
            tied to the savings we secure for you. This way, you benefit from
            incredible discounts without overpaying. Whether you’re planning for
            a group getaway, a romantic escape, or a solo adventure, our goal is
            to make travel accessible, enjoyable, and unforgettable.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="stat-card bg-white shadow-lg p-6">
              <h3 className="text-xl font-bold text-green-600">5,000+</h3>
              <p className="text-gray-600">Partnered Properties</p>
            </div>
            <div className="stat-card bg-white shadow-lg p-6">
              <h3 className="text-xl font-bold text-green-600">20%</h3>
              <p className="text-gray-600">Average Customer Savings</p>
            </div>
            <div className="stat-card bg-white shadow-lg p-6">
              <h3 className="text-xl font-bold text-green-600">Transparent</h3>
              <p className="text-gray-600">Service Fees</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
