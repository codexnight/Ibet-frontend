import { useTranslation } from "react-i18next";
import { InputMask } from "./input-mask";
import { useState } from "react";

const phones = {
  ru: {
    mask: "\\+\\7 (999) 999 99 99",
    placeholder: "+7 (123) 111 22 33",
    image: "/icons/ru-circle.svg",
    name: "ru",
  },
  il: {
    mask: "\\+\\972 (999) 999 99 99",
    placeholder: "+972 (123) 111 22 33",
    image: "/icons/il.svg",
    name: "il",
  },
  uk: {
    mask: "\\+\\380 (999) 999 99 99",
    placeholder: "+380 (123) 111 22 33",
    image: "/icons/uk.svg",
    name: "uk",
  },
};

export function PhoneInput({ name, control, errors }) {
  const [open, setOpen] = useState(false);
  const [country, setCountry] = useState("ru");
  const { t } = useTranslation();

  return (
    <InputMask
      name={name}
      control={control}
      errors={errors}
      label={t("phone_number")}
      leftIcon={
        <div className="relative">
          <img
            src={phones[country].image}
            alt="flag"
            className="cursor-pointer w-[20px]"
            onClick={() => setOpen(!open)}
          />
          {open && (
            <div className="absolute top-[22px] bg-indigo p-1 w-7 -left-1 grid gap-1 z-50 rounded-3xl">
              {Object.values(phones).map(
                (phone) =>
                  phone.name !== country && (
                    <img
                      onClick={() => {
                        setCountry(phone.name);
                        setOpen(false);
                      }}
                      src={phone.image}
                      alt="flag"
                      key={phone.image}
                      className="w-[22px] cursor-pointer"
                    />
                  )
              )}
            </div>
          )}
        </div>
      }
      maskProps={{
        mask: phones[country].mask,
        placeholder: phones[country].placeholder,
      }}
    />
  );
}
