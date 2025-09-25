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
    <>
      <style>
        {`
          .carousel-container {
            overflow: hidden;
            position: relative;
            width: 100%;
            margin-bottom: 1rem;
          }

          .carousel-track {
            display: flex;
            gap: 2rem;
            width: calc(350px * ${duplicatedTestimonials.length});
            animation-duration: 30s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }

          .carousel-track-left {
            animation-name: scroll-left-seamless;
          }

          .carousel-track-right {
            animation-name: scroll-right-seamless;
          }

          @keyframes scroll-left-seamless {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-350px * ${testimonials.length} - 1rem * ${testimonials.length}));
            }
          }

          @keyframes scroll-right-seamless {
            0% {
              transform: translateX(calc(-350px * ${testimonials.length} - 1rem * ${testimonials.length}));
            }
            100% {
              transform: translateX(0);
            }
          }

          .carousel-container:hover .carousel-track {
            animation-play-state: paused;
          }

          .testimonial-card {
            width: 400px;
            height: 250px;
            flex-shrink: 0;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
      
      <div className="py-10">
        {/* Top row - left to right */}
        <div className="carousel-container">
          <div className="carousel-track carousel-track-left">
            {duplicatedTestimonials.map((testimonial, index) => (
              <Card key={`top-${index}`} {...testimonial} />
            ))}
          </div>
        </div>

        {/* Bottom row - right to left */}
        <div className="carousel-container mt-12">
          <div className="carousel-track carousel-track-right">
            {duplicatedTestimonials.map((testimonial, index) => (
              <Card key={`bottom-${index}`} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function Card({ name, role, image, rating, review }) {
  return (
    <div className="testimonial-card bg-accent rounded-xl p-5 text-heading">
      <div className="flex items-center gap-2 mb-3">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
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
        <p className="text-paragraph text-sm leading-relaxed line-clamp-6">{review}</p>
      </div>
    </div>
  );
}
