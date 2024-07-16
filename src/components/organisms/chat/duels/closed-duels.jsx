import { useTranslation } from "react-i18next";

const DUELS = [
  {
    winner: "Alex777",
    dueler: "Mysterio",
    winning: 200,
    game: "Luton - Manchester",
    gameTime: "23.03.2024 - 16:00",
    winnerAvatar: "/avatars/avatar-1.png",
  },
  {
    winner: "Petrocich",
    dueler: "Alina",
    winning: 100,
    game: "Chelsi - Real ",
    gameTime: "23.03.2024 - 16:00",
    winnerAvatar: "/avatars/avatar-2.png",
  },
  {
    winner: "Slayer",
    dueler: "Wolf",
    winning: 400,
    game: "Inter - Atletiko",
    gameTime: "23.03.2024 - 16:00",
    winnerAvatar: "/avatars/avatar-3.png",
  },
  {
    winner: "Dobriy",
    dueler: "Panda",
    winning: 300,
    game: "Zenit - Spartak",
    gameTime: "23.03.2024 - 16:00",
    winnerAvatar: "/avatars/avatar-4.png",
  },
];

export function ClosedDuelCard({ duel }) {
  return (
    <div className="py-5 px-7 bg-[#4F3C96] rounded-xl">
      <div className="flex items-center gap-4">
        <img
          src={duel.winnerAvatar}
          alt={duel.winner}
          className="w-12 rounded-full"
        />
        <div>
          <p className="text-xs">
            <b>{duel.winner}</b> won the duel <b>{duel.dueler}</b>!
          </p>
          <p className="text-xs">Winning: {duel.winning}$</p>
        </div>
      </div>
      <div
        className="flex justify-between items-center pt-[10px] mt-[10px]"
        style={{ borderTop: "1px solid #47348E" }}
      >
        <div>
          <p className="text-xs">{duel.game}</p>
        </div>
        <p className="text-[10px] opacity-50">{duel.gameTime}</p>
      </div>
    </div>
  );
}

export function ClosedDuels() {
  const { t } = useTranslation();

  return (
    <div>
      <p className="text-white font-bold text-center mb-10">
        {t("closed_duels")}
      </p>
      <div className="grid gap-4">
        {DUELS.map((duel) => (
          <ClosedDuelCard key={duel.winner} duel={duel} />
        ))}
      </div>
    </div>
  );
}
