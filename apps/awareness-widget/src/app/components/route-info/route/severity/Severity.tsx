import './severity.scss';

interface RouteProps {
  severity: 'low' | 'medium' | 'high';
}

export const Severity = (props: RouteProps) => {
  const { severity } = props;

  return (
    <div className={`severity severity--${severity}`}></div>
  );
};
