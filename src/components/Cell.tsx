/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import * as s from './Cell.styles';

type Props = {
  isSelected: boolean;
  cellIdx: number;
  children: React.ReactNode;
}

export function Cell({ children, ...props }: Props) {
  return (
    <td css={s.root(props)}  data-testid={props.isSelected && 'selected'}>
      <div css={s.content}>{children}</div>
    </td>
  );
}

export default Cell;
