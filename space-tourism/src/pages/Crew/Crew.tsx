import React, { useEffect, useState } from 'react';
import { PageTitle } from '../../components/PageTitle';
import { PageWrapper } from '../../components/PageWrapper';
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
    <PageWrapper>
      <PageTitle text="Meet the Crew" number="02" className="lg:px-40" />
      <main className="6 flex h-full w-full flex-col justify-between px-6 md:flex-col-reverse md:px-36 lg:flex-row-reverse  lg:px-40">
        <section className="border-['rgba(56, 59, 75,  1)'] grid place-content-center overflow-clip border-b border-solid lg:flex-1 lg:place-content-end">
          <picture>
            <source
              srcSet={
                crewMembers
                  ? crewMembers[currentCrewMember].images.webp
                  : undefined
              }
              type="image/webp"
            />
            <img
              src={
                crewMembers
                  ? crewMembers[currentCrewMember].images.png
                  : undefined
              }
              alt={
                crewMembers ? crewMembers[currentCrewMember].name : undefined
              }
              className={`mx-auto object-cover md:max-w-[75%] lg:max-w-[90%] `}
            />
          </picture>
        </section>
        <section className="flex-0 mx-auto flex max-w-[614px] flex-grow flex-col justify-center gap-2  md:flex-col-reverse md:items-center md:justify-around lg:items-start  lg:justify-between">
          {/* 4 circles 10px by 10px */}
          <SmallToggle
            isActive={isActive}
            changeCrewMemberHandler={changeCrewMemberHandler}
          />
          <div className="flex flex-col gap-4 lg:mt-40">
            <h3
              id="role"
              className="text-center font-serif uppercase text-tertiary-100 opacity-50 lg:text-start lg:text-[32px]"
            >
              {/* find index of isActive that is true, render name from crew in that index */}
              {crewMembers && crewMembers[currentCrewMember].role}
            </h3>
            <h2
              id="name"
              className="mb-4 text-center font-serif text-2xl uppercase text-tertiary-100 lg:text-start lg:text-[56px]"
            >
              {crewMembers && crewMembers[currentCrewMember].name}
            </h2>
            <p
              id="bio"
              className="text-center font-sans2 text-[15px]  leading-6 text-secondary md:text-base lg:mt-4 lg:text-start lg:text-lg"
            >
              {crewMembers && crewMembers[currentCrewMember].bio}
            </p>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
};
