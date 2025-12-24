import { StyledSkeleton } from "./styles";
import type { SkeletonProps } from "./types";

export function Skeleton({
  variant = "rectangle",
  width,
  height,
  borderRadius,
}: SkeletonProps) {
  return (
    <StyledSkeleton
      $variant={variant}
      $width={width}
      $height={height}
      $borderRadius={borderRadius}
    />
  );
}
