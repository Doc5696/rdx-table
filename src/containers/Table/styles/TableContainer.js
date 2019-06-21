import styled from 'styled-components';

const TableContainer = styled.div`
  height: 85vh;
  .buttons {
    display: block;
    height: 5%;
    padding: 15px;
    text-align: center;
    button {
      border: 1px solid transparent;
      padding: 10px 15px;
      margin: 0 5px;
      transition: 0.15s;
      outline-style: none;
    }
    .normal {
      background: #666;
      color: white;
      &:hover {
        border: 1px solid #666;
        background: transparent;
        color: #666;
        cursor: pointer;
      }
    }
    .active {
      background: #eee;
      color: #666;
      border: 1px solid #666;
      &:hover {
        border: 1px solid #666;
        background: transparent;
        color: #666;
        cursor: pointer;
      }
    }
  }
`;

export default TableContainer;
