import { Box, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Loading } from "@nextui-org/react";
import { useLocation, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/connectwallet");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const isMobile = useMediaQuery("(max-width:600px)");
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
          width="180"
          height="180"
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="10" y="10" width="50" height="50" rx="25" fill="#111111" />
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
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignitems: "center",
          mt: "15px",
        }}
      >
        <Typography variant={isMobile ? "dxsBd" : "d2xlMed"}>ORB.FI</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignitems: "center",
          mt: "35px",
        }}
      >
        {isMobile ? (
          <Loading type="gradient" size="lg" />
        ) : (
          <Loading type="gradient" size="xl" />
        )}
      </Box>
    </Container>
  );
};

export default LandingPage;
