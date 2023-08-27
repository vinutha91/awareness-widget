import { useState } from 'react';
import { Icons } from '../icons/Icons';
import './route-info.scss';
import { Route } from './route/Route';
import { ROUTES as routes } from './data/routes';

export const RouteInfo = () => {
  const [showRouteInfo, setShowRouteInfo] = useState(true);

  const toggleRouteInfo = () => {
    setShowRouteInfo(!showRouteInfo);
  };

  return (
    <section className="routes">
      <div className="routes--heading">
        <label>Delayed Routes</label>
        <button
          className={`skeleton-btn ${!showRouteInfo ? 'collapsed' : ''}`}
          onClick={() => toggleRouteInfo()}
        >
          {Icons['arrow']}
        </button>
      </div>
      {showRouteInfo && (
        <>
          {routes.map((route: any) => {
            return <Route routeDetails={route} key={route.id} />;
          })}
        </>
      )}
    </section>
  );
};
