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
      className={`${sizeClass[size]} rounded-full bg-tertiary-100 font-serif uppercase tracking-[2px]  text-primary ring-[#979797] transition duration-150 ease-in-out hover:ring-[88px]`}
    >
      {text}
    </button>
  );
};
