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
      'https://rotinadoleitor.com.br/wp-content/uploads/2017/05/top-10-livros-de-romance-que-voce-precisa-ler-202x300.png',
    name: 'Namorada de Aluguel',
  },
  {
    id: 2,
    image: 'https://i.pinimg.com/originals/86/b6/7e/86b67e1b5de6628b7ae27ed3d929e488.jpg',
    name: 'A Garota que Você Não Quis',
  },
  {
    id: 3,
    image: 'https://i.pinimg.com/originals/87/a1/31/87a1312d1f63654f223ebf8b0b968963.jpg',
    name: 'Louca por Você',
  },
  {
    id: 4,
    image: 'http://statics.livrariacultura.net.br/products/capas_lg/263/1146263.jpg',
    name: 'Investigação Criminal',
  },
  {
    id: 5,
    image:
      'http://imagens.lelivros.love/2017/07/Baixar-Livro-Sem-Promessa-Sem-Compromisso-Nora-Roberts-em-Pdf-ePub-e-Mobi-ou-ler-online-370x555.jpg',
    name: 'Nora Roberts',
  },
];

class Romance extends Component {
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
)(Romance);
