import { useEffect, useState } from 'react';
import { LargeToggle } from '../../components/LargeToggle';
import { PageTitle } from '../../components/PageTitle';
import { PageWrapper } from '../../components/PageWrapper';
import { useGetData } from '../../hooks/useGetData';

// export interface TechnologyProps {}

export const Technology = () => {
  const { data } = useGetData();
  const [isActive, setIsActive] = useState([true, false, false]);
  const [currentTechnology, setCurrentTechnology] = useState(0);
  console.log('🚀 ~ file: Technology.tsx:8 ~ Technology ~ data', data);
  const technology = data?.technology;
  useEffect(() => {
    const index = isActive.findIndex((element) => element === true);
    setCurrentTechnology(index);
  }, [isActive]);
  //   get view port width

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, [width]);
  const changeTechnologyHandler = (event: React.MouseEvent) => {
    const index = event.currentTarget.id;
    const newIsActive = [false, false, false];
    newIsActive[Number(index)] = true;
    setIsActive(newIsActive);
  };
  return (
    <PageWrapper>
      <PageTitle text="space launch 101" number="03" className="lg:px-40" />
      <main className="flex h-full  w-full flex-col justify-between gap-8 md:justify-start md:gap-12   lg:flex-row-reverse lg:gap-16 lg:pl-40">
        <section className="border-['rgba(56, 59, 75, 1)'] grid place-content-center border-b border-solid lg:w-full">
          <img
            src={
              technology && width < 1024
                ? technology[currentTechnology]?.images.landscape
                : technology
                ? technology[currentTechnology]?.images.portrait
                : undefined
            }
            className={`w-screen md:w-fit lg:w-[568px]`}
          />
        </section>
        <section className="flex flex-col items-center gap-4 px-6 pb-20 md:gap-11 md:px-40 lg:flex-row lg:justify-center lg:gap-20 lg:px-0">
          <LargeToggle
            isActive={isActive}
            changeTechnologyHandler={changeTechnologyHandler}
          />

          <div className="flex flex-col gap-4 lg:items-start">
            <h3 className="text-center font-sans text-sm uppercase text-secondary md:text-base">
              The Terminology...
            </h3>
            <h2 className="text-center font-serif text-2xl uppercase text-tertiary-100 md:text-[40px]  lg:text-start lg:text-[56px]">
              {technology ? technology[currentTechnology]?.name : undefined}
            </h2>
            <p className="text-center font-sans2 text-secondary lg:text-start ">
              {technology
                ? technology[currentTechnology]?.description
                : undefined}
            </p>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
};
