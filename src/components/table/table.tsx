import { ComponentProps } from 'react';

type TableProps = ComponentProps<'table'>;

export function Table({ children, ...props }: TableProps) {
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
