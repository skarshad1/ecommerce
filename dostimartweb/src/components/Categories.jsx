import React from 'react';
import styled from 'styled-components';
import CategoryItems from './CategoryItems';
import { CategoriesData } from "./Data";


const Container = styled.div`
    display: flex;
    box-sizing: border-box;
`
const Categories = () => {
  return (
    <Container>
      {CategoriesData.map(items => <CategoryItems items={items} key={items.id} />)}
    </Container>
  );
}

export default Categories;
