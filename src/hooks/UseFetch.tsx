import React, { useState, useEffect, useReducer } from "react";

type Action =
  | {
      type: "REQUEST_START";
    }
  | { type: "REQUEST_FAIL"; payload: any }
  | {
      type: "REQUEST_SUCCESS";
      payload: any;
    };

interface State {
  data: any;
  loading: boolean;
  error: any;
}

const INITIAL_STATE: State = {
  data: null,
  loading: false,
  error: null,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "REQUEST_START": {
      return { ...state, loading: true };
    }
    case "REQUEST_FAIL": {
      return { ...state, error: action.payload, loading: false };
    }
    case "REQUEST_SUCCESS": {
      return { ...state, data: action.payload, loading: false };
    }
  }
};

const useFetch = (url: string) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    const doFetch = async () => {
      try {
        dispatch({ type: "REQUEST_START" });
        const res = await fetch(url);
        const response = await res.json();
        dispatch({ type: "REQUEST_SUCCESS", payload: response });
      } catch (error) {
        dispatch({ type: "REQUEST_FAIL", payload: error });
      }
    };
    doFetch();
  }, [url]);
  return state;
};

export default useFetch;
