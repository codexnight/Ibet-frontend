import { useTranslation } from "react-i18next";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/form/input";
import createSchema from "@/helpers/createSchema";
import useHookForm from "@/hooks/useHookForm";
import { Copy } from "@/components/atoms/copy";

const schema = createSchema({
  name: "required",
});
const values = {
  name: "https://ibet.pro/+W8qdXL",
};

export function MyRooms({ setRoom, onClose }) {
  const { t } = useTranslation();

  const {
    control,
    formState: { errors },
  } = useHookForm(values, schema);

  return (
    <div className="grid gap-7 mt-12">
      <Input
        name="name"
        control={control}
        errors={errors}
        label={t("link_of_room")}
        labelStyles={css.label}
        inputProps={{ disabled: true }}
        styles={{ textAlign: "center", fontWeight: 500 }}
        rightIcon={
          <Copy>
            <img
              className="cursor-pointer w-[22px]"
              src="/copy-icon.svg"
              onClick={() =>
                navigator.clipboard.writeText("https://ibet.pro/+W8qdXL")
              }
            />
          </Copy>
        }
      />
      <Button
        styles="w-full h-16 lg:text-base text-sm px-24 mt-6"
        onClick={() => {
          setRoom("Top-prognoz777");
          onClose();
        }}
      >
        {t("enter_the_chat")}
      </Button>
    </div>
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
