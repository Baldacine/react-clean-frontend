import styled, { keyframes, type DefaultTheme } from 'styled-components';
import type { CardVariant, StyledCardProps } from './types';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const cardVariants: Record<CardVariant, (theme: DefaultTheme) => string> = {
  primary: (theme) => `
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    &:hover { 
      background: ${theme.colors.primaryDark};
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
    }
  `,
  secondary: (theme) => `
    background: ${theme.colors.gray100};
    color: ${theme.colors.text};
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.05);
    &:hover { background: ${theme.colors.gray300}; }
  `,
  outline: (theme) => `
    background: ${theme.colors.background};
    color: ${theme.colors.text};
    border: 1px solid ${theme.colors.gray300};
    &:hover {
      background: ${theme.colors.gray100};
      border-color: ${theme.colors.primary};
    }
  `,
};


export const CardImage = styled.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  display: block;

  filter: brightness(0.9);
  transition: transform 0.4s ease;
`;


export const StyledCard = styled.div<StyledCardProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  
  flex-shrink: 0; 
  width: ${({ $width }) => (typeof $width === 'number' ? `${$width}px` : $width || '280px')};
  min-width: ${({ $minWidth }) => (typeof $minWidth === 'number' ? `${$minWidth}px` : $minWidth || 'auto')};
  height: ${({ $height }) => (typeof $height === 'number' ? `${$height}px` : $height || 'auto')};
  min-height: 120px; 
  
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  
  position: relative;
  overflow: hidden;
  border: none;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${fadeIn} 0.4s ease-in-out;

  ${({ $variant, theme, $disabled }) => !$disabled && cardVariants[$variant](theme)}

  ${({ $disabled, theme }) => $disabled && `
    background: ${theme.colors.gray100};
    color: ${theme.colors.gray500};
    opacity: 0.6;
    box-shadow: none;
    pointer-events: none;
    filter: grayscale(1);
  `}

 &:active {
    ${({ $disabled }) => !$disabled && 'opacity: 0.8;'}
  }

  &:hover ${CardImage} {
    transform: scale(1.05);
    filter: brightness(1);
  }

   &:hover .card-icon {
    transform: translateY(-5px); 
  }

`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.sm};

  .card-icon {
    color: inherit; 
    display: flex;
    align-items: center;
    transition: transform 0.3s ease;
    margin-bottom: 4px;
  }
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: clamp(1rem, 2.5vw, 1.2rem); 
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  color: inherit;
  line-height: ${({ theme }) => theme.typography.lineHeights.md};
`;

export const CardDescription = styled.p`
  margin: 0;
  font-size: clamp(1rem, 2.5vw, 1.2rem); 
  font-weight: ${({ theme }) => theme.typography.fontWeights.regular || 400};
  color: inherit;
  opacity: 0.85;
  line-height: ${({ theme }) => theme.typography.lineHeights.sm || '1.4'};
  
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CardFooter = styled.div`
  margin-top: auto;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
`;
