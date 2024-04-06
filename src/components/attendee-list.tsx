import { useEffect, useState } from 'react';

import { IconButton } from './icon-button';
import { Table } from './table';
import { useAttendeeList } from '../hooks/use-attendee-list';

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

dayjs.locale('pt-br');
dayjs.extend(relativeTime);

type Attendee = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  checkedInAt: string | null;
};

export function AttendeeList() {
  const [attendees, setAttendees] = useState<Attendee[]>([]);
  const [totalAttendees, setTotalAttendees] = useState(0);
  const totalPages = Math.ceil(totalAttendees / 10);
  const {
    search,
    page,
    goToFirstPage,
    goToLastPage,
    goToNextPage,
    goToPreviousPage,
    handleSearch,
    setSearch,
  } = useAttendeeList({ totalPages });

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
            placeholder='Buscar nome...'
            onChange={event => handleSearch(event.target.value)}
            value={search}
          />
        </div>
      </div>

      <Table.Root>
        <thead>
          <Table.Row>
            <Table.Header style={{ width: 48 }}>
              <input
                type='checkbox'
                className='size-4 bg-black/20 rounded border border-white/10 cursor-pointer'
              />
            </Table.Header>

            <Table.Header>Código</Table.Header>

            <Table.Header>Participantes</Table.Header>

            <Table.Header>Data de inscrição</Table.Header>

            <Table.Header>Data do check-in</Table.Header>

            <Table.Header style={{ width: 64 }}></Table.Header>
          </Table.Row>
        </thead>

        <tbody>
          {attendees.map(attendee => (
            <Table.Row
              key={attendee.id}
              className='hover:bg-white/5'
            >
              <Table.Cell>
                <input
                  type='checkbox'
                  className='size-4 bg-black/20 rounded border border-white/10 cursor-pointer'
                />
              </Table.Cell>

              <Table.Cell>{attendee.id}</Table.Cell>

              <Table.Cell>
                <div className='flex flex-col gap-1'>
                  <span className='font-semibold text-white'>
                    {attendee.name}
                  </span>
                  <span>{attendee.email}</span>
                </div>
              </Table.Cell>

              <Table.Cell>{dayjs().to(attendee.createdAt)}</Table.Cell>
              <Table.Cell>
                {attendee.checkedInAt ? (
                  dayjs().to(attendee.checkedInAt)
                ) : (
                  <span className='text-zinc-400'>Não fez check-in</span>
                )}
              </Table.Cell>

              <Table.Cell>
                <IconButton transparent>
                  <MoreHorizontalIcon size={16} />
                </IconButton>
              </Table.Cell>
            </Table.Row>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <Table.Cell colSpan={3}>
              Mostrando {attendees.length} de {totalAttendees} itens
            </Table.Cell>

            <Table.Cell
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
            </Table.Cell>
          </tr>
        </tfoot>
      </Table.Root>
    </div>
  );
}
