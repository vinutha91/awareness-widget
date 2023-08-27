import { useEffect } from 'react';
import { DoughnutChart } from './charts/doughnut/Doughnut';
import './dashboard.scss';
import { useRampData } from './hooks/useRampData';

export const Dashboard = () =>{
    const { rampData } = useRampData();

    useEffect(() =>{
        console.log(rampData);
    }, [rampData]);
    
    return  <div className='dashboard'>
      <div className='dashboard--heading'>
          <label>Ramp Chart</label>
      </div>
      <DoughnutChart data={
        rampData
      } />
    </div>
}