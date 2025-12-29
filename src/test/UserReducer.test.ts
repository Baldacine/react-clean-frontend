import type { User, UserAction } from "@/@types/user";
import { initialState, UserReducer } from "@/reducers/UserReducer";
import { describe, it, expect } from "vitest";

describe("UserReducer", () => {
    it("should return the initial state by default", () => {
        const result = UserReducer(initialState, { type: "unknown" } as unknown as UserAction);
        expect(result).toEqual(initialState);
    });

    it("should handle setUser action", () => {
        const payload: Partial<User> = { name: "Wanderson", token: "123" };
        const action: UserAction = { type: "setUser", payload };

        const result = UserReducer(initialState, action);

        expect(result.name).toBe("Wanderson");
        expect(result.token).toBe("123");
    });

    it("should merge new data with existing state", () => {
        const currentState: User = { name: "Wanderson", token: "123" };
        const action: UserAction = { type: "setUser", payload: { name: "Baldacine" } };

        const result = UserReducer(currentState, action);

        expect(result.name).toBe("Baldacine");
        expect(result.token).toBe("123");
    });

    it("should handle logout action", () => {
        const currentState: User = { name: "Wanderson", token: "123" };
        const action: UserAction = { type: "logout" };

        const result = UserReducer(currentState, action);

        expect(result).toEqual(initialState);
    });
});