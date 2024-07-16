import { useState } from "react";
import { useTranslation } from "react-i18next";

export function Copy({ children }) {
  const { t } = useTranslation();
  const [showAbsoluteDiv, setShowAbsoluteDiv] = useState(false);

  const handleClick = () => {
    setShowAbsoluteDiv(true);
    setTimeout(() => {
      setShowAbsoluteDiv(false);
    }, 3000);
  };

  return (
    <div>
      <div onClick={handleClick}>{children}</div>
      {showAbsoluteDiv && (
        <div
          className="copy"
          style={{
            position: "fixed",
            top: "70px",
            left: 0,
            backgroundColor: "red",
            display: "inline-block",
            padding: "8px 12px",
            background: "white",
            borderRadius: "8px",
            boxShadow:
              "0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
            pointerEvents: "all",
            zIndex: 999999,
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "12px",
            color: "#000",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="check-circle"
            width="1em"
            height="1em"
            fill="#52c41a"
            aria-hidden="true"
          >
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>
          </svg>
          {t("copied")}
        </div>
      )}
    </div>
  );
}
