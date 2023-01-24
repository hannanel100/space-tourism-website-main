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
      <main className="flex flex-col lg:flex-row h-full w-full md:gap-12 lg:gap-36  px-6 md:px-9 lg:px-40 justify-between">
        <section className="flex flex-col gap-8 md:gap-14 lg:gap-24 flex-grow flex-shrink-0 ">
          {/* image with src according to state */}
          <img
            src={`./assets/destination/image-${destination}.webp`}
            alt="destination"
            className="w-36 h-36 md:w-72 md:h-72 lg:h-[445px] lg:w-[445px] object-cover mx-auto"
          />
        </section>
        <section className="flex flex-col md:items-center lg:items-start flex-grow gap-4">
          {/* a secondary navbar, with options as in type of Destination, a title, some text, and then two elements side by side with distance and time of travel */}
          <nav className="content-center mx-auto lg:mx-0">
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
          <h3 className="text-tertiary-100 text-6xl md:text-7xl lg:text-8xl uppercase font-serif text-center lg:text-start">
            {destination}
          </h3>
          <p className="text-secondary text-sm md:text-base lg:text-lg font-sans border-b border-[#383B4B] pb-14 md:px-24  text-center lg:text-start">
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
            className="flex flex-col md:flex-row justify-center mx-auto pb-6 md:pb-0 md:justify-start gap-8 md:gap-16"
          >
            <div className="flex flex-col gap-4">
              <span className="text-secondary text-sm font-sans uppercase">
                avg. distance
              </span>
              <span className="text-tertiary-100 text-3xl uppercase font-serif">
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
              <span className="text-secondary text-sm font-sans uppercase">
                est. travel time
              </span>
              <span className="text-tertiary-100 text-3xl uppercase font-serif">
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
