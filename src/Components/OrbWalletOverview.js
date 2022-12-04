import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import { Card, Col, Row, Spacer, Text } from "@nextui-org/react";
import React, { useState } from "react";

import { green, pink } from "@mui/material/colors";
import AddCardIcon from "@mui/icons-material/AddCard";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import NetworkGroup from "./NetworkGroup";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const OrbWalletOverview = () => {
  const [crypto, setCrypto] = useState("USDT");
  return (
    <Container>
      <Card variant="bordered" css={{ mw: "500px" }}>
        <Container>
          <Card.Body>
            <Row>
              <Typography variant="dsmSmbd">Orb Wallet</Typography>
            </Row>
            <Row css={{ display: "flex", justifyContent: "space-between" }}>
              <Col
                css={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                <Typography variant="tlgReg" sx={{ mr: "5px" }}>
                  Balance:{" "}
                </Typography>

                <Typography
                  variant="tlgSmbd"
                  sx={{ mr: "5px" }}
                >{`1000 USD`}</Typography>
              </Col>
              <Col
                css={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Box>
                  <Typography variant="tsmSmbd">Networks</Typography>
                  <NetworkGroup />
                </Box>
              </Col>
            </Row>
            <Row>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Stack
                  direction="row"
                  spacing={6}
                  sx={{ mt: 2, display: "flex", alignItems: "center" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: green[500],
                        width: 70,
                        height: 70,
                        cursor: "pointer",
                      }}
                    >
                      <AddCardIcon />
                    </Avatar>
                    <Typography variant="tlgMed">Add funds</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: green[500],
                        width: 70,
                        height: 70,
                        cursor: "pointer",
                      }}
                    >
                      <ManageAccountsIcon />
                    </Avatar>
                    <Typography variant="tlgMed">Settings</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: green[500],
                        width: 70,
                        height: 70,
                        cursor: "pointer",
                      }}
                    >
                      <PeopleAltIcon />
                    </Avatar>
                    <Typography variant="tlgMed">Friends</Typography>
                  </Box>
                </Stack>
              </Box>
            </Row>
          </Card.Body>
        </Container>
      </Card>
    </Container>
  );
};

export default OrbWalletOverview;
