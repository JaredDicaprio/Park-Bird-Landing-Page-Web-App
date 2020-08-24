import React, { useContext } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import dynamic from 'next/dynamic';



import { Title, Section, Box, Text } from "../../components/Core";

import GlobalContext from "../../context/GlobalContext";

import { device } from "../../utils";
import svgHeroShape from "../../assets/image/svg/hero-shape-svg.svg";
import iphonex1 from "../../assets/image/png/iphonex1.svg"
import googlePlayBadge from "../../assets/image/png/google-play-badge.png"
import appleStoreButtonImage from "../../assets/image/png/appleStoreButtonImage.png";
import { size } from "lodash";
import { color } from "styled-system";

{/*
NOTE:
'TextTransition' and 'presets' must be
imported this way in order to circumvent
server side rendering enforce by Next.js
*/}
const TextTransition = dynamic(
  () => import("react-text-transition"),
  { ssr: false }
)

const {presets} = dynamic(
  () => import("react-text-transition"),
  { ssr: false }
)


{ /* Components from asset pack */}
const ShapeTopLeft = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-50%, -50%);
`;

const TopCard = styled(Box)`
  width: 305px;
  box-shadow: ${({ theme }) => `0 32px 34px ${theme.colors.shadow}`};
  position: absolute;
  top: 14%;
  left: 0;
  @media ${device.md} {
    left: -13%;
  }
  @media ${device.lg} {
    left: 2%;
  }
`;

const BottomCard = styled(Box)`
  width: 305px;
  box-shadow: ${({ theme }) => `0 32px 34px ${theme.colors.shadow}`};
  position: absolute;
  bottom: 12%;
  right: 0;
  @media ${device.md} {
    right: -13%;
  }
  @media ${device.lg} {
    right: -5%;
  }
  @media ${device.xl} {
    right: -33%;
  }
`;

const ImgRight = styled.img`
  max-width: 50%;
  @media ${device.sm} {
    max-width: 60%;
  }
  @media ${device.lg} {
    max-width: 100%;
  }
`;

{ /* Custom Components (not included with the base asset) */}
const GoogleStoreButton = styled.img`
  max-width: 15em;

  @media ${device.sm} {
    max-width: 60em;
  }
  @media ${device.lg} {
    max-width: 15em;
  }
`;

const AppleStoreButton = styled.img`
 max-width: 12.5em;

@media ${device.sm} {
  max-width: 50em;
}
@media ${device.lg} {
  max-width: 12.5em;
}
`;

const HorizontalButtonPanel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

{ /* Messages for the animated text sequence */}
const animatedMessages = [
  "Fines",
  "Expensive parking",
  "No parking spaces",
  "Unsecure parking",
];

{ /* Main Screen Logic */}
export const Hero = () => {
  const gContext = useContext(GlobalContext);


  { /* App Download button click listeners */}
  const onAppleStoreButtonClicked = () => {
    console.log('Apple Store button clicked!')
  };

  const onGooglePlayStoreButtonClicked = () => {
    console.log('Google Play Store button clicked!')
  };

 
  { /* State/Hooks for animated text component */}
  const [index, setIndex] = React.useState(0);
  
  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      2500 // every 2.5 seconds
    );
  }, []);


  return (
    <>
      {/* <!-- Hero Area --> */}
      <Section className="position-relative">
        <div className="pt-5"></div>
        <ShapeTopLeft>
          <img src={svgHeroShape} alt="" className="img-fluid" />
        </ShapeTopLeft>
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg="5" md="8" sm="9" className="order-lg-2">
              <div className="text-center text-lg-right position-relative">
                <div
                  className="img-main"
                  data-aos="fade-down"
                  data-aos-duration="750"
                  data-aos-once="true"
                  data-aos-delay="500"
                >
                  <ImgRight  src={iphonex1} alt="" />
                </div>

                <TopCard
                  bg="secondary"
                  p="18px"
                  borderRadius={8}
                  className="d-flex align-items-center"
                  data-aos="fade-right"
                  data-aos-duration="750"
                  data-aos-once="true"
                  data-aos-delay="1000"
                >
                  <Box
                    width="30px"
                    minWidth="30px"
                    height="30px"
                    minHeight="30px"
                    bg="warning"
                    color="light"
                    borderRadius="50%"
                    className="d-flex align-items-center justify-content-center"
                    mr={3}
                  >
                    <i className="icon icon-check-2"></i>
                  </Box>
                  <Text color="light" fontSize={2} lineHeight="1.25">
                    You have successfully logged in
                  </Text>
                </TopCard>

                <BottomCard
                  bg="warning"
                  p="18px"
                  borderRadius={8}
                  className="d-flex align-items-center text-left"
                  data-aos="fade-left"
                  data-aos-duration="750"
                  data-aos-once="true"
                  data-aos-delay="1000"
                >
                  <Box
                    width="30px"
                    minWidth="30px"
                    height="30px"
                    minHeight="30px"
                    bg="secondary"
                    color="light"
                    borderRadius="50%"
                    className="d-flex align-items-center justify-content-center"
                    mr={3}
                  >
                    <i className="icon icon-check-2"></i>
                  </Box>
                  <Text color="dark" fontSize={2} lineHeight="1.25">
                    Booking Successful!
                  </Text>
                </BottomCard>
              </div>
            </Col>
            <Col lg="7" className="order-lg-1">
              <div
                data-aos="fade-right"
                data-aos-duration="750"
                data-aos-once="true"
                data-aos-delay="500"
              >
                <Box py={[null, null, null, 5]} pr={5} pt={[4, null]}>
                  <Title variant="hero">
                    Say goodbye to
                  </Title>
                  <h1>
                    <TextTransition
                      style={{fontSize: '1.5em', color: '#387BA0'}}                     
                      text={ animatedMessages[index % animatedMessages.length] }
                      springConfig={ presets}
                    />
                  </h1>
                  <Text mb={4}>
                  Parkbird is your alternative to crowded rest-areas. 
                  Want to get a good night’s sleep in a safe, 
                  fenced off area? Look no further!
                  Parkbird is platform supplying trucks with parking spots. 
                  Search for a place to experience premium overnight parking today.
                  </Text>

                  <HorizontalButtonPanel>
                     <GoogleStoreButton onClick={()=> onGooglePlayStoreButtonClicked()} src={googlePlayBadge} alt="" />
                     <AppleStoreButton  onClick={()=> onAppleStoreButtonClicked()} src={appleStoreButtonImage} alt="" />
                  </HorizontalButtonPanel>
                  
                </Box>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};




export default Hero;
