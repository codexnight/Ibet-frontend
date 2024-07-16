import { useEffect } from "react";

export function Modal({ children, isOpen, onClose, isLarge = false }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    isOpen && (
      <div
        className="fixed top-0 left-0 z-[1000] h-full w-full overflow-auto bg-modal-overlay"
        style={{ backdropFilter: "blur(5px)" }}
      >
        <div
          className={`rounded-xl ${
            isLarge ? "lg:w-[500px]" : "lg:w-96"
          } mx-auto w-full absolute lg:top-8 -top-8 left-1/2 pt-16 isolate mt-[30px] text-white`}
          style={{
            transform: "translateX(-50%)",
            background: "linear-gradient(180deg, #261649ff 0%, #000c24ff 100%)",
          }}
        >
          {onClose && (
            <button
              className="rounded absolute p-2 top-6 right-6 bg-indigo"
              onClick={onClose}
            >
              <img src="/icons/close.svg" alt="close modal" />
            </button>
          )}
          <div className="pb-10 overflow-auto scrollbar-hide lg:px-6 px-3">
            <div className="px-4">{children}</div>
          </div>
        </div>
      </div>
    )
  );
}
