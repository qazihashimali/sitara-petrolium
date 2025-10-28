import React from "react";

const Title = ({
  title,
  subtitle,
  align = "center",
  textColor = "text-gray-900",
  subtitleColor = "text-gray-600",
  className = "",
}) => {
  const alignmentClass =
    align === "left"
      ? "text-left items-start"
      : align === "right"
      ? "text-right items-end"
      : "text-center items-center";

  // check if user passed a tailwind class (starts with "text-") or a hex color (#)
  const isCustomColor = (color) => color && !color.startsWith("text-");

  return (
    <div className={`flex flex-col ${alignmentClass} mb-12 ${className}`}>
      <h1
        className={`text-4xl font-bold mb-4 ${
          isCustomColor(textColor) ? "" : textColor
        }`}
        style={isCustomColor(textColor) ? { color: textColor } : {}}
      >
        {title}
      </h1>

      {subtitle && (
        <h2
          className={`text-lg leading-relaxed max-w-3xl ${
            isCustomColor(subtitleColor) ? "" : subtitleColor
          }`}
          style={isCustomColor(subtitleColor) ? { color: subtitleColor } : {}}
        >
          {subtitle}
        </h2>
      )}
    </div>
  );
};

export default Title;
