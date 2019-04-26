import { useCallback, useState, useRef } from 'react';

export default function useRandomiser(cells: Array<Array<string>>) {
  const [selectedCell, setSelected] = useState<number>(-1);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);

  const interval = useRef<number>();
  const timer = useRef<number>();

  const selectRandomCell = useCallback(
    () => {
      const cellCount = cells.reduce((count, row) => count + row.length, 0);

      setSelected(selected => {
        let newSelected = selected;
        while (newSelected === selected) {
          newSelected = Math.floor(cellCount * Math.random());
        }
        return newSelected;
      });
    },
    [cells]
  );

  const stopSpinning = useCallback(
    () => {
      setIsSpinning(false);

      interval.current && clearInterval(interval.current);
      interval.current = undefined;
      timer.current = undefined;
    },
    [interval, timer]
  );

  const spin = useCallback(
    () => {
      if (isSpinning) return;
      setIsSpinning(true);

      timer.current = window.setTimeout(stopSpinning, 2700);
      interval.current = window.setInterval(selectRandomCell, 350);
    },
    [isSpinning, interval, timer, selectRandomCell, stopSpinning]
  );

  return { selectedCell, isSpinning, spin };
}
