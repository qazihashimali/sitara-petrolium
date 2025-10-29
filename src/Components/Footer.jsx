import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 text-sm text-gray-700 mb-6">
          {/* About Sitara Petroleum */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              About Sitara Petroleum
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/About/who-we-are"
                  className="hover:text-red-600 transition-colors"
                >
                  Company Overview
                </Link>
              </li>
              <li>
                <Link
                  to="/About/directors"
                  className="hover:text-red-600 transition-colors"
                >
                  Board of Directors
                </Link>
              </li>
              <li>
                <Link
                  to="/About/management"
                  className="hover:text-red-600 transition-colors"
                >
                  Our Management Team
                </Link>
              </li>
              <li>
                <Link
                  to="/About/corporate-info"
                  className="hover:text-red-600 transition-colors"
                >
                  Corporate Structure
                </Link>
              </li>
              <li>
                <Link
                  to="/About/health-safety"
                  className="hover:text-red-600 transition-colors"
                >
                  Health, Safety & Environment
                </Link>
              </li>
              <li>
                <Link
                  to="/About/sustainability"
                  className="hover:text-red-600 transition-colors"
                >
                  Sustainability Commitments
                </Link>
              </li>
              <li>
                <Link
                  to="/About/operations"
                  className="hover:text-red-600 transition-colors"
                >
                  Our Operations
                </Link>
              </li>
            </ul>
          </div>

          {/* Fuel & Operations */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Fuels & Operations
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/Fuel/retail-network"
                  className="hover:text-red-600 transition-colors"
                >
                  Retail Network
                </Link>
              </li>
              <li>
                <Link
                  to="/Fuel/fuel-products"
                  className="hover:text-red-600 transition-colors"
                >
                  Fuel Products & Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/Fuel/industrial--fuel-solutions"
                  className="hover:text-red-600 transition-colors"
                >
                  Industrial Fuel Solutions
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/Fuel/dealer"
                  className="hover:text-red-600 transition-colors"
                >
                  Commercial Partnerships
                </Link>
              </li> */}
              {/* <li>
                <Link
                  to="/Fuel/dealer"
                  className="hover:text-red-600 transition-colors"
                >
                  Become a Dealer
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Lubricants */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Lubricants</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/Lubricants/automotive-engine"
                  className="hover:text-red-600 transition-colors"
                >
                  Automotive Lubricants
                </Link>
              </li>
              <li>
                <Link
                  to="/Lubricants/industrial-lubricants"
                  className="hover:text-red-600 transition-colors"
                >
                  Industrial Lubricants
                </Link>
              </li>
              <li>
                <Link
                  to="/Lubricants/insights"
                  className="hover:text-red-600 transition-colors"
                >
                  Technical Specifications
                </Link>
              </li>
              <li>
                <Link
                  to="/Lubricants/catalog"
                  className="hover:text-red-600 transition-colors"
                >
                  Product Catalogue
                </Link>
              </li>
              <li>
                <Link
                  to="/Lubricants/distributer-support"
                  className="hover:text-red-600 transition-colors"
                >
                  Distributor Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Customer Services
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/Services/sas"
                  className="hover:text-red-600 transition-colors"
                >
                  Sitara Auto Service Centers
                </Link>
              </li>
              <li>
                <Link
                  to="/Services/convenience-stores"
                  className="hover:text-red-600 transition-colors"
                >
                  Convenience STORES
                </Link>
              </li>
              <li>
                <Link
                  to="/Services/car-wash"
                  className="hover:text-red-600 transition-colors"
                >
                  Car Wash & Maintenance
                </Link>
              </li>
              <li>
                <Link
                  to="/Services/restrooms"
                  className="hover:text-red-600 transition-colors"
                >
                  Rest Area Facilities
                </Link>
              </li>
              <li>
                <Link
                  to="/Services/food-dining"
                  className="hover:text-red-600 transition-colors"
                >
                  Food & Hospitality
                </Link>
              </li>
            </ul>
          </div>

          {/* Digital Solutions */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Digital Solutions
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/Digital/mobile-app"
                  className="hover:text-red-600 transition-colors"
                >
                  Sitara App
                </Link>
              </li>
              <li>
                <Link
                  to="/Digital/fleet-payment-solutions"
                  className="hover:text-red-600 transition-colors"
                >
                  Fleet Payment Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/Digital/corporate-accounts"
                  className="hover:text-red-600 transition-colors"
                >
                  Corporate Accounts
                </Link>
              </li>
              <li>
                <Link
                  to="/Digital/digital-fuel-cards"
                  className="hover:text-red-600 transition-colors"
                >
                  Digital Fuel Cards
                </Link>
              </li>
            </ul>
          </div>

          {/* Media & Support */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Media & Support
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/News/customer-helpline"
                  className="hover:text-red-600 transition-colors"
                >
                  Customer Care
                </Link>
              </li>
              <li>
                <Link
                  to="/News/investor-relations"
                  className="hover:text-red-600 transition-colors"
                >
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link
                  to="/News/dealer-opportunities"
                  className="hover:text-red-600 transition-colors"
                >
                  Dealer Opportunities
                </Link>
              </li>
              <li>
                <Link
                  to="/News/industrial-solutions"
                  className="hover:text-red-600 transition-colors"
                >
                  Industrial Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/News/feedback"
                  className="hover:text-red-600 transition-colors"
                >
                  Feedback & Queries
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-300 pt-4 text-sm text-gray-500 text-center">
          <Link to="/privacy-policy" className="mr-4 hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms" className="mr-4 hover:underline">
            Terms & Legal Notice
          </Link>
          <Link to="/jamapunji" className="mr-4 hover:underline">
            Jamapunji
          </Link>
          <Link to="/secp-helpline" className="hover:underline">
            SECP Helpline
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
