import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Section, Box, Text } from "../../components/Core";

import imgL1FeatureOval from "../../assets/image/png/l1-feature-oval.png";
import imgL1FeatureCurve from "../../assets/image/svg/l1-curve-feature.svg";

import cctv1 from "../../assets/image/png/cctv-1.png";
import cctv4 from "../../assets/image/png/cctv-4.png";
import fence from "../../assets/image/png/fence.png";
import securityGuard from "../../assets/image/png/security-guard.png";

const ShapeTopRight = styled(Box)`
  position: absolute;
  top: 0;
  right: 0px;
`;

const ShapeBottmRight = styled(Box)`
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  img {
    min-width: 100%;
  }
`;

{ /* Custom Components (not included with the base asset) */}
const CardIconImage = styled.img`
  max-width: 3em;
  margin-left: 0.5em;
`;

const TextSizeWrapper = styled.div`
  height: 9em;
`;


const FeatureCard = ({
  color = "primary",
  iconName,
  title,
  children,
  srcImage,
  ...rest
}) => (
  <Box bg="light" py="25px" px="30px" borderRadius={10} mb={4} {...rest}>
    <Box
      size={69}
      borderRadius="50%"
      color={color}
      fontSize="28px"
      className="d-flex justify-content-center align-items-center"     
    >
      {/*<i className={`icon ${iconName}`}></i>*/}
      <i><CardIconImage src={srcImage} alt="" ></CardIconImage></i>
    </Box>
    <div>
      <Text
        color="heading"
        as="h3"
        fontSize={4}
        fontWeight={500}
        letterSpacing={-0.75}
        my={3}
      >
        {title}
      </Text>
      <Text fontSize={2} lineHeight={1.75}>
        {children}
      </Text>
    </div>
  </Box>
);

const Feature = () => (
  <>
    {/* <!-- Feature section --> */}
    <Section bg="secondary" className="position-relative">
      <ShapeTopRight
        data-aos="fade-left"
        data-aos-duration="750"
        data-aos-once="true"
      >
        <img src={imgL1FeatureOval} alt="" className="img-fluid" />
      </ShapeTopRight>
      <ShapeBottmRight>
        <img src={imgL1FeatureCurve} alt="" className="img-fluid" />
      </ShapeBottmRight>
      <Container>
        <Row className="align-items-center">
          <Col lg="6" className="pl-lg-5 order-lg-2">
            <div className="feature-content section-title">
              <Title color="light">Security</Title>              
              <Text color="light" opacity={0.7} mb={4}>
              At all of Park Bird's locations, security is of the highest priority. 
              We ensure that you and your cargo remains safe during your parking with us.
              </Text>

              {/*<Button variant="outline">Check all features</Button>*/}
            </div>
          </Col>
          <Col lg="6" className="order-lg-1 mt-5 mt-lg-0">
            <Row>
              <Col md="6">
                <FeatureCard
                  color="primary"
                  iconName="icon-layout-11"
                  title="Plate Scanner"
                  srcImage = {cctv1}
                >
                   <TextSizeWrapper>
                    Our cameras will scan your license plate, 
                    and if you have booked a parking space, you will then be granted access.
                   </TextSizeWrapper>

                </FeatureCard>
              </Col>
              <Col md="6">
                <FeatureCard
                  color="warning"
                  iconName="icon-sidebar-2"
                  title="Cameras"
                  srcImage = {cctv4}
                >
                  <TextSizeWrapper>
                  Our cameras cover and survey the entire parking area, so that you will feel safe.
                  </TextSizeWrapper>
                  
                </FeatureCard>
              </Col>
              <Col md="6">
                <FeatureCard
                  color="secondary"
                  iconName="icon-bookmark-2-2"
                  title="Fences and Gates"
                  srcImage = {fence}
                >
                  <TextSizeWrapper>
                  The perimeters of our locations are protected by fences and gates.
                  </TextSizeWrapper>
                </FeatureCard>
              </Col>
              <Col md="6">
                <FeatureCard
                  color="ash"
                  iconName="icon-chat-45-2"
                  title="Guards"
                  srcImage = {securityGuard}
                >
                  <TextSizeWrapper>
                  Our diligent guards routinely patrol the parking areas, 
                  ensuring that you and your cargo remains safe.
                  </TextSizeWrapper>
                </FeatureCard>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Feature;
