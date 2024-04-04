import { ComponentProps } from 'react';

import { twMerge } from 'tailwind-merge';

type TableCellProps = ComponentProps<'td'>;

export function TableCell({ children, className, ...props }: TableCellProps) {
  return (
    <td
      {...props}
      className={twMerge('py-3 px-4 text-sm text-zinc-300', className)}
    >
      {children}
    </td>
  );
}
