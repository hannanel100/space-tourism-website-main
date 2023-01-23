import { Destination } from '../../pages/Destination';
export interface SecondaryNavItemProps {
  text: string;
  isChosen: boolean;
  setDestination: (destination: Destination) => void;
}

export const SecondaryNavItem = ({
  text,
  isChosen,
  setDestination,
}: SecondaryNavItemProps) => {
  return (
    <li
      className={`${
        isChosen
          ? 'text-tertiary-100 border-b-2 border-b-tertiary-100 border-solid'
          : 'text-secondary'
      } cursor-pointer uppercase font-sans pb-2 hover:border-b-tertiary-100 hover:border-opacity-50 hover:border-b-2 hover:border-solid`}
      onClick={() => setDestination(text as Destination)}
    >
      {text}
    </li>
  );
};
