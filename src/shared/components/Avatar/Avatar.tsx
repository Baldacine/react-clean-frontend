import { AvatarContainer } from "./styles";
import type { AvatarProps } from "./types";

export function Avatar({
  src,
  alt,
  shape = "circle",
  size = "medium",
  borderColor,
}: AvatarProps) {
  return (
    <AvatarContainer $shape={shape} $size={size} $borderColor={borderColor}>
      <img src={src} alt={alt} />
    </AvatarContainer>
  );
}
