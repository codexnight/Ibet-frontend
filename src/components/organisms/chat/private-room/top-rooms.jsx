import { Button } from "@/components/atoms/button";
import { useTranslation } from "react-i18next";

const rank = [
  {
    rank: 1,
    owner: "Wolf13",
    predicts: {
      total: "20",
      winnings: "15",
    },
    avatar: "/avatars/avatar-7.png",
    room: "sport777",
  },
  {
    rank: 2,
    owner: "Alex777",
    predicts: {
      total: "26",
      winnings: "13",
    },
    avatar: "/avatars/avatar-1.png",
    room: "god-capper",
  },
  {
    rank: 3,
    owner: "Slayer",
    predicts: {
      total: "14",
      winnings: "10",
    },
    avatar: "/avatars/avatar-3.png",
    room: "w1nners",
  },
  {
    rank: 4,
    owner: "Dobriy",
    predicts: {
      total: "13",
      winnings: "8",
    },
    avatar: "/avatars/avatar-4.png",
    room: "big_money_team",
  },
  {
    rank: 5,
    owner: "Petrovich",
    predicts: {
      total: "16",
      winnings: "7",
    },
    avatar: "/avatars/avatar-2.png",
    room: "succes33",
  },
  {
    rank: 6,
    owner: "Alina",
    avatar: "/avatars/avatar-6.png",
    room: "top-predicts",
    predicts: {
      total: "8",
      winnings: "3",
    },
  },
];

export function TopRooms({ setScreen }) {
  const { t } = useTranslation();

  return (
    <div className="lg:pb-0 pb-16">
      <p className="font-semibold text-lg text-yellow leading-6">
        {t("private_room_info_1")}
      </p>
      <p className="mt-5">{t("private_room_info_2")}</p>
      <p className="mt-5">{t("private_room_info_3")}</p>
      <Button
        styles="w-full h-16 lg:text-base text-sm px-24 mt-10"
        onClick={() => setScreen("create")}
      >
        {t("create_private_channel")}
      </Button>
      <p className="text-white font-bold text-center text-2xl mt-20 mb-10">
        {t("top_channels")}
      </p>

      <table className="w-full">
        <thead>
          <tr>
            <th className="text-xs opacity-50 text-left font-normal pr-2">
              {t("Rank")}
            </th>
            <th className="text-xs opacity-50 font-normal text-left">
              {t("private_room")}
            </th>
            <th className="text-xs opacity-50 font-normal text-left">
              {t("predictions")}
            </th>
            <th className="text-xs opacity-50 font-normal text-left">
              {t("Owner")}
            </th>
          </tr>
        </thead>
        <tbody>
          {rank.map((player, i) => (
            <tr
              key={player.rank}
              style={{
                borderBottom: i !== rank.length - 1 ? "1px solid #47348E" : "",
              }}
            >
              <td
                className={`py-4 font-bold text-xs ${
                  i === 0 ? "text-yellow" : ""
                }`}
              >
                {player.rank}
              </td>
              <td
                className={`py-4 text-[10px] underline font-bold ${
                  i === 0 ? "text-yellow" : ""
                }`}
              >
                {player.room}
              </td>
              <td
                className={`py-4 text-xs font-bold ${
                  i === 0 ? "text-yellow" : ""
                }`}
              >
                {player.predicts.winnings}{" "}
                <span className="font-normal ml-0.5">
                  {" "}
                  / {player.predicts.total}
                </span>
              </td>
              <td
                className={`py-4 text-xs font-bold flex items-center gap-3 ${
                  i === 0 ? "text-yellow" : ""
                }`}
              >
                <img
                  src={player.avatar}
                  alt={player.player}
                  className="w-7 rounded-full"
                />
                {player.owner}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
