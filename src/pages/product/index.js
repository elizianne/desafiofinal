import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as CartActions } from '../../store/ducks/cart';

import { Container, ImgContainer, DetailsContainer } from './styles';

import api from '../../services/api';
import Loading from '../../components/Loading';

class Product extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
    addProduct: PropTypes.func.isRequired,
  };

  state = {
    product: this.props.location.state.data,
    loading: true,
    redirectToCart: false,
  };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const { data } = await api.get(`products/${id}`);

    this.setState({
      product: data,
      loading: false,
    });
  }

  addToCart = (product) => {
    this.props.addProduct(product);
    this.setState({
      redirectToCart: true,
    });
  };

  render() {
    const { product, loading, redirectToCart } = this.state;
    console.log('product ', this.props.location.state.data);
    if (redirectToCart) {
      return <Redirect to="/cart" />;
    }
    return (
      <Container>
        <Fragment>
          <ImgContainer>
            <img src={product.image} alt={product.name} />
          </ImgContainer>
          <DetailsContainer>
            <span className="title">{product.name}</span>
            <h3>Resumo</h3>
            <button type="button" onClick={() => this.addToCart(product)}>
              Reservar Livro
            </button>
          </DetailsContainer>
        </Fragment>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Product);
