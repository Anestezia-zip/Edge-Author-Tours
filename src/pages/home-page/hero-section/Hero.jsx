import React, { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import clsx from "clsx";
import Button from "../../../components/Button";
import { BentoTilt } from "../../../components/BentoTilt";
import { isIOS } from "react-device-detect";
import RenderIphoneView from "./RenderIphoneView";
import LoadingSpinner from "./LoadingSpinner";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const totalVideos = 4;
const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // State for the current video index
  const [hasClicked, setHasClicked] = useState(false); // State to track if the video thumbnail has been clicked
  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0); // State to track how many videos have been loaded
  const [isIphone, setIsIphone] = useState(false);

  const nextVideoRef = useRef(null);
  const navigate = useNavigate()

  // Function to update the count of loaded videos
  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if (isIOS) {
      setIsIphone(true);
      setLoading(false);
    }
  }, []);

  // When all videos are loaded, set loading to false
  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setLoading(false);
    }
  }, [loadedVideos]);

  // Calculate the next video index
  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  // Handle click on the mini video to trigger the transition
  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex); // Update the current video index
  };

  // Animation of a video enlarging when clicked
  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  // Animation for clip-path transformation when scrolling
  const animateClipPath = (elementId) => {
    const ctx = gsap.context(() => {
      gsap.set(elementId, {
        clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
        borderRadius: "0% 0% 40% 10%",
      });

      gsap.from(elementId, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        borderRadius: "0% 0% 0% 0%",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: elementId,
          start: "center center",
          end: "bottom center",
          scrub: true,
        },
      });
    });

    return () => ctx.revert(); // Очищает анимацию при размонтировании
  };

  useEffect(() => {
    if (isIphone) {
      animateClipPath("#image-frame");
    }
  }, [isIphone]);

  useGSAP(() => {
    animateClipPath("#video-frame");
  });

  return (
    <section className="relative h-dvh w-screen overflow-hidden">
      {loading && <LoadingSpinner />}

      {isIphone ? (
        <RenderIphoneView />
      ) : (
        <>
          <div
            id="video-frame"
            className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg"
            role="banner"
            aria-label="Main video section"
          >
            <div>
              {/* Main front video player */}
              <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                <div
                  className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
                  onClick={handleMiniVdClick}
                  tabIndex="0"
                  role="button"
                  aria-label="Click to play next video"
                >
                  <BentoTilt className="bento-tilt_2" quickerMovement="60">
                    <video
                      ref={nextVideoRef}
                      src={getVideoSrc(upcomingVideoIndex)}
                      loop
                      muted
                      id="current-video"
                      className="border-hsla size-64 origin-center scale-150 object-cover object-center"
                      onLoadedData={handleVideoLoad}
                      aria-label={`Preview of video ${upcomingVideoIndex}`}
                    />
                  </BentoTilt>
                </div>
              </div>

              {/* Primary background video player */}
              <video
                ref={nextVideoRef}
                src={getVideoSrc(currentIndex)}
                preload="auto"
                loop
                muted
                autoPlay
                playsInline
                id="next-video"
                className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
                onLoadedData={handleVideoLoad}
                aria-label="Primary background video player"
              />
              <video
                src={getVideoSrc(
                  currentIndex === totalVideos - 1 ? 1 : currentIndex
                )}
                preload="auto"
                loop
                muted
                autoPlay
                playsInline
                className="absolute left-0 top-0 size-full object-cover object-center"
                onLoadedData={handleVideoLoad}
                aria-label="Primary background video player"
              />
            </div>

            <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-100">
              das<b>h</b>
            </h1>

            <div className="absolute left-0 top-0 z-40 size-full">
              <div className="mt-24 px-5 sm:px-10">
                <h1
                  className={clsx(
                    "special-font hero-heading",
                    upcomingVideoIndex !== 3 ? "text-black" : "text-blue-100",
                    upcomingVideoIndex === 4 && "text-blue-100"
                  )}
                >
                  drea<b>m</b>
                </h1>

                <h2
                  className={clsx(
                    "mb-5 max-sm:text-base max-w-68 font-bold font-robert-regular tracking-wider",
                    upcomingVideoIndex !== 3 ? "text-black" : "text-blue-100",
                    upcomingVideoIndex === 4 && "text-blue-100"
                  )}
                >
                  Watch our latest trip to Lanzarote <br /> and relive the
                  experience.
                </h2>

                <Button
                  id="watch-trip-report"
                  title="View Report"
                  leftIcon={<TiLocationArrow />}
                  containerClass="bg-yellow-300 flex-center gap-1"
                  onClick={() => navigate("/all-trips")}
                  aria-label="View our last trip report"
                />
              </div>
            </div>
          </div>

          <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
            das<b>h</b>
          </h1>
        </>
      )}
    </section>
  );
};

export default Hero;
