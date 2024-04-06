import { IconButton } from './icon-button';
import { Table } from './table/table';
import { TableHeader } from './table/table-header';
import { TableCell } from './table/table-cell';
import { TableRow } from './table/table-row';

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
  XIcon,
} from 'lucide-react';
import { ChangeEvent, useEffect, useState } from 'react';

dayjs.locale('pt-br');
dayjs.extend(relativeTime);

type Attendees = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  checkedInAt: string | null;
};

export function AttendeeList() {
  const [attendees, setAttendees] = useState<Attendees[]>([]);
  const [totalAttendees, setTotalAttendees] = useState(0);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(() => {
    const url = new URL(location.toString());

    if (url.searchParams.has('page')) {
      return Number(url.searchParams.get('page'));
    }

    return 1;
  });

  const totalPages = Math.ceil(totalAttendees / 10);

  function goToNextPage() {
    if (page < totalPages) setCurrentPage(page + 1);
  }

  function goToPreviousPage() {
    if (page > 1) setCurrentPage(page - 1);
  }

  function goToFirstPage() {
    if (page > 1) setCurrentPage(1);
  }

  function goToLastPage() {
    if (page < totalPages) setCurrentPage(totalPages);
  }

  function setCurrentPage(page: number) {
    const url = new URL(window.location.toString());
    url.searchParams.set('page', String(page));
    history.pushState({}, '', url);

    setPage(page);
  }

  useEffect(() => {
    const url = new URL(
      'http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees'
    );
    url.searchParams.set('pageIndex', String(page - 1));
    search.length > 0 && url.searchParams.set('query', search);

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setTotalAttendees(data.total);
        setAttendees(data.attendees);
      });
  }, [page, search]);

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
    // setPage(1);
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>Participantes</h1>

        <div className='px-3 py-1.5 w-72 border border-white/10 bg-transparent rounded-lg flex items-center gap-3'>
          {search.length > 0 ? (
            <XIcon
              size={16}
              className='text-emerald-300 cursor-pointer'
              onClick={() => setSearch('')}
            />
          ) : (
            <SearchIcon
              size={16}
              className='text-emerald-300'
            />
          )}

          <input
            className='bg-transparent flex-1 outline-none h-auto text-sm border-0 p-0 focus:ring-0'
            placeholder='Buscar participante...'
            onChange={event => handleSearch(event)}
            value={search}
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
          {attendees.map(attendee => (
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
              <TableCell>
                {attendee.checkedInAt ? (
                  dayjs().to(attendee.checkedInAt)
                ) : (
                  <span className='text-zinc-400'>Não fez check-in</span>
                )}
              </TableCell>

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
            Mostrando {attendees.length} de {totalAttendees} itens
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
