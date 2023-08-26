// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.module.scss';
import { Dashboard } from './components/dashboard/Dashboard';
import { RouteInfo } from './components/route-info/RouteInfo';
import { Weather } from './components/weather/Weather';

export function App() {
  return (      
      <>
        <Weather />
        <RouteInfo />
        <Dashboard />
      </>
  );
}

export default App;
