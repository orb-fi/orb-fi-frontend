import React, { useState } from "react";
import confetti from "canvas-confetti";
import { Container, Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Input, Grid } from "@nextui-org/react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const ClaimYourOrb = () => {
  const navigate = useNavigate();
  const [orbId, setOrbId] = useState("");
  const [isAvailable, setIsAvailable] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  const handleConfetti = () => {
    confetti({
      particleCount: 100,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: 0.5,
        // since they fall down, start a bit higher than random
        y: 0.5,
      },
    });
    setTimeout(() => {
      navigate("/entername");
    }, 2000);
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
          Claim Your Orb!
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
                size="xl"
                labelRight=".orb"
                onChange={(e) => {
                  setOrbId(`${e.target.value}.orb`);
                  setIsAvailable(true);
                }}
                placeholder="crons"
              />
            ) : (
              <Input
                width="300px"
                height="50px"
                labelRight=".orb"
                placeholder="crons"
                onChange={(e) => {
                  setOrbId(`${e.target.value}.orb`);
                  setIsAvailable(true);
                }}
              />
            )}
          </Grid>
        </Box>
        <Typography
          sx={{ mt: "10px", color: isAvailable ? "#41EC8B" : "#F4256D" }}
        >
          {isAvailable ? "Available loader" : "OrbID Not Available"}
        </Typography>
      </Box>

      {/* button */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: "20px",
        }}
      >
        <Button
          variant={orbId === "" ? "outlined" : "contained"}
          sx={{
            borderRadius: "20px",
            width: "280px",
            height: "50px",
            backgroundColor: "#0072F5",
          }}
          disabled={orbId === "" || !isAvailable ? true : false}
          onClick={isAvailable ? handleConfetti : null}
        >
          Continue
        </Button>
      </Box>
    </Container>
  );
};

export default ClaimYourOrb;
