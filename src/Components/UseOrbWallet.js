import React from "react";
import { Card, Col, Row, Button } from "@nextui-org/react";
import { Container, Typography } from "@mui/material";

const UseOrbWallet = () => {
  return (
    <Container>
      <Card css={{ maxWidth: "500px", h: "300px" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
          <Col css={{ maxWidth: "200px", display: "flex", marginTop: "50px" }}>
            <Typography
              variant={"dxsSmbd"}
              weight="bold"
              transform="uppercase"
              color="#fff"
            >
              Make seamless payments using orb wallet
            </Typography>
          </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Card.Image
            src="/Assets/cardbg.png"
            objectFit="cover"
            width="100%"
            height="100%"
            alt="Relaxing app background"
          />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bgBlur: "#0f111466",
            borderTop: "$borderWeights$light solid $gray800",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row>
            <Col>
              <Row>
                <Col>
                  <Typography color="#d1d1d1" variant={"tmdReg"}>
                    Available Now
                  </Typography>
                </Col>
              </Row>
              <Typography color="#d1d1d1" variant={"tmdReg"}>
                Start Today
              </Typography>
            </Col>
            <Col css={{display:"flex",alignitems: "center"}}>
              <Row justify="flex-end">
                <Button
                  flat
                  auto
                  rounded
                  css={{ color: "#94f9f0", bg: "#94f9f026" }}
                >
                  <Typography
                    css={{ color: "inherit" }}
                    variant={"tmdMed"}
                    weight="bold"
                    transform="uppercase"
                  >
                    Pay Using OrbWallet
                  </Typography>
                </Button>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default UseOrbWallet;
