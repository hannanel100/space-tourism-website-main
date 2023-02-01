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
      <main className="flex flex-col md:flex-col-reverse lg:flex-row-reverse h-full w-full 6 px-6 md:px-36 lg:px-40  justify-between">
        <section className="lg:flex-1 grid place-content-center  lg:place-content-end border-b border-solid border-['rgba(56, 59, 75, 1)'] overflow-clip">
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
              className={`mx-auto md:max-w-[75%] lg:max-w-[90%] object-cover `}
            />
          </picture>
        </section>
        <section className="flex-0 max-w-[614px] flex flex-col md:flex-col-reverse justify-center md:justify-around lg:justify-between  mx-auto md:items-center lg:items-start flex-grow  gap-2">
          {/* 4 circles 10px by 10px */}
          <SmallToggle
            isActive={isActive}
            changeCrewMemberHandler={changeCrewMemberHandler}
          />
          <div className="flex flex-col gap-4 lg:mt-40">
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
              {crewMembers && crewMembers[currentCrewMember].name}
            </h2>
            <p
              id="bio"
              className="text-secondary text-[15px] md:text-base  font-sans2 leading-6 text-center lg:text-start lg:text-lg lg:mt-4"
            >
              {crewMembers && crewMembers[currentCrewMember].bio}
            </p>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
};
