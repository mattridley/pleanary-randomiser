/** @jsx jsx */
import React from 'react';
import { jsx, Global } from '@emotion/core';

import * as s from './Root.styles';

type Props = {
  children: React.ReactNode;
}

function Root({ children }: Props) {
  return (
    <div css={s.root}>
      <Global styles={s.globals} />
      {children}
    </div>
  );
}

export default Root;
