export interface SmallToggleProps {
  isActive: boolean[];
  changeCrewMemberHandler: (event: React.MouseEvent) => void;
}

export const SmallToggle = (props: SmallToggleProps) => {
  return (
    <div className="mx-auto mb-20 flex justify-center gap-4 lg:mx-0 lg:items-start">
      <div
        id="0"
        className={`h-[10px] w-[10px] rounded-full bg-tertiary-100 lg:h-[15px] lg:w-[15px] ${
          props.isActive[0] ? 'opacity-1' : 'opacity-[0.17]'
        } cursor-pointer hover:opacity-50`}
        onClick={props.changeCrewMemberHandler}
      />
      <div
        id="1"
        className={`h-[10px] w-[10px] rounded-full bg-tertiary-100 lg:h-[15px] lg:w-[15px] ${
          props.isActive[1] ? 'opacity-1' : 'opacity-[0.17]'
        } cursor-pointer hover:opacity-50`}
        onClick={props.changeCrewMemberHandler}
      />
      <div
        id="2"
        className={`h-[10px] w-[10px] rounded-full bg-tertiary-100 lg:h-[15px] lg:w-[15px] ${
          props.isActive[2] ? 'opacity-1' : 'opacity-[0.17]'
        } cursor-pointer hover:opacity-50`}
        onClick={props.changeCrewMemberHandler}
      />
      <div
        id="3"
        className={`h-[10px] w-[10px] rounded-full bg-tertiary-100 lg:h-[15px] lg:w-[15px] ${
          props.isActive[3] ? 'opacity-1' : 'opacity-[0.17]'
        } cursor-pointer hover:opacity-50`}
        onClick={props.changeCrewMemberHandler}
      />
    </div>
  );
};
