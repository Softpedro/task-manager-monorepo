import { createContext, useContext, useState, ReactNode } from "react";

interface InputContextType {
  value: string;
  setValue: (value: string) => void;
  error?: boolean;
  success?: boolean;
}

const InputContext = createContext<InputContextType | null>(null);

export function InputProvider({
  children,
  initialValue = "",
  error = false,
  success = false
}: {
  children: ReactNode;
  initialValue?: string;
  error?: boolean;
  success?: boolean;
}) {
  const [value, setValue] = useState(initialValue);

  return (
    <InputContext.Provider value={{ value, setValue, error, success }}>
      {children}
    </InputContext.Provider>
  );
}

export function useInputContext() {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error("useInputContext must be used within an InputProvider");
  }
  return context;
}
