import styled from 'styled-components';


export const FooterContainer = styled.footer`
  width: 100%;
  height: 60px; 
  
  background-color: ${({ theme }) => theme.colors.gray100}; 
  border-top: 1px solid ${({ theme }) => theme.colors.gray100}; 
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  flex-shrink: 0; 
  
  transition: background-color 0.3s ease, border-color 0.3s ease;

  @media (max-width: 480px) {
    height: auto;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    text-align: center;
  }
`;

export const Copyright = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray500};
  font-weight: ${({ theme }) => theme.typography.fontWeights.medium};
`;