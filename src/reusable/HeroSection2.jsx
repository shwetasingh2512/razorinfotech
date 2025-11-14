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
    verticlespacing
  } = items;

  const textAlign = center ? "text-center" : "text-left";
  const blockAlign = center ? "mx-auto" : "";
  const gridCols = image ? "lg:grid-cols-2" : "lg:grid-cols-1";

  return (
    <section className={`${background} relative overflow-hidden px-4 sm:px-8 py-8 sm:py-12`}>
      {showVector && (
        <div className="pointer-events-none absolute top-0 right-0 h-3/5 w-3/5 -z-10">
          <img src={vectorImage} alt="" className="h-full w-full object-cover" />
        </div>
      )}
      <div className={`mx-auto grid max-w-full sm:max-w-3xl lg:max-w-7xl grid-cols-1 ${gridCols} gap-8 items-center`}>
        <div>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-semibold text-heading ${headmaxwidth} ${blockAlign} ${textAlign}`}>
            {title}
          </h2>
          <p className={`my-3 sm:my-4 text-base sm:text-lg text-paragraph ${parawidth} ${blockAlign} ${textAlign}`}>
            {description}
          </p>
          {btn && (
            <button className={`mt-2 inline-flex items-center gap-3 bg-secondary text-white rounded-full border pl-5 pr-1 group py-2 transition hover:bg-secondary-dark ${center ? "mx-auto" : ""}`}>
              {typeof btn === "string" ? <span>{btn}</span> : btn}
              <span className="rounded-full bg-white/20 p-3">
                <FaArrowRightLong />
              </span>
            </button>
          )}
        </div>
        {image && (
          <div className="flex items-center justify-center">
            <img src={image} alt={alt} className="w-full max-w-md h-auto object-cover rounded-xl" loading="lazy" decoding="async" />
          </div>
        )}
      </div>
    </section>
  );
}
