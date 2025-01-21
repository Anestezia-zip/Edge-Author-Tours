import React from "react";
import BentoCard from "../../components/BentoCard";
import { BentoTilt } from "../../components/BentoTilt";


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

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/gallery-card-1.mp4"
            title={
              <>
                A<b>u</b>stria
              </>
            }
            description="Innsbruck, nestled in the heart of the Austrian Alps. The Opelerhütte offers a breathtaking alpine escape, surrounded by rugged peaks and pristine nature, perfect for hikers and adventurers."
          />
        </BentoTilt>

        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/gallery-card-2.mp4"
              title={
                <>
                  j<b>o</b>rda<b>n</b>
                </>
              }
              description="Discover the breathtaking landscapes of Jordan, from the ancient city of Petra to the vast deserts of Wadi Rum, where history and adventure meet"
              additionalClasses=""
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-16 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/gallery-card-3.mp4"
              title={
                <>
                  <b>Fr</b>a<b>n</b>ce
                </>
              }
              description="Summer 2024"
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/gallery-card-5.mp4"
              title={
                <>
                  <b>it</b>al<b>y</b>
                </>
              }
              description="Summer 2024"
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <BentoCard
              src="videos/gallery-card-4.mp4"
              title={
                <>
                  <b>v</b>ie<b>tn</b>am
                </>
              }
              description="Spring 2024"
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <BentoCard
              src="videos/gallery-card-6.mp4"
              title={
                <>
                  japa<b>n</b>
                </>
              }
              description="Spring 2024"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default GalleryCards;
