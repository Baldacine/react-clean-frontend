import { useCallback, type ReactNode, type Dispatch } from "react";
import { UserContext } from "./UserContext";
import { initialState } from "../reducers/UserReducer";
import type { UserAction } from "@/@types/user";
import { useUserStore } from "@/app/stores/userStore";

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const user = useUserStore((state) => state.user);
  const dispatchFromStore = useUserStore((state) => state.dispatch);

  const dispatch: Dispatch<UserAction> = useCallback(
    (action) => {
      dispatchFromStore(action);
    },
    [dispatchFromStore]
  );

  return (
    <UserContext.Provider
      value={{
        state: user ?? initialState,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
