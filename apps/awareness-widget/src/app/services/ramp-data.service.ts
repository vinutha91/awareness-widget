import { Ramps } from './models/ramps.model';

let dataGeneratorInterval: NodeJS.Timer;

export const getRampAlgorithms = (onUpdate: (ramps: Ramps) => void) => {
  const count = 50;
  dataGeneratorInterval = setInterval(() => {
    const ramps = [];
    for (let i = 0; i < count; i++) {
      ramps.push({
        id: `ramp-${i}`,
        algorithm: [
          'Algorithm 1',
          'Algorithm 2',
          'Algorithm 3',
          'Algorithm 4',
          'Algorithm 5',
        ][Math.floor(Math.random() * 5)],
      });
    }
    onUpdate(ramps);
  }, 500);
}

export const clearRampAlgorithmsInterval = () => {
  clearInterval(dataGeneratorInterval);
}
