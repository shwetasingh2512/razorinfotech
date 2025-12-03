import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function Descriptionsection({ items }) {
  return (
    <section className={`px-4 sm:px-8 py-8 sm:py-12 lg:py-16 ${items.background}`}>
      <div
        className={`mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 ${
          items.width ? items.width : "max-w-full md:max-w-5xl lg:max-w-6xl"
        }`}
      >
        {/* Image */}
        <div className="flex justify-center items-center">
          <img
            src={items.image}
            alt={items.title}
            className={`rounded-2xl object-cover w-full max-w-[90%] sm:max-w-sm md:max-w-md lg:max-w-lg h-auto ${
              items.imgWidth || ""
            }`}
          />
        </div>

        {/* Text */}
        <div className="flex flex-col gap-4 justify-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-heading leading-snug">
            {items.title}
          </h2>

          <p className="text-paragraph text-sm sm:text-base max-w-prose">
            {items.description}
          </p>

          {items.btn && (
            <Link
              to={items.link || "#"}
              className="border border-secondary bg-secondary hover:bg-background hover:text-secondary text-white 
                       w-fit rounded-full pl-5 pr-2 lg:py-2 py-1 flex gap-3 items-center group transition"
            >
              <span className="font-semibold group-hover:text-secondary">
                {items.btn}
              </span>

              <span className="bg-white/20 p-2 rounded-full text-white group-hover:bg-secondary group-hover:text-white">
                <ArrowRight />
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default Descriptionsection;
