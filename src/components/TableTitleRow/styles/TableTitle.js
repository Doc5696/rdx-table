import styled from 'styled-components';

const TableTitle = styled.tr`
  background: #666;
  td {
    padding: 5px 15px;
    margin: 0;
    font-size: 2vmin;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #fff;
    text-align: right;
    border-right: 1px solid #fff;
    &:last-child {
      border-right: none;
    }
  }
`;

export default TableTitle;
