export type AvatarShape = 'circle' | 'square';
export type AvatarSize = 'small' | 'medium' | 'large' | number;

export interface AvatarProps {
    src: string;
    alt: string;
    shape?: AvatarShape;
    size?: AvatarSize;
    borderColor?: string;
}