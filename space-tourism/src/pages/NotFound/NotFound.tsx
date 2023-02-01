// export interface NotFoundProps {}
import { useMediaQueries } from '@react-hook/media-query';

import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';

export const NotFound = () => {
  const { matchesAll } = useMediaQueries({
    screen: 'screen',
    width: '(min-width: 1440px)',
  });
  return (
    // page for 404 route using tailwindcss
    <main className="flex min-h-full w-full flex-col items-center justify-center gap-24 pt-6  text-secondary">
      <section className="flex flex-col items-center justify-center gap-20">
        <h1 className="font-serif text-[80px] uppercase text-tertiary-100 md:text-[150px]">
          404
        </h1>
        <h5 className="text-3xl">Page not found</h5>
        <p className="px-6 text-center text-2xl">
          Hmm, we can’t seem to find the page you’re looking for. Try again, or
          go back to our homepage.
        </p>
      </section>
      <section>
        {/* button with link back to homepage */}
        <Link to="/" className="text-tertiary-100">
          <Button size={`${matchesAll ? 'medium' : 'small'}`} text="home" />
        </Link>
      </section>
    </main>
  );
};
