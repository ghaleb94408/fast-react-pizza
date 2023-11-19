import { Link } from 'react-router-dom';

const base =
  'tracking-wide text-sm text-stone-800 inline-block rounded-full bg-yellow-400 font-semibold uppercase transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ';
export default function Button({ children, disabled, to, type, onClick }) {
  const styles = {
    primary: base + 'px-4 py-3 sm:px-6 sm:py-4',
    small: base + 'px-4 py-2 md:px-5 md:py-2.5 text-xs',
    round: base + 'px-2.5 py-1 md:px-3.5 md:py-2 text-sm',
    secondary:
      'tracking-wide text-sm text-stone-400 inline-block px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-full border-2 border-stone-300 font-semibold uppercase transition-colors duration-300 hover:bg-stone-400 focus:outline-none focus:bg-stone-300 hover:text-stone-800 focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed ',
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
