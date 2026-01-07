import { create } from "zustand";
import type { User, UserAction } from "@/@types/user";
import { initialState } from "@/reducers/UserReducer";

type UserState = {
    user: User;
    setUser: (payload: Partial<User>) => void;
    logout: () => void;
    dispatch: (action: UserAction) => void;
};

export const useUserStore = create<UserState>((set) => ({
    user: initialState,

    setUser: (payload) =>
        set((state) => ({
            user: { ...state.user, ...payload },
        })),

    logout: () => set({ user: initialState }),

    dispatch: (action) => {
        switch (action.type) {
            case "setUser":
                set((state) => ({
                    user: { ...state.user, ...action.payload },
                }));
                return;

            case "logout":
                set({ user: initialState });
                return;

            default: {
                const _exhaustiveCheck: never = action;
                return _exhaustiveCheck;
            }
        }
    },
}));

if (typeof window !== "undefined") {
    try {
        const storedUser = localStorage.getItem("user");

        if (storedUser) {
            const parsed: unknown = JSON.parse(storedUser);

            if (typeof parsed === "object" && parsed !== null) {
                useUserStore.setState({ user: parsed as User });
            }
        }
    } catch (error) {
        console.error("Failed to restore user from localStorage", error);
    }

    useUserStore.subscribe((state) => {
        try {
            if (state.user?.token) {
                localStorage.setItem("user", JSON.stringify(state.user));
            } else {
                localStorage.removeItem("user");
            }
        } catch {
            // Erros de storage (ex: quota excedida)
        }
    });
}
