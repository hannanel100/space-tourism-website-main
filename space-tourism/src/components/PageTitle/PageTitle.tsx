import { SecondaryTitle } from '../SecondaryTitle';

export interface PageTitleProps {
  text: string;
  number: string;
  className?: string;
}

export const PageTitle = ({ text, number, className }: PageTitleProps) => {
  return (
    <div
      className={`mx-auto flex items-center justify-center gap-4 md:mx-10 md:justify-start lg:mx-0 ${className}`}
    >
      <span className="font-bold tracking-[4.72px] text-tertiary-100 opacity-25 md:text-xl lg:text-3xl">
        {number}
      </span>
      <SecondaryTitle text={text} color="tertiary-100" />
    </div>
  );
};
