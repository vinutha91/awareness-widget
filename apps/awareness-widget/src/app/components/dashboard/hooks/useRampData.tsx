import { useEffect, useMemo, useState } from 'react';
import {
  getRampAlgorithms,
  clearRampAlgorithmsInterval,
} from '../../../services/ramp-data.service';
import { Ramp, Ramps } from '../models/ramps.model';

export const useRampData = (showDashboard: boolean) => {
  const [rampData, setRampData] = useState<Ramps>([]);

  const calculateRampData = (data: Ramps) => {
    const groupByAlgorithm = data.reduce(
      (rampsGroup: { [key: string]: string[] }, ramp: Ramp) => {
        if (rampsGroup[ramp.algorithm]) {
          rampsGroup[ramp.algorithm].push(ramp.id);
        }

        if (!rampsGroup || !rampsGroup[ramp.algorithm]) {
          rampsGroup[ramp.algorithm] = [];
          rampsGroup[ramp.algorithm].push(ramp.id);
        }
        return rampsGroup;
      },
      {}
    );

    const totalRamps = Object.keys(groupByAlgorithm).reduce(
      (total: number, key: string) => {
        return total + groupByAlgorithm[key].length;
      },
      0
    );

    const groupByAlgorithmPercentage = Object.keys(groupByAlgorithm).map(
      (key: string) => {
        const percentage = (groupByAlgorithm[key].length / totalRamps) * 100;
        return {
          name: `A${key.split(' ')[1]} (${percentage.toFixed(2)}%)`,
          number: percentage
        };
      }
    );

    return groupByAlgorithmPercentage;
  }

  useEffect(() => {
    showDashboard && getRampAlgorithms((data: Ramps) => {
      const calculatedRampData = calculateRampData(data);
      setRampData(calculatedRampData as unknown as Ramps);
    });
  }, [showDashboard]);

  useEffect(() => {
    return () => {
      clearRampAlgorithmsInterval();
      setRampData([]);
    };
  }, []);

  const memoizedRampData = useMemo(() => rampData, [rampData]);

  return {
    rampData: memoizedRampData,
  };
};
