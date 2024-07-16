import Link from "next/link";
import useSWR from "swr";
import Marquee from "react-fast-marquee";
import { useTranslation } from "react-i18next";
import { getWinners } from "@/api/user";

export function Winners() {
  const { data } = useSWR("/winners", () => getWinners());
  const { t } = useTranslation();

  return (
    <div>
      <div className="h-[1px] bg-gradient-to-r from-[rgba(255,184,0,0.2)] via-[#FFB800] to-[rgba(255,184,0,0.2)]" />
      <div
        className="grid justify-between items-center gap-1 my-1"
        style={{ gridTemplateColumns: "135px auto" }}
      >
        <div className="flex items-center">
          <div className="pr-3">
            <img
              src="/winner.gif"
              alt="winner"
              className="w-[57px]"
              style={{ transform: "translateY(-6px)" }}
            />
          </div>
          <p className="font-bold text-[10px] text-yellow">
            {t("winners_right_now")}
          </p>
        </div>
        <Marquee style={{ zIndex: 0 }}>
          {data?.winners?.map((winner) => (
            <Link
              href={`/game/launcher?gid=${winner.extearnal_game_id}&lang=en`}
              key={winner.amount}
              className="flex items-center gap-2 mr-4"
            >
              <img
                className="w-[40px] rounded-md"
                src={winner.icon_2 || "https://xmax.is/images/x-win.png"}
                alt={winner.name}
              />
              <div>
                <p className="text-xs font-bold">
                  {winner.nickname} {t("wins")}{" "}
                  <span className="text-yellow">{Math.floor(+winner.wa)}$</span>{" "}
                  {t("in")} <br />
                  <span className="text-xs font-bold text-textGrey underline">
                    {winner.name || t("xsport")}
                  </span>
                </p>
              </div>
            </Link>
          ))}
        </Marquee>
      </div>
      <div className="lg:mb-16 md:mb-16 h-[1px] bg-gradient-to-r from-[rgba(255,184,0,0.2)] via-[#FFB800] to-[rgba(255,184,0,0.2)]" />
    </div>
  );
}
