import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../Header';

export const Layout = () => {
  // change background image according to path your are in
  const { pathname } = useLocation();

  const [bgImage, setBgImage] = useState('home');
  useEffect(() => {
    pathname !== '/' ? setBgImage(pathname.slice(1)) : setBgImage('home');
  }, [pathname]);

  return (
    <div
      className={`flex flex-col ${
        pathname === '/' && 'justify-between'
      } min-h-screen bg-cover bg-center bg-repeat-y md:h-full md:bg-no-repeat`}
    >
      <style>
        {`
          .bg-cover {
            background-image: url('./assets/${bgImage}/background-${bgImage}-mobile.jpg');
          }
          @media (min-width: 640px) {
            .bg-cover {
              background-image: url('./assets/${bgImage}/background-${bgImage}-tablet.jpg');
            }
          }
          
          @media (min-width: 1024px) {
            .bg-cover {
              background-image: url('./assets/${bgImage}/background-${bgImage}-desktop.jpg');
            }
          }
        `}
      </style>
      <Header />
      <Outlet />
    </div>
  );
};
