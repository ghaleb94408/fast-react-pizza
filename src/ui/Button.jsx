import { Link } from 'react-router-dom';
const className =
  'tracking-widetext-stone-800 inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4';
export default function Button({ children, disabled, to }) {
  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}
