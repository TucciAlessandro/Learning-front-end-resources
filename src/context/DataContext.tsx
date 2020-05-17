import React, { ReactNode, createContext, useContext, useState } from "react";
import { data, Resource } from "../Data/Seeddata";

interface DataContextProviderProps {
  children: ReactNode;
}

const DEFAULT_CONTEXT_VALUE = {
  getResource: (id: string) => undefined,
  getAllResources: () => {
    return {} as Resource[];
  },
};

interface DataContextValue {
  getResource: (id: string) => Resource | undefined;
  getAllResources: () => Resource[];
}

const MyDataContext = createContext<DataContextValue>(DEFAULT_CONTEXT_VALUE);

export const useDataContext = () => useContext(MyDataContext);

export const MyDataContextProvider = ({
  children,
}: DataContextProviderProps) => {
  const [state, setState] = useState(data);
  const getResource = (id: string) =>
    data.resources.find((resource) => resource.id === id);

  const getAllResources = () => data.resources;

  return (
    <>
      {data && (
        <MyDataContext.Provider value={{ getResource, getAllResources }}>
          {children}
        </MyDataContext.Provider>
      )}
    </>
  );
};
