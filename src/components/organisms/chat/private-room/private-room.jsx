import { Button } from "@/components/atoms/button";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TopRooms } from "./top-rooms";
import { CreateRoom } from "./create-room";
import { MyRooms } from "./my-rooms";

export function PrivateRoom({ setRoom, onClose }) {
  const [screen, setScreen] = useState("top");
  const { t } = useTranslation();

  return (
    <div>
      <img src="/icons/private-room.svg" alt="rank" className="m-auto w-20" />
      <p className="text-white font-bold text-center text-2xl mb-8 mt-5">
        {t("private_channels")}
      </p>
      {screen === "top" && <TopRooms setScreen={setScreen} />}
      {screen === "create" && <CreateRoom setScreen={setScreen} />}
      {screen === "my-rooms" && (
        <MyRooms setScreen={setScreen} setRoom={setRoom} onClose={onClose} />
      )}
    </div>
  );
}
