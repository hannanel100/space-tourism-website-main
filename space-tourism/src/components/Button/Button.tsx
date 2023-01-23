type ButtonProps = {
  size: 'small' | 'medium' | 'large';
  text: string;
};

export const Button = ({ size, text }: ButtonProps) => {
  const sizeClass = {
    small: 'w-32 h-32 text-xl',
    medium: 'w-64 h-64 text-3xl',
    large: 'w-96 h-96 text-5xl',
  };
  return (
    <button
      className={`${sizeClass[size]} bg-tertiary-100 text-primary  rounded-full  ring-[#979797] hover:ring-[88px] transition ease-in-out duration-150 uppercase`}
    >
      {text}
    </button>
  );
};
