import { useState } from "react";
import { useTranslation } from "react-i18next";
import { DuelersRating } from "./duelers-rating";
import { CappersRating } from "./cappers-rating";

export function Rating() {
  const [type, setType] = useState("duel");
  const { t } = useTranslation();

  return (
    <div className="lg:p-0 pb-16">
      <img src="/icons/rating.svg" alt="rank" className="m-auto w-20" />
      <p className="text-white font-bold text-center text-2xl mb-8 mt-5">
        {t("rating_of_players")}
      </p>
      <p className="font-bold text-lg text-yellow leading-6.5">
        {t("rating_info")}
      </p>
      <div className="grid grid-cols-2 gap-3 mb-12 mt-6">
        <div
          className="flex gap-3 items-center py-2 px-4 rounded-xl"
          style={
            type === "duel"
              ? { backgroundColor: "#4F3C96", fontWeight: 700 }
              : { backgroundColor: "#271B56" }
          }
          onClick={() => setType("duel")}
        >
          <img src="/icons/duel.svg" alt="duel" className="w-6" />
          <p className="text-xs">{t("duelers")}</p>
        </div>
        <div
          onClick={() => setType("capper")}
          className="flex gap-2.5 items-center py-2 px-4 rounded-xl"
          style={
            type === "capper"
              ? { backgroundColor: "#4F3C96", fontWeight: 700 }
              : { backgroundColor: "#271B56" }
          }
        >
          <img src="/icons/prediction.svg" alt="duel" className="w-8" />
          <p className="text-xs">{t("cappers")}</p>
        </div>
      </div>
      {type === "duel" && <DuelersRating />}
      {type === "capper" && <CappersRating />}
    </div>
  );
}
