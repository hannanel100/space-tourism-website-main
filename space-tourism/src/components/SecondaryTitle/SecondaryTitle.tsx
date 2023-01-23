export interface SecondaryTitleProps {
  text: string;
  color: 'secondary' | 'tertiary-100';
}

export const SecondaryTitle = (props: SecondaryTitleProps) => {
  return (
    <h5
      className={`md:text-xl lg:text-3xl text-${props.color} uppercase tracking-[4.72px]`}
    >
      {props.text}
    </h5>
  );
};
