import { useEffect, useState } from 'react';
import { LargeToggle } from '../../components/LargeToggle';
import { PageTitle } from '../../components/PageTitle';
import { SecondaryTitle } from '../../components/SecondaryTitle';
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
    <div className="flex-grow h-full flex flex-col gap-8 md:gap-14 lg:pl-40 pt-10">
      <PageTitle text="space launch 101" number="03" />
      <main className="flex flex-col  lg:flex-row-reverse h-full w-full gap-8 md:gap-12 lg:gap-16   justify-between md:justify-start">
        <section className="grid place-content-center lg:w-full border-b border-solid border-['rgba(56, 59, 75, 1)']">
          <img
            src={
              technology && width < 1024
                ? technology[currentTechnology]?.images.landscape
                : technology
                ? technology[currentTechnology]?.images.portrait
                : undefined
            }
            className={`w-full md:w-fit lg:w-[568px]`}
          />
        </section>
        <section className="px-6 md:px-40 lg:px-0 flex flex-col lg:flex-row lg:justify-center items-center gap-4 lg:gap-20 pb-20">
          <LargeToggle
            isActive={isActive}
            changeTechnologyHandler={changeTechnologyHandler}
          />

          <div className="flex flex-col gap-3 lg:items-start">
            <h3 className="font-sans text-secondary text-sm md:text-base text-center uppercase">
              The Terminology...
            </h3>
            <h2 className="text-tertiary-100 text-2xl text-center uppercase font-serif md:text-[40px]  lg:text-start lg:text-[56px]">
              {technology ? technology[currentTechnology]?.name : undefined}
            </h2>
            <p className="font-sans2 text-secondary text-center lg:text-start ">
              {technology
                ? technology[currentTechnology]?.description
                : undefined}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};
