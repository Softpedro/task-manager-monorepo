import React from "react";
import { useInputContext } from "./InputContext";
import "./input.css";

interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({
  placeholder,
  value,
  onChange
}: InputProps): JSX.Element {
  const { value: valueContext, setValue, error, success } = useInputContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const mode = error
    ? "storybook-input--error"
    : success
    ? "storybook-input--success"
    : "";

  return (
    <input
      type="text"
      className={["storybook-input", mode].join(" ")}
      placeholder={placeholder}
      value={valueContext || value}
      onChange={onChange || handleChange}
    />
  );
}
