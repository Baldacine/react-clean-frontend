import type { User, UserAction } from "@/@types/user";

export const initialState: User = {
  name: '',
  token: ''
};

export const UserReducer = (state: User, action: UserAction): User => {
  switch (action.type) {
    case 'setUser':
      return { ...state, ...action.payload };
    case 'logout':
      return initialState;
    default:
      return state;
  }
};