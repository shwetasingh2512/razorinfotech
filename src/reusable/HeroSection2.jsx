import { FaArrowRightLong } from "react-icons/fa6";
import vectorImage from "/images/vector/Vector-1.png";

export default function HeroSection2({ items = {} }) {
  const {
    background = "",
    showVector = false,
    title = "",
    description = "",
    headmaxwidth = "",
    parawidth = "",
    center = false,
    btn,
    image,
    alt = "Hero image",
    verticlespacing = "py-10 sm:py-14 lg:py-20",
  } = items;

  const textAlign = center ? "text-center" : "text-left";
  const blockAlign = center ? "mx-auto" : "";
  const gridCols = image ? "lg:grid-cols-2" : "lg:grid-cols-1";

  return (
    <section className={`${background} relative overflow-hidden px-4 sm:px-8 ${verticlespacing}`}>
      
      {/* Vector Shape */}
      {showVector && (
        <div className="pointer-events-none absolute top-0 right-0 h-2/3 w-2/3 -z-10 opacity-70">
          <img src={vectorImage} alt="" className="h-full w-full object-cover" />
        </div>
      )}

      {/* Content Grid */}
      <div className={`mx-auto grid max-w-3xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl grid-cols-1 ${gridCols} gap-10 items-center`}>
        
        {/* Text Block */}
        <div>
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-heading leading-tight
              ${headmaxwidth ? headmaxwidth : "max-w-xl lg:max-w-2xl"}
              ${blockAlign} ${textAlign}`}
          >
            {title}
          </h2>

          <p
            className={`mt-3 sm:mt-4 text-base sm:text-lg text-paragraph leading-relaxed
              ${parawidth ? parawidth : "max-w-prose"}
              ${blockAlign} ${textAlign}`}
          >
            {description}
          </p>

          {/* Button */}
          {btn && (
            <button
              className={`mt-5 inline-flex items-center gap-3 bg-secondary text-white rounded-full
                pl-5 pr-2 py-2 border transition hover:bg-secondary-dark group
                ${center ? "mx-auto" : ""}`}
            >
              <span className="font-semibold">{typeof btn === "string" ? btn : btn}</span>

              <span className="rounded-full bg-white/20 p-2 sm:p-3 group-hover:bg-white/30 transition">
                <FaArrowRightLong />
              </span>
            </button>
          )}
        </div>
        {image && (
          <div className="flex items-center justify-center">
            <img
              src={image}
              alt={alt}
              loading="lazy"
              decoding="async"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-xl object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
}
