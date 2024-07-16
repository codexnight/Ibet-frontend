const { useTranslation } = require("react-i18next");

export function DuelsIntro({ setOpen }) {
  const { t } = useTranslation();

  return (
    <div>
      <img src="/icons/duel.svg" alt="rank" className="m-auto w-20" />
      <p className="text-white font-bold text-center text-2xl mb-8 mt-5">
        {t("duels")}
      </p>
      <p className="font-semibold text-lg text-yellow leading-6">
        {t("duel_info_1")}
      </p>
      <p className="mt-5">{t("duel_info_2")}</p>
      <p className="mt-5">{t("duel_info_3")}</p>
      <p className="mt-5">{t("duel_info_4")}</p>
      <div className="grid gap-[6px] grid-cols-3 mt-5">
        <div
          className="grid gap-3 items-center py-[11px] px-4 rounded-xl"
          style={{
            gridTemplateColumns: "10px auto",
            background: "#37286C",
          }}
          onClick={() => setOpen("current")}
        >
          <div className="w-[10px] h-[10px] bg-[#4AD03E] rounded-full" />
          <span className="text-[10px]">{t("opened_duels")}</span>
        </div>
        <div
          className="grid gap-3 items-center py-[11px] px-4 rounded-xl"
          style={{
            gridTemplateColumns: "10px auto",
            background: "#37286C",
          }}
          onClick={() => setOpen("closed")}
        >
          <div className="w-[10px] h-[10px] bg-[#FF2929] rounded-full" />
          <span className="text-[10px]">{t("closed_duels")}</span>
        </div>
        <div
          className="grid gap-3 items-center py-[11px] px-4 rounded-xl"
          style={{
            gridTemplateColumns: "12px auto",
            background: "#37286C",
          }}
          onClick={() => setOpen("top")}
        >
          <img className="w-[35px]" src="/icons/leaders.svg" alt="" />
          <span className="text-[10px]">{t("table_top")}</span>
        </div>
      </div>
    </div>
  );
}
