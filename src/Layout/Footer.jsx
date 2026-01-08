import { Link } from "react-router-dom";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { IoMail, IoLocationSharp } from "react-icons/io5";
import logo from "/images/Logo/logo.png";

export default function Footer() {
  // const links = [
  //   { label: "Home", to: "/" },
  //   { label: "About Us", to: "/about" },
  //   { label: "Contact Us", to: "/contact" },
  //   { label: "Products", to: "/products" },
  //   { label: "Careers", to: "/career" },
  //   { label: "IT Solutions", to: "/it-solutions" },
  //   { label: "Software Development", to: "/software-developement" },
  //   { label: "App Development", to: "/app-developement" },
  //   { label: "Website Development", to: "/website-developement" },
  //   { label: "Marketing & Branding", to: "/marketing-branding" },
  //   { label: "SEO", to: "/seo" },
  // ];

  const linksCol1 = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Contact Us", to: "/contact" },
    { label: "Products", to: "/products" },
    { label: "Careers", to: "/career" },
  ];

  const linksCol2 = [
    { label: "IT Solutions", to: "/it-solutions" },
    { label: "Software Development", to: "/software-developement" },
    { label: "App Development", to: "/app-developement" },
    { label: "Website Development", to: "/website-developement" },
    { label: "Marketing & Branding", to: "/marketing-and-branding" },
    { label: "SEO", to: "/seo" },
  ];

  return (
    <footer className="bg-[var(--color-background)] text-[var(--color-paragraph)]">
      <div className="py-10 sm:py-14 md:py-20 px-4 sm:px-10 md:px-16 lg:px-30 bg-[url('/images/Footer/background-vector.png')] bg-no-repeat bg-cover grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        <div className="flex flex-col gap-2 sm:gap-3 px-2 sm:px-5 ">
          <h5 className="text-secondary text-lg sm:text-xl">Start building today!</h5>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-heading font-semibold max-w-full sm:max-w-xl">
            Get Updated Informed to Subscribe Our Newsletter
          </h2>
        </div>
        <form className="flex flex-col items-center justify-center gap-4 sm:gap-5">
          <input
            type="text"
            className="rounded-full bg-white p-2 sm:p-3 w-full sm:w-3/4 md:w-1/2 border"
            placeholder="Email"
          />
          <input
            type="submit"
            className="rounded-full bg-secondary font-semibold text-white p-2 sm:p-3 w-full sm:w-3/4 md:w-1/2 border border-white"
            value="Subscribe"
          />
        </form>
      </div>
      <div className="mx-auto max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-7xl px-4 sm:px-6 md:px-10 py-6 sm:py-10">
        <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div>
            <img src={logo} alt="Razor Infotech" className="h-8 sm:h-10 w-auto" />
            <p className="mt-2 sm:mt-4 max-w-full sm:max-w-xs">
              At Razor Infotech, we believe in leveling the playing field for startups and emerging businesses.
            </p>
            <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3">
              {[
                { Icon: RiTwitterXLine, href: "https://twitter.com/RazorInfotech" },
                { Icon: FaFacebookF, href: "https://www.facebook.com/RazorInfotech" },
                { Icon: FaInstagram, href: "https://www.instagram.com/razorinfotech/" },
                { Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/razor-infotech/" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-9 w-9 sm:h-10 sm:w-10 place-items-center rounded-full border border-[var(--color-secondary)]/30 bg-[var(--color-accent)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-accent)] transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          {/* <div>
            <h4 className="text-base sm:text-lg font-semibold text-[var(--color-heading)]">Quick Links</h4>
            <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="hover:text-[var(--color-secondary)]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
          <div>
            <h4 className="text-lg font-semibold text-[var(--color-heading)] mb-6 sm:mb-8">Quick Links</h4>
            <ul className="space-y-3 sm:space-y-4">
              {linksCol1.map((l) => (
                <li key={l.label}>
                  <Link 
                    to={l.to} 
                    className="text-sm sm:text-base hover:text-[var(--color-secondary)] transition-colors duration-200 block group"
                  >
                    <span className="group-hover:translate-x-2 inline-block transition-transform">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[var(--color-heading)] mb-6 sm:mb-8">Services</h4>
            <ul className="space-y-3 sm:space-y-4">
              {linksCol2.map((l) => (
                <li key={l.label}>
                  <Link 
                    to={l.to} 
                    className="text-sm sm:text-base hover:text-[var(--color-secondary)] transition-colors duration-200 block group"
                  >
                    <span className="group-hover:translate-x-2 inline-block transition-transform">{l.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h4 className="text-base sm:text-lg font-semibold text-[var(--color-heading)]">Office Info.</h4>
            <ul className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <span className="grid h-8 w-12 sm:h-10 sm:w-16 place-items-center rounded-md bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">
                  <IoLocationSharp />
                </span>
                <p className="leading-5 sm:leading-6 text-xs sm:text-sm">
                  Address: 627, F/F, Westend Marg, Saidulajab Extension, Sainik Farm, New Delhi, Delhi-110030
                </p>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <span className="grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-md bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">
                  <FaPhoneAlt />
                </span>
                <a href="tel:01145034631" className="hover:text-[var(--color-secondary)] text-xs sm:text-sm">
                  Contact No: 01145034631
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <span className="grid h-7 w-7 sm:h-8 sm:w-8 place-items-center rounded-md bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">
                  <IoMail />
                </span>
                <a href="mailto:buisness@razorinfotech.com" className="hover:text-[var(--color-secondary)] text-xs sm:text-sm">
                  Email: buisness@razorinfotech.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
      <div className="my-3 sm:my-4 border-t border-[var(--color-paragraph)]/20 pt-3 sm:pt-4 text-xs sm:text-sm">
          <p className="text-center">&copy; {new Date().getFullYear()} Copyright by Razor Infotech</p>
        </div>
    </footer>
  );
}
