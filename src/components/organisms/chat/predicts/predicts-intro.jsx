import { Button } from "@/components/atoms/button";

const { useTranslation } = require("react-i18next");

export function PredictsIntro({ setScreen }) {
  const { t } = useTranslation();

  return (
    <div>
      <img src="/icons/prediction.svg" alt="rank" className="m-auto w-28" />
      <p className="text-white font-bold text-center text-2xl mb-8 mt-5">
        {t("predictions")}
      </p>
      <p className="font-semibold text-lg text-yellow leading-6">
        {t("predict_info_1")}
      </p>
      <p className="mt-5">{t("predict_info_2")}</p>
      <Button
        styles="w-full h-16 lg:text-base text-sm px-24 mt-10"
        onClick={() => setScreen("create")}
      >
        {t("create_predicts")}
      </Button>
    </div>
  );
}
