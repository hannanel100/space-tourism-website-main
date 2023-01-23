import React, { useEffect, useState } from 'react';
import { SecondaryTitle } from '../../components/SecondaryTitle';
import { SmallToggle } from '../../components/SmallToggle';
import { useGetData } from '../../hooks/useGetData';
// export interface CrewProps {}

export const Crew = () => {
  const { data } = useGetData();
  const [isActive, setIsActive] = useState([true, false, false, false]);
  const [currentCrewMember, setCurrentCrewMember] = useState(0);
  const crewMembers = data?.crew;
  useEffect(() => {
    const index = isActive.findIndex((element) => element === true);
    setCurrentCrewMember(index);
  }, [isActive]);

  const changeCrewMemberHandler = (event: React.MouseEvent) => {
    const index = event.currentTarget.id;
    const newIsActive = [false, false, false, false];
    newIsActive[Number(index)] = true;
    setIsActive(newIsActive);
  };
  return (
    <div className="h-full flex flex-col gap-8 md:gap-14 lg:gap-24 mt-6 md:mt-10 lg:mt-20 px-6 md:px-40 lg:px-auto">
      <div className="flex gap-4 justify-center mx-auto md:mx-0 md:justify-start items-center">
        <span className="text-tertiary-100 opacity-25 tracking-[4.72px] font-bold">
          02
        </span>
        <SecondaryTitle text="meet your crew" color="tertiary-100" />
      </div>
      <main className="flex flex-col md:flex-col-reverse lg:flex-row-reverse h-full w-full gap-8 md:gap-12 lg:gap-16   justify-between">
        <section className="grid place-content-center  lg:place-content-end border-b border-solid border-['rgba(56, 59, 75, 1)']">
          <img
            src={
              crewMembers
                ? crewMembers[currentCrewMember].images.webp
                : undefined
            }
            className={`w-44 md:w-fit lg:w-[568px]`}
          />
        </section>
        <section className="max-w-[614px] flex flex-col md:flex-col-reverse justify-center mx-auto md:items-center lg:items-start flex-grow  gap-2">
          {/* 4 circles 10px by 10px */}
          <SmallToggle
            isActive={isActive}
            changeCrewMemberHandler={changeCrewMemberHandler}
          />
          <div className="flex flex-col gap-2 ">
            <h3
              id="role"
              className="text-tertiary-100 opacity-50 uppercase font-serif text-center lg:text-start lg:text-[32px]"
            >
              {/* find index of isActive that is true, render name from crew in that index */}
              {crewMembers && crewMembers[currentCrewMember].role}
            </h3>
            <h2
              id="name"
              className="text-tertiary-100 text-2xl text-center uppercase font-serif mb-4 lg:text-start lg:text-[56px]"
            >
              {crewMembers && crewMembers[currentCrewMember].name}{' '}
            </h2>
            <p
              id="bio"
              className="text-secondary text-[15px] md:text-base  font-sans2 leading-6 pb-14  text-center lg:text-start lg:text-lg"
            >
              {crewMembers && crewMembers[currentCrewMember].bio}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};
