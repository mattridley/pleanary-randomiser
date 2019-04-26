import css from '@emotion/css/macro';
import randomColor from 'randomcolor';

export const root = ({ isSelected, cellIdx }: { isSelected: boolean, cellIdx: number }) => css`
    width: 25%;
    padding-bottom: 25%;
    height: 0;
    position: relative;
    max-width: 160px;
    max-height: 160px;
    border: 1px solid #333;
    text-align: center;
    background-color: ${isSelected && randomColor({ seed: cellIdx, luminosity: 'bright' })};
    color: ${isSelected && 'white'};
    font-weight: ${isSelected && 'bold'};
  `;

export const content = css`
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    padding: 5px;
  `