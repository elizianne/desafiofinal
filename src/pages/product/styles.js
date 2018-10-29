import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  min-width: 330px;
  height: 350px;
  border: 1px solid #cecece;
  border-radius: 3px;
  padding: 30px;

  @media (max-width: 823px) {
    width: 100%;
  }

  img {
    height: 100%;
    max-width: 100%;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 330px;
  margin-left: 30px;

  @media (max-width: 823px) {
    width: 100%;
  }

  .h3 {
    padding-top: 200px;
  }

  .title {
    font-size: 28px;
    font-weight: bold;
    color: #222;
  }

  .brand {
    font-size: 18px;
    margin-top: 5px;
    color: #999;
  }

  .price {
    margin-top: 60px;
    font-size: 28px;
    color: #37bea9;
    font-weight: bold;
  }

  button {
    margin: 20px 0;
    background: #37bea9;
    border: none;
    border-radius: 3px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    height: 50px;
    text-transform: uppercase;
    &:hover {
      background: #2d9f8d;
    }
  }
`;
