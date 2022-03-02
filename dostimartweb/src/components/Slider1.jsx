import styled from "styled-components";
import React, { useState } from "react";
import logo from "./Images/Logo.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { SliderData } from "./Data";

const Container = styled.div`
  /* background-color: yellow; */
  display: flex;
  overflow: hidden;
`;
const Wrapper = styled.div`
  /* background-color: blue; */
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(-${(props) => props.slideIndex * 66}vw);
`;

const Arrow = styled.div`
  background-color: white;
  cursor: pointer;
  opacity: 0.5;
  position: absolute;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  top: 35vh;
  right: ${(props) => (props.right ? "10px" : "")};
  left: ${(props) => (props.left ? "10px" : "")};
`;

const WrapperArrows = styled.div`
  background-color: green;
`;

const Image = styled.div`
  background-color: green;
  width: 1000px;
  height: 300px;
  border-radius: 100px;
  margin: 5px;
`;

const Slider1 = () => {
  const [slideIndex, setslideIndex] = useState(0);

    
  const ClickHandler = (direction) => {
    if (direction === "left") {
      setslideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setslideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <>
      <Container>
        <Wrapper slideIndex={slideIndex}>
          {SliderData.map((item) => {
            return (
              <Image>
                <img
                  key={item.id}
                  src={item.img}
                  style={{ borderRadius: "25px" }}
                />
              </Image>
            );
          })}
        </Wrapper>
      </Container>

      <WrapperArrows>
        <Arrow left onClick={() => ClickHandler("left")}>
          <ArrowBackIosNewIcon />{" "}
        </Arrow>
        <Arrow right onClick={() => ClickHandler("")}>
          <ArrowForwardIosIcon />{" "}
        </Arrow>
      </WrapperArrows>
    </>
  );
};

export default Slider1;
