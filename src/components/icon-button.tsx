import { ComponentProps } from 'react';

type IconButtonProps = ComponentProps<'button'> & {
  transparent?: boolean;
};

export function IconButton({
  children,
  transparent = false,
  ...rest
}: IconButtonProps) {
  return (
    <button
      {...rest}
      className={`${
        transparent ? 'bg-black/20' : 'bg-white/10'
      } border border-white/10 rounded-md p-1.5 hover:backdrop-brightness-200 disabled:opacity-50 disabled:pointer-events-none`}
    >
      {children}
    </button>
  );
}
