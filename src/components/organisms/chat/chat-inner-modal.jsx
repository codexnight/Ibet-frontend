import { useEffect, useState } from "react";
import { Duels } from "./duels/duels";
import { PrivateRoom } from "./private-room/private-room";
import { Rating } from "./rating/rating";
import { Predicts } from "./predicts/predicts";
const { Modal } = require("@/components/atoms/modal");

export function ChatInnerModal({ isOpen, onClose, setRoom }) {
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(isOpen);
  }, [isOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [active]);

  return (
    <Modal onClose={onClose} isOpen={isOpen} isLarge={active !== "predict"}>
      <div className="lg:pb-5 pb-5">
        {active === "duels" && <Duels />}
        {active === "private-rooms" && (
          <PrivateRoom setRoom={setRoom} onClose={onClose} />
        )}
        {active === "predict" && <Predicts />}
        {active === "top" && <Rating />}
      </div>
    </Modal>
  );
}
