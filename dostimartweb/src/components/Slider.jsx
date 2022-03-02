import React from 'react';
import styled from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Container = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    /* border: 2px solid grey; */

`
const Arrow = styled.div`
width:50px;
height: 50px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
background-color:white;
position: absolute;
top:33%;

left:${props=> props.left ? "10px" : "" };
right:${props=> props.right ? "10px" : "" };
cursor: pointer;
opacity:0.5;

/* left: ${props => props.direction === "Left" && "10px"  };
right:${props => props.direction === "Right" && "10px" }; */
`
const Wrapper = styled.div`
height: 100%;
display: flex;
`
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display:flex;
    align-items: center;
    `
const ImgContainer = styled.div`
display:flex;
flex:1;
height: 100%; 
background-color: yellow;
/* position: absolute; */
`
const Image = styled.img`
display: flex;
height: 60%;

/* object-fit: contain; */
`
const InfoContainer = styled.div`
flex:1;
/* position: absolute; */
padding: 50px;
background-color: red;
`
const Title = styled.h1`font-size: 70px;`
const Description = styled.p`margin:50px 0px;
font-style: 20px;
font-weight: 500;
letter-spacing: 3px ;`
const Button = styled.button``






const Slider = () => {
  return (
    <Container>
      <Arrow left>
        <ArrowBackIosNewIcon />
      </Arrow>

      <Wrapper>
        
        <Slide>
          <ImgContainer>
            <Image src='https://images.unsplash.com/photo-1565987764832-c7add2029b96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'/>
          </ImgContainer>

          <InfoContainer>
            <Title>SUMMER SALE</Title>
            <Description>Dnt compromise on belongings</Description>
            <Button>Shop Now</Button>

          </InfoContainer>
        </Slide>

      </Wrapper>

      <Arrow right>
      <ArrowForwardIosIcon />
      </Arrow>
    </Container>
  );
}

export default Slider;
