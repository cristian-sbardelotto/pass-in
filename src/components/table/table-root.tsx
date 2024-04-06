import { ComponentProps } from 'react';

type TableRootProps = ComponentProps<'table'>;

export function TableRoot({ children, ...props }: TableRootProps) {
  return (
    <div className='border border-white/10 rounded-lg'>
      <table
        {...props}
        className='w-full'
      >
        {children}
      </table>
    </div>
  );
}
