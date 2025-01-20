import React, { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import clsx from "clsx";
import Button from "../../components/Button";
import { BentoTilt } from "../../components/BentoTilt";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const [isIphone, setIsIphone] = useState(false);


  const totalVideos = 4;
  const nextVideoRef = useRef(null);
  const navigate = useNavigate();

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    // Device check on iPhone    
    const userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipod/.test(userAgent)) {
      setIsIphone(true);
    }
  }, []);

  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setLoading(false);
    }
  }, [loadedVideos]);

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

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

  // Animation of a section transforming into a trapezoid on scroll
  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div className="relative h-dvh w-screen overflow-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          {/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      {isIphone ? (
        <div
          className="absolute left-0 top-0 size-full object-cover object-center"
          style={{
            backgroundImage: 'url("/img/gems.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-100">
            das<b>h</b>
          </h1>
        </div>
      ) : (
        <>
          <div
            id="video-frame"
            className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-black/85"
          >
            <div>
              {/* Main front video player */}
              <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                <div
                  onClick={handleMiniVdClick}
                  className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
                >
                  <BentoTilt className="bento-tilt_2" quickerMovement='60'>
                    <video
                      ref={nextVideoRef}
                      src={getVideoSrc(upcomingVideoIndex)}
                      loop
                      muted
                      playsInline
                      id="current-video"
                      className="border-hsla size-64 origin-center scale-150 object-cover object-center"
                      onCanPlay={handleVideoLoad}
                    />
                  </BentoTilt>
                </div>
              </div>

              {/* Primary background video player */}
              <video
                ref={nextVideoRef}
                src={getVideoSrc(currentIndex)}
                loop
                muted
                autoPlay
                playsInline
                preload="auto"
                id="next-video"
                className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
                onCanPlay={handleVideoLoad}
              />
              <video
                src={getVideoSrc(
                  currentIndex === totalVideos - 1 ? 1 : currentIndex
                )}
                loop
                muted
                autoPlay
                playsInline
                preload="auto"
                className="absolute left-0 top-0 size-full object-cover object-center"
                onCanPlay={handleVideoLoad}
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
                    upcomingVideoIndex !== 3
                      ? "text-black"
                      : "text-blue-100",
                      upcomingVideoIndex === 4
                      && "text-blue-100"
                  )}
                >
                  drea<b>m</b>
                </h1>

                <h2
                  className={clsx(
                    "mb-5 max-sm:text-base max-w-68 font-bold font-robert-regular tracking-wider",
                    upcomingVideoIndex !== 3
                      ? "text-black"
                      : "text-blue-100",
                      upcomingVideoIndex === 4
                      && "text-blue-100"
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
                />
              </div>
            </div>
          </div>

          <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
            das<b>h</b>
          </h1>
        
        </>
        
      )}

    </div>
  );
};

export default Hero;
