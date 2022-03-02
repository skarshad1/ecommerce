import styled from "styled-components";

const Container =styled.div`
    height: 50px;
    background-color: #16558F;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 22px;

`

const Announcement = () => {
  return (
    <Container>
      Super Deal is here, You will get the best deals here for Month of Feb
    </Container>
  );
}

export default Announcement;
