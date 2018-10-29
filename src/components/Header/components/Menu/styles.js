import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px 35px;
  background: linear-gradient(to bottom, #808080 0%, #000000 100%), transparent;
  border-radius: 3px;
  color: #fff;
  width: 100%;
  height: 70px;

  li {
    list-style: none;
    a {
      color: inherit;
      text-decoration: none;
      font-size: 20px;
      line-height: 32px;
      padding: 15px;

      &:hover {
        color: #fff;
      }
    }
  }
`;

export const MenuLink = styled(Link)`
  list-style: none;
  color: inherit;
  text-decoration: none;
  font-size: 20px;
  line-height: 32px;
  padding: 15px;

  &:hover {
    color: #fff;
  }
`;
