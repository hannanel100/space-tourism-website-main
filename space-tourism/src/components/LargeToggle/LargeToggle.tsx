export interface LargeToggleProps {
  isActive: boolean[];
  changeTechnologyHandler: (event: React.MouseEvent) => void;
}

export const LargeToggle = (props: LargeToggleProps) => {
  return (
    <div className="flex lg:flex-col gap-4 justify-center lg:items-start mx-auto lg:mx-0 mb-2">
      <div
        id="0"
        className={`w-[40px] md:w-[60px] lg:w-[80px] h-[40px] md:h-[60px] lg:h-[80px] grid place-content-center rounded-full border border-solid border-tertiary-100 border-opacity-25 ${
          props.isActive[0]
            ? ' bg-tertiary-100 text-primary'
            : 'bg-transparent text-tertiary-100'
        } hover:border-opacity-100 cursor-pointer`}
        onClick={props.changeTechnologyHandler}
      >
        1
      </div>
      <div
        id="1"
        className={`w-[40px] md:w-[60px] lg:w-[80px] h-[40px] md:h-[60px] lg:h-[80px] grid place-content-center rounded-full border border-solid border-tertiary-100 border-opacity-25 ${
          props.isActive[1]
            ? ' bg-tertiary-100 text-primary'
            : 'bg-transparent text-tertiary-100'
        } hover:border-opacity-100 cursor-pointer`}
        onClick={props.changeTechnologyHandler}
      >
        2
      </div>
      <div
        id="2"
        className={`w-[40px] md:w-[60px] lg:w-[80px] h-[40px] md:h-[60px] lg:h-[80px] grid place-content-center rounded-full border border-solid border-tertiary-100 border-opacity-25 ${
          props.isActive[2]
            ? ' bg-tertiary-100 text-primary'
            : 'bg-transparent text-tertiary-100'
        } hover:border-opacity-100 cursor-pointer`}
        onClick={props.changeTechnologyHandler}
      >
        3
      </div>
    </div>
  );
};
