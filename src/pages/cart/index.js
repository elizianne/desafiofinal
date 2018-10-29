import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as CartActions } from '../../store/ducks/cart';

import {
  Container, Table, ProductItem, TableContainer, TotalContainer,
} from './styles';

class Cart extends Component {
  static propTypes = {
    setQuantity: PropTypes.func.isRequired,
    removeProduct: PropTypes.func.isRequired,
    cart: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          image: PropTypes.string,
          name: PropTypes.string,
          brand: PropTypes.string,
          price: PropTypes.number,
          quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
          subTotal: PropTypes.string,
        }),
      ),
    }).isRequired,
    totalCart: PropTypes.string.isRequired,
  };

  handleQuantityChange = (id, value) => {
    const { setQuantity } = this.props;

    setQuantity(id, value);
  };

  renderItems = () => {
    const { cart, removeProduct } = this.props;

    return cart.data.map(item => (
      <ProductItem key={item.id}>
        <td style={{ width: '5%' }}>
          <img src={item.image} alt={item.name} />
        </td>
        <td style={{ width: '5%' }}>
          <span className="title">{item.name}</span> <br />
        </td>
        <td style={{ width: '5%' }}>
          <button type="button" onClick={() => removeProduct(item)}>
            <i className="fas fa-times" />
          </button>
        </td>
      </ProductItem>
    ));
  };

  render() {
    const { cart, total } = this.props;

    return (
      <Container>
          <Fragment>
            <TableContainer>
              <Table>
                <thead>
                  <tr>
                    <th>LIVRO</th>
                    <th>TITULO</th>
                  </tr>
                </thead>
                <tbody>{this.renderItems()}</tbody>
              </Table>
            </TableContainer>
          </Fragment>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: {
    ...state.cart,
    data: state.cart.data.map(item => ({
      ...item,
      subTotal: (item.price * item.quantity).toFixed(5),
    })),
  },
  total: state.cart.data.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(5),
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
