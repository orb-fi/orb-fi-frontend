import { Container, Typography } from "@mui/material";
import { Card, Col, Row, Text } from "@nextui-org/react";
import React, { useState } from "react";

const OrbWalletOverview = () => {
  const [crypto, setCrypto] = useState("USDT");
  return (
    <Container>
      <Card isHoverable variant="bordered" css={{ mw: "500px" }}>
        <Card.Body>
          <Row>
            <Typography variant="dsmSmbd">Orb Wallet</Typography>
          </Row>
          <Row>
            <Col
              css={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <Typography variant="tlgReg">Balance: </Typography>
              <Typography variant="dxsSmbd">1000</Typography>
              <img
                src={`/cryptocurrency/${crypto.toLowerCase()}.png`}
                width="30"
                alt={crypto}
              />
            </Col>
            <Col>
            
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default OrbWalletOverview;
