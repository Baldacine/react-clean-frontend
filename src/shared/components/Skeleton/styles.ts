import styled, { keyframes } from 'styled-components';
import type { SkeletonVariant } from './types';

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
`;

const variantStyles: Record<SkeletonVariant, string> = {
    rectangle: 'border-radius: 8px;',
    circle: 'border-radius: 50%;',
    text: 'border-radius: 4px; height: 14px; margin-bottom: 8px;',
};

interface StyledSkeletonProps {
    $variant: SkeletonVariant;
    $width?: string | number;
    $height?: string | number;
    $borderRadius?: string;
}

export const StyledSkeleton = styled.div<StyledSkeletonProps>`
  display: block;
  background-color:  ${({ theme }) => theme.colors.gray100}
  
  width: ${({ $width }) => (typeof $width === 'number' ? `${$width}px` : $width || '100%')};
  height: ${({ $height, $variant }) => {
        if ($height) return typeof $height === 'number' ? `${$height}px` : $height;
        return $variant === 'text' ? '14px' : '100px';
    }};

  ${({ $variant }) => variantStyles[$variant]};

  ${({ $borderRadius }) => $borderRadius && `border-radius: ${$borderRadius};`}

  animation: ${pulse} 1.5s ease-in-out infinite;
  pointer-events: none;
`;
