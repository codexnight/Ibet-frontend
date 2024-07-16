import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function useHookForm(defaultValues, schema) {
  return useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
}
