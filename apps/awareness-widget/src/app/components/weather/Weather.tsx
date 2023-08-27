import { Icons } from '../icons/Icons';
import './weather.scss';

export const Weather = () => {
  return (
    <header className="weather">
      <section className="weather--summary">
        <section className="info">
            <p className='info--city'>
                Melbourne
            </p>
            <p className='info--temperature'>
                35&deg;
            </p>
            <p className='info--date'>
                Tue 25th Aug, 3:46 PM
            </p>
        </section>
        <section className="icon">
            {Icons['showers']}
        </section>
      </section>
      <section className="weather--details">
        <section className="detail">
          <div className='detail--key'>Humidity</div>
          <div className='detail--value'>50%</div>
        </section>
        <section className="detail">
        <p className='detail--key'>Chance of rain</p>
          <p className='detail--value'>50%</p>
        </section>
        <section className="detail">
        <p className='detail--key'>Wind</p>
          <p className='detail--value'>10&nbsp;<span>kmh</span></p>
        </section>
        <section className="detail">
        <p className='detail--key'>Tomorrow</p>
          <p className='detail--value'>30&deg; {Icons['showers']}</p>
        </section>
      </section>
    </header>
  );
};
