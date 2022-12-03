import { Card, Text } from "@nextui-org/react";
import React from "react";

const OrbWalletOverview = () => {
  return (
    <Card isHoverable variant="bordered" css={{ mw: "400px" }}>
      <Card.Body>
        <Text>A hoverable card.</Text>
      </Card.Body>
    </Card>
  );
};

export default OrbWalletOverview;
