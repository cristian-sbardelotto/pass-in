import { ComponentProps } from 'react';

type NavLinkProps = ComponentProps<'a'>;

export function NavLink({ children, ...rest }: NavLinkProps) {
  return (
    <a
      className='font-medium text-sm'
      {...rest}
    >
      {children}
    </a>
  );
}
