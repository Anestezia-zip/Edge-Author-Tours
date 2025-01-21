import React from 'react'
import { TiLocationArrow } from 'react-icons/ti';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/Button';

const RenderIphoneView = () => {
    const navigate = useNavigate();

  return (
    <>
    <div
      id="image-frame"
      className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-black/85"
    >
      <img
        src="/img/nature.jpg"
        alt="Nature"
        className="size-full object-cover object-center"
      />

      <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-100">
        das<b>h</b>
      </h1>

      <div className="absolute left-0 top-0 z-40 size-full">
        <div className="mt-24 px-5 sm:px-10">
          <h1 className="special-font hero-heading text-blue-100">
            drea<b>m</b>
          </h1>

          <h2 className="mb-5 max-sm:text-base max-w-68 font-bold font-robert-regular tracking-wider">
            Watch our latest trip to Vietnam <br /> and relive the
            experience.
          </h2>

          <Button
            id="watch-trip-report"
            title="View Report"
            leftIcon={<TiLocationArrow />}
            containerClass="bg-yellow-300 flex-center gap-1"
            onClick={() => navigate("/all-trips")}
          />
        </div>
      </div>
    </div>

    <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
      das<b>h</b>
    </h1>
  </>
  )
}

export default RenderIphoneView