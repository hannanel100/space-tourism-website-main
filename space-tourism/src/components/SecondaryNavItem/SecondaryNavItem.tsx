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
          ? 'border-b-2 border-solid border-b-tertiary-100 text-tertiary-100'
          : 'text-secondary'
      } cursor-pointer pb-2 font-sans uppercase hover:border-b-2 hover:border-solid hover:border-b-tertiary-100 hover:border-opacity-50`}
      onClick={() => setDestination(text as Destination)}
    >
      {text}
    </li>
  );
};
