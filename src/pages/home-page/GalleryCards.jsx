import React from "react";
import BentoCard from "../../components/BentoCard";

const GalleryCards = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Discover the Extraordinary
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Step off the beaten path and into stories waiting to be lived. Our
            journeys are more than just trips—they’re invitations to uncover
            hidden gems, immerse in local traditions, and create memories that
            will last a lifetime.
          </p>
        </div>

        <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/gallery-card.mp4"
            title={
              <>
                I<b>nn</b>sbruck
              </>
            }
            description="Innsbruck, nestled in the heart of the Austrian Alps. The Opelerhütte offers a breathtaking alpine escape, surrounded by rugged peaks and pristine nature, perfect for hikers and adventurers."
            isComingSoon
          />
        </div>
      </div>
    </section>
  );
};

export default GalleryCards;
