import React, { createContext, useContext } from "react";

interface FormContextType {
  mode: "create" | "edit";
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{
  children: React.ReactNode;
  mode?: "create" | "edit";
}> = ({ children, mode = "create" }) => {
  return (
    <FormContext.Provider value={{ mode }}>{children}</FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
