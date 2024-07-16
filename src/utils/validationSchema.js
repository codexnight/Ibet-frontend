/* eslint-disable comma-dangle */
import * as yup from "yup";

const schemaFieldTypes = {
  required: yup.string().strict().required("Это поле обязательно к заполнению"),
  phone: yup.string().required("Неправильный номер телефона"),
  boolean: yup.boolean().oneOf([true], "Это поле обязательно к заполнению"),
  password: yup
    .string()
    .required("Это поле обязательно к заполнению")
    .min(6, "Мин. 6 символов"),
  confirmPassword: yup
    .string()
    .test("passwords-match", "Пароли должны совпадать", function test(value) {
      return this.parent.newPassword === value;
    }),
};

export default schemaFieldTypes;
