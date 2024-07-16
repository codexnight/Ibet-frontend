import * as yup from "yup";
import schemaFieldTypes from "../utils/validationSchema";

export default function createSchema(config = []) {
  const entries = Object.entries(config).map(([inputName, schemaFieldType]) => [  
    inputName,
    schemaFieldTypes[schemaFieldType],
  ]);

  return yup.object().shape(Object.fromEntries(entries));
}
