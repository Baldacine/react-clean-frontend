import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing.lg || '24px'};
  background-color: ${({ theme }) => theme.colors.background || '#fff'};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray300}33;
  
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background-color 0.2s ease;

  h1 {
    font-size: ${({ theme }) => theme.typography.fontSizes.lg};
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;