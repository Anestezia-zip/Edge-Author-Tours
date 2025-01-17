import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DestinationList from "../../components/DestinationList";

export const destinations = [
  { name: "Italy", image: "/img/italy.png" },
  { name: "France", image: "/img/france.png" },
  { name: "Japan", image: "/img/japan.png" },
  { name: "Australia", image: "/img/australia.png" },
  { name: "Canada", image: "/img/canada.png" },
  { name: "Austria", image: "/img/austria.png" },
  { name: "Spain", image: "/img/spain.png" },
  { name: "Jordan", image: "/img/jordan.png" },
];

const ContactForm = () => {
  const [step, setStep] = useState(0);
  const [selectedDestinations, setSelectedDestinations] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/custom-tours", {
      state: { selectedDestinations, fromContactForm: true }, // Передаем данные через state
    });
  };

  // Чтобы кнопка становилась активной при изменении selectedDestinations
  useEffect(() => {
    if (selectedDestinations.length > 0 && step === 0) {
      setStep(1); // Перейти к следующему шагу, если есть выбранные направления
    }
  }, [selectedDestinations, step]);

  return (
    <div className="rounded-3xl p-6 m-2 mt-0 bg-white/80">
      {step === 0 && (
        <>
          <h1 className="text-xl font-bold mb-2 max-md:text-base">
            Choose your favorite destinations
          </h1>
          <DestinationList
            selectedDestinations={selectedDestinations}
            setSelectedDestinations={setSelectedDestinations}
          />

          <button
            onClick={() => setStep((prevStep) => prevStep + 1)}
            className={`w-full py-3 px-6 mt-2 font-bold rounded-3xl ${
              selectedDestinations.length > 0
                ? "bg-yellow-300 text-black"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={selectedDestinations.length === 0}
          >
            Next
          </button>
        </>
      )}

      {step === 1 && (
        <>
          <h1 className="text-xl font-bold mb-2 max-md:text-base">
            Confirm your favorite destinations
          </h1>
          <DestinationList
            selectedDestinations={selectedDestinations}
            setSelectedDestinations={setSelectedDestinations}
          />

          <button
            onClick={handleSubmit}
            className={`w-full py-3 px-6 font-bold rounded-3xl ${
              selectedDestinations.length > 0
                ? "bg-yellow-300 text-black"
                : "bg-gray-400 cursor-not-allowed"
            }`}
            disabled={selectedDestinations.length === 0}
          >
            Next
          </button>
        </>
      )}
    </div>
  );
};

export default ContactForm;
