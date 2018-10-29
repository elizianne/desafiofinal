import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  width: 100%;
  padding: 20px;
`;

export const TableContainer = styled.div`
  border: 1px solid #ecf0f1;
  border-radius: 3px;
  width: 100%;
  padding: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead th {
    font-size: 16px;
    color: #747d8c;
    font-weight: bold;
    text-transform: uppercase;
    padding-right: 15px;
    text-align: left;
  }
`;

export const ProductItem = styled.tr`
  &:not(:last-child) {
    td {
      border-bottom: 1px solid #ecf0f1;
    }
  }

  td {
    /* border-bottom: 1px solid #ecf0f1; */
    padding-bottom: 20px;
    padding-top: 10px;
    padding-right: 15px;
    .title {
      font-size: 16px;
      font-weight: bold;
    }
    .brand {
      font-size: 14px;
      color: #747d8c;
    }

    .price {
      font-size: 22px;
      color: #37bea9;
      font-weight: bold;
    }

    input {
      border: 1px solid #a4b0be;
      border-radius: 3px;
      height: 20px;
      padding: 10px 5px;
      font-size: 13px;
      color: #747d8c;
      width: 50px;
    }

    &:first-child {
      img {
        width: 50px;
        height: auto;
      }
    }

    &:last-child {
      text-align: right;
      button {
        color: #747d8c;
        font-size: 18px;
        border: none;
        background: transparent;
      }
    }
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 40px 70px;

  div {
    display: flex;
    align-items: center;
  }

  .text {
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    color: #747d8c;
    margin-right: 10px;
  }

  .price {
    font-size: 24px;
    color: #37bea9;
    font-weight: bold;
  }
`;
