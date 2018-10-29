import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container } from './styles';

const Cart = ({ cartSize }) => <Container to="/cart"> Lista de Livros ({cartSize})</Container>;

Cart.propTypes = {
  cartSize: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  cartSize: state.cart.data.length,
});

export default connect(mapStateToProps)(Cart);
