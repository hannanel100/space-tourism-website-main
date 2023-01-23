// router with react-router-dom version 6, containing a Layout component wrapping all routes, a home route, a destination route, a crew route, a technology route, and a 404 route

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Layout } from '../components/Layout';

import { Home } from '../pages/Home';

import { Destination } from '../pages/Destination';

import { Crew } from '../pages/Crew';

import { Technology } from '../pages/Technology';

import { NotFound } from '../pages/NotFound';

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};
