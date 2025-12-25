/* eslint-disable react-refresh/only-export-components */
import React, { type ReactElement } from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "../theme";

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

// Re-exporta tudo do testing-library para você não precisar importar de dois lugares
export * from "@testing-library/react";

export { customRender as render };
