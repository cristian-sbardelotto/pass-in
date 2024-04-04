import { IconButton } from './icon-button';
import { Table } from './table/table';

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  MoreHorizontalIcon,
  SearchIcon,
} from 'lucide-react';
import { TableHeader } from './table/table-header';

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
              <td className='py-3 px-4 text-sm text-zinc-300'>
                <input
                  type='checkbox'
                  className='size-4 bg-black/20 rounded border border-white/10'
                />
              </td>

              <td className='py-3 px-4 text-sm text-zinc-300'>312312</td>

              <td className='py-3 px-4 text-sm text-zinc-300'>
                <div className='flex flex-col gap-1'>
                  <span className='font-semibold text-white'>
                    Cristian Sbardelotto
                  </span>
                  <span>cristian@gmail.com</span>
                </div>
              </td>

              <td className='py-3 px-4 text-sm text-zinc-300'>7 dias atrás</td>
              <td className='py-3 px-4 text-sm text-zinc-300'>3 dias atrás</td>

              <td className='py-3 px-4 text-sm text-zinc-300'>
                <IconButton transparent>
                  <MoreHorizontalIcon size={16} />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <td
            className='py-3 px-4 text-sm text-zinc-300'
            colSpan={3}
          >
            Mostrando 10 de 228 itens
          </td>
          <td
            className='py-3 px-4 text-sm text-zinc-300 text-right'
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
          </td>
        </tfoot>
      </Table>
    </div>
  );
}
