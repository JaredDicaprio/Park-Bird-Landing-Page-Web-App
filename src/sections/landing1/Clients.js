import React from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";

import { Box, Text } from "../../components/Core";
import { device } from "../../utils";

import imgL1Brand1 from "../../assets/image/png/l1-brand1.png";
import imgL1Brand2 from "../../assets/image/png/l1-brand2.png";
import imgL1Brand3 from "../../assets/image/png/l1-brand3.png";
import imgL1Brand4 from "../../assets/image/png/l1-brand4.png";
import imgL1Brand5 from "../../assets/image/png/l1-brand5.png";

import image8 from "../../assets/image/png/image-8.png";
import image9 from "../../assets/image/png/image-9.png";
import image10 from "../../assets/image/png/image-10.png";
import image11 from "../../assets/image/png/image-11.png";
import image12 from "../../assets/image/png/image-12.png";
import image13 from "../../assets/image/png/image-13.png";
import image14 from "../../assets/image/png/image-14.png";

const TitleContainer = styled(Box)`
  position: relative;
  &:after {
    content: "";
    height: 1px;
    top: 50%;
    width: 32%;
    background: ${({ theme }) => theme.colors.border};
    margin-top: 0.5px;
    display: none;

    @media ${device.md} {
      width: 40%;
      display: block;
    }
    @media ${device.lg} {
      width: 52%;
    }
    @media ${device.xl} {
      width: 60%;
    }
  }
`;

const Brand = styled(Box)`
  opacity: 0.7;
  transition: all 0.3s ease-out;
  &:hover {
    opacity: 1;
  }
`;

const Clients = () => (
  <>
    {/* <!-- Clients Brands Area --> */}
    <Box pb={"30px"}>
    <CustomText>Our Partners</CustomText>
    <Carousel>
    <Brand className="" py={3} mx={4}>
            <img src={image8} alt="" className="img-fluid" />
          </Brand>
          <Brand className="" py={3} mx={4}>
            <img src={image9} alt="" className="img-fluid" />
          </Brand>
          <Brand className="" py={3} mx={4}>
            <img src={image10} alt="" className="img-fluid" />
          </Brand>
          <Brand className="" py={3} mx={4}>
            <img src={image11} alt="" className="img-fluid" />
          </Brand>
          <Brand className="" py={3} mx={4}>
            <img src={image12} alt="" className="img-fluid" />
          </Brand>
          <Brand className="" py={3} mx={4}>
            <img src={image13} alt="" className="img-fluid" />
          </Brand>
    </Carousel>

      {/*
      <Container>
        <Box
          className="d-flex justify-content-center justify-content-lg-between
         align-items-center flex-wrap"
          mx="-32px"
        >
          <Brand className="" py={3} mx={4}>
            <img src={image8} alt="" className="img-fluid" />
          </Brand>
          <Brand className="" py={3} mx={4}>
            <img src={image9} alt="" className="img-fluid" />
          </Brand>
          <Brand className="" py={3} mx={4}>
            <img src={image10} alt="" className="img-fluid" />
          </Brand>
          <Brand className="" py={3} mx={4}>
            <img src={image11} alt="" className="img-fluid" />
          </Brand>
          <Brand className="" py={3} mx={4}>
            <img src={image12} alt="" className="img-fluid" />
          </Brand>
          <Brand className="" py={3} mx={4}>
            <img src={image13} alt="" className="img-fluid" />
          </Brand>
          <Brand className="" py={3} mx={4}>
            <img src={image14} alt="" className="img-fluid" />
          </Brand>
        </Box>
      </Container>
      */}
    </Box>
  </>
);

const CustomText = styled.h1`
  font-size: 3.5em;
  text-align: center;
`;

const UnderLine = styled.div`
 height: 5px;
  width: 500px;
  margin:0 auto;
  border-bottom: 0.15em solid grey;
  margin-bottom: 3em;
  margin-top: 1em;
`;

const Carousel = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Clients;
