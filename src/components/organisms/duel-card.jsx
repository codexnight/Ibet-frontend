import { useState } from "react";
import { useTranslation } from "react-i18next";

export function DuelCard({ duel }) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="rounded-lg" style={open ? { background: "#1E1443" } : {}}>
      <div
        style={{
          background: 'url("/duel-bg.png")',
          backgroundSize: "100% 100%",
        }}
        className="rounded-lg px-6"
      >
        <div className="flex justify-center items-center">
          <span className="text-yellow lg:text-[10px] text-sm font-bold">
            {duel.user1?.name}
          </span>
          <img
            src={duel.isEnded ? "/duel-failed.png" : "duel.png"}
            className="lg:w-[80px] md:w-[100px] w-[130px]"
            alt="duel"
          />
          <span className="text-yellow lg:text-[10px] text-sm font-bold">
            {duel.user2?.name}
          </span>
        </div>
        <p className="text-[10px] text-center mt-[-10px] pb-5 font-bold">
          {duel.user1?.name} вызвал на дуель {duel.user2?.name}. Ставка{" "}
          {duel.amount}!
        </p>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="flex justify-center items-center gap-2 text-[10px] py-[2px] px-4 w-[40%] m-auto mt-[-9px] cursor-pointer bg-[#1E1443] rounded-lg"
      >
        <img
          src="/icons/top-collapce.svg"
          alt="top"
          style={
            open
              ? { transform: "rotate(0deg)" }
              : { transform: "rotate(180deg)" }
          }
        />
        <span>{t("collapse")}</span>
      </div>
      {open && (
        <div className="py-7 pt-2 px-5 text-[9px] overflow-hidden transition-all">
          {t("player")} <b>{duel.user1?.name}</b> {t("dueled_another_player")}{" "}
          <b>{duel.user2?.name}</b> {t("and_put")} <b>{duel.amount}</b>{" "}
          {t("which_game")} <b>{duel.game}</b> {t("game_played")}{" "}
          <b>{duel.choose}</b>.
          <br />
          <br />
          {t("time_of_game")}: <b>{duel.time}</b> <br />
          <br />
          {t("played_amount")}: <b>{duel.price}</b>!
        </div>
      )}
    </div>
  );
}
