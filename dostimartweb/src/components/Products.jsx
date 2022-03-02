import React from 'react';
import styled from 'styled-components';
import { ProductsData } from './Data';
import Product from './Product';

const Container = styled.div`
    
    
`
const Products = () => {
  return (
    <Container>
      {ProductsData.map(items => <Product key={items.id} items={items} />)}
    </Container>
  );
}

export default Products;
