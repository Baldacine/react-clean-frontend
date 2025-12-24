import type { HTMLAttributes, ReactNode } from 'react';

export type CardVariant = 'primary' | 'secondary' | 'outline';

export interface StyledCardProps {
    $variant: CardVariant;
    $disabled?: boolean;
    $width?: string | number;
    $minWidth?: string | number;
    $height?: string | number;
}

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: CardVariant;
    disabled?: boolean;
    isLoading?: boolean;
    title?: string;
    description?: string;
    image?: string;
    footer?: ReactNode;
    width?: string | number;
    minWidth?: string | number;
    height?: string | number;
    children?: ReactNode;
    icon?: ReactNode;
}
