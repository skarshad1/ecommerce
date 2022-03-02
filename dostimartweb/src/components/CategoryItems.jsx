import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
`
const Wrapper = styled.div`
/* border: 5px solid teal;    */
border-radius: 20px;
margin: 0px 2px;
height: 30vh;
background-color: greenyellow;
cursor: pointer;
`

const Image = styled.img`
border-top-left-radius: 20px;
border-top-right-radius: 20px;
width: 100%;
height: 25vh;
/* object-fit: cover; */
`
const Title = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const CategoryItems = ({items}) => {
    return (
    <Container>
         <Wrapper>
            <Image src={items.img} />
            <Title>{items.title}</Title>
        </Wrapper>
    </Container>
  );
}

export default CategoryItems;
