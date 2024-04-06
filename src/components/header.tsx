import { NavLink } from './nav-link';
import nlwIcon from '/nlw-unite-icon.svg';

export function Header() {
  return (
    <header className='flex items-center gap-5 py-2'>
      <a href='/'>
        <img
          src={nlwIcon}
          alt='Ícone do NLW Unite'
        />
      </a>

      <nav className='flex items-center gap-5'>
        <NavLink href='/'>Eventos</NavLink>
        <NavLink href='/'>Participantes</NavLink>
      </nav>
    </header>
  );
}
