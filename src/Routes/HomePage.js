import React, { useState } from "react";
import { useTheme as useNextTheme } from "next-themes";
import {
  Navbar,
  Link,
  Text,
  Dropdown,
  Divider,
  Progress,
  Badge,
} from "@nextui-org/react";
import Layout from "../Utils/Layout.js";
import { deepOrange, deepPurple, green } from "@mui/material/colors";
import { Switch, useTheme } from "@nextui-org/react";
import {
  Container,
  Box,
  Typography,
  IconButton,
  Tooltip,
  Stack,
  ButtonBase,
} from "@mui/material";
import Grid from "@nextui-org/react/grid";
import Input from "@nextui-org/react/input";
import Loading from "@nextui-org/react/loading";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import Card from "@nextui-org/react/card";
import Avatar from "@mui/material/Avatar";
import { disconnectWalet } from "../store/authSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [amountUsed, setAmountUsed] = useState(400);
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const isMobile = useMediaQuery("(max-width:600px)");
  const [toolTipTitle, setToolTipTitle] = React.useState("Copy");
  const authState = useSelector((state) => state.auth);
  return (
    <Container
      sx={{
        minHeight: "calc(100vh - 100px)",
        display: "flex",
        flexDirection: "column",
      }}
    >
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
                    Placeholder="crons.orb"
                    contentRight={<Loading size="xs" />}
                  />
                ) : (
                  <Input
                    clearable
                    bordered
                    color="primary"
                    Placeholder="crons.orb"
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
              <Switch
                checked={isDark}
                onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
              />
            </Navbar.Content>
          </Navbar>
        </Layout>
      </Box>

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
            <Container>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography variant="dsmMed">Total Balance</Typography>
                </Box>
                <Box>
                  <Tooltip title="Purchse premium to extend limit">
                    <AddShoppingCartIcon />
                  </Tooltip>
                </Box>
              </Box>
              <Box>
                <Typography variant="dmdSmbd">1100 USD</Typography>
              </Box>
              <Box>
                <Typography
                  variant="txsreg"
                  sx={{
                    width: "100%",
                    mt: "10px",
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  max limit available
                </Typography>
              </Box>
              <Progress
                color="primary"
                size="sm"
                value={`${100 - (500 - amountUsed) / 5}`}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mt: "15px",
                  alignItems: "center",
                }}
              >
                <Box sx={{ width: "50px" }}>
                  <Typography variant="txlMed" inlineSize="10px" noWrap={true}>
                    0xjheqwkjhj2897ds987asd8
                  </Typography>
                </Box>
                <Box>
                  <Typography>modal</Typography>
                </Box>
              </Box>
            </Container>
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
              <Typography variant="tmdMed">0xsadjhsdjkh289u928uh</Typography>
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
                  <Badge>Copy</Badge>
                </Tooltip>
              </IconButton>

              <Box></Box>
            </Box>
          </Card.Body>
        </Card>
      </Box>
      {/* Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "25px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            minWidth: "50%",
          }}
        >
          {/* button 1 */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "60px",
                height: "60px",
                borderRadius: "30px",
                bgcolor: "#0072F5",
              }}
              onClick={() => navigate("/orbwallet")}
            >
              1
            </Button>
            <Typography variant="tlgMed">Orb Transfer</Typography>
          </Box>
          {/* button 2 */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "60px",
                height: "60px",
                borderRadius: "30px",
                bgcolor: "#0072F5",
              }}
            >
              2
            </Button>
            <Typography variant="tlgMed">Wallet-Wallet</Typography>
          </Box>
          {/* button 3 */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "60px",
                height: "60px",
                borderRadius: "30px",
                bgcolor: "#0072F5",
              }}
            >
              3
            </Button>
            <Typography variant="tlgMed">Split</Typography>
          </Box>
        </Box>
      </Box>

      {/* card pools */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "20px",
        }}
      >
        <Card css={{ mw: "500px" }}>
          <Card.Body>
            <Container>
              <Box>
                <Typography>Recent Transaction</Typography>
              </Box>
              <Box
                sx={{
                  mt: "15px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "80%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      ml: "15px",
                    }}
                  >
                    <Typography>abc.orb</Typography>
                    <Typography>2/4/22</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography>100 USDT</Typography>
                    <Typography>MATIC</Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mt: "15px",
                }}
              >
                <ButtonBase>View More</ButtonBase>
              </Box>
            </Container>
          </Card.Body>
        </Card>
      </Box>
    </Container>
  );
};

export default HomePage;
