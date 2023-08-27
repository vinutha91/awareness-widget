import { DoughnutChart } from './charts/doughnut/Doughnut';
import './dashboard.scss';

export const Dashboard = () =>{
    return  <div className='dashboard'>
      <div className='dashboard--heading'>
          <label>Ramp Chart</label>
      </div>
      <DoughnutChart data={
        [
          {name: 'A', number: 10},
          {name: 'B', number: 20},
          {name: 'C', number: 40},
          {name: 'D', number: 20},
          {name: 'E', number: 10}
        ]
      } />
    </div>
}