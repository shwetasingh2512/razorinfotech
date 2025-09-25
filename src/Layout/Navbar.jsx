import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "/images/Logo/logo.png";

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
        title: "BPO Services",
        children: [
          {
            title: "Customer Support Service",
            children: [
              { title: "Inbound Services", path: "/inbound" },
              { title: "Outbound Services", path: "/outbound" },
              { title: "Omnichannel Services", path: "/omnichannel" },
              { title: "Email Support Services", path: "/email-support" },
            ],
          },
          { title: "Back Office Services", path: "/backoffice" },
          { title: "Content Management Service", path: "/cms" },
          { title: "IT Help Desk", path: "/helpdesk" },
          { title: "Backend Outsource Service", path: "/backend" },
        ],
      },
      {
        title: "HR Outsource",
        children: [
          { title: "Recruitment Process Outsourcing", path: "/rpo" },
          { title: "Training & Developement", path: "/payroll" },
          { title: "Talent Developement", path: "/benefits" },
        ],
      },
      { title: "IT Solutions", path: "/it-solutions" },
      { title: "Legal Compliance", path: "/legal" },
      { title: "Financial Services", path: "/finance" },
      { title: "Business Consultancy", path: "/consultancy" },
      { title: "Angel Investors", path: "/investors" },
    ],
  },
  { title: "OUR PRODUCTS", path: "/products" },
  { title: "BLOGS", path: "/blogs" },
];

const hasChildren = (node) => Array.isArray(node.children) && node.children.length > 0;

function MobileNode({ node, depth = 0, closeAll }) {
  const [open, setOpen] = useState(false);
  const kids = hasChildren(node);

  if (!kids && node.path) {
    return (
      <Link to={node.path} onClick={closeAll} className="block rounded px-4 py-3 hover:bg-gray-100">
        {node.title}
      </Link>
    );
  }

  return (
    <div className="px-2">
      <button onClick={() => setOpen((o) => !o)} className="flex w-full items-center justify-between rounded px-3 py-3 hover:bg-gray-100">
        <span className="text-left">{node.title}</span>
        {kids && <FaChevronDown className={`transition ${open ? "rotate-180" : ""}`} />}
      </button>
      {kids && open && (
        <div className="ml-3 border-l border-gray-200 pl-3">
          {node.children.map((c, i) => (
            <MobileNode key={i} node={c} depth={depth + 1} closeAll={closeAll} />
          ))}
        </div>
      )}
    </div>
  );
}

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [activeItem, setActiveItem] = useState(null);
  const [activateNavbarbg, setActivateNavbarbg] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setActivateNavbarbg(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActiveMenu(null);
        setActiveSubMenu(null);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className={` border-b border-white/50 z-50 w-full transition-colors duration-300 bg-white`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-32" />
        </Link>

        <nav className="relative hidden md:block" ref={menuRef}>
          <ul className="flex items-center gap-8">
            {menuData.map((menu, i) => {
              const kids = hasChildren(menu);
              return (
                <li key={i} className="relative">
                  {menu.path && !kids ? (
                    <Link
                      to={menu.path}
                      className="inline-flex items-center gap-2 hover:opacity-80"
                      onClick={() => {
                        setActiveMenu(null);
                        setActiveSubMenu(null);
                      }}
                    >
                      {menu.title}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      className="flex items-center gap-2 hover:opacity-80"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveMenu(activeMenu === i ? null : i);
                        setActiveSubMenu(null);
                      }}
                    >
                      {menu.title}
                      {kids && <FaChevronDown className={`transition ${activeMenu === i ? "rotate-180" : ""}`} />}
                    </button>
                  )}

                  {activeMenu === i && kids && (
                    <div className="absolute left-0 top-full mt-3 z-50 text-white flex gap-6 rounded-lg bg-secondary p-4 shadow-lg">
                      <ul className="min-w-[220px]">
                        {menu.children.map((child, j) => {
                          const childHasKids = hasChildren(child);
                          return (
                            <li key={j}>
                              {childHasKids ? (
                                <button
                                  className={`flex w-full items-center justify-between rounded px-3 py-2 ${activeSubMenu === j ? "bg-secondary" : "hover:bg-gray-700"}`}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setActiveSubMenu(activeSubMenu === j ? null : j);
                                    setActiveItem(child.title);
                                  }}
                                >
                                  {child.title} <FaChevronRight />
                                </button>
                              ) : (
                                <Link
                                  to={child.path}
                                  className={`block rounded px-3 py-2 ${activeItem === child.title ? "bg-secondary" : "hover:bg-gray-700"}`}
                                  onClick={() => {
                                    setActiveItem(child.title);
                                    setActiveMenu(null);
                                  }}
                                >
                                  {child.title}
                                </Link>
                              )}
                            </li>
                          );
                        })}
                      </ul>

                      {activeSubMenu !== null && hasChildren(menu.children[activeSubMenu]) && (
                        <ul className="min-w-[240px] rounded bg-gray-700 p-4">
                          {menu.children[activeSubMenu].children.map((subChild, k) => (
                            <li key={k}>
                              <Link
                                to={subChild.path}
                                className={`block rounded px-3 py-2 hover:bg-gray-600 ${activeItem === subChild.title ? "bg-secondary" : ""}`}
                                onClick={() => {
                                  setActiveItem(subChild.title);
                                  setActiveMenu(null);
                                  setActiveSubMenu(null);
                                }}
                              >
                                {subChild.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Link to="/contact" className="rounded-full tracking-widest bg-secondary px-8 py-4 text-white hover:bg-primary-light">
            CONTACT US
          </Link>
        </div>

        <button className="md:hidden" aria-label="Open menu" onClick={() => setMobileOpen((v) => !v)}>
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden">
          <div className="mx-auto max-w-7xl px-4 pb-4">
            {menuData.map((node, idx) => (
              <MobileNode key={idx} node={node} closeAll={closeMobile} />
            ))}
            <Link to="/contact" onClick={closeMobile} className="mt-2 block rounded border px-4 py-3 text-center">
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
