'use client'
import { useEffect, useState, useRef, useContext } from "react";
import { useTranslation } from "react-i18next";
import { CloseIcon } from "@/components/atoms/icons/close-icon";
import { ProfileIcon } from "@/components/atoms/icons/profile-icon";
import { ChatMessage } from "@/components/organisms/chat-message";
import { DuelCard } from "@/components/organisms/duel-card";
import { SendIcon } from "@/components/atoms/icons/send-icon";
import { TopIcon } from "@/components/atoms/icons/top-icon";
import { ChatInnerModal } from "./chat-inner-modal";
import { DuelModal } from "@/components/molecules/duel-modal";
import { ProfileModal } from "./profile-modal";
import { sendMessage } from "@/socket";
import Cookies from "js-cookie";
import { messageData } from "@/socket";
import UserContext from "@/contexts/UserContext";

export let chat = [
  {
    user: {
      name: "Alex777",
      image: "https://randomuser.me/api/portraits/lego/0.jpg",
    },
    message: "I have big win in Aviator! 1200$ is mine!!! ",
    time: "12:31",
    duels: {
      total: "7",
      victory: "4",
    },
    predicts: {
      total: "20",
      victory: "12",
    },
    rooms: "3",
  },
  {
    type: "duel",
    user1: {
      name: "Mysterio",
      image: "https://randomuser.me/api/portraits/lego/3.jpg",
    },
    user2: {
      name: "Misha666",
      image: "https://randomuser.me/api/portraits/lego/3.jpg",
    },
    time: "23.03.2024 в 16:00",
    amount: "100$",
    game: "Luton - Manchester",
    choose: "Luton",
    price: "200$!",
    isEnded: false,
  },
  {
    user: {
      name: "Mysterio",
      image: "https://randomuser.me/api/portraits/lego/3.jpg",
    },
    time: "12:31 ",
    message:
      "Я прогнозирую что в игре Лутон - Манчестер, 23 февраля выиграет Лутон!",
    isPrediction: true,
    predicts: {
      total: "2",
      victory: "2",
    },
    rooms: "3",
  },
  {
    user: {
      name: "Superplayer",
      image: "https://randomuser.me/api/portraits/lego/5.jpg",
    },
    time: "12:50",
    message:
      "Congratulations, I hope I'm lucky too, I also love crash games. Did you use some kind of strategy, or was it just luck?",
    duels: {
      total: "4",
      victory: "4",
    },
  },
  {
    user: {
      name: "Mysterio",
      image: "https://randomuser.me/api/portraits/lego/3.jpg",
    },
    time: "12:31 ",
    message:
      "Friends, share your roulette strategy, I've earned 300 bucks from 30 on martingale",
    duels: {
      total: "2",
      victory: "1",
    },
    predicts: {
      total: "2",
      victory: "0",
    },
  },
  {
    user: {
      name: "Superplayer",
      image: "https://randomuser.me/api/portraits/lego/5.jpg",
    },
    time: "12:50 ",
    message:
      "Congratulations, I hope I'm lucky too, I also love crash games. Did you use some kind of strategy, or was it just luck?",
    duels: {
      total: "4",
      victory: "3",
    },
    predicts: {
      total: "6",
      victory: "4",
    },
    rooms: "12",
  },
  {
    type: "duel",
    user1: {
      name: "Mysterio",
      image: "https://randomuser.me/api/portraits/lego/3.jpg",
    },
    user2: {
      name: "Misha666",
      image: "https://randomuser.me/api/portraits/lego/3.jpg",
    },
    time: "23.03.2024 в 16:00",
    amount: "100$",
    game: "Luton - Manchester",
    choose: "Luton",
    price: "200$!",
    isEnded: false,
  },
];


const chat2 = [
    {
      user: {
        name: "Mysterio",
        image: "https://randomuser.me/api/portraits/lego/0.jpg",
      },
      message:
        "Всех приветсвую в моем закрытом чате!Здесь я буду делиться с вами прогнозами предтоящих спортивных событий!",
      time: "12:31",
    },
];


export function Chat({ isForMobile }) {
  const [innerMenu, setInnerMenu] = useState("");
  const [open, setOpen] = useState(false);
  const [chatRoom, setChatRoom] = useState("");
  const [createDuelModal, setCreateDuelModal] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  
  const {user, setUser, targetDuel, isOpenDuelModal, setOpenDuelModal} = useContext(UserContext);

  // const [chatData, setChatData] = useState('');
  const dataRef = useRef();
  const scrollableRef = useRef(null);

  const { t } = useTranslation();
  useEffect(() => {
    if (open && window.innerWidth > 650) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  useEffect(() => {
    if (window.innerWidth > 650) {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    // Scroll to bottom on initial load
    scrollToBottom();
  }, []);

  useEffect(() => {
    // Scroll to bottom when messages change
    scrollToBottom();
  }, [user]);

  const scrollToBottom = () => {
    const scrollable = scrollableRef.current;
    if (scrollable) {
      scrollable.scrollTop = scrollable.scrollHeight;
    }
  };

  useEffect(() => {
    setCreateDuelModal(isOpenDuelModal);
  }, [isOpenDuelModal])

  useEffect(() => {
    if (open && window.innerWidth < 650) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  const sendData = () => {
    const chatData = dataRef.current.value;
    sendMessage(JSON.stringify({type: "bordcast", content: chatData, email:  Cookies.get('Name'), avatar: Cookies.get("Avatar"), token: Cookies.get('token')}));
  }

  return (
    <div
      className={`lg:${isForMobile ? "hidden" : "block"} md:${
        isForMobile ? "hidden" : "block"
      } mt-10`}
    >
      <ProfileModal
        isOpen={showProfile}
        onClose={() => setShowProfile(false)}
      />
      <DuelModal
        isOpen={createDuelModal}
        onClose={() => setOpenDuelModal(false)}
      />
      <ChatInnerModal
        isOpen={innerMenu}
        onClose={() => setInnerMenu(false)}
        setRoom={setChatRoom}
      />
      <div
        onClick={() => setOpen(true)}
        className="lg:hidden md:hidden flex fixed bottom-[82px] w-full left-0 z-6 py-4 px-7 gap-3 items-center justify-between"
        style={{
          background: "linear-gradient(#334885, #160B38)",
          borderTopLeftRadius: "14px",
          borderTopRightRadius: "14px",
        }}
      >
        <div className="gap-3 items-center flex">
          <div className="w-2 h-2 rounded-full bg-[#72FF77] mt-0.5" />
          <p className="text-sm font-bold uppercase">
            {chatRoom || t("chat_room")}
          </p>
        </div>
        <p className=" text-yellow text-xs flex items-center gap-2">
          <ProfileIcon className="mb-0.5" /> {chatRoom ? 5 : 136}{" "}
          {t("players_online")}
        </p>
        <div>
          <TopIcon />
        </div>
      </div>
      {open && (
        <div className="rounded-xl h-[auto] lg:relative md:relative fixed top-0 contentChild justify-center z-10 overflow-auto">
          <div
            onClick={() => setOpen(false)}
            className="lg:hidden md:hidden block absolute top-8 right-8 z-[100]"
          >
            <CloseIcon />
          </div>
          <div className="grid lg:sticky md:sticky top-0 px-5 py-7">
            <div className="gap-3 items-center flex">
              <div className="w-2 h-2 rounded-full bg-[#72FF77] mt-0.5" />
              <p className="text-sm font-bold uppercase">
                {chatRoom || t("chat_room")}
              </p>
            </div>
            <p className="mt-3 text-yellow text-xs flex items-center gap-2 mb-8">
              <ProfileIcon /> {chatRoom ? 5 : 136} {t("players_online")}
            </p>
            {/* <div
              className="pl-2.5 lg:my-9 my-5"
              style={{
                borderLeft: "2px solid #3346AC",
              }}
            >
              <span className="text-xs text-textGrey mb-1">
                {t("pinned_message")}
              </span>
              <p className="text-sm font-bold">{t("ibet_100%_bunus")}</p>
            </div> */}
            <div ref={scrollableRef} className="grid gap-4 lg:h-[54vh] h-auto overflow-y-auto lg:pb-0 items-start">
              {(chatRoom ? chat2 : user).map((message) =>
                message.type !== "duel" ? (
                  <ChatMessage
                    setCreateDuelModal={setCreateDuelModal}
                    key={message.message}
                    message={message}
                    setShowProfile={setShowProfile}
                  />
                  ) : (
                  <DuelCard key={message.game} duel={message} />
                )
              )}
            </div>
            <div className="relative">
              <input ref = {dataRef}
                className="p-[15px] bg-[#4F3C96] rounded-xl outline-none mt-6 text-xs w-full"
                placeholder={t("send_message_ps") }
              />
              <SendIcon color="#FFB800" className="absolute top-10 right-4" sendData = {() => sendData()} />
            </div>
            <div className="grid grid-cols-4 gap-1.5 mt-4 text-center lg:pb-0 pb-16">
              <div
                className="bg-main flex items-center py-2 rounded-xl flex-col"
                onClick={() => setInnerMenu("duels")}
              >
                <img
                  src="/icons/duel.svg"
                  alt="duel"
                  className="lg:w-6 lg:h-6 w-[25px]"
                />
                <p className="text-[10px] mt-1.5">{t("duels")}</p>
              </div>
              <div
                className="bg-main flex items-center py-2 rounded-xl flex-col"
                onClick={() => setInnerMenu("predict")}
              >
                <img
                  src="/icons/prediction.svg"
                  alt="predictions"
                  className="lg:w-8 lg:h-7.5 w-[36px]"
                />
                <p className="text-[10px]">{t("predictions")}</p>
              </div>
              <div
                className="bg-main flex items-center py-2 px-1 rounded-xl flex-col"
                onClick={() => setInnerMenu("private-rooms")}
              >
                <img
                  src="/icons/private-room.svg"
                  alt="private channels"
                  className="lg:w-7 lg:h-[27px] w-[28px]"
                />
                <p className="text-[10px] mt-1.5 leading-3">
                  {t("private_channels")}
                </p>
              </div>
              <div
                className="bg-main flex items-center py-2 px-1 rounded-xl flex-col"
                onClick={() => setInnerMenu("top")}
              >
                <img
                  src="/icons/rating.svg"
                  alt="private channels"
                  className="lg:w-7 lg:h-7 w-[32px]"
                />
                <p className="text-[10px] mt-1.5 leading-3">{t("rating")}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
