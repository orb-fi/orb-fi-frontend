import React, { useState } from "react";
import { Container, Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Input, Grid, Modal, Text, Spacer } from "@nextui-org/react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const EnterName = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:600px)");
  const [inputValue, setInputValue] = useState("");
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <Container
      sx={{
        minHeight: "calc(100vh - 100px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignitems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-top",
        }}
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 250 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M125 250C158.152 250 189.946 236.83 213.388 213.388C236.83 189.946 250 158.152 250 125C250 91.848 236.83 60.0537 213.388 36.6117C189.946 13.1696 158.152 6.45495e-06 125 0L125 49.9605C144.902 49.9606 163.988 57.8665 178.061 71.9391C192.134 86.0117 200.039 105.098 200.039 125C200.039 144.902 192.134 163.988 178.061 178.061C163.988 192.134 144.902 200.039 125 200.039L125 250Z"
            fill="white"
          />
          <g filter="url(#filter0_f_24_14)">
            <circle cx="125" cy="125" r="62.5" fill="#41EC8B" />
          </g>
          <circle cx="125" cy="125" r="62.5" fill="#41EC8B" />
          <defs>
            <filter
              id="filter0_f_24_14"
              x="37.5"
              y="37.5"
              width="175"
              height="175"
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
                result="effect1_foregroundBlur_24_14"
              />
            </filter>
          </defs>
        </svg>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "15px",
        }}
      >
        <Typography variant={isMobile ? "dxsBd" : "d2xlMed"}>
          {`Enter your nickname :") `}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "15px",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid>
            {isMobile ? (
              <Input
                value={inputValue}
                width="280px"
                height="60px"
                placeholder="crons"
                onChange={handleInputChange}
              />
            ) : (
              <Input
                value={inputValue}
                width="300px"
                height="50px"
                placeholder="crons"
                onChange={handleInputChange}
              />
            )}
          </Grid>
        </Box>
      </Box>

      {/* button */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "30px",
        }}
      >
        <Button
          variant="contained"
          sx={{
            borderRadius: "20px",
            width: "280px",
            height: "50px",
            backgroundColor: "#0072F5",
          }}
          onClick={handler}
        >
          Continue
        </Button>
        <Modal
          closeButton
          blur
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
        >
          <Modal.Header>
            <Text id="modal-title" size={25}>
              {`Hey ${inputValue} :")`}
              <Spacer />
              <Text b size={20}>
                You are all set to get your USDT stables rolling
              </Text>
            </Text>
          </Modal.Header>
          <Modal.Body></Modal.Body>
          <Modal.Footer>
            <Button
              auto
              colour="primary"
              varinat="contained"
              onClick={closeHandler}
            >
              <Typography
                variant="tsmSmbd"
                onClick={() => navigate("/homepage")}
              >
                lfg!
              </Typography>
            </Button>
          </Modal.Footer>
        </Modal>
      </Box>
    </Container>
  );
};

export default EnterName;
