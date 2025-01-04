import React from "react";

const PersonalDetails = () => {
  return (
    <div className="flex gap-x-8 mt-6 max-md:flex-col max-md:gap-4">
      <div>
        <div>
          <label className="block mb-2 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            className="w-64 p-2 max-md:p-1 border-2 rounded-lg"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">
            Contact (Email/Mobile/Telegram/WhatsApp)
          </label>
          <input
            type="text"
            name="contact"
            className="w-64 p-2 max-md:p-1 border-2 rounded-lg"
            required
          />
        </div>
      </div>
      <div>
        <textarea
          placeholder="Feel free to share any details or preferences"
          className="w-[200%] max-lg:w-[190%] max-md:w-full h-32 p-2 border-2 rounded-lg md:relative md:top-6"
        ></textarea>
      </div>
    </div>
  );
};

export default PersonalDetails;
