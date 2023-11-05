import { createContext, useState } from "react";

export const UserContext = createContext({
  inputValues: { name: "", email: "", password: "" },
});

export const UserProivder = ({ children }) => {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setInputValues((currentValuesObject) => {
      return { ...currentValuesObject, [inputIdentifier]: enteredValue };
    });
  };

  const value = { inputChangeHandler, inputValues };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
