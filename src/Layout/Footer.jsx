import { Link } from "react-router-dom";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { IoMail, IoLocationSharp } from "react-icons/io5";
import logo from "/images/Logo/logo.png";

export default function Footer() {
  const links = [
    { label: "Home Page", to: "/" },
    { label: "About us", to: "/about" },
    { label: "Contact Us", to: "/contact" },
    { label: "Blog", to: "/blog" },
    { label: "Careers", to: "/careers" },
  ];

  return (
    <footer className="bg-[var(--color-background)] text-[var(--color-paragraph)]">
      <div className="py-20 px-20 bg-[url('/images/Footer/background-vector.png')] bg-no-repeat bg-cover grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex flex-col gap-3 px-5">
          <h5 className="text-secondary text-xl">Start building today!</h5>
          <h2 className="text-3xl text-heading font-semibold max-w-xl">Get Updated Informed to Subscribe Our Newsletter</h2>
        </div>
        <div className="flex justify-end flex-col items-center">
          <input type="text" className="rounded-full bg-white p-3 w-1/2 border" placeholder="Email" />
          <input type="submit" className="rounded-full bg-secondary font-semibold text-white p-3 w-1/2 border border-white mt-5" />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <img src={logo} alt="Razor Infotech" className="h-10 w-auto" />
            <p className="mt-4 max-w-xs">
              At Razor Infotech, we believe in leveling the playing field for startups and emerging businesses.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
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
                  className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-secondary)]/30 bg-[var(--color-accent)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-accent)] transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[var(--color-heading)]">Quick Links</h4>
            <ul className="mt-4 space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="hover:text-[var(--color-secondary)]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[var(--color-heading)]">Office Info.</h4>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <span className="grid h-10 w-16 place-items-center rounded-md bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">
                  <IoLocationSharp />
                </span>
                <p className="leading-6">
                  Address: 627, F/F, Westend Marg, Saidulajab Extension, Sainik Farm, New Delhi, Delhi-110030
                </p>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-md bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">
                  <FaPhoneAlt />
                </span>
                <a href="tel:01145034631" className="hover:text-[var(--color-secondary)]">
                  Contact No: 01145034631
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-md bg-[var(--color-secondary)]/15 text-[var(--color-secondary)]">
                  <IoMail />
                </span>
                <a href="mailto:buisness@razorinfotech.com" className="hover:text-[var(--color-secondary)]">
                  Email: buisness@razorinfotech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--color-paragraph)]/20 pt-6 text-sm">
          <p className="text-center">&copy; {new Date().getFullYear()} Copyright by Razor Infotech</p>
        </div>
      </div>
    </footer>
  );
}
