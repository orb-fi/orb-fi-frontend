import { Box, Container, Typography } from "@mui/material";
import { Spacer } from "@nextui-org/react";
import React from "react";

const LandingPage = () => {
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
        sx={{ display: "flex", justifyContent: "center", alignitems: "center" }}
      >
        <svg
          width="250"
          height="250"
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
        sx={{ display: "flex", justifyContent: "center", alignitems: "center",mt:'15px' }}
      >
        <Typography variant="dxsSmbd">ORB.FI</Typography>
      </Box>
    </Container>
  );
};

export default LandingPage;
