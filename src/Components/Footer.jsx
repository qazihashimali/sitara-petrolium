import React from "react";

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
              <li>Company Overview</li>
              <li>Leadership & Governance</li>
              <li>Corporate Structure</li>
              <li>Health, Safety & Environment</li>
              <li>Sustainability Commitments</li>
            </ul>
          </div>

          {/* Fuel & Operations */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Fuels & Operations
            </h4>
            <ul className="space-y-4">
              <li>Retail Network</li>
              <li>Fuel Products & Pricing</li>
              <li>Industrial Fuel Solutions</li>
              <li>Commercial Partnerships</li>
              <li>Become a Dealer</li>
            </ul>
          </div>

          {/* Lubricants */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Lubricants</h4>
            <ul className="space-y-4">
              <li>Automotive Lubricants</li>
              <li>Industrial Lubricants</li>
              <li>Technical Specifications</li>
              <li>Product Catalogue</li>
              <li>Distributor Support</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Customer Services
            </h4>
            <ul className="space-y-4">
              <li>Sitara Auto Service Centers</li>
              <li>Welcome Mart Stores</li>
              <li>Car Wash & Maintenance</li>
              <li>Rest Area Facilities</li>
              <li>Food & Hospitality</li>
            </ul>
          </div>

          {/* Digital Solutions */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Digital Solutions
            </h4>
            <ul className="space-y-4">
              <li>Sitara App</li>
              <li>Fleet Payment Solutions</li>
              <li>Corporate Accounts</li>
              <li>Digital Fuel Cards</li>
            </ul>
          </div>

          {/* Media & Support */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Media & Support
            </h4>
            <ul className="space-y-4">
              <li>Latest News</li>
              <li>Press Releases & Tenders</li>
              <li>Promotions & Campaigns</li>
              <li>Customer Care</li>
            </ul>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-300 pt-4 text-sm text-gray-500 text-center">
          <a href="#" className="mr-4 hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="mr-4 hover:underline">
            Terms & Legal Notice
          </a>
          <a href="#" className="mr-4 hover:underline">
            Jamapunji
          </a>
          <a href="#" className="hover:underline">
            SECP Helpline
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
