export interface LargeToggleProps {
  isActive: boolean[];
  changeTechnologyHandler: (event: React.MouseEvent) => void;
}

export const LargeToggle = (props: LargeToggleProps) => {
  return (
    <div className="mx-auto mb-2 flex justify-center gap-4 lg:mx-0 lg:flex-col lg:items-start">
      <div
        id="0"
        className={`grid h-[40px] w-[40px] place-content-center rounded-full border border-solid border-tertiary-100 border-opacity-25 md:h-[60px] md:w-[60px] lg:h-[80px] lg:w-[80px] ${
          props.isActive[0]
            ? ' bg-tertiary-100 text-primary'
            : 'bg-transparent text-tertiary-100'
        } cursor-pointer hover:border-opacity-100`}
        onClick={props.changeTechnologyHandler}
      >
        1
      </div>
      <div
        id="1"
        className={`grid h-[40px] w-[40px] place-content-center rounded-full border border-solid border-tertiary-100 border-opacity-25 md:h-[60px] md:w-[60px] lg:h-[80px] lg:w-[80px] ${
          props.isActive[1]
            ? ' bg-tertiary-100 text-primary'
            : 'bg-transparent text-tertiary-100'
        } cursor-pointer hover:border-opacity-100`}
        onClick={props.changeTechnologyHandler}
      >
        2
      </div>
      <div
        id="2"
        className={`grid h-[40px] w-[40px] place-content-center rounded-full border border-solid border-tertiary-100 border-opacity-25 md:h-[60px] md:w-[60px] lg:h-[80px] lg:w-[80px] ${
          props.isActive[2]
            ? ' bg-tertiary-100 text-primary'
            : 'bg-transparent text-tertiary-100'
        } cursor-pointer hover:border-opacity-100`}
        onClick={props.changeTechnologyHandler}
      >
        3
      </div>
    </div>
  );
};
