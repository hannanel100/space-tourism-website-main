export interface SmallToggleProps {
  isActive: boolean[];
  changeCrewMemberHandler: (event: React.MouseEvent) => void;
}

export const SmallToggle = (props: SmallToggleProps) => {
  return (
    <div className="flex gap-4 justify-center lg:items-start mx-auto lg:mx-0 mb-20">
      <div
        id="0"
        className={`w-[10px] lg:w-[15px] h-[10px] lg:h-[15px] rounded-full bg-tertiary-100 ${
          props.isActive[0] ? 'opacity-1' : 'opacity-[0.17]'
        } hover:opacity-50 cursor-pointer`}
        onClick={props.changeCrewMemberHandler}
      />
      <div
        id="1"
        className={`w-[10px] lg:w-[15px] h-[10px] lg:h-[15px] rounded-full bg-tertiary-100 ${
          props.isActive[1] ? 'opacity-1' : 'opacity-[0.17]'
        } hover:opacity-50 cursor-pointer`}
        onClick={props.changeCrewMemberHandler}
      />
      <div
        id="2"
        className={`w-[10px] lg:w-[15px] h-[10px] lg:h-[15px] rounded-full bg-tertiary-100 ${
          props.isActive[2] ? 'opacity-1' : 'opacity-[0.17]'
        } hover:opacity-50 cursor-pointer`}
        onClick={props.changeCrewMemberHandler}
      />
      <div
        id="3"
        className={`w-[10px] lg:w-[15px] h-[10px] lg:h-[15px] rounded-full bg-tertiary-100 ${
          props.isActive[3] ? 'opacity-1' : 'opacity-[0.17]'
        } hover:opacity-50 cursor-pointer`}
        onClick={props.changeCrewMemberHandler}
      />
    </div>
  );
};
