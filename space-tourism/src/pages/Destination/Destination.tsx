import { useState } from 'react';
import { PageTitle } from '../../components/PageTitle';
import { PageWrapper } from '../../components/PageWrapper';
import { SecondaryNavItem } from '../../components/SecondaryNavItem';
import { SecondaryTitle } from '../../components/SecondaryTitle';
import { useGetData } from '../../hooks/useGetData';

// export interface DestinationProps {}
export type Destination = 'moon' | 'mars' | 'europa' | 'titan';
export const Destination = () => {
  const { data } = useGetData();
  // state of destination: moon, mars, europa or titan
  const [destination, setDestination] = useState<Destination>('moon');
  const destinations = data?.destinations?.map((destinationOption) =>
    destinationOption.name.toLowerCase(),
  );

  return (
    <PageWrapper>
      <PageTitle
        text="pick your destination"
        number="01"
        className="lg:px-40"
      />
      <main className="flex h-full w-full flex-col justify-between px-6 md:gap-12  md:px-9 lg:flex-row lg:gap-36 lg:px-40">
        <section className="flex flex-shrink-0 flex-grow flex-col gap-8 md:gap-14 lg:gap-24 ">
          {/* image with src according to state */}
          <img
            src={`./assets/destination/image-${destination}.webp`}
            alt="destination"
            className="mx-auto h-36 w-36 object-cover md:h-72 md:w-72 lg:h-[445px] lg:w-[445px]"
          />
        </section>
        <section className="flex flex-grow flex-col gap-4 md:items-center lg:items-start">
          {/* a secondary navbar, with options as in type of Destination, a title, some text, and then two elements side by side with distance and time of travel */}
          <nav className="mx-auto content-center lg:mx-0">
            <ul className="flex gap-9">
              {destinations?.map((destinationOption) => (
                <SecondaryNavItem
                  key={destinationOption}
                  text={destinationOption}
                  isChosen={destination === destinationOption}
                  setDestination={setDestination}
                />
              ))}
            </ul>
          </nav>
          <h3 className="text-center font-serif text-6xl uppercase text-tertiary-100 md:text-7xl lg:text-start lg:text-8xl">
            {destination}
          </h3>
          <p className="border-b border-[#383B4B] pb-14 text-center font-sans text-sm text-secondary md:px-24 md:text-base  lg:text-start lg:text-lg">
            {
              data?.destinations?.find(
                (destinationOption) =>
                  destinationOption.name.toLowerCase() ===
                  destination.toLowerCase(),
              )?.description
            }
          </p>
          <div
            id="stats"
            className="mx-auto flex flex-col justify-center gap-8 pb-6 md:flex-row md:justify-start md:gap-16 md:pb-0"
          >
            <div className="flex flex-col gap-4">
              <span className="font-sans text-sm uppercase text-secondary">
                avg. distance
              </span>
              <span className="font-serif text-3xl uppercase text-tertiary-100">
                {
                  data?.destinations?.find(
                    (destinationOption) =>
                      destinationOption.name.toLowerCase() ===
                      destination.toLowerCase(),
                  )?.distance
                }
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-sans text-sm uppercase text-secondary">
                est. travel time
              </span>
              <span className="font-serif text-3xl uppercase text-tertiary-100">
                {
                  data?.destinations?.find(
                    (destinationOption) =>
                      destinationOption.name.toLowerCase() ===
                      destination.toLowerCase(),
                  )?.travel
                }
              </span>
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
};
