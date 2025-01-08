import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../../../components/Navbar";
import "react-datepicker/dist/react-datepicker.css";
import PreferredAccomodation from "./contact-form-components/PreferredAccomodation";
import NumberOfTravelers from "./contact-form-components/NumberOfTravelers";
import ArrivalDate from "./contact-form-components/ArrivalDate";
import DestinationList from "../../../components/DestinationList";
import PersonalDetails from "./contact-form-components/PersonalDetails";

const ContactUsPage = () => {
  const location = useLocation();
  const { selectedDestinations } = location.state || {};
  const [step, setStep] = useState(0);
  const [selectedDestinationsState, setSelectedDestinations] = useState(
    selectedDestinations || []
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected Destinations:", selectedDestinationsState);
    setStep(1); // Переход к финальному экрану
  };

  return (
    <>
      <NavBar />

      <div>
        <h1 className="font-zentry text-6xl max-md:text-4xl tracking-wide m-2 mt-28 text-center">
          Create Your personalized adventure
        </h1>
        <p className="text-center max-w-96 mx-auto">
          {" "}
          and a travel advisor will curate a unique experience just for you,
          handling all the details!
        </p>
      </div>

      <div className="rounded-3xl p-6 bg-white/80 mt-10 max-w-6xl mx-auto">
        {step === 0 && (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className="mt-4">
                <h2 className="text-xl font-bold mb-2 max-md:text-base">
                  Choose your favorite destinations
                </h2>
                <DestinationList
                  selectedDestinations={selectedDestinationsState}
                  setSelectedDestinations={setSelectedDestinations}
                  containerClassList={'!h-24'}
                />
              </div>
            </div>

            <h1 className="text-xl font-bold mb-6">Enter other details:</h1>
            <ul className="mt-8 space-y-6 grid grid-cols-2 max-md:grid-cols-1 gap-4 max-md:gap-1">
              <PreferredAccomodation />
              <NumberOfTravelers />
              <ArrivalDate />
            </ul>
            <PersonalDetails />

            <button
              type="submit"
              className="w-full py-3 px-6 bg-green-500 text-white font-bold rounded-3xl mt-6"
            >
              Submit
            </button>
          </form>
        )}

        {step === 1 && (
          <div className="flex flex-col items-center justify-center h-dvh bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">
              Thank you for reaching out!
            </h1>
            <p className="text-lg mb-8">
              We will get in touch with you shortly.
            </p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
              className="w-48 h-48 mx-auto mb-8"
              alt="Thank You"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ContactUsPage;
