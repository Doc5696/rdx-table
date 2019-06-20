import styled from 'styled-components';

const MainTable = styled.table`
  display: flex;
  flex-flow: column;
  height: 100%;
  width: 100%;
  thead{
    flex: 0 0 auto;
    width: calc(100% - 0.9em);
    display: table;
    table-layout: fixed;
  }
  tbody{
    flex: 1 1 auto;
    display: block;
    overflow-y: scroll;
    tr{
      width: 100%;
      display: table;
      table-layout: fixed;
    }
  }
`;

export default MainTable;