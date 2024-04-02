import { SearchIcon } from 'lucide-react';
// 1:08:07
export function AttendeeList() {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>Participantes</h1>

        <div className='px-3 py-1.5 w-72 border border-white/10 bg-transparent rounded-lg text-sm flex items-center gap-3'>
          <SearchIcon
            size={16}
            className='text-emerald-300'
          />

          <input
            className='bg-transparent flex-1 outline-none'
            placeholder='Buscar participante...'
          />
        </div>
      </div>

      <div className='border border-white/10 rounded-lg'>
        <table className='w-full '>
          <thead>
            <tr className='border-b border-white/10'>
              <th className='py-3 px-2.5 text-sm font-semibold text-left'>
                <input type='checkbox' />
              </th>

              <th className='py-3 px-2.5 text-sm font-semibold text-left'>
                Código
              </th>

              <th className='py-3 px-2.5 text-sm font-semibold text-left'>
                Participantes
              </th>

              <th className='py-3 px-2.5 text-sm font-semibold text-left'>
                Data de inscrição
              </th>

              <th className='py-3 px-2.5 text-sm font-semibold text-left'>
                Data do check-in
              </th>

              <th className='py-3 px-2.5 text-sm font-semibold text-left'></th>
            </tr>
          </thead>

          <tbody>
            <tr className='border-b border-white/10'>
              <td className='py-3 px-2.5 text-sm text-zinc-300'>
                <input type='checkbox' />
              </td>

              <td className='py-3 px-2.5 text-sm text-zinc-300'>312312</td>

              <td className='py-3 px-2.5 text-sm text-zinc-300'>
                <div className='flex flex-col gap-1'>
                  <span className='font-semibold text-white'>
                    Cristian Sbardelotto
                  </span>
                  <span>cristian@gmail.com</span>
                </div>
              </td>

              <td className='py-3 px-2.5 text-sm text-zinc-300'>
                7 dias atrás
              </td>
              <td className='py-3 px-2.5 text-sm text-zinc-300'>
                3 dias atrás
              </td>

              <td className='py-3 px-2.5 text-sm text-zinc-300'></td>
            </tr>
          </tbody>

          <tfoot>
            <td colSpan={3}>Mostrando 10 de 228 itens</td>
            <td colSpan={3}>página 1 de 23</td>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
