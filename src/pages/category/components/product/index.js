import React from 'react';
import PropTypes from 'prop-types';
import Reserve from '../../../../imagens/reserve.png';

import {
  Container, Image, Title, IconButton,
} from './styles';

const Product = ({ product }) => (
  <Container to={{ pathname: '/products/1', state: { data: product } }}>
    <Image src={product.image} alt="" />
    <Title>{product.name}</Title>
    <IconButton src={Reserve} alt="Reservar Livro" />
  </Container>
);

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default Product;
