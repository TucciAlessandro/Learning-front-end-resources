import React, { ReactNode, createContext, useContext, useState } from "react";
import { data, Resource } from "../Data/Seeddata";

interface DataContextProviderProps {
  children: ReactNode;
}

const DEFAULT_CONTEXT_VALUE = {
  getResource: () => console.log("not in the context"),
  getAllResources: () => console.log("not in the context"),
};

interface DataContextValue {
  getResource: (id: string) => Resource;
  getAllResources: () => Resource[];
}

const MyDataContext = createContext<DataContextValue>(DEFAULT_CONTEXT_VALUE);

export const useDataContext = () => useContext(MyDataContext);

export const MyDataContextProvider = ({
  children,
}: DataContextProviderProps) => {
  const [state, setState] = useState(data);
  const getResource = () => {
    console.log("getting data");
  };
  const getAllResources = () => {
    console.log("getting data");
  };
  return (
    <MyDataContext.Provider value={{ getResource, getAllResources }}>
      {children}
    </MyDataContext.Provider>
  );
};
