// export interface HeaderProps {}
import { Navbar } from '../Navbar';

export const Header = () => {
  return (
    <header className="flex justify-between md:items-start lg:items-baseline ">
      <section className="relative h-12 w-12 flex-shrink">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          className="absolute top-6 left-6 md:top-6 md:left-10 lg:top-8 lg:left-14"
        >
          <g fill="none" fillRule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
      </section>
      <section className="z-10 flex-grow">
        <Navbar />
      </section>
    </header>
  );
};
