import React from 'react';
import { connect } from 'react-redux';
import ProductItem from './ProductItem';
import { Card, Container } from 'semantic-ui-react';

export const ProductList = (props) => (
  <Container>
    <div className='products-list'>
      {
          props.products.map((product) => {
          return <ProductItem key={product.id} {...product} />;
          })
      }
    </div>
    </Container>
);

const mapStateToProps = (state) => {
  return {
    products: state.products
  };
};

export default connect(mapStateToProps)(ProductList);