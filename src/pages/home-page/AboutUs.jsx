import React, { useState } from "react";
import { monthNames } from "../../constants";
import { TiLocationArrow } from "react-icons/ti";
import Button from "../../components/Button";
import ModalPricing from "../../components/ModalPricing";

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const currentDate = new Date();
  const currentMonth = monthNames[currentDate.getMonth()];
  const currentDay = currentDate.getDate();

  return (
    <div className="mx-auto max-w-[950px] text-sm md:text-xl font-robert-regular tracking-wider py-10 px-4">
      {/* Welcome to Edge */}
      <div className="relative">
        <div className="w-52 h-52 absolute left-1/2 -translate-x-1/2 -z-10 bg-white rounded-full" />
        <p className="font-general text-center uppercase text-sm md:text-2xl mb-8">
          Welcome to Edge
        </p>
        <p className="font-general tracking-normal mt-2 mb-5 text-center max-w-lg mx-auto">
          Imagine embarking on your dream vacation without the stress of
          planning
        </p>
        <p className="font-general mb-8 tracking-normal text-center max-w-lg mx-auto">
          You can trust that journey to us
        </p>
        <img src="/img/364.gif" className="mx-auto" alt="" />
      </div>

      {/* What we'll do for you */}
      <div>
        <p className="mt-20 mx-auto text-center max-w-2xl">
          Our exclusive network spans across the globe, ensuring you receive the
          finest recommendations and most competitive rates for hotels,
          activities and local experiences.
        </p>
        <p className="text-start mt-8">
          Based on your preferences, we’ll do all the hard work for you:
        </p>
        <ul className="text-left">
          <li className="flex items-center gap-5 p-2 mt-4 shadow-md bg-blue-25 max-w-3xl">
            <div className="relative">
              <img width={45} height={45} src="/img/august.png" alt="august" />
              <div className="absolute top-[13px] left-[5px] flex items-center justify-center text-xs font-bold text-black">
                {currentMonth} {currentDay}
              </div>
            </div>
            <p>we'll find the perfect travel dates</p>
          </li>
          <li className="flex items-center gap-5 p-2 mt-4 shadow-md bg-blue-25 max-w-3xl">
            <img
              width={47}
              height={47}
              src="/img/travel-map.png"
              alt="travel-map"
            />
            <p>
              we'll explore the best destinations, services and entertainment
            </p>
          </li>
          <li>
            <div className="flex items-center gap-5 p-2 mt-4 shadow-md bg-blue-25 max-w-3xl">
              <img
                width={48}
                height={48}
                src="/img/accessible.png"
                alt="accessible"
              />
              <p>we'll calculate a budget that works for you</p>
            </div>
          </li>
        </ul>
        <p className="mt-8">
          With our own first-hand adventures as a foundation, we know what
          works, what doesn’t, and — most importantly — what brings you the most
          value.
        </p>
      </div>

      {/* What you get: */}
      <div>
        <p className="text-3xl max-md:text-xl text-center font-semibold uppercase my-6 mt-20 max-sm:mt-16">
          What you get:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-2">
          <li className="bg-white shadow-lg p-6 flex flex-col justify-between">
            <h3 className="mb-1 sm:text-xl text-center font-bold uppercase text-blue-800">
              Personalized Advice
            </h3>
            <p className="text-gray-600 text-center mx-auto max-w-[80%]">
              Free consultation & customized travel planning
            </p>
            <img
              src="/img/no-fee.png"
              className="mx-auto my-2 w-[70px] sm:w-[110px]"
              alt="no-fee"
            />
            <p className="text-start">
              Complimentary consultation after filling out the form — no hidden
              fees, no obligations.
            </p>
          </li>
          <li className="bg-white shadow-lg p-6 flex flex-col justify-between">
            <h3 className="mb-1 sm:text-xl text-center font-bold uppercase text-blue-800">
              Hidden Gems
            </h3>
            <p className="text-gray-600 text-center mt-1 mx-auto max-w-[80%]">
              Local insights & the best spots in every country
            </p>
            <img
              src="/img/places.png"
              className="mx-auto my-1 w-[70px] sm:w-[130px]"
              alt="no-fee"
            />
            <p className="text-start">
              Access to insider recommendations and secret spots from our
              travels — explore like a local!
            </p>
          </li>
          <li className="bg-white shadow-lg p-6 flex flex-col justify-between">
            <h3 className="mb-1 sm:text-xl text-center font-bold uppercase text-blue-800">
              Global Reach
            </h3>
            <p className="text-gray-600 text-center mx-auto max-w-[80%]">
              Top offers for dream destinations all around the world
            </p>
            <img
              src="/img/best-price.png"
              className="mx-auto my-2 w-[70px] sm:w-[115px]"
              alt="no-fee"
            />
            <p className="text-start">
              Best offers on homes, transportation, and experiences from our
              trusted partners worldwide.
            </p>
          </li>
        </ul>
      </div>

      <ul className="grid grid-cols-3 shadow-lg mt-4 max-md:min-h-32">
        <li className="bg-white text-center p-6 relative">
          <h3 className="sm:text-xl font-bold text-blue-800">5,000+</h3>
          <p className="text-gray-600">Partnered Properties</p>
          <img
            className="absolute z-10 top-8 -right-8 max-sm:-right-5 max-md:-right-6 w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
            src="/img/double-right-arrow.png"
            alt="double-right-arrow"
          />
        </li>
        <li className="bg-white text-center p-6 relative">
          <h3 className="sm:text-xl font-bold text-blue-800">20%</h3>
          <p className="text-gray-600">Average Customer Savings</p>
          <img
            className="absolute z-10 top-8 -right-11 max-sm:-right-6 w-[50px] h-[50px] md:w-[70px] md:h-[70px]"
            src="/img/double-right-arrow.png"
            alt="double-right-arrow"
          />
        </li>
        <li className="bg-white text-center p-6 relative">
          <h3 className="sm:text-xl font-bold text-blue-800">Transparent</h3>
          <p className="text-gray-600">Service Fees</p>
          <div className="mx-auto max-w-24 max-[450px]:max-w-14 -translate-x-1 translate-y-1">
            <Button
              id="see-details"
              title="Details"
              onClick={openModal}
              leftIcon={<img src="/img/info.png" className="w-4 max-[450px]:hidden" alt="info" />}
              containerClass="bg-yellow-300 !px-2 !py-2 flex-center gap-1 shadow-xl"
            />
          </div>
        </li>
      </ul>
      <ModalPricing isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default AboutUs;
