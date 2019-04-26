import React from 'react';

import Button from './components/Button';
import Cell from './components/Cell';
import Root from './components/Root';
import Table from './components/Table';

import useRandomiser from './hooks/useRandomiser';

import cells from './data/cells.json';

function App() {
  const { selectedCell, isSpinning, spin } = useRandomiser(cells);

  return (
    <Root>
      <Table>
        <tbody>
          {cells.map((row, rowIdx) => (
            <tr key={rowIdx}>
              {row.map((text: string, colIdx, cols) => {
                const cellIdx = rowIdx * cols.length + colIdx;
                return (
                  <Cell key={cellIdx} isSelected={selectedCell === cellIdx} cellIdx={cellIdx}>
                    {text}
                  </Cell>
                );
              })}
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={spin} disabled={isSpinning}>
        SPIN
      </Button>
    </Root>
  );
}

export default App;
