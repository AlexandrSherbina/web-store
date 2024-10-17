import React, { forwardRef, useId, useState } from "react";

interface CheckBoxProps extends React.HTMLAttributes<HTMLInputElement> {
  key?: string;
  value?: string;
  onChange: (event?: any) => void;
  labelText: string;
  checked?: boolean;
  idInput?: string;
  classWrap?: string;
  classInput?: string;
  classLabel?: string;
}

const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
  (
    {
      key,
      value,
      onChange,
      idInput,
      labelText,
      checked = false,
      classWrap,
      classInput,
      classLabel,
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = useState(checked);
    const handleCheckboxChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setIsChecked(event.target.checked);
      onChange && onChange(event);
    };
    const idInputDefault = useId();
    const checkIdInput = idInput ? idInput : idInputDefault;
    return (
      <div key={`${key}`} className={`form-check ${classWrap}`}>
        <input
          ref={ref}
          className={`form-check-input ${classInput}`}
          type="checkbox"
          value={value}
          id={`flexCheckDefault-${checkIdInput}`}
          onChange={handleCheckboxChange}
          checked={isChecked}
        />
        <label
          className={`form-check-label ${classLabel}`}
          htmlFor={`flexCheckDefault-${checkIdInput}`}
        >
          {labelText}
        </label>
      </div>
    );
  }
);

export default CheckBox;
