import { useTranslation } from "react-i18next";
import { Input } from "@/components/atoms/form/input";
import createSchema from "@/helpers/createSchema";
import useHookForm from "@/hooks/useHookForm";
import { Button } from "@/components/atoms/button";
import { useState } from "react";

const informationsSchema = createSchema({
  team1: "required",
  team2: "required",
  date: "required",
  time: "required",
});
const informationsValue = {
  team1: "",
  team2: "",
  date: "",
  time: "",
};

const typesOfGames = [
  {
    image: "/football.png",
    name: "football",
  },
  {
    image: "/basketball.png",
    name: "basketball",
  },
  {
    image: "/hockey.png",
    name: "hockey",
  },
  {
    image: "/tennis.png",
    name: "tennis",
  },
  {
    image: "/other-game.png",
    name: "other_game",
  },
];

const FirstStep = ({ setStep, setData }) => {
  const { t } = useTranslation();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useHookForm(informationsValue, informationsSchema);

  const onSubmit = handleSubmit((res) => {
    setData(res);
    setStep(2);
  });

  return (
    <>
      <p className="text-center text-sm px-10 leading-5 mb-10">
        {t("predict_fill_info")}
      </p>
      <div className="grid gap-7 mt-12">
        <Input
          name="team1"
          control={control}
          errors={errors}
          label={`${t("team")} 1`}
          labelStyles={css.label}
          styles={{ textAlign: "center", fontWeight: 700 }}
        />
        <Input
          name="team2"
          control={control}
          errors={errors}
          label={`${t("team")} 2`}
          labelStyles={css.label}
          styles={{ textAlign: "center", fontWeight: 700 }}
        />
        <Input
          name="date"
          control={control}
          errors={errors}
          label={t("date_of_game")}
          labelStyles={css.label}
          styles={{ textAlign: "center", fontWeight: 700 }}
        />
        <Input
          name="time"
          control={control}
          errors={errors}
          label={t("time_of_game")}
          labelStyles={css.label}
          styles={{ textAlign: "center", fontWeight: 700 }}
        />
        <Button styles="w-full h-14 px-24 mt-4" onClick={onSubmit}>
          {t("next")}
        </Button>
      </div>
    </>
  );
};

const SecondStep = ({ setStep }) => {
  const { t } = useTranslation();

  return (
    <>
      <p className="text-center text-sm px-10 leading-5 mb-10">
        {t("select_game")}
      </p>
      <div className="grid gap-10">
        {typesOfGames.map((game) => (
          <div
            key={game.name}
            onClick={() => setStep(3)}
            className="flex items-center gap-5 px-10 py-4 bg-indigo rounded-[40px] cursor-pointer"
          >
            <img src={game.image} alt={game.name} className="w-16" />
            <p className="font-bold mt-1">{t(game.name)}</p>
          </div>
        ))}
      </div>
    </>
  );
};

const ThirdStep = ({ setStep, info }) => {
  const { t } = useTranslation();

  return (
    <>
      <p className="text-center text-sm px-10 leading-5 mb-10">
        {t("predict_fill_info")}
      </p>
      <div className="grid gap-7 mt-12">
        <div>
          <p className="text-textGrey mb-3 text-center">{t("w1")}</p>
          <div
            onClick={() => setStep(4)}
            className="px-10 py-7 font-bold bg-indigo rounded-[40px] cursor-pointer text-center"
          >
            {t("victory")} {info.team1}
          </div>
        </div>
        <div>
          <p className="text-textGrey mb-3 text-center">{t("w1")}</p>
          <div
            onClick={() => setStep(4)}
            className="px-10 py-7 font-bold bg-indigo rounded-[40px] cursor-pointer text-center"
          >
            {t("draw")}
          </div>
        </div>
        <div>
          <p className="text-textGrey mb-3 text-center">{t("w1")}</p>
          <div
            onClick={() => setStep(4)}
            className="px-10 py-7 font-bold bg-indigo rounded-[40px] cursor-pointer text-center"
          >
            {t("victory")} {info.team2}
          </div>
        </div>
        <p className="text-center text-sm px-16 mb-10 mt-16 leading-5">
          {t("your_event_arguments")}
        </p>
        <div className="p-6 bg-indigo grid gap-4 text-xs rounded-lg -mt-6">
          <span>{t("your_event_info_1")}</span>
          <span>{t("your_event_info_2")}</span>
          <span>{t("your_event_info_3")}</span>
        </div>
        <Button styles="w-full h-14 px-24 mt-4">{t("create_predict")}</Button>
      </div>
    </>
  );
};

const FourthStep = ({ setStep }) => {
  const { t } = useTranslation();

  return (
    <>
      <p className="text-center text-sm px-10 leading-5 mb-14">
        {t("type_of_prediction")}
      </p>
      <div className="grid gap-12 mt-12">
        <div
          onClick={() => setStep(5)}
          className="px-10 py-7 font-bold bg-indigo rounded-[40px] cursor-pointer text-center"
        >
          {t("single")}
        </div>
        <div
          onClick={() => setStep(5)}
          className="px-10 py-7 font-bold bg-indigo rounded-[40px] cursor-pointer text-center"
        >
          {t("multi")}
        </div>
      </div>
    </>
  );
};

const FifthStep = ({ setStep, info }) => {
  const [selected, setSelected] = useState([]);
  const { t } = useTranslation();

  return (
    <>
      <p className="text-center text-sm px-10 leading-5 mb-14">
        {t("select_match_for_bet")}
      </p>
      <div className="grid gap-6 mt-12">
        <div
          onClick={() =>
            selected.includes(1) ? setSelected([]) : setSelected([1])
          }
          style={selected.includes(1) ? { border: "1px solid #FFB800" } : {}}
          className="px-10 py-7 font-bold bg-indigo rounded-[40px] cursor-pointer text-center"
        >
          {`${info.team1} - ${info.team2}`}
        </div>
        <Button
          disabled={selected.length === 0}
          styles="w-full h-[68px] text-base px-24 mt-4"
          onClick={() => setStep(6)}
        >
          {t("next")}
        </Button>
      </div>
    </>
  );
};

const SixthStep = ({ info }) => {
  const { t } = useTranslation();

  return (
    <>
      <p className="text-center text-sm px-10 leading-5 mb-10">
        {t("choose_the_outcome")}
      </p>
      <div className="grid gap-7 mt-12">
        <div>
          <p className="text-textGrey mb-3 text-center">{t("w1")}</p>
          <div
            className="px-10 py-7 font-bold bg-indigo rounded-[40px] cursor-pointer text-center"
            style={{ border: "1px solid #FFB800" }}
          >
            {t("victory")} {info.team1}
          </div>
        </div>
        <div>
          <p className="text-textGrey mb-3 text-center">{t("w1")}</p>
          <div className="px-10 py-7 font-bold bg-indigo rounded-[40px] cursor-pointer text-center">
            {t("draw")}
          </div>
        </div>
        <div>
          <p className="text-textGrey mb-3 text-center">{t("w1")}</p>
          <div className="px-10 py-7 font-bold bg-indigo rounded-[40px] cursor-pointer text-center">
            {t("victory")} {info.team2}
          </div>
        </div>
        <p className="text-center text-sm px-16 mb-10 mt-16 leading-5">
          {t("your_event_arguments")}
        </p>
        <div className="p-6 bg-indigo grid gap-4 text-xs rounded-lg -mt-6">
          <span>{t("your_event_info_1")}</span>
          <span>{t("your_event_info_2")}</span>
          <span>{t("your_event_info_3")}</span>
        </div>
        <Button styles="w-full h-14 px-24 mt-4">{t("create_predict")}</Button>
      </div>
    </>
  );
};

export function CreatePredict() {
  const [info, setInfo] = useState({
    team1: "Manchester City",
    team2: "Real Madrid",
    id: 1,
  });
  const [step, setStep] = useState(1);
  const { t } = useTranslation();

  return (
    <div>
      <img src="/icons/prediction.svg" alt="rank" className="m-auto w-28" />
      <p className="text-white font-bold text-center text-2xl mb-8 mt-5">
        {t("your_predict")}
      </p>
      {step === 1 && <FirstStep setData={setInfo} setStep={setStep} />}
      {step === 2 && <SecondStep setStep={setStep} />}
      {step === 3 && <ThirdStep info={info} setStep={setStep} />}
      {step === 4 && <FourthStep setStep={setStep} />}
      {step === 5 && <FifthStep info={info} setStep={setStep} />}
      {step === 6 && <SixthStep info={info} setStep={setStep} />}
    </div>
  );
}

const css = {
  label: {
    color: "var(--textGrey)",
  },
};
