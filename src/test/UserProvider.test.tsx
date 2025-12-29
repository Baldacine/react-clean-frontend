import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";
import { UserProvider } from "@/contexts/UserProvider";

const TestComponent = () => {
  const { state, dispatch } = useContext(UserContext);
  return (
    <div>
      <span data-testid="user-name">{state.name || "no-name"}</span>
      <button
        onClick={() =>
          dispatch({
            type: "setUser",
            payload: { name: "React Test", token: "tk-999" },
          })
        }
      >
        Login
      </button>
      <button onClick={() => dispatch({ type: "logout" })}>Logout</button>
    </div>
  );
};

describe("UserProvider & Context", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it("should provide initial state", () => {
    render(
      <UserProvider>
        <TestComponent />
      </UserProvider>
    );

    expect(screen.getByTestId("user-name").textContent).toBe("no-name");
  });

  it("should update state and localStorage on login", () => {
    render(
      <UserProvider>
        <TestComponent />
      </UserProvider>
    );

    const loginBtn = screen.getByText("Login");
    fireEvent.click(loginBtn);

    expect(screen.getByTestId("user-name").textContent).toBe("React Test");

    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    expect(storedUser.token).toBe("tk-999");
  });

  it("should remove from localStorage on logout", () => {
    localStorage.setItem(
      "user",
      JSON.stringify({ name: "Old", token: "old-tk" })
    );

    render(
      <UserProvider>
        <TestComponent />
      </UserProvider>
    );

    const logoutBtn = screen.getByText("Logout");
    fireEvent.click(logoutBtn);

    expect(screen.getByTestId("user-name").textContent).toBe("no-name");
    expect(localStorage.getItem("user")).toBeNull();
  });

  it("should recover state from localStorage on init", () => {
    const mockUser = { name: "Persisted User", token: "secret-token" };
    localStorage.setItem("user", JSON.stringify(mockUser));

    render(
      <UserProvider>
        <TestComponent />
      </UserProvider>
    );

    expect(screen.getByTestId("user-name").textContent).toBe("Persisted User");
  });
});
