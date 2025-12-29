import styled from "styled-components";

export const WeatherWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: 6px 12px;
  background: ${({ theme }) => theme.colors.background}55;
  border: 1px solid ${({ theme }) => theme.colors.gray300}22;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  backdrop-filter: blur(8px);
  transition: all 0.3s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.background}88;
  }

  .info {
    display: flex;
    flex-direction: column;
    
    span {
      line-height: 1;
    }

    .temp {
      font-size: 0.9rem;
      font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
      color: ${({ theme }) => theme.colors.primary};
    }

    .city {
      font-size: 0.7rem;
      color: ${({ theme }) => theme.colors.gray300};
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
  }

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    .city {
      display: none;
    }
  }
`;