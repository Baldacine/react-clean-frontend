import { create } from "zustand";
import type { User, UserAction } from "@/@types/user";
import { initialState, UserReducer } from "@/reducers/UserReducer";

type UserState = {
    user: User;
    setUser: (payload: Partial<User>) => void;
    logout: () => void;
    hydrate: () => void;
    dispatch: (action: UserAction) => void;
};

const isUser = (value: unknown): value is User => {
    if (typeof value !== "object" || value === null) return false;

    return (
        "name" in value &&
        typeof value.name === "string" &&
        "token" in value &&
        typeof value.token === "string"
    );
};

const readStoredUser = (): User => {
    if (typeof window === "undefined") return initialState;

    try {
        const storedUser = localStorage.getItem("user");
        if (!storedUser) return initialState;

        const parsedUser: unknown = JSON.parse(storedUser);
        return isUser(parsedUser) ? parsedUser : initialState;
    } catch {
        return initialState;
    }
};

export const useUserStore = create<UserState>((set) => ({
    user: readStoredUser(),

    setUser: (payload) =>
        set((state) => ({
            user: { ...state.user, ...payload },
        })),

    logout: () => set({ user: initialState }),

    hydrate: () => set({ user: readStoredUser() }),

    dispatch: (action) =>
        set((state) => ({ user: UserReducer(state.user, action) })),
}));

if (typeof window !== "undefined") {
    useUserStore.subscribe((state) => {
        try {
            if (state.user?.token) {
                localStorage.setItem("user", JSON.stringify(state.user));
            } else {
                localStorage.removeItem("user");
            }
        } catch {
            // Storage can be unavailable or exceed its quota.
        }
    });
}
