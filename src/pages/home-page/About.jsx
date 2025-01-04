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
        start: "center center",
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
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-base">
          Welcome to Edge
        </p>

        <AnimatedTitle
          title="Emb<b>a</b>rk on your next <b>u</b>nique adventure"
          containerClass="mt-5 !text-black text-center"
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

      <div className="h-[640px] max-md:h-[450px] w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <ContactForm />

          {/* <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
