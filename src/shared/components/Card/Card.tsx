import { Skeleton } from "../Skeleton/Skeleton";
import {
  StyledCard,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
} from "./styles";
import type { CardProps } from "./types";

export function Card({
  children,
  variant = "primary",
  isLoading = false,
  disabled,
  title,
  description,
  image,
  footer,
  width,
  minWidth,
  height,
  icon,
  ...rest
}: CardProps) {
  const isDisabled = disabled || isLoading;

  return (
    <StyledCard
      $variant={variant}
      $disabled={isDisabled}
      $width={width}
      $minWidth={minWidth}
      $height={height}
      {...rest}
    >
      {isLoading ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {image && (
            <Skeleton variant="rectangle" width="100%" height="160px" />
          )}
          <Skeleton variant="text" width="60%" height="24px" />
          <Skeleton variant="text" width="100%" height="40px" />
        </div>
      ) : (
        <>
          {image && <CardImage src={image} alt={title} />}
          <CardContent>
            {icon && <div className="card-icon">{icon}</div>}

            {title ? (
              <CardTitle>{title}</CardTitle>
            ) : (
              children && <CardTitle>{children}</CardTitle>
            )}
            {description && <CardDescription>{description}</CardDescription>}
            {title && children}
          </CardContent>
          {footer && <CardFooter>{footer}</CardFooter>}
        </>
      )}
    </StyledCard>
  );
}
