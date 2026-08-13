import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownTrigger = styled.button`
  align-items: center;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  display: inline-flex;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeights.semibold};
  gap: ${({ theme }) => theme.spacing.sm};
  height: 32px;
  padding: 0 ${({ theme }) => theme.spacing.sm};

  &:hover,
  &:focus-visible {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;

export const MenuList = styled.ul`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 120px;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.gray300}33;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 4px;
  margin: 0;
  list-style: none;
  z-index: 1001;
`;

export const MenuItem = styled.button`
  background: transparent;
  border: 0;
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  text-align: left;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: background-color 0.2s;

  &:hover,
  &:focus-visible {
    background-color: ${({ theme }) => theme.colors.gray100};
    color: ${({ theme }) => theme.colors.primary};
    outline: none;
  }

  svg {
    color: inherit;
  }
`;
