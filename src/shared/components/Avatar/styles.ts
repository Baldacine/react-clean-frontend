import styled from 'styled-components';
import type { AvatarShape, AvatarSize } from './types';

const getBoxSize = (size: AvatarSize) => {
    if (typeof size === 'number') return `${size}px`;
    const sizes = {
        small: '40px',
        medium: '80px',
        large: '160px',
    };
    return sizes[size];
};

export const AvatarContainer = styled.div<{ $shape: AvatarShape; $size: AvatarSize; $borderColor?: string }>`
  display: inline-block;
  position: relative;
  flex-shrink: 0;
  
  width: ${({ $size }) => getBoxSize($size)};
  height: ${({ $size }) => getBoxSize($size)};
  
  border-radius: ${({ $shape, theme }) =>
        $shape === 'circle' ? '50%' : theme.borderRadius.md};
  
  border: ${({ $borderColor }) => $borderColor ? `3px solid ${$borderColor}` : 'none'};
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.gray100};
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;