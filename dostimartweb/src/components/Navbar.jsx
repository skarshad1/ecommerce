import React from 'react'
import styled from 'styled-components'
import Search from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import SearchBarDesign from './SearchBarDesign';
import logo from './Images/Logo.png';

const Container =styled.div`
height: 60px;
background-color: #2296BC;
color:white;
`
const Wrapper = styled.div`
/* color: white; */
padding: 10px 10px;
display: flex;
justify-content: space-between;
`
const Left = styled.div`
display: flex;
flex: 1;
/* This flex value is width compared to other other properties where we used */
`

const LogoImage = styled.img`
height: 30px;
  
`
const Logo = styled.h1`
margin-left: 10px ;
margin-right: 30px;
`

const SearchBox=styled.div`
  border: 2px solid lightgray;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 10px;

`
const Input=styled.input`
margin-right: 5px;
border: none;
width:40vw;
height:30px;
`

// const Center = styled.div`
// flex: 1;
// `

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`
const MenuItems = styled.div`
  margin: 0 10px;
  cursor: pointer;
  

  &:hover{
    color:black;
  }

`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        
        <Left>
        <LogoImage src={logo} />
        <Logo>DostiMart</Logo>
        <SearchBox><Input /><Search style={{color:'#03045B', fontSize:20}} /></SearchBox>
        </Left>

        {/* <Center> */}
          
          {/* <SearchBarDesign /> */}
          {/*   <SearchAutoComplete />    */}
          {/* This is another jsx file where code is copied from materia ui website */}
        {/* </Center> */}
        
        <Right>
          <MenuItems>REGISTER</MenuItems>
          <MenuItems>SIGN IN</MenuItems>
          <MenuItems>
            <Badge badgeContent={1} color="primary">
            <ShoppingCartOutlined /> 
            </Badge>
          </MenuItems>

        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
