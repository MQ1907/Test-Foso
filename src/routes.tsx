import { Layout } from '@/layouts';
import { useEffect } from 'react';
import { Route, Routes as RRDRoutes, useLocation } from 'react-router';

import { allRoutes } from './routes/all-routes';

export const Routes = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return (
    <RRDRoutes>
      <Route element={<Layout />}>
        {allRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Route>
    </RRDRoutes>
  );
};
