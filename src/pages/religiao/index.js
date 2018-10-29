import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container } from './styles';

import { Creators as ProductsActions } from '../../store/ducks/products';

import Product from '../category/components/product';
import Loading from '../../components/Loading';

const books = [
  {
    id: 1,
    image:
      'http://imagens.lelivros.love/2015/04/Baixar-Livro-O-Livro-Das-Religioes-Jostein-Gaarder-em-PDF-ePub-e-Mobi.jpg',
    name: 'Filosofia da Religião',
  },
  {
    id: 2,
    image:
      'http://religiao.culturamix.com/blog/wp-content/gallery/livros-de-religiao-1/Livros-de-Religi%C3%A3o-4.jpg',
    name: 'Religião e Magia no Antigo Egito',
  },
  {
    id: 3,
    image: 'https://antigoegito.org/wp-content/uploads/2011/05/mulherfarao.jpg',
    name: 'A Mulher que Amou Faraó',
  },
  {
    id: 4,
    image: 'https://livros.gospelmais.com.br/files/livro-a-religiao-mais-negra-do-brasil.jpg',
    name: 'A Religião Mais Negra do Brasil',
  },
  {
    id: 5,
    image:
      'http://imagens.lelivros.love/2014/01/cover124-360x574.jpg',
    name: 'As Religiões que o Mundo Esqueceu',
  },
];

class Religiao extends Component {
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
)(Religiao);
