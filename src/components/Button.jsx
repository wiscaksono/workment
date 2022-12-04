import React from "react";
// import ArrowUp

export default function Button({ children }) {
  return (
    <div className="relative">
      <div className="px-[35px] py-[26px] absolute inset-0 bg-white w-max font-syncopate text-white text-lg font-bold flex items-center gap-2 inner-border-4 inner-border-primary-dark leading-[106.1%]">
        GET STARTED
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={4}
          stroke="currentColor"
          className="w-6 h-6 text-natural-pinaple"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </div>

      <button className="px-[35px] py-[26px] bg-primary-dark w-max font-syncopate text-white text-lg font-bold flex items-center gap-2 -translate-y-3 translate-x-3 leading-[106.1%] group active:translate-x-0 active:translate-y-0 transition-transform">
        {children}
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-natural-pinaple group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </button>
    </div>
  );
}
