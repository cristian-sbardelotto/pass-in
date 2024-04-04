import { ComponentProps } from 'react';

type TableHeaderProps = ComponentProps<'th'>;

export function TableHeader({ children, ...props }: TableHeaderProps) {
  return (
    <th
      {...props}
      className='py-3 px-4 text-sm font-semibold text-left'
    >
      {children}
    </th>
  );
}
