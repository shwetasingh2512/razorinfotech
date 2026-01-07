import { useState, useEffect, useRef, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "/images/Logo/logo.png";

const hasChildren = (node) => Array.isArray(node.children) && node.children.length > 0;

const menuData = [
  {
    title: "WHO WE ARE",
    children: [
      { title: "About", path: "/about" },
      { title: "Career", path: "/career" },
    ],
  },
  {
    title: "OUR EXPERTISE",
    children: [
      {
        title: "BPO SERVICES",
        children: [
          { title: "Customer Support Service", path: "/customer-support-services" },
          { title: "Back Office Services", path: "/back-office-services" },
          { title: "Content Management Service", path: "/content-management" },
          { title: "IT Help Desk", path: "/it-help-desk" },
          { title: "Backend Outsource Service", path: "/backend-outsource" },
          { title: "Inbound Services", path: "/inbound-services" },
          { title: "Outbound Services", path: "/outbound-services"},
          { title: "Omnichannel Services", path: "/omnichanel" },
          { title: "E - Support Services", path: "/email-support-services" },
        ],
      },
      {
        title: "HR OUTSOURCE",
        children: [
          { title: "HR Services", path: "/hr-services" },
          { title: "Talent Development", path: "/talent-developement" },
          { title: "Training", path: "/training" },
          { title: "RPO", path: "/rpo" },
        ],
      },
      {
        title: "IT SOLUTIONS",
        children: [
          { title: "IT Solutions", path: "/it-solutions" },
          { title: "Software Development", path: "/software-developement" },
          { title: "App Development", path: "/app-developement" },
          { title: "Website Development", path: "/website-developement" },
          { title: "Data Management", path: "/data-management" },
        ],
      },
      {
        title: "LEGAL COMPLIANCE",
        children: [{ title: "Legal Compliance", path: "/Legal-complience" }],
      },
      {
        title: "FINANCIAL SERVICES",
        children: [{ title: "Financial Services", path: "/financial-services" }],
      },
      {
        title: "BUSINESS CONSULTANCY",
        children: [{ title: "Business Consultancy", path: "/business-consultancy" }],
      },
      {
        title: "MARKETING & BRANDING",
        children: [
          { title: "Marketing & Branding", path: "/marketing-branding" },
          { title: "Content Creation", path: "/content-creation-services" },
          { title: "Content Moderation", path: "/content-moderation-services" },
          { title: "SEO", path: "/seo" },
          { title: "App Store Optimization", path: "/app-store-optimization" },
          { title: "YouTube Marketing", path: "/youtube" },
          { title: "Google My Business", path: "/google-my-business" },
          { title: "Online Reputation", path: "/online-reputation-market" },
        ],
      },
      {
        title: "ANGEL INVESTORS",
        children: [{ title: "Angel Investor", path: "/angle-investor" }],
      },
      {
        title: "DATA ENTRY",
        children: [{ title: "Data Entry", path: "/data-entry" }],
      },
    ],
  },
  { title: "OUR PRODUCTS", path: "/products" },
  { title: "BLOGS", path: "/blogs" },
];

function MobileNode({ node, closeAll }) {
  const [open, setOpen] = useState(false);
  const kids = hasChildren(node);

  if (!kids && node.path) {
    return (
      <Link
        to={node.path}
        onClick={closeAll}
        className="block rounded-lg px-4 py-3 text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors duration-200"
      >
        {node.title}
      </Link>
    );
  }

  return (
    <div className="px-2">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-slate-700 hover:bg-emerald-50 hover:text-emerald-800 transition-colors duration-200"
        type="button"
      >
        <span className="text-left">{node.title}</span>
        {kids && (
          <FaChevronDown 
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} 
          />
        )}
      </button>

      {kids && open && (
        <div className="ml-3 border-l-2 border-emerald-200 pl-3 mt-1">
          {node.children.map((c, i) => (
            <MobileNode key={i} node={c} closeAll={closeAll} />
          ))}
        </div>
      )}
    </div>
  );
}

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [expertiseActiveGroupIdx, setExpertiseActiveGroupIdx] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuRef = useRef(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setActiveMenu(null);
    setMobileOpen(false);
  }, [location.pathname]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const BRAND_GREEN = "#2f6f4e";
  const SECONDARY_GREEN = "#3d8b65";
  const LIGHT_GREEN_BG = "#f0f9f4";
  const ACCENT_GREEN = "#e8f5ef";

  const expertiseNode = useMemo(
    () => menuData.find((m) => m.title === "OUR EXPERTISE"),
    []
  );

  const expertiseGroups = expertiseNode?.children || [];
  const activeGroup = expertiseGroups[expertiseActiveGroupIdx];

  return (
    <header className="border-b border-emerald-100 shadow-sm z-50 w-full bg-white">
      <div className="mx-auto flex px-4 sm:px-6 md:px-10 lg:px-16 items-center justify-between py-2 sm:py-3">
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src={logo} 
            alt="logo" 
            className="w-28 sm:w-32 transition-transform duration-300 group-hover:scale-105" 
          />
        </Link>

        <nav className="relative hidden lg:block" ref={menuRef}>
          <ul className="flex items-center gap-5 lg:gap-8 text-[13px] font-medium tracking-wide">
            {menuData.map((menu, i) => {
              const kids = hasChildren(menu);
              const isActive = activeMenu === i;

              return (
                <li key={i} className="relative">
                  {menu.path && !kids ? (
                    <Link
                      to={menu.path}
                      className="inline-flex items-center gap-2 text-slate-700 hover:text-emerald-700 transition-colors duration-200 relative group"
                      onClick={() => setActiveMenu(null)}
                    >
                      {menu.title}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 group-hover:w-full transition-all duration-300"></span>
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className={`flex items-center gap-2 transition-colors duration-200 relative group ${
                        isActive 
                          ? "text-emerald-700" 
                          : "text-slate-700 hover:text-emerald-700"
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        const next = activeMenu === i ? null : i;
                        setActiveMenu(next);
                        if (next === i && menu.title === "OUR EXPERTISE") {
                          setExpertiseActiveGroupIdx(0);
                        }
                      }}
                    >
                      {menu.title}
                      {kids && (
                        <FaChevronDown
                          className={`transition-transform duration-300 ${
                            isActive ? "rotate-180" : ""
                          }`}
                        />
                      )}
                      <span 
                        className={`absolute -bottom-1 left-0 h-0.5 bg-emerald-600 transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      ></span>
                    </button>
                  )}

                  {activeMenu === i && kids && (
                    <>
                      {menu.title === "OUR EXPERTISE" ? (
                        <div 
                          className="absolute left-0 top-full mt-3 z-50 w-[860px] rounded-2xl border border-emerald-100 bg-white shadow-2xl overflow-hidden animate-fadeIn"
                          style={{
                            animation: "fadeIn 0.2s ease-out"
                          }}
                        >
                          <div className="grid grid-cols-[260px_1fr]">
                            {/* Left sidebar */}
                            <div 
                              className="p-3"
                              style={{ background: LIGHT_GREEN_BG }}
                            >
                              <div className="text-[11px] font-bold text-emerald-700 px-2 py-1 uppercase tracking-wider">
                                Expertise Areas
                              </div>

                              <ul className="mt-2 space-y-1">
                                {expertiseGroups.map((group, idx) => {
                                  const active = idx === expertiseActiveGroupIdx;
                                  return (
                                    <li key={idx}>
                                      <button
                                        type="button"
                                        onMouseEnter={() => setExpertiseActiveGroupIdx(idx)}
                                        onClick={() => setExpertiseActiveGroupIdx(idx)}
                                        className={[
                                          "w-full flex items-center justify-between rounded-lg px-3 py-2.5 text-left text-[13px] transition-all duration-200",
                                          active
                                            ? "bg-white shadow-md border border-emerald-200 text-emerald-800 font-semibold"
                                            : "hover:bg-white/70 text-slate-700 hover:text-emerald-700",
                                        ].join(" ")}
                                      >
                                        <span>{group.title}</span>
                                        <FaChevronRight 
                                          className={`transition-transform duration-200 ${
                                            active ? "text-emerald-600" : "opacity-50"
                                          }`} 
                                        />
                                      </button>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>

                            {/* Right content */}
                            <div className="p-5" style={{ background: ACCENT_GREEN }}>
                              <div className="flex items-center justify-between mb-4">
                                <div className="text-[13px] font-bold text-slate-800">
                                  {activeGroup?.title || "Services"}
                                </div>

                                <Link
                                  to="/contact"
                                  className="text-[12px] font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-200"
                                  style={{ color: BRAND_GREEN }}
                                  onClick={() => setActiveMenu(null)}
                                >
                                  Talk to us 
                                  <span className="text-lg">→</span>
                                </Link>
                              </div>

                              <div className="grid grid-cols-2 gap-2.5">
                                {(activeGroup?.children || []).map((item, idx) => (
                                  <Link
                                    key={idx}
                                    to={item.path}
                                    onClick={() => setActiveMenu(null)}
                                    className="group flex items-center justify-between rounded-lg border border-emerald-200 bg-white px-3 py-2.5 text-[13px] text-slate-700 hover:border-emerald-400 hover:shadow-md transition-all duration-200"
                                  >
                                    <span className="truncate group-hover:text-emerald-800 transition-colors duration-200">
                                      {item.title}
                                    </span>
                                    <span
                                      className="ml-3 rounded-md px-2 py-1 text-[11px] font-semibold transition-all duration-200"
                                      style={{
                                        background: `${BRAND_GREEN}14`,
                                        color: BRAND_GREEN,
                                      }}
                                    >
                                      View
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div 
                          className="absolute left-0 top-full mt-3 z-50 min-w-[220px] rounded-xl border border-emerald-100 bg-white p-2 shadow-xl animate-fadeIn"
                          style={{ background: ACCENT_GREEN }}
                        >
                          <ul className="py-1">
                            {menu.children.map((child, j) => (
                              <li key={j}>
                                <Link
                                  to={child.path}
                                  className="block rounded-lg px-3 py-2 text-[13px] text-slate-700 hover:bg-white hover:text-emerald-800 hover:shadow-sm transition-all duration-200"
                                  onClick={() => setActiveMenu(null)}
                                >
                                  {child.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="rounded-full tracking-widest border-2 px-6 lg:px-8 py-2 sm:py-3 text-white font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            style={{ 
              background: `linear-gradient(135deg, ${BRAND_GREEN} 0%, ${SECONDARY_GREEN} 100%)`,
              borderColor: BRAND_GREEN 
            }}
          >
            CONTACT US
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-slate-800 hover:text-emerald-700 transition-colors duration-200"
          aria-label="Open menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div 
          className="lg:hidden border-t border-emerald-100"
          style={{ background: LIGHT_GREEN_BG }}
        >
          <div className="mx-auto max-w-2xl px-4 pb-4 pt-2">
            {menuData.map((node, idx) => (
              <MobileNode key={idx} node={node} closeAll={closeMobile} />
            ))}
            <Link
              to="/contact"
              onClick={closeMobile}
              className="mt-3 block rounded-lg px-4 py-3 text-center font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300"
              style={{ 
                background: `linear-gradient(135deg, ${BRAND_GREEN} 0%, ${SECONDARY_GREEN} 100%)` 
              }}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}

export default Navbar;
