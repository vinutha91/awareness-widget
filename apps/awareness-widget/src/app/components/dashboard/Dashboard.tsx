import { useEffect, useState } from 'react';
import { DoughnutChart } from './charts/doughnut/Doughnut';
import './dashboard.scss';
import { useRampData } from './hooks/useRampData';
import { Icons } from '../icons/Icons';

export const Dashboard = () => {
  const { rampData } = useRampData();

  const [showDashboard, setShowDashboard] = useState(true);

  const toggleRouteInfo = () => {
    setShowDashboard(!showDashboard);
  };

  useEffect(() => {
    console.log(rampData);
  }, [rampData]);

  return (
    <div className="dashboard">
      <div className="dashboard--heading">
        <label>Ramp Chart</label>
        <button
          className={`skeleton-btn ${!showDashboard ? 'collapsed' : ''}`}
          onClick={() => toggleRouteInfo()}
        >
          {Icons['arrow']}
        </button>
      </div>
      {
        showDashboard && (
          <DoughnutChart data={rampData} />
        )
      }
    </div>
  );
};
