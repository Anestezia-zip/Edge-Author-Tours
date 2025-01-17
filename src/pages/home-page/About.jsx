import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "../../components/AnimatedTitle";
import ContactForm from "../contact-form/ContactForm";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center 60%",
        end: "+=670 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        markers: true
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 max-sm:mb-2 mt-36 flex flex-col items-center gap-5">
        <AnimatedTitle
          title="Emb<b>a</b>rk on your next <b>u</b>nique adventure"
          containerClass="mt-5 !text-black text-center"
          loading="lazy"
        />

        <div className="about-subtext">
          <p>Experience bespoke travel like never before</p>
          <p className="text-gray-500">
            Our exclusive tours are handcrafted by passionate experts, designed
            to immerse you in authentic, unforgettable experiences tailored just
            for you.
          </p>
        </div>
      </div>

      <div className="min-h-[650px] max-md:min-h-[450px] xl:min-h-[750px] 2xl:min-h-[850px] w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <ContactForm className="absolute left-0 top-0 size-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default About;
