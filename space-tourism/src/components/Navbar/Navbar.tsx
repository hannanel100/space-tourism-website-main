// export interface NavbarProps {}
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const navbarItems = ['home', 'destination', 'crew', 'technology'];
  const navbarItemsPath = ['/', '/destination', '/crew', '/technology'];
  return (
    <div className="relative z-10 flex w-full flex-grow flex-row-reverse items-center justify-start lg:pt-10">
      <nav className="hidden w-2/3 flex-col items-end justify-center gap-32 bg-tertiary-900 bg-opacity-30  text-tertiary-100 backdrop-blur-lg backdrop-filter sm:flex md:h-[96px]">
        <ul className="hidden h-full items-center justify-center gap-8 sm:flex md:pr-11 lg:pr-20">
          {navbarItems.map((item, index) => (
            <li
              key={index}
              className={`flex h-full  flex-col justify-center tracking-[2.7px] md:text-sm md:tracking-[2.36px] ${
                location.pathname === navbarItemsPath[index] &&
                'border-b-2 border-solid border-tertiary-100'
              }`}
            >
              <Link
                to={navbarItemsPath[index]}
                className="self-center text-base leading-[19.2px] tracking-[2.7px]"
              >
                <span className="mr-[14px]  font-bold md:hidden lg:inline">
                  {index < 9 ? `0${index + 1}` : index + 1}
                </span>
                {item.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav
        className={`absolute  top-0 right-0 z-10 transform transition  duration-100 ease-in-out sm:hidden ${
          isOpen && 'backdrop-blur-2xl'
        }  flex w-4/5 flex-col items-end justify-center gap-16  text-tertiary-100`}
      >
        {/* hamburger menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mt-8 flex h-6 flex-col justify-center gap-[6px] pr-6"
        >
          <div
            className={`ease h-[3px] w-6  transform bg-secondary transition duration-300 ${
              isOpen && 'translate-y-[9px] rotate-45'
            }`}
          ></div>
          <div
            className={`ease h-[3px] w-6  transform bg-secondary transition duration-300 ${
              isOpen && 'opacity-0'
            }`}
          ></div>
          <div
            className={`ease h-[3px] w-6  transform bg-secondary transition duration-300 ${
              isOpen && '-translate-y-[9px] -rotate-45'
            }`}
          ></div>
        </button>
        {isOpen && (
          <ul className="ease flex min-h-screen transform flex-col  gap-8 self-start  pl-8 transition duration-100 sm:hidden">
            {navbarItems.map((item, index) => (
              <li key={index} className={` h-full tracking-[2.7px]`}>
                <Link
                  to={navbarItemsPath[index]}
                  onClick={() => setIsOpen(false)}
                  className="self-center"
                >
                  <span className="mr-[11px]  font-bold ">
                    {index < 9 ? `0${index + 1}` : index + 1}
                  </span>
                  {item.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};
