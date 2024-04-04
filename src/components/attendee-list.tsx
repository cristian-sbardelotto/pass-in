import { IconButton } from './icon-button';
import { Table } from './table/table';
import { TableHeader } from './table/table-header';
import { TableCell } from './table/table-cell';

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  MoreHorizontalIcon,
  SearchIcon,
} from 'lucide-react';

export function AttendeeList() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>Participantes</h1>

        <div className='px-3 py-1.5 w-72 border border-white/10 bg-transparent rounded-lg flex items-center gap-3'>
          <SearchIcon
            size={16}
            className='text-emerald-300'
          />

          <input
            className='bg-transparent flex-1 outline-none h-auto text-sm border-0 p-0'
            placeholder='Buscar participante...'
          />
        </div>
      </div>

      <Table>
        <thead>
          <tr className='border-b border-white/10'>
            <TableHeader style={{ width: 48 }}>
              <input
                type='checkbox'
                className='size-4 bg-black/20 rounded border border-white/10'
              />
            </TableHeader>

            <TableHeader>Código</TableHeader>

            <TableHeader>Participantes</TableHeader>

            <TableHeader>Data de inscrição</TableHeader>

            <TableHeader>Data do check-in</TableHeader>

            <TableHeader style={{ width: 64 }}></TableHeader>
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: 10 }).map((_, index) => (
            <tr
              key={index}
              className='border-b border-white/10 hover:bg-white/5'
            >
              <TableCell>
                <input
                  type='checkbox'
                  className='size-4 bg-black/20 rounded border border-white/10'
                />
              </TableCell>

              <TableCell>312312</TableCell>

              <TableCell>
                <div className='flex flex-col gap-1'>
                  <span className='font-semibold text-white'>
                    Cristian Sbardelotto
                  </span>
                  <span>cristian@gmail.com</span>
                </div>
              </TableCell>

              <TableCell>7 dias atrás</TableCell>
              <TableCell>3 dias atrás</TableCell>

              <TableCell>
                <IconButton transparent>
                  <MoreHorizontalIcon size={16} />
                </IconButton>
              </TableCell>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <TableCell colSpan={3}>Mostrando 10 de 228 itens</TableCell>

          <TableCell
            className='text-right'
            colSpan={3}
          >
            <div className='inline-flex items-center gap-8'>
              <span>Página 1 de 23</span>

              <div className='flex gap-1.5'>
                <IconButton>
                  <ChevronsLeftIcon size={16} />
                </IconButton>

                <IconButton>
                  <ChevronLeftIcon size={16} />
                </IconButton>

                <IconButton>
                  <ChevronRightIcon size={16} />
                </IconButton>

                <IconButton>
                  <ChevronsRightIcon size={16} />
                </IconButton>
              </div>
            </div>
          </TableCell>
        </tfoot>
      </Table>
    </div>
  );
}
