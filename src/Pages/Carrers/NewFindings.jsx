import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, Target, Heart, Rocket } from "lucide-react";
import Title from "../../Components/Title";
import ApplyForm from "../Carrers/ApplyForm";

const NewFindings = () => {
  const openings = [
    {
      title: "Frontend Developer",
      location: "Lahore, Pakistan",
      business: "Fuel Division",
      type: "Full-time",
      description:
        "We’re looking for a React developer with strong UI/UX skills and experience integrating APIs.",
    },
    {
      title: "Sales Executive",
      location: "Karachi, Pakistan",
      business: "Lubricants Division",
      type: "Full-time",
      description:
        "Join our expanding sales team to build client relationships and drive business growth.",
    },
    {
      title: "HR Coordinator",
      location: "Faisalabad, Pakistan",
      business: "Fleet Management",
      type: "Full-time",
      description:
        "Help manage recruitment, training, and engagement initiatives across departments.",
    },
  ];

  const values = [
    {
      icon: <Users />,
      title: "Collaborative Culture",
      text: "We work as one team with shared goals.",
    },
    {
      icon: <Target />,
      title: "Innovation Driven",
      text: "We encourage bold ideas and creative thinking.",
    },
    {
      icon: <Heart />,
      title: "Employee Wellbeing",
      text: "Your growth and comfort matter to us.",
    },
    {
      icon: <Rocket />,
      title: "Career Growth",
      text: "We invest in your future with ongoing learning.",
    },
  ];

  const [job, setJob] = useState("");
  const [city, setCity] = useState("");
  const [business, setBusiness] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  const handleSearch = () => {
    const results = openings.filter((opening) => {
      return (
        (job
          ? opening.title.toLowerCase().includes(job.toLowerCase())
          : true) &&
        (city
          ? opening.location.toLowerCase().includes(city.toLowerCase())
          : true) &&
        (business ? opening.business === business : true)
      );
    });
    setFilteredJobs(results);
  };

  const showOpenings = filteredJobs.length > 0;

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 text-gray-800 relative">
      {/* Hero Section */}
      <section
        className="relative py-32 text-center px-6 md:px-12 bg-cover bg-center bg-no-repeat mb-20"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

        <motion.div
          className="relative z-10 max-w-3xl mx-auto text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title
            title="Join Our Team"
            subtitle="Be part of a company that values innovation, collaboration, and growth."
            textColor="text-white"
            subtitleColor="text-gray-200"
          />
          <p className="mt-6 text-lg text-gray-200">
            We’re always looking for passionate individuals who are eager to
            make an impact. Explore our open roles and find your next
            opportunity.
          </p>
        </motion.div>
      </section>

      {/* Filter Bar */}
      <div className="relative z-20 -mt-10 mx-auto max-w-6xl px-6">
        <div className="bg-white shadow-lg rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Job Search */}
          <div className="flex flex-col w-full md:w-1/4">
            <label className="text-sm font-semibold text-gray-800 mb-1 tracking-wide">
              JOB SEARCH
            </label>
            <input
              type="text"
              placeholder="Select Job"
              value={job}
              onChange={(e) => setJob(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none text-sm"
            />
          </div>

          {/* Location */}
          <div className="flex flex-col w-full md:w-1/4">
            <label className="text-sm font-semibold text-gray-800 mb-1 tracking-wide">
              LOCATION
            </label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
            >
              <option value="">Select City</option>
              <option value="Lahore">Lahore</option>
              <option value="Karachi">Karachi</option>
              <option value="Faisalabad">Faisalabad</option>
            </select>
          </div>

          {/* Business */}
          <div className="flex flex-col w-full md:w-1/4">
            <label className="text-sm font-semibold text-gray-800 mb-1 tracking-wide">
              BUSINESS
            </label>
            <select
              value={business}
              onChange={(e) => setBusiness(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
            >
              <option value="">Select Business</option>
              <option value="Fuel Division">Fuel Division</option>
              <option value="Lubricants Division">Lubricants Division</option>
              <option value="Fleet Management">Fleet Management</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="flex items-end w-full md:w-1/6">
            <button
              onClick={handleSearch}
              className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 rounded-lg transition hover:cursor-pointer"
            >
              SEARCH
            </button>
          </div>
        </div>
      </div>

      {/* Conditional Rendering */}
      {showOpenings ? (
        <div className="py-20 px-6 md:px-12">
          <Title title="Current Openings" align="center" />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-lg transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4 text-primary-600">
                  <Briefcase className="mr-2" />
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">{job.description}</p>
                <p className="text-sm font-medium text-gray-500">
                  📍 {job.location} • {job.type}
                </p>
                <button
                  className="mt-6 w-full bg-primary-600 text-black py-2 rounded-xl hover:bg-primary-700 transition hover:cursor-pointer"
                  onClick={() => {
                    setSelectedJob(job.title);
                    setIsFormOpen(true);
                  }}
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <div className="py-16 bg-white px-6 md:px-12">
          <Title title="Our Core Values" align="center" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-primary-600 mb-4">{value.icon}</div>
                <h4 className="font-semibold text-lg mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* ✅ Apply Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 backdrop-blur-sm">
          <div className="bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl relative p-8">
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-6 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✕
            </button>
            <ApplyForm jobTitle={selectedJob} />
          </div>
        </div>
      )}
    </section>
  );
};

export default NewFindings;
