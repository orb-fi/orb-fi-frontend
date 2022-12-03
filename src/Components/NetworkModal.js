import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { ButtonBase, Divider, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";

import { changeMetamaskNetwork } from "./../Utils/changeMetamaskNetwork";

const networkList = ["Ethereum", "Polygon"];

const Item = ({ network, onClick }) => {
  return (
    <ButtonBase
      sx={{
        borderRadius: "22px",
        padding: "7px 10px",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        bgcolor: (theme) => theme.palette.background.default,
        width: "100%",
      }}
      onClick={onClick}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={`/chain/${network.toLowerCase()}.png`}
          width={24}
          height={24}
          alt="network"
        />
        <Typography variant="tsmReg" mx={1}>
          {network}
        </Typography>
      </Box>
    </ButtonBase>
  );
};

const NetworkModal = ({
  openNetworkModal,
  handleCloseNetworkModal,
  setNetwork,
  // network,
  variant,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={openNetworkModal}
      onClose={handleCloseNetworkModal}
      aria-labelledby="Crypto tokens network list"
      sx={{ borderRadius: "20px" }}
    >
      <Box sx={{ width: { md: "400px" } }}>
        <DialogTitle
          id="Crypto tokens network list"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="dssSmbd">Select a Network</Typography>
          <IconButton onClick={handleCloseNetworkModal}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <TextField fullWidth sx={{ mb: 2 }} placeholder="Search Network" />
          <Box>
            <Grid container spacing={3} mt={2}>
              {networkList.map((_network) => {
                return (
                  <Grid xs={6} key={_network}>
                    <Item
                      network={_network}
                      // activeNetwork={network}
                      onClick={() => {
                        setNetwork(_network);
                        handleCloseNetworkModal();
                        changeMetamaskNetwork(_network.toLowerCase());
                      }}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default NetworkModal;
