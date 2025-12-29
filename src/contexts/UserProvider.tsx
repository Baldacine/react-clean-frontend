import { useEffect, useReducer, type ReactNode } from "react";
import { UserContext } from "./UserContext";
import { initialState, UserReducer } from "../reducers/UserReducer";
import type { User } from "@/@types/user";

interface UserProviderProps {
  children: ReactNode;
}

const getInitialState = (): User => {
  const userFromStorage = localStorage.getItem("user");
  if (!userFromStorage) return initialState;
  try {
    return JSON.parse(userFromStorage);
  } catch {
    return initialState;
  }
};

export function UserProvider({ children }: UserProviderProps) {
  const [state, dispatch] = useReducer(UserReducer, getInitialState());

  useEffect(() => {
    if (state.token) {
      localStorage.setItem("user", JSON.stringify(state));
    } else {
      localStorage.removeItem("user");
    }
  }, [state]);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
