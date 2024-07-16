import { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import socketHome, { sendMessage } from "@/socket";
import Cookies from "js-cookie";
import UserContext from "@/contexts/UserContext";

export function ChatMessage({ message, setCreateDuelModal, setShowProfile }) {
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);
  const dropdown = useRef(null);

  useEffect(() => {
    if (!openMenu) return;
    function handleClick(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setOpenMenu(false);
      }
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [openMenu]);

  const challnge = (name) => {
    if(Cookies.get("Name") != name) {
      sendMessage(JSON.stringify({type: "challenge", setUser: Cookies.get("Name"), getUser: name, token: Cookies.get('token')}));
    }
  }

  return (
    <div
      className="py-[20px] px-4 bg-[#1E1443] rounded-lg relative"
      style={
        message.isPrediction
          ? {
              backgroundImage: "url(/prediction-bg.png)",
              backgroundSize: "120% 150%",
              backgroundPosition: "-20px -20px",
            }
          : {}
      }
    >
      <div
        className="flex items-center gap-1.5 py-1 px-2 absolute right-4 top-5.5 cursor-pointer rounded-lg transition-all hover:bg-[#301F68]"
        style={{ border: "1px solid #301F68" }}
        onClick={() => challnge(message.user?.name)}
      >
        <img src="/icons/duel.svg" alt="duel" />
        <span className="text-[10px]">{t("duel")}!</span>
      </div>
      <div className="flex gap-[9px] items-center mb-3">
        <div
          className="relative flex gap-[9px] items-center select-none"
          ref={dropdown}
           onClick={() => setOpenMenu(!openMenu)}
          // onClick={() => sendDuel(message.user?.name)}
        >
          <img src="/icons/menu.svg" alt="menu" className="mr-1" />
          <img
            className="w-[20px] h-[20px] rounded-full"
            src={message.user?.image}
            alt={message.user?.name}
          />
          <span className="text-[10px] font-medium">{message.user?.name}</span>
          {openMenu && (
            <div
              className="absolute -top-4 lg:-left-2 lg:top-7 left-3 p-4 lg:p-2 lg:px-4 px-5 bg-indigo rounded-xl lg:w-[200px] w-[260px] z-20"
              style={{
                boxShadow:
                  "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
              }}
            >
              <div className="flex items-center lg:gap-3 gap-4 mb-3">
                <img src="/icons/reply.svg" alt="reply" />{" "}
                <span className="font-bold text-[12px]">Ответить</span>
              </div>
              <div
                className="flex items-center lg:gap-3 gap-4 mb-3"
                onClick={() => setShowProfile(true)}
              >
                <img src="/icons/profile-grey.svg" alt="profile" />{" "}
                <span className="font-bold text-[12px]">
                  Посмотреть профиль
                </span>
              </div>
              <div className="flex items-center lg:gap-3 gap-4">
                <img src="/icons/private-sms.svg" alt="sms" />{" "}
                <span className="font-bold text-[12px]">
                  Написать личное сообщение
                </span>
              </div>
            </div>
          )}
        </div>
        {message?.duels?.total && (
          <div className="flex text-[8px] items-center gap-1.5 text-textGrey lg:hidden">
            <img src="/icons/duel.svg" alt="duel" className="w-3" />
            {`${message.duels.victory}/${message.duels.total}`}
          </div>
        )}
        {message?.predicts?.total && (
          <div className="flex text-[8px] items-center gap-0.5 -ml-1 text-textGrey lg:hidden">
            <img src="/icons/prediction.svg" alt="prediction" className="w-4" />
            {`${message?.predicts?.victory}/${message?.predicts?.total}`}
          </div>
        )}
        {message?.rooms && (
          <div className="flex text-[9px] items-center gap-1.5 -ml-0.5 text-textGrey lg:hidden">
            <img src="/icons/rooms.svg" alt="rooms" className="w-4" />
            {message?.rooms}
          </div>
        )}
      </div>
      <p
        className={`text-xs ${
          message.isPrediction ? "text-white" : "text-textGrey"
        }`}
      >
        {message.message}
      </p>
      <p
        className="text-[10px] text-textGrey text-right"
        style={{ opacity: 0.5 }}
      >
        {message.time}
      </p>
    </div>
  );
}
