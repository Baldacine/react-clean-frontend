export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'circle';

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    isLoading?: boolean;
}
