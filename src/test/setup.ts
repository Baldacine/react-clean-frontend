// src/test/setup.ts
import "@testing-library/jest-dom";
import { vi } from "vitest";
import type { ReactNode } from "react";

interface TransProps {
    i18nKey?: string;
    children?: ReactNode;
}

vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key: string, options?: { returnObjects?: boolean }) => {
            if (options?.returnObjects) {
                return [];
            }
            return key;
        },
        i18n: {
            changeLanguage: () => Promise.resolve(),
            language: "pt",
        },
    }),

    Trans: ({ i18nKey, children }: TransProps) => {
        return children || i18nKey || null;
    },

    initReactI18next: {
        type: "3rdParty",
        init: () => { },
    },
}));