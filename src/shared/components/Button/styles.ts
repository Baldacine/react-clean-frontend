import styled, { type DefaultTheme } from 'styled-components';
import type { ButtonVariant } from './types';

const buttonVariants: Record<ButtonVariant, (theme: DefaultTheme) => string> = {
  primary: (theme) => `
        background: ${theme.colors.primary};
        color: ${theme.colors.white};
        &:hover:not(:disabled) { background: ${theme.colors.primaryDark}; }
    `,
  secondary: (theme) => `
        background: ${theme.colors.secondary};
        color: ${theme.colors.white};
        &:hover:not(:disabled) { background: ${theme.colors.secondaryDark}; }
    `,
  outline: (theme) => `
        background: transparent;
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.primary};
        &:hover:not(:disabled) {
            background: ${theme.colors.primary};
            color: ${theme.colors.white};
        }
    `,
  circle: (theme) => `
        background: transparent;
        color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.gray300};
        border-radius: 50%;
        width: 48px; /* Mesma altura padrão para ser um círculo perfeito */
        padding: 0;
        &:hover:not(:disabled) {
            background: ${theme.colors.gray100};
            border-color: ${theme.colors.primary};
        }
    `,
};

export const StyledButton = styled.button<{ $variant: ButtonVariant }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.sm};

    height: 48px;
    padding: 0 ${({ theme }) => theme.spacing.md};

    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: clamp(1rem, 2.5vw, 1.2rem); 
    font-weight: ${({ theme }) => theme.typography.fontWeights.medium};

    border-radius: ${({ theme }) => theme.borderRadius.md};
    border: none;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.2s ease;

    /* Aplicação da variante com transient prop $variant */
    ${({ $variant, theme }) => buttonVariants[$variant](theme)};

    &:focus-visible {
        outline: none;
        box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}33;
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    &:active:not(:disabled) {
        transform: scale(0.95);
    }
`;
