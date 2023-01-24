import { SecondaryTitle } from '../SecondaryTitle';

export interface PageTitleProps {
  text: string;
  number: string;
  className?: string;
}

export const PageTitle = ({ text, number, className }: PageTitleProps) => {
  return (
    <div
      className={`flex gap-4 justify-center mx-auto md:mx-10 lg:mx-0 md:justify-start items-center ${className}`}
    >
      <span className="text-tertiary-100 opacity-25 tracking-[4.72px] font-bold md:text-xl lg:text-3xl">
        {number}
      </span>
      <SecondaryTitle text={text} color="tertiary-100" />
    </div>
  );
};
