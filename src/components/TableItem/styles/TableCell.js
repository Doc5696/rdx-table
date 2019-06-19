import styled from 'styled-components';

const TAbleCell = styled.td`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 3px 15px;
  border-right: 1px solid #666;
  &:last-child{
    border-right: none;
  }
`;

export default TAbleCell;