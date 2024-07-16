import { useState } from "react";
import { DuelsIntro } from "./duels-intro";
import { ClosedDuels } from "./closed-duels";
import { CurrentDuels } from "./current-duels";
import { DuelersRating } from "../rating/duelers-rating";
import { useTranslation } from "react-i18next";

export function Duels() {
  const { t } = useTranslation();
  const [open, setOpen] = useState("intro");

  return (
    <div className="lg:pb-0 pb-16">
      {open === "intro" && <DuelsIntro setOpen={setOpen} />}
      {open === "closed" && <ClosedDuels />}
      {open === "current" && <CurrentDuels />}
      {open === "top" && (
        <div>
          <img src="/icons/rating.svg" alt="rank" className="m-auto w-20" />
          <p className="text-white font-bold text-center text-2xl mb-8 mt-5">
            {t("rating_of_players")}
          </p>
          <DuelersRating />
        </div>
      )}
    </div>
  );
}
