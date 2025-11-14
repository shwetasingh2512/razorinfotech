import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Hammad Khan",
    role: "Operation Head",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
    rating: 4,
    review:
      "Their IT help desk team feels like an extension of our own staff. The professionalism and technical expertise they bring have been game-changers for our business.",
  },
  {
    name: "Hasan",
    role: "Developer, Company",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
    rating: 4,
    review:
      "Razor Infotech turned our vision into a sleek, high-performing website. The user experience is now miles ahead of where we were before.",
  },
  {
    name: "Gunjan",
    role: "UI Designer, Company",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c0db?w=50&h=50&fit=crop&crop=face",
    rating: 4,
    review:
      "UI grid section templates are visually impressive and easy to customize. They've elevated my project presentations.",
  },
  {
    name: "Nikunj",
    role: "Team Leader, Company",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&crop=face",
    rating: 4,
    review:
      "We revamped our company website using their expertise and the feedback has been overwhelming.",
  },
];

export default function TestimonialCarousel() {
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];
  return (
    <div className="py-10">
      <div className="overflow-x-hidden relative w-full mb-4">
        <div
          className="flex gap-6 animate-scroll-left"
          style={{ minWidth: "max-content" }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <Card key={`top-${index}`} {...testimonial} />
          ))}
        </div>
      </div>
      <div className="overflow-x-hidden relative w-full mt-12">
        <div
          className="flex gap-6 animate-scroll-right"
          style={{ minWidth: "max-content" }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <Card key={`bottom-${index}`} {...testimonial} />
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-33.333%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll-left {
            animation: scroll-left 30s linear infinite;
          }
          .animate-scroll-right {
            animation: scroll-right 30s linear infinite;
          }
          .overflow-x-hidden:hover .animate-scroll-left,
          .overflow-x-hidden:hover .animate-scroll-right {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  );
}

function Card({ name, role, image, rating, review }) {
  return (
    <div className="bg-accent rounded-xl p-4 md:p-5 text-heading flex flex-col justify-between w-72 sm:w-80 md:w-96 h-60 sm:h-56 md:h-64 flex-shrink-0">
      <div className="flex items-center gap-2 mb-3">
        <img src={image} alt={name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0" />
        <div className="flex-grow min-w-0">
          <h4 className="font-semibold text-sm truncate">{name}</h4>
          <p className="text-xs text-paragraph truncate">{role}</p>
        </div>
        <div className="flex flex-shrink-0">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={`text-sm ${i < rating ? "text-primary" : "text-[#dcdcdc]"}`} />
          ))}
        </div>
      </div>
      <FaQuoteLeft className="text-lg text-secondary mb-2" />
      <div className="flex-grow overflow-hidden">
        <p className="text-paragraph text-xs sm:text-sm leading-relaxed line-clamp-5">{review}</p>
      </div>
    </div>
  );
}
