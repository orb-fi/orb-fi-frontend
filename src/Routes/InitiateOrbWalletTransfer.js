import React from "react";
import { Container, Box, Button, Typography } from "@mui/material";
import Grid from "@nextui-org/react/grid";
import Input from "@nextui-org/react/input";
import Loading from "@nextui-org/react/loading";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Navbar, Text, Dropdown, Card } from "@nextui-org/react";
import Avatar from "@mui/material/Avatar";
import { disconnectWalet } from "../store/authSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { Switch, useTheme } from "@nextui-org/react";
import Layout from "../Utils/Layout.js";
import { useNavigate } from "react-router-dom";
import { useTheme as useNextTheme } from "next-themes";
import OrbWalletOverview from "../Components/OrbWalletOverview";
const InitiateOrbWalletTransfer = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const isMobile = useMediaQuery("(max-width:600px)");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Container
      sx={{
        minHeight: "calc(100vh - 100px)",
        display: "flex",
        flexDirection: "column",
        alignItems:"center"
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
      <Box sx={{display:'flex',justifyContent:"center",mt:'25px'}}>
        <OrbWalletOverview/>
      </Box>

      {/* payment card */}
      <Box sx={{mt:"20px"}}>

      <Card css={{ w: "500px" }}>
      <Card.Body>
       <Box sx={{display:"flex",justifyContent:'center',alignItems:'center',flexDirection:"column"}}>
      <Typography variant="dsmMed" sx={{m:'10px'}}>Orb Pay !</Typography>
      
       <Input css={{w:"400px",mh:"80px"}} 
          bordered 
          Placeholder="enter orb@/wallet id" 
          color="default" />
          <Button variant="contained" sx={{mt:"10px",borderRadius:"22px",width:"400px",height:"50px"}}>Confirm</Button>
       </Box>
      </Card.Body>
    </Card>
      </Box>
    </Container>
  );
};

export default InitiateOrbWalletTransfer;
