import React from "react";

const Title = ({ title, subtitle, align = "center" }) => {
  // Choose text alignment based on prop
  const alignmentClass =
    align === "left"
      ? "text-left items-start"
      : align === "right"
      ? "text-right items-end"
      : "text-center items-center";

  return (
    <div className={`flex flex-col ${alignmentClass} mb-12 `}>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
      <h2 className="text-lg text-gray-600 leading-relaxed max-w-3xl">
        {subtitle}
      </h2>
    </div>
  );
};

export default Title;
