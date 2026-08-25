import React from "react";
import resume from "../assets/doc/Magediran_M_Full_Stack_Developer.pdf"

const TrainBorderButton = ({
  children = "Hover Me",
  className = "",
  onClick,
}) => {
  return (
    <a href={resume} download="Magendiran_M Resume">
      <button
        onClick={onClick}

        className={`
        group relative inline-flex items-center justify-center
        overflow-hidden rounded-full
        px-8 py-2.5
        text-white
        transition-transform duration-300
        hover:scale-[1.02]
        border-none
        bg-secondery
        ${className}
      `}
      >
        {/* Moving train */}
        <span
          className="
          pointer-events-none absolute inset-[-100%]
          animate-[spin_2.5s_linear_infinite]
          opacity-0
          transition-opacity duration-300
          group-hover:opacity-100
        "
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, transparent 300deg, #22d3ee 330deg, #a855f7 350deg, transparent 360deg)",
          }}
        />

        {/* Inner background */}
        <span className="absolute inset-[2px] rounded-full bg-secondery" />

        {/* Button content */}
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </button>
    </a>
  );
};

export default TrainBorderButton;