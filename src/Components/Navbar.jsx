import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { images } from "../assets/assets";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    {
      title: "About Us",
      items: [
        "Who We Are",
        "Our Operations",
        "Board of Directors",
        "Corporate Information",
        "Health, Safety & Environment (HSE)",
        "Sustainability Initiatives",
      ],
    },
    {
      title: "Fuel & Facilities",
      items: [
        "Retail Network",
        "Fuel Products",
        "Become a Dealer",
        "Industrial Fuel Solutions",
      ],
    },
    {
      title: "Lubricants",
      items: [
        "Automotive Engine Oils",
        "Industrial Lubricants",
        "Engine Oil Insights",
        "Product Catalog",
      ],
    },
    {
      title: "Services",
      items: [
        "Sitara Auto Services (SAS)",
        "Welcome Convenience Stores",
        "Car Wash & Total Wash",
        "Clean & Fresh Restrooms",
        "Food & Dining",
      ],
    },
    {
      title: "Digital Payment Solutions",
      items: ["Sitara Mobile App"],
    },
    {
      title: "News & Promotions",
      items: [
        "Customer Helpline",
        "Dealer Opportunities",
        "Feedback & Queries",
        "Industrial Solutions",
      ],
    },
  ];

  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src={images.logo}
            alt="Logo"
            className="w-20 h-20 object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg    text-gray-800">
          {navItems.map((menu, index) => (
            <li
              key={index}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 hover:text-primary hover:border-b-2 border-primary transition-colors">
                {menu.title}
                <ChevronDown size={14} />
              </button>
              {/* Dropdown */}
              {activeDropdown === index && (
                <ul className="absolute left-0 top-full mt-2 w-52 bg-white border border-primary rounded-md shadow-lg">
                  {menu.items.map((item, i) => (
                    <li
                      key={i}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white cursor-pointer transition-colors"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
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

      {/* Mobile Menu */}
      {openMenu && (
        <div className="md:hidden bg-white border-t border-gray-200">
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
              {activeDropdown === index && (
                <ul className="bg-gray-50">
                  {menu.items.map((item, i) => (
                    <li
                      key={i}
                      className="px-6 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
