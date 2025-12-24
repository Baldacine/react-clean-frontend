import { StyledButton } from "./styles";
import type { ButtonProps } from "./types";

export function Button({
  children,
  variant = "primary",
  isLoading = false,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <StyledButton variant={variant} disabled={disabled || isLoading} {...rest}>
      {isLoading ? "Loading..." : children}
    </StyledButton>
  );
}
