import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import useFetch from "../hooks/UseFetch";
import { Resource } from "../Data/Seeddata";

interface DataContextProviderProps {
  children: ReactNode;
}

interface Resources {
  resources: Resource[];
}

const DEFAULT_CONTEXT_VALUE = {
  getResource: (id: string) => undefined,
  getAllResources: () => {
    return {} as Resource[];
  },
  loading: true,
};

interface DataContextValue {
  getResource: (id: string) => Resource | undefined;
  getAllResources: () => Resource[];
  loading: boolean;
}

const MyDataContext = createContext<DataContextValue>(DEFAULT_CONTEXT_VALUE);

export const useDataContext = () => useContext(MyDataContext);

const url = "http://localhost:5000/resources/";

export const MyDataContextProvider = ({
  children,
}: DataContextProviderProps) => {
  const [state, setState] = useState<Resources>({ resources: [] });
  const { data, error, loading } = useFetch(url);

  useEffect(() => {
    setState({ resources: data });
    console.log(data);
  }, [data]);

  const getResource = (id: string) => {
    if (!loading) {
      return state.resources.find((resource) => resource.id === id);
    }
  };

  const getAllResources = () => state.resources;

  return (
    <>
      {data && (
        <MyDataContext.Provider
          value={{getResource, getAllResources, loading }}
        >
          {children}
        </MyDataContext.Provider>
      )}
    </>
  );
};
