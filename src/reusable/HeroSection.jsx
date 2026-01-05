import { Link } from "react-router-dom";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { RiInstagramFill } from "react-icons/ri";
import { IoArrowForward } from "react-icons/io5";

export default function HeroSection({
  abovetitle,
  title,
  description,
  buttonText,
  buttonLink,
  heroImage,
  reverse,
  bgcolor,
  connectwithus,
  buttonHoverbackground
}) {
  const iconsforconnect = [
    { icon: <RiTwitterXLine />, link: "https://twitter.com/RazorInfotech" },
    { icon: <FaFacebook />, link: "https://www.facebook.com/RazorInfotech" },
    { icon: <TbBrandLinkedinFilled />, link: "https://www.linkedin.com/company/razor-infotech/" },
    { icon: <RiInstagramFill />, link: "https://www.instagram.com/razorinfotech/" },
  ];

  return (
    <div className={`relative px-4 sm:px-6 pb-12 sm:pb-16 overflow-hidden ${bgcolor}`}>
      <div
        className={`relative mx-auto max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-7xl flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""
          } mt-10 sm:mt-20 z-10 gap-y-10 md:gap-x-10`}
      >
        <div className="flex flex-col gap-5 w-full md:w-1/2 md:pl-8 px-2">
          {abovetitle && (
            <p className="text-sm sm:text-base tracking-widest font-medium text-secondary uppercase">
              {abovetitle}
            </p>
          )}

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:w-lg lg:text-4xl leading-tight font-semibold text-heading max-w-prose mx-auto md:mx-0">
            {title}
          </h1>

          <p className="text-sm sm:text-md lg:text-lg text-paragraph max-w-prose mx-auto md:mx-0">
            {description}
          </p>

          {buttonText && buttonLink && (
            <Link
              to={buttonLink}
              className={`font-semibold rounded-full w-fit pl-5 flex items-center transition-all border duration-200 bg-secondary hover:bg-${buttonHoverbackground} border-secondary hover:text-secondary group text-white gap-4 py-2`}
            >
              {buttonText}
              <span className="bg-accent/30 p-2 group-hover:bg-secondary group-hover:text-white rounded-full ml-auto mr-1">
                <IoArrowForward />
              </span>
            </Link>
          )}

          <div>
            {connectwithus && (
              <div className="mt-3">
                <p className="mb-3 text-base sm:text-lg font-bold text-paragraph">
                  Connect With Us
                </p>
                <div className="flex flex-wrap gap-2">
                  {iconsforconnect.map((iconItem, index) => (
                    <Link
                      to={iconItem.link}
                      key={index}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-slate-400 rounded-full p-2 sm:p-3 text-base sm:text-lg hover:text-secondary hover:border-secondary"
                    >
                      {iconItem.icon}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="z-20 flex items-center justify-center w-full md:w-1/2">
          {heroImage && (
            <img
              src={heroImage}
              alt="hero"
              className="w-full max-w-[90%] sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-xl object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
}
