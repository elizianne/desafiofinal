import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  height: 380px;
  border: 1px solid #ecf0f1;
  border-radius: 4px;
  padding: 10px;

  &:hover {
    border-color: #ddd;
  }
`;

export const Image = styled.img`
  margin-bottom: 15px;
  width: 180px;
  height: 260px;
`;

export const IconButton = styled.img`
  margin-bottom: 15px;
  width: 32px;
  height: 32px;
`;

export const Title = styled.div`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 16px;
  color: #000;
  align-self: center;
  width: 180px;
`;

export const Brand = styled.div`
  width: 32;
  height: 32;
  color: #a5a5a5;
`;

export const Price = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 22px;
  color: #37bea9;
`;
