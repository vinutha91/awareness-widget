import './route-info.scss';
import { Route } from './route/route';

export const RouteInfo = () =>{
    return (
        <section className='routes'>
            <div className='routes--heading'>
                <label>Delayed Routes</label>
            </div>
            <Route routeDetails={
                {
                    id: 123,
                    name: 'Monash Fwy Out',
                    from: 'Kings Way',
                    to: 'EastLink',
                    distance: '13km',
                    direction: 'up',
                    delayed: true,
                    delayTime: 10,
                    delayTimeUnit: 'min',
                    severity: 'low'
                }
            }/>
            <Route routeDetails={
                {
                    id: 123,
                    name: 'Monash Fwy Out',
                    from: 'Kings Way',
                    to: 'EastLink',
                    distance: '13km',
                    direction: 'up',
                    delayed: true,
                    delayTime: 20,
                    delayTimeUnit: 'min',
                    severity: 'high'
                }
            }/>
            <Route routeDetails={
                {
                    id: 123,
                    name: 'Western Ring Rd',
                    from: 'Westgate Fwy',
                    to: 'Western Fwy',
                    distance: '20km',
                    direction: 'down',
                    delayed: true,
                    delayTime: 35,
                    delayTimeUnit: 'min',
                    severity: 'medium'
                }
            }/>
            <Route routeDetails={
                {
                    id: 123,
                    name: 'Eastern Fwy Out',
                    from: 'Hoddle St',
                    to: 'Springvale Rd',
                    distance: '35km',
                    direction: 'down',
                    delayed: true,
                    delayTime: 15,
                    delayTimeUnit: 'min',
                    severity: 'high'
                }
            }/>
        </section>
    )
}