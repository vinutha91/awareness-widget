// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { Dashboard } from './components/dashboard/Dashboard';
import { RouteInfo } from './components/route-info/RouteInfo';
import { Weather } from './components/weather/Weather';

export function App() {
  return (      
      <div>
        <Weather />
        <RouteInfo />
        <Dashboard />
      </div>
  );
}

export default App;
