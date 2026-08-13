import type { ReactNode } from "react";

export interface DropdownItem {
    key: string;
    label: string;
    icon?: ReactNode;
    onClick: () => void;
}

export interface DropdownProps {
    trigger: ReactNode;
    label: string;
    items: DropdownItem[];
}
