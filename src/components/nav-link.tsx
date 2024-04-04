import { ComponentProps } from 'react';

type NavLinkProps = ComponentProps<'a'>;

export function NavLink({ children, href, ...rest }: NavLinkProps) {
  return (
    <a
      href={href}
      className='font-medium text-sm'
      {...rest}
    >
      {children}
    </a>
  );
}
