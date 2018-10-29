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
      'https://3.bp.blogspot.com/-Va1O1Jfc658/V1TL2wSeshI/AAAAAAAAAPo/YPPENxClepEQnYH_U2ZnFwUPFJP32ztFQCKgB/s1600/dom-casmurro-machado-de-assis-657101-MLB20278796337_042015-F.jpg',
    name: 'Dom Casmurro',
  },
  {
    id: 2,
    image: 'https://blog.estantevirtual.com.br/wp-content/uploads/cortico-e1459796321129.jpg',
    name: 'O Cortiço',
  },
  {
    id: 3,
    image:
      'http://imagens.lelivros.love/2014/06/Download-Estudos-de-Literatura-Brasileira-Douglas-Tufano-em-ePUB-mobi-e-pdf1-360x574.jpg',
    name: 'Estudos de Literatura Brasileira',
  },
  {
    id: 4,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3CPVsFRJPWb2IOkff1x9RMY9QhxLdYxj_EvBmSj-OSiKw83V7',
    name: 'Um Sopro de Vida',
  },
  {
    id: 5,
    image: 'http://www.clubedoresumo.com/wp-content/uploads/2015/04/Capa-Macunaima.jpg',
    name: 'Macunaíma',
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
