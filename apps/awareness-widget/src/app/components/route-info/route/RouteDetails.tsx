import { RouteWithDelay } from '../models/route.interface';
import { Direction } from './direction/Direction';
import './route.scss';
import { Severity } from './severity/Severity';

interface RouteProps {
  routeDetails: RouteWithDelay;
}
export const Route = (props: RouteProps) => {
  const { routeDetails } = props;

  return (
    <section className="route">
      <section className="route--summary">
        <section className="summary--severity">
            <Severity severity={routeDetails.severity} />
        </section>
        <section className="summary--name">{routeDetails.name}</section>
        <section className="summary--distance">{routeDetails.distance}</section>
      </section>
      <section className="route--info">
        <section className="info--direction">
          <Direction routeDirection={routeDetails.direction} />
        </section>
        <section className="info--details">
          <section className="details--from">{routeDetails.from}</section>
          <section className="details--to">{routeDetails.to}</section>
        </section>
        <section className="info--delayTime">
          {routeDetails.delayTime}
          <span>
            {routeDetails.delayTimeUnit}
          </span>
        </section>
      </section>
    </section>
  );
};
