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
          { title: "Outbound Services", path: "/outbound-services" },
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
  { title: "BLOGS", path: "/blogs" },];

function MobileNode({ node, closeAll }) {
  const [open, setOpen] = useState(false);
  const kids = hasChildren(node);

  if (!kids && node.path) {
    return (
      <Link
        to={node.path}
        onClick={closeAll}
        className="block rounded px-4 py-3 hover:bg-gray-100"
      >
        {node.title}
      </Link>
    );
  }

  return (
    <div className="px-2">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between rounded px-3 py-3 hover:bg-gray-100"
        type="button"
      >
        <span className="text-left">{node.title}</span>
        {kids && <FaChevronDown className={`transition ${open ? "rotate-180" : ""}`} />}
      </button>

      {kids && open && (
        <div className="ml-3 border-l border-gray-200 pl-3">
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

  const expertiseNode = useMemo(
    () => menuData.find((m) => m.title === "OUR EXPERTISE"),
    []
  );

  const expertiseGroups = expertiseNode?.children || [];
  const activeGroup = expertiseGroups[expertiseActiveGroupIdx];

  return (
    <header className="border-b border-black/10 z-50 w-full bg-white">
      <div className="mx-auto flex px-4 sm:px-6 md:px-10 lg:px-16 items-center justify-between py-2 sm:py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-28 sm:w-32" />
        </Link>

        {/* Desktop */}
        <nav className="relative hidden lg:block" ref={menuRef}>
          <ul className="flex items-center gap-5 lg:gap-8 text-[13px] tracking-wide">
            {menuData.map((menu, i) => {
              const kids = hasChildren(menu);

              return (
                <li key={i} className="relative">
                  {menu.path && !kids ? (
                    <Link
                      to={menu.path}
                      className="inline-flex items-center gap-2 text-slate-700 hover:text-slate-900"
                      onClick={() => setActiveMenu(null)}
                    >
                      {menu.title}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className="flex items-center gap-2 text-slate-700 hover:text-slate-900"
                      onClick={(e) => {
                        e.stopPropagation();
                        const next = activeMenu === i ? null : i;
                        setActiveMenu(next);

                        // default selection when opening OUR EXPERTISE
                        if (next === i && menu.title === "OUR EXPERTISE") {
                          setExpertiseActiveGroupIdx(0);
                        }
                      }}
                    >
                      {menu.title}
                      {kids && (
                        <FaChevronDown
                          className={`transition ${activeMenu === i ? "rotate-180" : ""}`}
                        />
                      )}
                    </button>
                  )}

                  {/* Dropdowns */}
                  {activeMenu === i && kids && (
                    <>
                      {menu.title === "OUR EXPERTISE" ? (
                        // Mega menu (left categories + right panel)
                        <div className="absolute left-0 top-full mt-3 z-50 w-[860px] rounded-xl border border-black/10 bg-white shadow-xl">
                          <div className="grid grid-cols-[260px_1fr] overflow-hidden rounded-xl">
                            {/* Left: categories */}
                            <div className="bg-slate-50 p-3">
                              <div className="text-[11px] font-semibold text-slate-500 px-2 py-1">
                                EXPERTISE
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
                                          "w-full flex items-center justify-between rounded-lg px-3 py-2 text-left text-[13px] transition",
                                          active
                                            ? "bg-white border border-black/10 text-slate-900"
                                            : "hover:bg-white/70 text-slate-700",
                                        ].join(" ")}
                                      >
                                        <span>{group.title}</span>
                                        <FaChevronRight className="opacity-70" />
                                      </button>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>

                            {/* Right: items */}
                            <div className="p-4">
                              <div className="flex items-center justify-between">
                                <div className="text-[12px] font-semibold text-slate-700">
                                  {activeGroup?.title || "Services"}
                                </div>

                                <Link
                                  to="/contact"
                                  className="text-[12px] font-semibold"
                                  style={{ color: BRAND_GREEN }}
                                  onClick={() => setActiveMenu(null)}
                                >
                                  Talk to us →
                                </Link>
                              </div>

                              <div className="mt-3 grid grid-cols-2 gap-2">
                                {(activeGroup?.children || []).map((item, idx) => (
                                  <Link
                                    key={idx}
                                    to={item.path}
                                    onClick={() => setActiveMenu(null)}
                                    className="group flex items-center justify-between rounded-lg border border-black/10 bg-white px-3 py-2 text-[13px] text-slate-700 hover:border-black/20 hover:bg-slate-50"
                                  >
                                    <span className="truncate">{item.title}</span>
                                    <span
                                      className="ml-3 rounded-md px-2 py-1 text-[11px] font-semibold"
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
                        // Normal dropdown
                        <div className="absolute left-0 top-full mt-3 z-50 min-w-[220px] rounded-xl border border-black/10 bg-white p-2 shadow-xl">
                          <ul className="py-1">
                            {menu.children.map((child, j) => (
                              <li key={j}>
                                <Link
                                  to={child.path}
                                  className="block rounded-lg px-3 py-2 text-[13px] text-slate-700 hover:bg-slate-50 hover:text-slate-900"
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

        {/* CTA */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="rounded-full tracking-widest border px-6 lg:px-8 py-2 sm:py-3 text-white hover:opacity-90"
            style={{ background: BRAND_GREEN, borderColor: BRAND_GREEN }}
          >
            CONTACT US
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-slate-800"
          aria-label="Open menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-black/10 bg-white">
          <div className="mx-auto max-w-2xl px-4 pb-4">
            {menuData.map((node, idx) => (
              <MobileNode key={idx} node={node} closeAll={closeMobile} />
            ))}
            <Link
              to="/contact"
              onClick={closeMobile}
              className="mt-2 block rounded border px-4 py-3 text-center"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
