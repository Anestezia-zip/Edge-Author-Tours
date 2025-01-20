import { useNavigate } from "react-router-dom";
import AnimatedTitle from "../../components/AnimatedTitle";
import Button from "../../components/Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const FAQs = () => {
  const navigate = useNavigate();

  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/austria.png"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/italy.png"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 right-0 max-md:left-1/2 max-xl:-right-20 -translate-x-28 w-60 sm:top-1/2 md:top-52 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/australia.png"
            clipClass="absolute md:scale-125 contact-clip-path-3"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] md:text-[14px] uppercase">
            Got Questions?
          </p>

          <AnimatedTitle
            title="get all the <br /> answers for <br /> your perfect trip"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button title="FAQs" containerClass="mt-10 cursor-pointer" onClick={() => navigate('/faqs')} />
        </div>
      </div>
    </div>
  );
};

export default FAQs;
