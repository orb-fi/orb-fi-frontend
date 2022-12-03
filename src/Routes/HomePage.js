import React from "react";
import { useTheme as useNextTheme } from "next-themes";
import {
  Navbar,
  Link,
  Text,
  Avatar,
  Dropdown,
  Divider,
} from "@nextui-org/react";
import Layout from "../Utils/Layout.js";
import { Switch, useTheme } from "@nextui-org/react";
import { Container, Box, Typography, IconButton, Tooltip } from "@mui/material";
import Grid from "@nextui-org/react/grid";
import Input from "@nextui-org/react/input";
import Loading from "@nextui-org/react/loading";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import Card from "@nextui-org/react/card";
import { disconnectWalet } from "../store/authSlice.js";
import { useDispatch, useSelector } from "react-redux";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const HomePage = () => {
  const dispatch = useDispatch();
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const isMobile = useMediaQuery("(max-width:600px)");
  const collapseItems = [
    "Profile",
    "Dashboard",
    "My Settings",
    "DisconnectWalet",
  ];
  const [toolTipTitle, setToolTipTitle] = React.useState("Copy");
  const authState = useSelector((state) => state.auth);
  const handleDisconnectWalet = () => {
    console.log("Disconnect");
  };
  return (
    <Container>
      Toggle Theme here
      <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
      <Box>
        <Layout>
          <Navbar isBordered variant="sticky">
            <Navbar.Brand
              css={{
                "@xs": {
                  w: "12%",
                },
              }}
            >
              <svg
                width="70"
                height="70"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="10"
                  y="10"
                  width="50"
                  height="50"
                  rx="25"
                  fill="#111111"
                />
                <path
                  d="M35 55C40.3043 55 45.3914 52.8929 49.1421 49.1421C52.8929 45.3914 55 40.3043 55 35C55 29.6957 52.8929 24.6086 49.1421 20.8579C45.3914 17.1071 40.3043 15 35 15L35 22.9937C38.1843 22.9937 41.2381 24.2586 43.4897 26.5103C45.7414 28.7619 47.0063 31.8157 47.0063 35C47.0063 38.1843 45.7414 41.2381 43.4897 43.4897C41.2381 45.7414 38.1843 47.0063 35 47.0063V55Z"
                  fill="white"
                />
                <g filter="url(#filter0_f_87_230)">
                  <circle cx="35" cy="35" r="10" fill="#41EC8B" />
                </g>
                <circle cx="35" cy="35" r="10" fill="#41EC8B" />
                <defs>
                  <filter
                    id="filter0_f_87_230"
                    x="0"
                    y="0"
                    width="70"
                    height="70"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="12.5"
                      result="effect1_foregroundBlur_87_230"
                    />
                  </filter>
                </defs>
              </svg>

              {/* <AcmeLogo /> */}
              <Text b color="inherit" hideIn="xs">
                ORB.FI
              </Text>
            </Navbar.Brand>
            <Navbar.Content
              enableCursorHighlight
              activeColor="secondary"
              variant="highlight-rounded"
            >
              <Grid>
                {isMobile ? (
                  <Input
                    clearable
                    bordered
                    color="primary"
                    width="200px"
                    Placeholder="Search..."
                    contentRight={<Loading size="xs" />}
                  />
                ) : (
                  <Input
                    clearable
                    bordered
                    color="primary"
                    Placeholder="Search..."
                    width="500px"
                    contentRight={<Loading size="xs" />}
                  />
                )}
              </Grid>
            </Navbar.Content>
            <Navbar.Content
              css={{
                "@xs": {
                  w: "12%",
                  jc: "flex-end",
                },
              }}
            >
              <Dropdown placement="bottom-right">
                <Navbar.Item>
                  <Dropdown.Trigger>
                    <Avatar
                      bordered
                      as="button"
                      color="secondary"
                      size="md"
                      src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                  </Dropdown.Trigger>
                </Navbar.Item>
                <Dropdown.Menu
                  aria-label="User menu actions"
                  color="secondary"
                  onAction={(actionKey) => console.log({ actionKey })}
                >
                  <Dropdown.Item key="profile" css={{ height: "$18" }}>
                    <Text b color="inherit" css={{ d: "flex" }}>
                      Hi Shreyas
                    </Text>
                    <Text b color="inherit" css={{ d: "flex" }}>
                      0xkjhdfih983fhfoi893
                    </Text>
                  </Dropdown.Item>
                  <Dropdown.Item key="settings" withDivider>
                    My Settings
                  </Dropdown.Item>
                  <Dropdown.Item
                    key="DisconnectWalet"
                    withDivider
                    color="error"
                  >
                    <Box onClick={() => dispatch(disconnectWalet())}>
                      Disconnect Walet
                    </Box>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Navbar.Content>
          </Navbar>
        </Layout>
      </Box>
      <Container
        sx={{
          minHeight: "calc(100vh - 100px)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* main card */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: "35px",
          }}
        >
          <Card css={{ mw: "500px" }}>
            <Card.Body>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography variant="dsmSmbd">Total Balance</Typography>
                </Box>
                <Box>
                  <Typography>Roller Button</Typography>
                </Box>
              </Box>
              <Box>
                <Typography variant="dsmReg">1100 USDT</Typography>
              </Box>
              <Box sx={{ mt: "10px" }}>
                <Divider />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: "15px",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography variant="dxsMed" inlineSize="10px">
                    0xjheqwkjhj2897ds987asd8
                  </Typography>
                </Box>
                <Box>
                  <Typography>modal</Typography>
                </Box>
              </Box>
            </Card.Body>
          </Card>
        </Box>

        {/* copy card */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: "20px",
          }}
        >
          <Card isPressable isHoverable css={{ mw: "400px" }}>
            <Card.Body>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Typography variant="dxsMed">OrbID:</Typography>
                <Typography>0xsadjhsdjkh289u928uh</Typography>
                <IconButton
                  onClick={() => {
                    navigator.clipboard
                      .writeText(authState[authState.currentWallet])
                      .then(() => {
                        setToolTipTitle("Copied");
                        setTimeout(() => {
                          setToolTipTitle("Copy");
                        }, 500);
                      });
                  }}
                >
                  <Tooltip title={toolTipTitle} placement="top" arrow>
                    <Typography color="white">Copy</Typography>
                  </Tooltip>
                </IconButton>

                <Box></Box>
              </Box>
            </Card.Body>
          </Card>
        </Box>
      </Container>
    </Container>
  );
};

export default HomePage;
