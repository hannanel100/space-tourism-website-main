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
    <main className="text-secondary flex flex-col lg:flex-row justify-between px-6 pb-5 md:px-40 md:pb-32 pt-6 lg:items-end items-center w-full gap-20 ">
      <section className="flex flex-col justify-center lg:items-start items-center lg:w-[450px]">
        <SecondaryTitle text="So, You want to travel to" color="secondary" />
        <h1 className="font-serif text-tertiary-100 md:text-[150px] text-[80px] uppercase">
          Space
        </h1>
        <p className="text-center px-6">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truz`ly out of this world
          experience!
        </p>
      </section>
      <Button size={`${matchesAll ? 'medium' : 'small'}`} text="explore" />
    </main>
  );
};
