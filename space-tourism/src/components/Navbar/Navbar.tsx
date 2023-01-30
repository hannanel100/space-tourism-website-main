// export interface NavbarProps {}
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const navbarItems = ['home', 'destination', 'crew', 'technology'];
  const navbarItemsPath = ['/', '/destination', '/crew', '/technology'];
  return (
    <div className="w-full flex justify-start items-center flex-row-reverse flex-grow z-10 relative lg:pt-10">
      <nav className="hidden sm:flex md:h-[96px] w-2/3 gap-32 flex-col justify-center items-end  bg-tertiary-900 text-tertiary-100 backdrop-filter backdrop-blur-lg bg-opacity-30">
        <ul className="hidden sm:flex gap-8 justify-center items-center h-full lg:pr-20 md:pr-11">
          {navbarItems.map((item, index) => (
            <li
              key={index}
              className={`flex flex-col  h-full justify-center tracking-[2.7px] md:tracking-[2.36px] md:text-sm ${
                location.pathname === navbarItemsPath[index] &&
                'border-b-2 border-solid border-tertiary-100'
              }`}
            >
              <Link
                to={navbarItemsPath[index]}
                className="self-center text-base tracking-[2.7px] leading-[19.2px]"
              >
                <span className="font-bold  mr-[14px] md:hidden lg:inline">
                  {index < 9 ? `0${index + 1}` : index + 1}
                </span>
                {item.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav
        className={`sm:hidden  transition ease-in-out transform duration-100 z-10  absolute top-0 right-0 ${
          isOpen && 'backdrop-blur-2xl'
        }  w-4/5 flex gap-16 flex-col justify-center items-end  text-tertiary-100`}
      >
        {/* hamburger menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col justify-center gap-[6px] h-6 pr-6 mt-8"
        >
          <div
            className={`w-6 h-[3px] bg-secondary  transition ease transform duration-300 ${
              isOpen && 'rotate-45 translate-y-[9px]'
            }`}
          ></div>
          <div
            className={`w-6 h-[3px] bg-secondary  transition ease transform duration-300 ${
              isOpen && 'opacity-0'
            }`}
          ></div>
          <div
            className={`w-6 h-[3px] bg-secondary  transition ease transform duration-300 ${
              isOpen && '-rotate-45 -translate-y-[9px]'
            }`}
          ></div>
        </button>
        {isOpen && (
          <ul className="sm:hidden min-h-screen flex flex-col gap-8  pl-8 self-start  transition ease transform duration-100">
            {navbarItems.map((item, index) => (
              <li key={index} className={` h-full tracking-[2.7px]`}>
                <Link
                  to={navbarItemsPath[index]}
                  onClick={() => setIsOpen(false)}
                  className="self-center"
                >
                  <span className="font-bold  mr-[11px] ">
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
