import { useTranslation } from "react-i18next";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/form/input";
import createSchema from "@/helpers/createSchema";
import useHookForm from "@/hooks/useHookForm";

const schema = createSchema({
  name: "required",
});
const values = {
  name: "",
};

export function CreateRoom({ setScreen }) {
  const { t } = useTranslation();

  const {
    control,
    watch,
    formState: { errors },
  } = useHookForm(values, schema);

  return (
    <div className="grid gap-7 mt-12">
      <Input
        name="name"
        control={control}
        errors={errors}
        label={t("name_of_private_room")}
        labelStyles={css.label}
        styles={{ textAlign: "center", fontWeight: 500 }}
      />
      <Button
        styles="w-full h-16 lg:text-base text-sm px-24 mt-6"
        onClick={() => watch("name") && setScreen("my-rooms")}
      >
        {t("create")}
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
