import styled, { css } from 'styled-components';
import type { ButtonVariant } from './types';

interface StyledButtonProps {
    variant: ButtonVariant;
}

const buttonVariants: Record<ButtonVariant, ReturnType<typeof css>> = {
    primary: css`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.primaryDark};
    }

    &:active:not(:disabled) {
      opacity: 0.9;
    }
  `,

    secondary: css`
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.secondaryDark};
    }

    &:active:not(:disabled) {
      opacity: 0.9;
    }
  `,

    outline: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};

    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
    }

    &:active:not(:disabled) {
      opacity: 0.9;
    }
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};

  height: 48px;
  padding: 0 ${({ theme }) => theme.spacing.md};

  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};

  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: none;
  box-sizing: border-box;

  cursor: pointer;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    opacity 0.2s ease,
    box-shadow 0.2s ease;

  ${({ variant }) => buttonVariants[variant ?? 'primary']};

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}33;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
