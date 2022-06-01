import styled from 'styled-components';

/* eslint-disable-next-line */
export interface StorifycompsProps {}

const StyledStorifycomps = styled.div`
  color: pink;
`;

export function Storifycomps(props: StorifycompsProps) {
  return (
    <StyledStorifycomps>
      <h1>Welcome to Storifycomps!</h1>
    </StyledStorifycomps>
  );
}

export default Storifycomps;
