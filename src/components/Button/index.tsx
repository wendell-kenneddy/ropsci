import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'contained' | 'outlined';
  additionalStyles?: string;
}

export function Button({
  children,
  variant,
  additionalStyles,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`
        ${variant === 'outlined' ? 'text-white' : 'text-dark-text'}
        ${variant !== 'outlined' && 'bg-white'}
        uppercase
        tracking-widest
        rounded-lg
        ${variant === 'outlined' ? 'border-header-outline' : 'border-white'}
        border-solid
        border-2
        px-6
        py-1
        ${
          variant === 'outlined'
            ? 'hover:backdrop-brightness-75'
            : 'hover:opacity-80'
        }
        transition-all
        duration-300
        ${additionalStyles}
      `}
      {...rest}
    >
      {children}
    </button>
  );
}
