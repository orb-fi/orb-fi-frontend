import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import {
  Divider,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import List from "@mui/material/List";

import { stableTokensList } from "./../data/tokensList";

const TokenModal = ({
  openTokenModal,
  handleCloseTokenModal,
  setToken,
  variant,
  network,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Dialog
      fullScreen={fullScreen}
      open={openTokenModal}
      onClose={handleCloseTokenModal}
      aria-labelledby="Crypto tokens network list"
      sx={{
        borderRadius: "20px",
        backgroundColor: "#131418",
      }}
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
          <Typography variant="dssSmbd">Select a Token</Typography>
          <IconButton onClick={handleCloseTokenModal}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              mb: 2,
            }}
          >
            <Typography variant="tlgMed">Chain:</Typography>
            <Box
              sx={{
                mx: 2,
                borderRadius: "22px",
                padding: "7px 10px",
                bgcolor: (theme) => theme.palette.background.default,
              }}
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
                  {network ? network : "network"}
                </Typography>
              </Box>
            </Box>
          </Box>
          <TextField fullWidth sx={{ mb: 2 }} placeholder="Search Tokens" />
          <Box>
            <List disablePadding>
              {variant === "multiStable"
                ? stableTokensList.map((_token) => (
                    <ListItemButton
                      key={_token}
                      onClick={(e) => {
                        setToken(_token);
                        handleCloseTokenModal();
                      }}
                    >
                      <ListItemIcon>
                        <img
                          src={`/cryptocurrency/${_token.toLowerCase()}.png`}
                          width={"30px"}
                          height={"30px"}
                          alt={_token}
                        />
                      </ListItemIcon>
                      <ListItemText>{_token.toUpperCase()}</ListItemText>
                    </ListItemButton>
                  ))
                : null}
            </List>
          </Box>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default TokenModal;
