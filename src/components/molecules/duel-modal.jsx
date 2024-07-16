'use client'
import { useTranslation } from "react-i18next";
import { useContext, useEffect, useState, useRef } from "react";
import { Modal } from "../atoms/modal";
import { Button } from "../atoms/button";
import { Input } from "../atoms/form/input";
import useHookForm from "@/hooks/useHookForm";
import createSchema from "@/helpers/createSchema";
import UserContext from "@/contexts/UserContext";
import Cookies from "js-cookie";
import { sendMessage } from "@/socket";
import { sendDuelData } from "@/api/user";

const schema = createSchema({
  match: "required",
  time: "required",
  Winner: "required",
  Opposingteam: "required",
  amount:"required"
});
const values = {
  match: "",
  time: "",
  Winner:"",
  Opposingteam:"",
  amount:""
};

export function DuelModal({ isOpen, onClose }) {
  const playRef = useRef(); const dateRef = useRef();
  const myTeamRef = useRef(); const betRef = useRef(); const oppositeRef = useRef();
  const {isSendDuel, setIsSendDuel} = useContext(UserContext);
  const {sendDuelResult, setSendDuelResult} = useContext(UserContext);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const { t } = useTranslation();

  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDate();

  useEffect(() => {
    if (sendDuelResult.type == true) {
      setStep(2);
      setEmail(sendDuelResult.email);
    }
    else {
      setStep(1);
    }
  }, [sendDuelResult])

  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useHookForm(values, schema);

   const onSubmit = handleSubmit((res) => {
    setStep(2);
    if(betRef.current != undefined) {
      sendMessage(JSON.stringify({type:"start-duel", play:playRef.current.value, date:dateRef.current.value, myTeam:myTeamRef.current.value, opposite: oppositeRef.current.value, bet: betRef.current.value, duelUser: Cookies.get("Name"), receveUser: email, token: Cookies.get('token')}));
      onClose();
    } else {
      console.log("error")
    }
  });

  const responseDuel = (response) => {
      sendMessage(JSON.stringify({type: "response-duel", user: Cookies.get("Name"), opponent: isSendDuel, response: response, token: Cookies.get('token')}));
      onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {step === 1 && (
        <div className="text-center">
          <img
            src="/icons/duel.svg"
            alt="duel"
            className="w-[80px] h-[70px] m-auto"
          />
          <p className="my-4 font-bold">
            {t("duel_with_player")} <br /> {email}
          </p>
          <div className="grid grid-cols-2 gap-4 mt-7">
            {/* <Button onClick={() => setStep(2)}>{t("yes")}</Button> */}
            <Button onClick={() => responseDuel(true)}>{t("yes")}</Button>
            <Button onClick={() => responseDuel(false)} scheme="bordered">
              {t("no")}
            </Button>
          </div>
        </div>
      )}
      {step === 2 && (
        <div>
          <p className="text-center text-xs opacity-50">{month}.{day}.{year}</p>
          <div className="flex justify-between items-center mt-10">
            <div className="text-center">
              <img
                src={Cookies.get("Avatar")}
                alt="avatar"
                className="w-[40px] rounded-full m-auto"
              />
              <p className="font-bold mt-2 text-xs">{Cookies.get("Name")}</p>
            </div>
            <img src="/icons/duel.svg" alt="duel" className="w-[80px] m-auto" />
            <div className="text-center">
              <img
                src="https://randomuser.me/api/portraits/lego/3.jpg"
                alt="avatar"
                className="w-[40px] rounded-full m-auto"
              />
              <p className="font-bold mt-2 text-xs">{email}</p>
            </div>
          </div>
          <div className="grid gap-7 mt-12">
            <Input
              refs = {playRef}
              name="match"
              control={control}
              errors={errors}
              label={t("who_plays")}
              labelStyles={css.label}
              styles={{ textAlign: "center", fontWeight: 500 }}
            />
            <Input
              refs = {dateRef}
              name="time"
              control={control}
              errors={errors}
              label={t("when")}
              labelStyles={css.label}
              styles={{ textAlign: "center", fontWeight: 500 }}
            />
            <Input
              refs = {myTeamRef}
              name="Winner"
              control={control}
              errors={errors}
              label={t("My team")}
              labelStyles={css.label}
              styles={{ textAlign: "center", fontWeight: 500 }}
            />
            <Input
              refs = {oppositeRef}
              name="Opposingteam"
              control={control}
              errors={errors}
              label={t("Opposing team")}
              labelStyles={css.label}
              styles={{ textAlign: "center", fontWeight: 500 }}
            />
            <Input
              refs = {betRef}
              name="amount"
              control={control}
              errors={errors}
              label={t("my_amount")}
              labelStyles={css.label}
              styles={{ textAlign: "center", fontWeight: 500 }}
            />
            <div className="relative mt-5">
              <img
                src="/button-coin.png"
                alt=""
                className="absolute -left-2 -top-4 z-10"
              />
              <Button styles="w-full !pl-20" onClick={onSubmit}>
                Поставить {betRef.current == undefined ? 0 : betRef.current.value}$ <br /> на победу Luton
              </Button>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
}

const css = {
  label: {
    color: "#fff",
    fontWeight: 700,
    textAlign: "center",
    opacity: 1,
  },
};
