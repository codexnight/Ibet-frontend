'use client'
import { useTranslation } from "react-i18next";
import { useEffect, useContext } from "react";
import { getOpenDuels as sendOpenDuels } from "@/api/user";
import UserContext from "@/contexts/UserContext";

const DUELS = [
  {
    dueler1: {
      name: "Alex777",
      image: "/avatars/avatar-1.png",
    },
    dueler2: {
      name: "Mysterio",
      image: "/avatars/avatar-5.png",
    },
    game: "Luton – Manchester",
    time: "23.03.2024 - 16:00",
    winning: 100,
  },
  {
    dueler1: {
      name: "Petrocich",
      image: "/avatars/avatar-2.png",
    },
    dueler2: {
      name: "Alina",
      image: "/avatars/avatar-6.png",
    },
    game: "Chelsi - Real ",
    time: "23.03.2024 - 16:00",
    winning: 50,
  },
  {
    dueler1: {
      name: "Wolf",
      image: "/avatars/avatar-7.png",
    },
    dueler2: {
      name: "Slayer",
      image: "/avatars/avatar-3.png",
    },
    game: "Inter - Atletiko",
    time: "23.03.2024 - 16:00",
    winning: 200,
  },
  {
    dueler1: {
      name: "Dobriy",
      image: "/avatars/avatar-7.png",
    },
    dueler2: {
      name: "Panda",
      image: "/avatars/avatar-3.png",
    },
    game: "Zenit - Spartak",
    time: "23.03.2024 - 16:00",
    winning: 150,
  },
];

export function OpenDuelCard({ duel }) {
 
  const { t } = useTranslation();
 
  return (
    <div className="py-5 px-7 bg-[#4F3C96] rounded-xl">
      <div
        className="grid"
        style={{ gridTemplateColumns: "0.4fr 0.2fr 0.4fr" }}
      >
        <div className="flex items-center gap-3">
          <img
            src={duel.dueler1.image}
            alt={duel.dueler2.name}
            className="w-6 rounded-full"
          />
          <span className="text-[10px] font-bold">{duel.dueler1.name}</span>
        </div>
        <img
          src="w-[80px] h-[70px] m-auto"
          className="lg:w-[24px] md:w-[24px] w-[24px] m-auto"
          alt="duel"
        />
        <div className="flex items-center gap-3 justify-end">
          <img
            src={duel.dueler2.image}
            alt={duel.dueler2.name}
            className="w-6 rounded-full"
          />
          <span className="text-[10px] font-bold">{duel.dueler2.name}</span>
        </div>
      </div>
      <div
        className="flex justify-between items-center pt-[10px] mt-[10px]"
        style={{ borderTop: "1px solid #47348E" }}
      >
        <div>
          <p className="text-[10px] mb-1.5">
            {t("game_time")}: <span className="font-bold">{duel.game}</span>
          </p>
          <p className="text-[10px]">
            {t("game_time")}: <span className="font-bold">{duel.time}</span>
          </p>
        </div>
        <p className="text-[10px]">
          {t("put_money")}: <br />
          <span className="text-yellow block mt-[2px] font-bold text-[15px]">
            {duel.winning}$
          </span>
        </p>
      </div>
    </div>
  );
}


export function CurrentDuels() {
  const {duelData, setDuelData} = useContext(UserContext);
  useEffect(() => {
    getOpenDuels();
 }, [])
  const getOpenDuels = async () => {
    await sendOpenDuels().then(async responce => {
      setDuelData([]);
      await responce.results.forEach(async element => {
        setDuelData((ele) => [...ele, 
          {
            dueler1: {
              name: element.Name,
              image: element.Avatar,
            },
            dueler2: {
              name: element.RName,
              image: element.RAvatar,
            },
            game: element.DuelTeam + "-" + element.ReceveTeam,
            time: element.Date,
            winning: element.Rate,
          }
        ]);
      });
    })
  }
  const { t } = useTranslation();
  return (
    <div>
      <p className="text-white font-bold text-center mb-10">
        {t("opened_duels")}
      </p>
      <div className="grid gap-4">
        {duelData.map((duel) => (
          <OpenDuelCard key={duel.game} duel={duel} />
        ))}
      </div>
    </div>
  );
}
