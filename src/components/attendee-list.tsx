import { IconButton } from './icon-button';
import { Table } from './table/table';
import { TableHeader } from './table/table-header';
import { TableCell } from './table/table-cell';
import { TableRow } from './table/table-row';

import { attendees } from '../data/attendees';

import dayjs from 'dayjs';
import 'dayjs/locale/pt-br';
import relativeTime from 'dayjs/plugin/relativeTime';

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  MoreHorizontalIcon,
  SearchIcon,
} from 'lucide-react';
import { useTablePagination } from '../hooks/useTablePagination';

dayjs.locale('pt-br');
dayjs.extend(relativeTime);

export function AttendeeList() {
  const {
    page,
    totalPages,
    goToFirstPage,
    goToLastPage,
    goToNextPage,
    goToPreviousPage,
  } = useTablePagination(1);

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
          <TableRow>
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
          </TableRow>
        </thead>

        <tbody>
          {attendees.slice((page - 1) * 10, page * 10).map(attendee => (
            <TableRow
              key={attendee.id}
              className='hover:bg-white/5'
            >
              <TableCell>
                <input
                  type='checkbox'
                  className='size-4 bg-black/20 rounded border border-white/10'
                />
              </TableCell>

              <TableCell>{attendee.id}</TableCell>

              <TableCell>
                <div className='flex flex-col gap-1'>
                  <span className='font-semibold text-white'>
                    {attendee.name}
                  </span>
                  <span>{attendee.email}</span>
                </div>
              </TableCell>

              <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
              <TableCell>{dayjs().to(attendee.checkedInAt)}</TableCell>

              <TableCell>
                <IconButton transparent>
                  <MoreHorizontalIcon size={16} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </tbody>

        <tfoot>
          <TableCell colSpan={3}>
            Mostrando 10 de {attendees.length} itens
          </TableCell>

          <TableCell
            className='text-right'
            colSpan={3}
          >
            <div className='inline-flex items-center gap-8'>
              <span>
                Página {page} de {totalPages}
              </span>

              <div className='flex gap-1.5'>
                <IconButton
                  onClick={goToFirstPage}
                  disabled={page <= 1}
                >
                  <ChevronsLeftIcon size={16} />
                </IconButton>

                <IconButton
                  disabled={page <= 1}
                  onClick={goToPreviousPage}
                >
                  <ChevronLeftIcon size={16} />
                </IconButton>

                <IconButton
                  disabled={page >= totalPages}
                  onClick={goToNextPage}
                >
                  <ChevronRightIcon size={16} />
                </IconButton>

                <IconButton
                  onClick={goToLastPage}
                  disabled={page >= totalPages}
                >
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
