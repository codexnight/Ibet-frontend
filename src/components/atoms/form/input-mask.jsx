import removeSpacesFromString from "@/helpers/removeSpacesFromText";
import { Controller } from "react-hook-form";
import Mask from "react-input-mask";

const customOnChange = (event, onChange) => {
  const modifiedValue = removeSpacesFromString(event.target.value);
  onChange(modifiedValue);
};

export function InputMask({
  name,
  control,
  errors,
  label,
  leftIcon,
  rightIcon,
  maskProps,
}) {
  return (
    <div>
      <label className="text-[13px] opacity-50 block mb-2.5" htmlFor={name}>
        {label}
      </label>
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-5 top-1/2 transform -translate-y-1/2 z-40">
            {leftIcon}
          </div>
        )}
        <Controller
          name={name}
          control={control}
          render={({ field }) => {
            const {
              onChange,
              onBlur,
              ref,
              value: fieldValue,
              name: fieldName,
            } = field;

            const controllerProps = {
              onBlur,
              onChange: (event) => customOnChange(event, onChange),
              value: fieldValue,
              name: fieldName,
            };

            return (
              <Mask maskChar={null} {...controllerProps} {...maskProps}>
                {(maskInputProps) => (
                  <input
                    ref={ref}
                    className={`w-full py-[17px] px-[22px] text-sm rounded-lg border-none outline-none bg-indigo ${
                      leftIcon ? "pl-16" : "pl-[22px]"
                    } ${rightIcon ? "pr-12" : "pr-[22px]"}`}
                    autoComplete="off"
                    id={name}
                    {...maskInputProps}
                  />
                )}
              </Mask>
            );
          }}
        />
        {rightIcon && (
          <div className="absolute cursor-pointer p-3 right-2 top-1/2 transform -translate-y-1/2">
            {rightIcon}
          </div>
        )}
      </div>
      {errors[name] ? (
        <div className="relative h-2 mt-3 pl-6">
          <span className="text-xs text-red-500 font-semibold absolute">
            * {errors[name].message}
          </span>
        </div>
      ) : null}
    </div>
  );
}
