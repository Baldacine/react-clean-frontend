import styled from "styled-components";

export const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md} 0;
`;

export const TimelineStep = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  position: relative;

  &:not(:last-child)::after {
    content: "";
    position: absolute;
    left: 10px; 
    top: 20px;
    bottom: -${({ theme }) => theme.spacing.lg};
    width: 1px;
    background-color: ${({ theme }) => theme.colors.gray300};
  }
`;

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 4px solid ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary};
  flex-shrink: 0;
  z-index: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  span {
    font-size: clamp(1rem, 2.5vw, 1.2rem); 
    font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
    color: ${({ theme }) => theme.colors.primary};
  }

  h3 {
    font-size: clamp(1rem, 2.5vw, 1.2rem); 
    font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
  }

  p {
    font-size: clamp(1rem, 2.5vw, 1.2rem); 
    color: ${({ theme }) => theme.colors.gray700};
    margin: 0;
  }
`;
