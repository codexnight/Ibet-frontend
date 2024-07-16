import { ReactNode } from "react";

const schemes = {
  default: "uppercase text-main font-bold rounded-full btn-default",
  indigo: "uppercase text-main font-bold rounded-full btn-indigo text-white",
  bordered:
    "uppercase text-main font-bold rounded-full text-white border border-yellow",
  transparent:
    "uppercase text-main font-bold rounded-full bg-none text-white lg:text-lg md:text-lg text-[9px] border lg:py-2 md:lg-2 py-[5px] lg:px-8 md:px-8 px-[14px] font-medium hover:bg-[#FFB800] hover:border-yellow hover:opacity-100",
};

const sizes = {
  md: "lg:px-10 md:px-12 px-4 lg:py-4 md:py-4 py-3 lg:text-[12px] md:text-[14px] text-[11px]",
  sm: "py-[9.5px] px-9 text-xs",
};

export function Button({
  children,
  onClick,
  scheme = "default",
  size = "md",
  styles,
  loading,
  disabled,
}) {
  return (
    <button
      onClick={onClick}
      className={`${sizes[size]} ${schemes[scheme]} ${styles}`}
      disabled={loading || disabled}
      style={
        disabled
          ? {
              opacity: 0.5,
            }
          : {}
      }
    >
      <div className="flex items-center justify-center">
        {loading && (
          <svg
            class="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {children}
      </div>
    </button>
  );
}
