import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as CategoriesActions } from '../../../../store/ducks/categories';

import { Container, MenuLink } from './styles';

class Menu extends Component {
  static propTypes = {
    categories: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
        }),
      ),
    }).isRequired,
    getCategoriesRequest: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { getCategoriesRequest } = this.props;
    getCategoriesRequest();
  }

  render() {
    return (
      <Container>
        <li>
          <MenuLink to="/category/">Livros de Ação</MenuLink>
        </li>
        <li>
          <MenuLink to="/romance/">Livros de Romance</MenuLink>
        </li>
        <li>
          <MenuLink to="/literatura/">Literatura</MenuLink>
        </li>
        <li>
          <MenuLink to="/religiao/">Livros Religiosos</MenuLink>
        </li>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
