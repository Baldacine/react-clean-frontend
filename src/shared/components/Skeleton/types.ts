export type SkeletonVariant = 'rectangle' | 'circle' | 'text';

export interface SkeletonProps {
    variant?: SkeletonVariant;
    width?: string | number;
    height?: string | number;
    borderRadius?: string;
}