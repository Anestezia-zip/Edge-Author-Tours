import gsap from "gsap";
import { useCallback, useEffect, useRef, useState } from "react";

import Button from "../../components/Button";
import AnimatedTitle from "../../components/AnimatedTitle";
import { debounce } from "lodash";
import { Link, useNavigate } from "react-router-dom";

const FloatingImage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const frameRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = useCallback(
    debounce((e) => {
      if (isMobile) return;
      const { clientX, clientY } = e;
      const element = frameRef.current;

      if (!element) return;

      const rect = element.getBoundingClientRect();
      const xPos = clientX - rect.left;
      const yPos = clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((yPos - centerY) / centerY) * -10;
      const rotateY = ((xPos - centerX) / centerX) * 10;

      gsap.to(element, {
        duration: 0.3,
        rotateX,
        rotateY,
        transformPerspective: 500,
        ease: "power1.inOut",
      });
    }, 16),
    []
  );

  const handleMouseLeave = () => {
    if (isMobile) return;
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <section id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Secrets Await
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="the st<b>o</b>ry of <br /> a hidden ge<b>m</b>s"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <Link
            to="/our-path"
            aria-label="Explore the hidden path to discover secrets"
          >
            <div className="story-img-container">
              <div className="story-img-mask">
                <div className="story-img-content">
                  <img
                    ref={frameRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseLeave}
                    onMouseEnter={handleMouseLeave}
                    src="/img/gems.png"
                    alt="Illustration of hidden gems"
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start max-[454px]:block max-md:hidden">
              Step into a world where the unseen comes to life. The path ahead
              holds mysteries, wonders, and stories waiting to be discovered —
              dare to explore.
            </p>

            <Button
              id="realm-btn"
              title="discover secrets"
              containerClass="mt-5"
              onClick={() => navigate("/our-path")}
              aria-label="Click to discover the secrets of the hidden realm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloatingImage;
