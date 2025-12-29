import { createContext, type Dispatch } from "react";
import { initialState } from "../reducers/UserReducer";
import type { User, UserAction } from "@/@types/user";

export const UserContext = createContext<{
  state: User;
  dispatch: Dispatch<UserAction>;
}>({
  state: initialState,
  dispatch: () => null,
});
