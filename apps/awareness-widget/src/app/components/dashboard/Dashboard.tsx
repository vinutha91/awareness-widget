import { useEffect, useState } from 'react';
import { DoughnutChart } from './charts/doughnut/Doughnut';
import './dashboard.scss';
import { useRampData } from './hooks/useRampData';
import { Icons } from '../icons/Icons';
import { clearRampAlgorithmsInterval } from '../../services/ramp-data.service';

export const Dashboard = () => {
  const [showDashboard, setShowDashboard] = useState(true);
  const { rampData } = useRampData(showDashboard);
  
  const toggleRouteInfo = () => {
    setShowDashboard(!showDashboard);
  };

  useEffect(() => {
    console.log(rampData);
  }, [rampData]);
  
  useEffect(() =>{
    if(!showDashboard) clearRampAlgorithmsInterval();
  },[showDashboard])
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
