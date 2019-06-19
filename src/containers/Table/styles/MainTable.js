import styled from 'styled-components';

const MainTable = styled.table`
  display: block;
  width: 100%;
  border-collapse: collapse;
  /* overflow-y: scroll; */
  /* max-height: 85vh; */
  tbody{
    height: 85vh;
    display: inline-block;
    width: 100%;
    overflow: auto;
  }
`;

export default MainTable;