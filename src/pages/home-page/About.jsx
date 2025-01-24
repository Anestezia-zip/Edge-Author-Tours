import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "../../components/AnimatedTitle";
import ContactForm from "../contact-form/ContactForm";
import { useEffect, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    if (isMobile) return;
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center 38%",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <section id="about" className="md:min-h-screen max-md:mb-8 w-screen">
      <div className="relative mb-8 max-sm:mb-2 mt-28 flex flex-col items-center gap-5">
        <div>
          <AnimatedTitle
            title="Emb<b>a</b>rk on your next <b>u</b>nique adventure"
            containerClass="mt-5 max-md:mt-0 !text-black text-center"
            loading="lazy"
          />
        </div>
        
        <div
          className="relative md:min-h-[370px] lg:min-h-[440px] xl:min-h-[500px] 2xl:min-h-[630px] w-screen"
          id="clip"
          aria-labelledby="clip-title"
        >
          <div className="mask-clip-path md:about-image max-md:about-image-md h-full md:min-w-[580px]">
            <ContactForm />
          </div>
        </div>

        <div className="about-subtext">
          <p>Experience bespoke travel like never before</p>
          <p className="text-gray-500 p-2" aria-describedby="about-subtitle">
            Our exclusive tours are handcrafted by passionate experts, designed
            to immerse you in authentic, unforgettable experiences tailored just
            for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
