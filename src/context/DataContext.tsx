import React, { ReactNode, createContext, useContext, useState } from "react";
import { data } from "../Data/Seeddata";

interface DataContextProviderProps {
  children: ReactNode;
}

const DEFAULT_CONTEXT_VALUE = {
  getData: () => console.log("not in the context"),
};

interface DataContextValue {
  getData: () => void;
}

const MyDataContext = createContext<DataContextValue>(DEFAULT_CONTEXT_VALUE);

export const useDataContext = useContext(MyDataContext);

export const MyDataContextProvider = ({
  children,
}: DataContextProviderProps) => {
  const [state, setState] = useState(data);
  const getData = () => {
    console.log("getting data");
  };
  return (
    <MyDataContext.Provider value={{ getData }}>
      {children}
    </MyDataContext.Provider>
  );
};
