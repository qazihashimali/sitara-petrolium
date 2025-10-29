import React from "react";
import Title from "../../Components/Title";

const CorporateInformation = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative h-[70vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('/Corporate-info-banner.png')", // ✅ replace with your actual image in public folder
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Foreground Content */}
        <div className="relative z-10 px-6 md:px-12 max-w-4xl mx-auto">
          <h2 className="text-red-500 text-xl sm:text-2xl font-semibold mb-3 tracking-wide uppercase">
            Corporate Information
          </h2>

          <Title
            title="Discover Our Corporate Structure"
            subtitle="Gain insights into Sitara Petroleum’s leadership, governance, and organizational framework driving excellence across our operations."
            align="center"
            textColor="text-white"
            subtitleColor="text-gray-200"
          />
        </div>
      </section>
      <div className="min-h-screen bg-white px-4 sm:px-8 md:px-12 lg:px-20 py-12">
        {/* Corporate Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Company Information
            </h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>
                <strong>Registered Name:</strong> Sitara Petroleum Services
                (Pvt) Ltd.
              </li>
              <li>
                <strong>Incorporated:</strong> 2018
              </li>
              <li>
                <strong>Registration No:</strong> 0123456
              </li>
              <li>
                <strong>NTN:</strong> 1234567-8
              </li>
              <li>
                <strong>SECP Registration:</strong> Available on request
              </li>
            </ul>
          </div>

          {/* Head Office */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Head Office
            </h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>Sitara Petroleum Services (Pvt) Ltd.</li>
              <li>Plot No. XX, Gulberg Industrial Area, Lahore, Pakistan</li>
              <li>Phone: +92 42 1234 5678</li>
              <li>Email: info@sitarapetroleum.com</li>
              <li>Website: www.sitarapetroleum.com</li>
            </ul>
          </div>

          {/* Directors & Management */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Board & Management
            </h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>Chairman: Mr. Imran Sitara</li>
              <li>Managing Director: Mr. Ahmed Raza</li>
              <li>Chief Financial Officer: Ms. Fatima Khan</li>
              <li>Company Secretary: Ms. Sana Iqbal</li>
            </ul>
          </div>

          {/* Bankers */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Bankers
            </h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>Habib Bank Limited (HBL)</li>
              <li>MCB Bank Limited</li>
              <li>Bank Alfalah Limited</li>
              <li>Allied Bank Limited</li>
            </ul>
          </div>

          {/* Auditors */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Auditors
            </h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>M/s XYZ & Co. Chartered Accountants</li>
              <li>Member Firm of International Audit Network</li>
            </ul>
          </div>

          {/* Legal Advisors */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Legal Advisors
            </h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>M/s ABC Legal Consultants</li>
              <li>Specialized in Corporate & Energy Sector Law</li>
            </ul>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-600 max-w-lg mx-auto mb-6">
            For business inquiries or corporate communication, please reach out
            to our corporate affairs department.
          </p>
          <a
            href="mailto:info@sitarapetroleum.com"
            className="bg-red-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-red-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default CorporateInformation;
