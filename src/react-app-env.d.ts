/// <reference types="react-scripts" />

// Required until next emotion release where these are included
declare module '@emotion/styled/macro' {
  import styled from '@emotion/styled';
  export * from '@emotion/styled';
  export default styled;
}

declare module '@emotion/css/macro' {
  import css from '@emotion/css';
  export * from '@emotion/css';
  export default css;
}

