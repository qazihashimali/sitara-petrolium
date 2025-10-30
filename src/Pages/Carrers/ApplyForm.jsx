import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Eye,
  Trash2,
  Check,
  Plus,
  Minus,
} from "lucide-react";

const steps = [
  "Personal Information",
  "Address",
  "Education",
  "Experience",
  "Attachment",
  "Preview",
];

const ApplyForm = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    // initialize arrays so Preview and validations are safe
    education: [],
    experience: [],
  });

  // Helpers ---------------------------------------------------------
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        { degree: "", institute: "", year: "" }, // Option B fields
      ],
    }));
  };

  const updateEducation = (index, field, value) => {
    setFormData((prev) => {
      const ed = [...(prev.education || [])];
      ed[index] = { ...ed[index], [field]: value };
      return { ...prev, education: ed };
    });
  };

  const removeEducation = (index) => {
    setFormData((prev) => {
      const ed = [...(prev.education || [])];
      ed.splice(index, 1);
      return { ...prev, education: ed };
    });
  };

  const addExperience = () => {
    setFormData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          positionHeld: "",
          organizationName: "",
          years: "",
          lastSalary: "",
          expectedSalary: "",
        },
      ],
    }));
  };

  const updateExperience = (index, field, value) => {
    setFormData((prev) => {
      const ex = [...(prev.experience || [])];
      ex[index] = { ...ex[index], [field]: value };
      return { ...prev, experience: ex };
    });
  };

  const removeExperience = (index) => {
    setFormData((prev) => {
      const ex = [...(prev.experience || [])];
      ex.splice(index, 1);
      return { ...prev, experience: ex };
    });
  };

  // Derived fields for Preview that keep your preview shape
  const previewFirstName = () => {
    const full = formData.fullName || "";
    return full.split(" ")[0] || "";
  };

  const previewLastName = () => {
    const full = formData.fullName || "";
    const parts = full.split(" ");
    return parts.length > 1 ? parts.slice(1).join(" ") : "";
  };

  const previewAge = () => {
    if (!formData.dob) return "";
    try {
      const b = new Date(formData.dob);
      const diff = Date.now() - b.getTime();
      const ageDt = new Date(diff);
      return Math.abs(ageDt.getUTCFullYear() - 1970);
    } catch {
      return "";
    }
  };

  const previewPhone = () => (formData.mobile ? ` ${formData.mobile}` : "");

  const previewPermanentAddress = () => formData.address || "";

  // Validation ------------------------------------------------------
  const isStepValid = () => {
    switch (step) {
      case 0:
        return (
          !!formData.fullName &&
          !!formData.email &&
          !!formData.dob &&
          !!formData.cnic &&
          !!formData.gender &&
          !!formData.maritalStatus
        );
      case 1:
        return !!formData.homeTown && !!formData.address && !!formData.mobile;
      case 2:
        // At least one education entry and all fields filled for each
        return (
          Array.isArray(formData.education) &&
          formData.education.length > 0 &&
          formData.education.every((e) => e.degree && e.institute && e.year)
        );
      case 3:
        if (formData.experienced === "Yes") {
          return (
            Array.isArray(formData.experience) &&
            formData.experience.length > 0 &&
            formData.experience.every(
              (ex) =>
                ex.positionHeld &&
                ex.organizationName &&
                ex.years !== "" &&
                ex.lastSalary !== "" &&
                ex.expectedSalary !== ""
            )
          );
        }
        return formData.experienced === "No";
      case 4:
        return !!formData.resume;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (!isStepValid()) return;
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  const buttonClass =
    "flex items-center text-blue-600 hover:text-blue-800 cursor-pointer font-medium";

  // Submit ----------------------------------------------------------
  const handleSubmit = (e) => {
    e?.preventDefault?.();
    // Final validation
    if (!isStepValid()) {
      alert("Please complete all required fields before submitting.");
      return;
    }

    // Build payload (example)
    const payload = {
      ...formData,
      phone: previewPhone(),
      firstName: previewFirstName(),
      lastName: previewLastName(),
      age: previewAge(),
    };

    // Replace with your API call
    console.log("Submitting", payload);
    alert("Form submitted (check console).");
  };

  // Render ----------------------------------------------------------
  const renderStepContent = () => {
    switch (step) {
      // --- Case 0: Personal Information --- //
      case 0:
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  <span className="text-red-600">*</span> Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  <span className="text-red-600">*</span> Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  <span className="text-red-600">*</span> Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">
                <span className="text-red-600">*</span> CNIC
              </label>
              <input
                type="text"
                name="cnic"
                value={formData.cnic || ""}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  <span className="text-red-600">*</span> Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">- Select -</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  <span className="text-red-600">*</span> Marital Status
                </label>
                <select
                  name="maritalStatus"
                  value={formData.maritalStatus || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">- Select -</option>
                  <option>Single</option>
                  <option>Married</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-2">
                Do you have any relative working in our organization?
              </label>
              <div className="flex items-center space-x-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="relative"
                    value="Yes"
                    checked={formData.relative === "Yes"}
                    onChange={handleChange}
                    className="text-blue-600 cursor-pointer"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="relative"
                    value="No"
                    checked={formData.relative === "No"}
                    onChange={handleChange}
                    className="text-blue-600 cursor-pointer"
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            <div className="flex justify-end pt-6 border-t mt-8">
              <button
                onClick={nextStep}
                disabled={!isStepValid()}
                className={`${buttonClass} ${
                  !isStepValid() ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Next <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        );

      // --- Case 1: Address --- //
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                <span className="text-red-600">*</span> Home Town
              </label>
              <input
                type="text"
                name="homeTown"
                value={formData.homeTown || ""}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">
                <span className="text-red-600">*</span> Permanent Address
              </label>
              <textarea
                name="address"
                rows="3"
                value={formData.address || ""}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">
                <span className="text-red-600">*</span> Contact Number
              </label>
              <input
                type="text"
                name="mobile"
                value={formData.mobile || ""}
                onChange={handleChange}
                placeholder="03XXXXXXXXX"
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex justify-between pt-6 border-t mt-8">
              <button onClick={prevStep} className={buttonClass}>
                <ArrowLeft className="w-4 h-4 mr-1" /> Back
              </button>
              <button
                onClick={nextStep}
                disabled={!isStepValid()}
                className={`${buttonClass} ${
                  !isStepValid() ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Next <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        );

      // --- Case 2: Education (dynamic list) --- //
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <label className="block font-medium text-gray-700 mb-1">
                  <span className="text-red-600">*</span> Education
                </label>
                <button
                  type="button"
                  onClick={addEducation}
                  className="flex items-center space-x-2 text-sm hover:underline cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add</span>
                </button>
              </div>

              {formData.education.length === 0 && (
                <p className="text-gray-500 text-sm">
                  No education added. Click Add to include your qualifications.
                </p>
              )}

              <div className="space-y-4 mt-4">
                {formData.education.map((edu, i) => (
                  <div
                    key={i}
                    className="border rounded-md p-4 bg-gray-50 flex flex-col gap-3"
                  >
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          <span className="text-red-600">*</span> Degree
                        </label>
                        <input
                          value={edu.degree}
                          onChange={(e) =>
                            updateEducation(i, "degree", e.target.value)
                          }
                          className="w-full border border-gray-300 rounded-md p-2"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          <span className="text-red-600">*</span> Institute
                        </label>
                        <input
                          value={edu.institute}
                          onChange={(e) =>
                            updateEducation(i, "institute", e.target.value)
                          }
                          className="w-full border border-gray-300 rounded-md p-2"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          <span className="text-red-600">*</span> Year
                        </label>
                        <select
                          value={edu.year}
                          onChange={(e) =>
                            updateEducation(i, "year", e.target.value)
                          }
                          className="w-full border border-gray-300 rounded-md p-2 hover: cursor-pointer"
                        >
                          <option value="">- Select -</option>
                          {Array.from(
                            { length: 50 },
                            (_, idx) => 2025 - idx
                          ).map((y) => (
                            <option key={y} value={y}>
                              {y}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={() => removeEducation(i)}
                        className="flex items-center text-sm text-red-600 hover:underline cursor-pointer"
                      >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between pt-6 border-t mt-8">
              <button onClick={prevStep} className={buttonClass}>
                <ArrowLeft className="w-4 h-4 mr-1" /> Back
              </button>
              <button
                onClick={nextStep}
                disabled={!isStepValid()}
                className={`${buttonClass} ${
                  !isStepValid() ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Next <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        );

      // --- Case 3: Experience (dynamic list when experienced = Yes) --- //
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block font-medium text-gray-700 mb-1">
                <span className="text-red-600">*</span> Experienced
              </label>
              <select
                name="experienced"
                value={formData.experienced || ""}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-3 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">- Select -</option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            {formData.experienced === "Yes" && (
              <div>
                <div className="flex items-center justify-between">
                  <label className="block font-medium text-gray-700 mb-1">
                    <span className="text-red-600">*</span> Experience
                  </label>
                  <button
                    type="button"
                    onClick={addExperience}
                    className="flex items-center space-x-2 text-sm hover:underline cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add</span>
                  </button>
                </div>

                {formData.experience.length === 0 && (
                  <p className="text-gray-500 text-sm">
                    No experience added. Click Add to include roles.
                  </p>
                )}

                <div className="space-y-4 mt-4">
                  {formData.experience.map((ex, i) => (
                    <div
                      key={i}
                      className="border rounded-md p-4 bg-gray-50 flex flex-col gap-3"
                    >
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            <span className="text-red-600">*</span> Position
                            Held
                          </label>
                          <input
                            value={ex.positionHeld}
                            onChange={(e) =>
                              updateExperience(
                                i,
                                "positionHeld",
                                e.target.value
                              )
                            }
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            <span className="text-red-600">*</span> Organization
                            Name
                          </label>
                          <input
                            value={ex.organizationName}
                            onChange={(e) =>
                              updateExperience(
                                i,
                                "organizationName",
                                e.target.value
                              )
                            }
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            <span className="text-red-600">*</span> Years
                          </label>
                          <select
                            value={ex.years}
                            onChange={(e) =>
                              updateExperience(i, "years", e.target.value)
                            }
                            className="w-full border border-gray-300 rounded-md p-2 hover: cursor-pointer"
                          >
                            <option value="">- Select -</option>
                            {[...Array(31)].map((_, idx) => (
                              <option key={idx} value={idx}>
                                {idx} Years
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            <span className="text-red-600">*</span> Last Salary
                            Drawn
                          </label>
                          <input
                            value={ex.lastSalary}
                            onChange={(e) =>
                              updateExperience(i, "lastSalary", e.target.value)
                            }
                            type="number"
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            <span className="text-red-600">*</span> Expected
                            Gross Salary
                          </label>
                          <input
                            value={ex.expectedSalary}
                            onChange={(e) =>
                              updateExperience(
                                i,
                                "expectedSalary",
                                e.target.value
                              )
                            }
                            type="number"
                            className="w-full border border-gray-300 rounded-md p-2"
                          />
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={() => removeExperience(i)}
                          className="flex items-center text-sm text-red-600 hover:underline cursor-pointer"
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-between pt-6 border-t mt-8">
              <button onClick={prevStep} className={buttonClass}>
                <ArrowLeft className="w-4 h-4 mr-1" /> Back
              </button>
              <button
                onClick={nextStep}
                disabled={!isStepValid()}
                className={`${buttonClass} ${
                  !isStepValid() ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Next <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        );

      // --- Case 4: Attachment --- //
      case 4:
        return (
          <div className="space-y-6">
            <div className="border-[2px] border-dashed border-gray-300 rounded-xl p-10 flex flex-col items-center justify-center bg-white">
              <label className="block mb-2 text-red-600">*</label>

              <div className="flex flex-col items-center space-y-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>

                <p className="font-semibold text-lg text-gray-700">
                  Drag and Drop
                </p>
                <p className="text-sm text-gray-500">
                  Please Note: Only complete Job Application Form will be
                  entertained
                </p>

                <input
                  type="file"
                  accept=".pdf"
                  id="resumeUpload"
                  className="hidden"
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      resume: e.target.files[0],
                    }))
                  }
                />
                <label
                  htmlFor="resumeUpload"
                  className="bg-gray-700 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-gray-900"
                >
                  Choose File
                </label>
              </div>
            </div>

            {formData.resume && (
              <table className="w-full border-collapse mt-4">
                <thead>
                  <tr className="bg-gray-100 border-b">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Filename ↑
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4 text-gray-700">
                      {formData.resume.name}
                    </td>
                    <td className="py-3 px-4 flex space-x-4 text-gray-600">
                      <Eye
                        className="w-5 h-5 cursor-pointer hover:text-blue-600"
                        onClick={() =>
                          window.open(URL.createObjectURL(formData.resume))
                        }
                      />
                      <Trash2
                        className="w-5 h-5 cursor-pointer hover:text-red-600"
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, resume: null }))
                        }
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            )}

            <div className="flex justify-between pt-6 border-t mt-8">
              <button onClick={prevStep} className={buttonClass}>
                <ArrowLeft className="w-4 h-4 mr-1" /> Back
              </button>
              <button
                onClick={nextStep}
                disabled={!isStepValid()}
                className={`${buttonClass} ${
                  !isStepValid() ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Next <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        );

      // --- Case 5: Preview --- //
      case 5:
        return (
          <div className="space-y-6">
            <div className="border rounded-xl p-10 bg-white w-full max-w-4xl mx-auto shadow-sm space-y-8">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-green-600 font-bold text-3xl">
                    {previewFirstName()} {previewLastName()}
                  </h2>
                  <p className="text-gray-700 text-sm mt-1">
                    Age: {previewAge()} | {formData.gender} |{" "}
                    {formData.maritalStatus}
                  </p>
                </div>
              </div>

              <hr />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700">
                <p className="break-all">📧 Email: {formData.email}</p>
                <p>📞 Phone: {previewPhone()}</p>
                <p className="break-all">🆔 CNIC: {formData.cnic}</p>
              </div>

              <hr />

              <div className="grid grid-cols-2 gap-6 text-gray-800">
                <div>
                  <p className="font-semibold break-all">Home Town</p>
                  <p>{formData.homeTown}</p>
                </div>
                <div>
                  <p className="font-semibold break-all">Permanent Address</p>
                  <p>{previewPermanentAddress()}</p>
                </div>
              </div>

              <hr />

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Experience
                </h3>

                {Array.isArray(formData.experience) &&
                formData.experience.length > 0 ? (
                  <div className="space-y-3">
                    {formData.experience.map((exp, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-1 md:grid-cols-3 gap-3 text-gray-700"
                      >
                        <p>{exp.years} Years</p>
                        <p className="font-semibold break-words">
                          {exp.positionHeld}
                        </p>
                        <p className="break-words">at {exp.organizationName}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No experience added</p>
                )}
              </div>

              <hr />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Education
                </h3>

                {Array.isArray(formData.education) &&
                formData.education.length > 0 ? (
                  <div className="space-y-3">
                    {formData.education.map((edu, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-1 md:grid-cols-3 gap-3 text-gray-700"
                      >
                        <p>{edu.year}</p>
                        <p className="font-semibold break-words">
                          {edu.degree}
                        </p>
                        <p className="break-words">{edu.institute}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No education added</p>
                )}
              </div>
            </div>

            <div className="flex justify-between max-w-4xl mx-auto">
              <button onClick={prevStep} className={buttonClass}>
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back
              </button>

              <button onClick={handleSubmit} className={buttonClass}>
                <Check className="w-4 h-4 mr-1" />
                Submit
              </button>
            </div>
          </div>
        );

      default:
        return (
          <p className="text-gray-500 text-center">Check your Connection</p>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-6 py-12">
      <div className="w-full max-w-5xl">
        {/* Stepper */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-14 relative max-md:overflow-x-auto max-md:pb-2">
            {steps.map((label, index) => (
              <div
                key={index}
                className="flex flex-col items-center relative flex-1 min-w-[60px]"
              >
                {/* Circle */}
                <div
                  className={`w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm transition-all duration-300 ${
                    index <= step
                      ? "bg-green-600 text-white"
                      : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {index < step ? "✓" : index + 1}
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div
                    className={`absolute top-1/2 left-full translate-y-[-50%] h-[2px] transition-all duration-300 
            ${index < step ? "bg-green-600" : "bg-gray-300"}`}
                    style={{ width: "calc(100% - 2rem)" }}
                  />
                )}

                {/* Label */}
                <span
                  className={`text-[10px] mt-2 md:text-xs transition-all duration-300 ${
                    index === step
                      ? "font-semibold text-blue-600"
                      : "text-gray-500"
                  }`}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl shadow-md p-10"
        >
          <h2 className="text-2xl font-bold mb-10 text-center text-gray-800">
            {steps[step]}
          </h2>
          {renderStepContent()}
        </motion.div>
      </div>
    </div>
  );
};

export default ApplyForm;
