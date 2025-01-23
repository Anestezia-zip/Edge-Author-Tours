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
        start: "center 52%",
        end: "+=670 center",
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
    <section id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 max-sm:mb-2 mt-28 flex flex-col items-center gap-5">
        <AnimatedTitle
          title="Emb<b>a</b>rk on your next <b>u</b>nique adventure"
          containerClass="mt-5 max-md:mt-0 !text-black text-center"
          loading="lazy"
        />
        <div
          className="relative md:min-h-[500px] lg:min-h-[650px] 2xl:min-h-[900px] w-screen"
          id="clip"
          aria-labelledby="clip-title"
        >
          <div className="mask-clip-path md:about-image max-md:about-image-md">
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
