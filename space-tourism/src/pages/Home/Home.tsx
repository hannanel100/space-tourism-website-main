// export interface HomeProps {}
import { useMediaQueries } from '@react-hook/media-query';
import { Button } from '../../components/Button';
import { SecondaryTitle } from '../../components/SecondaryTitle';
import { useGetData } from '../../hooks/useGetData';
export const Home = () => {
  const { data } = useGetData();
  console.log('🚀 ~ file: Home.tsx:8 ~ Home ~ data', data);
  const { matchesAll } = useMediaQueries({
    screen: 'screen',
    width: '(min-width: 1440px)',
  });
  return (
    <main className="flex w-full flex-col items-center justify-between gap-20 px-6 pb-5 pt-6 text-secondary md:px-40 md:pb-32 lg:flex-row lg:items-end ">
      <section className="flex flex-col items-center justify-center lg:items-start">
        <SecondaryTitle text="So, You want to travel to" color="secondary" />
        <div className="lg:max-w-[470px]">
          <h1 className="flex-0 text-center font-serif text-[80px] uppercase text-tertiary-100 md:text-[150px] lg:text-start">
            Space
          </h1>
          <p className="text-center lg:text-start">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truz`ly out of
            this world experience!
          </p>
        </div>
      </section>
      <Button size={`${matchesAll ? 'medium' : 'small'}`} text="explore" />
    </main>
  );
};
