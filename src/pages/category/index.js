import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from './styles';

import { Creators as ProductsActions } from '../../store/ducks/products';

import Product from './components/product';
import Loading from '../../components/Loading';

const books = [
  {
    id: 1,
    image:
      'http://imagens.lelivros.love/2014/01/Download-Oliver-Bowden-Assassin%E2%80%99s-Creed-Vol-3-Oliver-Bowden-em-ePUB-mobi-e-PDF-370x554.jpg',
    name: 'Assassins Creed',
  },
  {
    id: 2,
    image:
      'http://2.bp.blogspot.com/-FK_ORJAKCJE/Tta2IcKKBqI/AAAAAAAAEbE/5A7B5hzoPSo/s1600/capa-a-batalha-do-apocalipse.jpg',
    name: 'A Batalha do Apocalipse',
  },
  {
    id: 3,
    image:
      'http://2.bp.blogspot.com/-Txqezf_Q7aw/UXNOZaV3GMI/AAAAAAAADgI/HtL1eO-Lmoo/s1600/kk1-cover.jpg',
    name: 'Kingdom Keepers',
  },
  {
    id: 4,
    image: 'http://statics.livrariacultura.net.br/products/capas_lg/263/1146263.jpg',
    name: 'Investigação Criminal',
  },
  {
    id: 5,
    image: 'https://statics.livrariacultura.net.br/products/capas_lg/710/3247710.jpg',
    name: 'Manual da Investigação Forense',
  },
  {
    id: 6,
    image: 'https://i.pinimg.com/originals/0f/2d/8d/0f2d8d32035728911efb808e252a02d5.jpg',
    name: 'A Guerra dos Fae',
  },
];

class Category extends Component {
  static propTypes = {
    getProductsRequest: PropTypes.func.isRequired,
    products: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
        }),
      ),
      loading: PropTypes.bool,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
  };

  componentDidMount() {
    this.requestProducts();
  }

  componentDidUpdate(prevProps) {
    const { match } = this.props;

    if (match.params.id !== prevProps.match.params.id) {
      this.requestProducts();
    }
  }

  requestProducts = () => {
    const { match, getProductsRequest } = this.props;

    getProductsRequest(match.params.id);
  };

  render() {
    return (
      <Container>
        {books.map(book => (
          <Product key={book.id} product={book} />
        ))}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => bindActionCreators(ProductsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Category);
