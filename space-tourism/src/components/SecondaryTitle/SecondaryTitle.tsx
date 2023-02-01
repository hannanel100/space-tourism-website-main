export interface SecondaryTitleProps {
  text: string;
  color: 'secondary' | 'tertiary-100';
}

export const SecondaryTitle = (props: SecondaryTitleProps) => {
  return (
    <h5
      className={`text-base md:text-xl lg:flex-1 lg:text-[28px] lg:leading-[33.6px] text-${props.color} uppercase tracking-widest md:tracking-[4.72px]`}
    >
      {props.text}
    </h5>
  );
};
