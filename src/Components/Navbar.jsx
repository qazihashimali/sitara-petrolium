import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { images } from "../assets/assets";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const navItems = [
    {
      title: "About Us",
      items: [
        { name: "Who We Are", path: "/About/who-we-are" },
        { name: "Our Operations", path: "/About/operations" },
        { name: "Board of Directors", path: "/About/directors" },
        { name: "Our Management", path: "/About/management" },
        { name: "Corporate Information", path: "/About/corporate-info" },
        {
          name: "Health, Safety & Environment (HSE)",
          path: "/About/health-safety",
        },
        { name: "Sustainability Initiatives", path: "/About/sustainability" },
      ],
    },
    {
      title: "Fuel & Facilities",
      items: [
        { name: "Retail Network", path: "/Fuel/retail-network" },
        { name: "Fuel Products", path: "/Fuel/fuel-products" },
        // { name: "Become a Dealer", path: "/Fuel/dealer" },
        {
          name: "Industrial Fuel Solutions",
          path: "/Fuel/industrial--fuel-solutions",
        },
      ],
    },
    {
      title: "Lubricants",
      items: [
        {
          name: "Automotive Engine Oils",
          path: "/Lubricants/automotive-engine",
        },
        {
          name: "Industrial Lubricants",
          path: "/Lubricants/industrial-lubricants",
        },
        { name: "Engine Oil Insights", path: "/Lubricants/insights" },
        { name: "Product Catalog", path: "/Lubricants/catalog" },
        {
          name: "Distributer Support",
          path: "/Lubricants/distributer-support",
        },
      ],
    },
    {
      title: "Services",
      items: [
        { name: "Sitara Auto Services (SAS)", path: "/Services/sas" },
        {
          name: "Welcome Convenience Stores",
          path: "/Services/convenience-stores",
        },
        { name: "Car Wash & Detailing", path: "/Services/car-wash" },
        { name: "Clean & Fresh Restrooms", path: "/Services/restrooms" },
        { name: "Food & Dining", path: "/Services/food-dining" },
      ],
    },
    {
      title: "Digital Payment Solutions",
      items: [
        { name: "Sitara Mobile App", path: "/Digital/mobile-app" },
        {
          name: "Fleet Payment Solutions",
          path: "/Digital/fleet-payment-solutions",
        },
        { name: "Corporate Accounts", path: "/Digital/corporate-accounts" },
        { name: "Digital Fuel Cards", path: "/Digital/digital-fuel-cards" },
      ],
    },
    {
      title: "News & Promotions",
      items: [
        { name: "Customer Helpline", path: "/News/customer-helpline" },
        { name: "Dealer Opportunities", path: "/News/dealer-opportunities" },
        { name: "Investor Relations", path: "/News/investor-relations" },
        { name: "Feedback & Queries", path: "/News/feedback" },
        { name: "Industrial Solutions", path: "/News/industrial-solutions" },
      ],
    },
    {
      title: "Carrers",
      items: [{ name: "Customer Helpline", path: "/News/customer-helpline" }],
    },
  ];

  useEffect(() => {
    setOpenMenu(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <Link
            to="/"
            onClick={() => {
              setOpenMenu(false);
              setActiveDropdown(null);
            }}
          >
            <img
              src={images.logo}
              alt="Logo"
              className="w-20 h-20 object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-lg text-gray-800">
          {navItems.map((menu, index) => (
            <li key={index} className="relative group">
              <button className="flex items-center gap-1 hover:text-red-600 transition-colors">
                {menu.title}
                <ChevronDown size={14} />
              </button>

              <ul className="absolute left-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-2 transition-all duration-200 z-50">
                {menu.items.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-600 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpenMenu(!openMenu)}
          aria-label="Toggle menu"
        >
          {openMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu with smooth transition */}
      <div
        className={`md:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-500 ease-in-out ${
          openMenu ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {navItems.map((menu, index) => (
          <div key={index} className="border-b border-gray-100">
            <button
              onClick={() =>
                setActiveDropdown(activeDropdown === index ? null : index)
              }
              className="w-full flex justify-between items-center px-4 py-3 text-gray-800 font-semibold text-sm"
            >
              {menu.title}
              <ChevronDown
                size={14}
                className={`transition-transform ${
                  activeDropdown === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown items with smooth fade */}
            <ul
              className={`bg-gray-50 transition-all duration-500 ease-in-out overflow-hidden ${
                activeDropdown === index
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {menu.items.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    onClick={() => {
                      setOpenMenu(false);
                      setActiveDropdown(null);
                    }}
                    className="block px-6 py-2 text-sm text-gray-700 hover:bg-red-600 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
