import { useTranslation } from "react-i18next";

const rank = [
  {
    rank: 1,
    player: "Wolf13",
    duel: {
      total: "20",
      winnings: "15",
    },
    price: 2600,
    avatar: "/avatars/avatar-7.png",
    room: "sport777",
  },
  {
    rank: 2,
    player: "Alex777",
    duel: {
      total: "26",
      winnings: "13",
    },
    price: 2350,
    avatar: "/avatars/avatar-1.png",
    room: "god-capper",
  },
  {
    rank: 3,
    player: "Slayer",
    duel: {
      total: "14",
      winnings: "10",
    },
    price: 1900,
    avatar: "/avatars/avatar-3.png",
    room: "w1nners",
  },
  {
    rank: 4,
    player: "Dobriy",
    duel: {
      total: "13",
      winnings: "8",
    },
    price: 1550,
    avatar: "/avatars/avatar-4.png",
    room: "big_money_team",
  },
  {
    rank: 5,
    player: "Petrovich",
    duel: {
      total: "16",
      winnings: "7",
    },
    price: 800,
    avatar: "/avatars/avatar-2.png",
    room: "succes33",
  },
  {
    rank: 6,
    player: "Alina",
    price: 400,
    avatar: "/avatars/avatar-6.png",
    room: "top-predicts",
    duel: {
      total: "8",
      winnings: "3",
    },
  },
];

export const DuelersRating = () => {
  const { t } = useTranslation();

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="text-xs opacity-50 text-left font-normal pr-3">
            {t("Rank")}
          </th>
          <th className="text-xs opacity-50 font-normal text-left">
            {t("Player")}
          </th>
          <th className="text-xs opacity-50 font-normal text-left pr-3">
            {t("Duels")}
          </th>
          <th className="text-xs opacity-50 font-normal text-left">
            {t("Prize")}
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
              className={`font-bold py-4 text-xs ${
                i === 0 ? "text-yellow" : ""
              }`}
            >
              {player.rank}
            </td>
            <td
              className={`py-4 text-[10px] font-bold flex items-center gap-3 ${
                i === 0 ? "text-yellow" : ""
              }`}
            >
              <img
                src={player.avatar}
                alt={player.player}
                className="w-7 rounded-full"
              />
              {player.player}
            </td>
            <td
              className={`py-4 text-xs font-bold ${
                i === 0 ? "text-yellow" : ""
              }`}
            >
              {player.duel.winnings}{" "}
              <span className="font-normal ml-0.5"> / {player.duel.total}</span>
            </td>
            <td
              className={`text-xs py-4 font-bold ${
                i === 0 ? "text-yellow" : ""
              }`}
            >
              {player.price}$
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
