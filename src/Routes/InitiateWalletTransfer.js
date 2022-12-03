import { React, useState, useEffect } from "react";
import Box from "@mui/material/Box";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NetworkModal from "../Components/NetworkModal";
import {
  ButtonBase,
  Divider,
  Typography,
  Tooltip,
  Button,
  IconButton,
} from "@mui/material";
import { InputBase } from "@mui/material";
import Chip from "@mui/material/Chip";

import { useFetchValueQuery } from "../store";
import { useSelector } from "react-redux";

const cryptoMap = {
  USDT: "tether",
  BUSD: "binance-usd",
  USDC: "usd-coin",
};
const InitiateWalletTransfer = ({}) => {
  const [network, setNetwork] = useState("Ethereum");
  const [token, setToken] = useState("USDT");
  const [tokenValue, setTokenValue] = useState("");
  let balance = 0;

  const [open, setOpen] = useState(false);
  const [openTokenModal, setOpenTokenModal] = useState(false);
  const [openNetworkModal, setOpenNetworkModal] = useState(false);
  const [toggleMax, setToggleMax] = useState(false);

  const _currentWallet = useSelector((state) => state.auth.currentWallet);
  const value = {
    from: cryptoMap[token],
    to: "usd",
  };

  const { loading: isBalanceLoading, data: balanceData } = useSelector(
    (state) => state.balance
  );

  if (balanceData[network.toLowerCase()] !== undefined)
    balance = parseFloat(
      balanceData[network.toLowerCase()][token.toUpperCase()]
    );

  var { data, isFetching, refetch } = useFetchValueQuery(value);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line
  }, [token]);

  const handleClick = () => {
    setToggleMax(!toggleMax);
    if (tokenValue === balance) {
      setTokenValue("");
    } else setTokenValue(balance);
    // setTokenValue(() => ( ? 123 : 234));
  };
  const handleSetTokenValue = (e) => {
    parseFloat(e.target.value) < parseFloat(balance) &&
    parseFloat(e.target.value) > 0.0
      ? setTokenValue(parseFloat(e.target.value))
      : setTokenValue("");

    //for testing
    // setTokenValue(parseFloat(e.target.value))
  };

  const handleOpenTokenModal = () => {
    setOpenTokenModal(true);
  };

  const handleCloseTokenModal = () => {
    setOpenTokenModal(false);
  };

  const handleOpenNetworkModal = () => {
    setOpenNetworkModal(true);
  };

  const handleCloseNetworkModal = () => {
    setOpenNetworkModal(false);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <IconButton
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <Typography variant="dssSmbd">Initiate transfer</Typography>
        <ButtonBase
          sx={{
            borderRadius: "10px",
            padding: "8px 12px",
          }}
          onClick={() => {
            setTokenValue(null);
          }}
        >
          {<Typography sx={{ color: "#2382F7" }}>clear all</Typography>}
        </ButtonBase>
      </Box>
      <Divider sx={{ mt: "15px" }} />
      <Box sx={{ mt: "15px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ mb: "5px" }} variant="tmdMed">
            Select Network:
          </Typography>
          <Tooltip title="You can change network here" arrow placement="top">
            <ButtonBase
              onClick={handleOpenNetworkModal}
              sx={{
                borderRadius: "22px",
                padding: "7px 10px",
                bgcolor: (theme) => theme.palette.background.default,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <img
                  src={`/chain/${network.toLowerCase()}.png`}
                  width={24}
                  height={24}
                  alt={network.toUpperCase()}
                />
                <Typography variant="tsmReg" mx={1}>
                  {network}
                </Typography>
              </Box>
            </ButtonBase>
          </Tooltip>
          <NetworkModal
            openNetworkModal={openNetworkModal}
            handleCloseNetworkModal={handleCloseNetworkModal}
            setNetwork={setNetwork}
          />
        </Box>
        {/* deposit */}
        <Box
          sx={{
            mt: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography variant="tmdMed">Deposit Amount:</Typography>
          <ButtonBase
            onClick={handleOpenTokenModal}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              borderRadius: "10px",
              padding: "6px 10px",
            }}
          >
            <img
              src={`/cryptocurrency/${token.toLowerCase()}.png`}
              alt={token.toUpperCase()}
              width={20}
            />
            <Typography variant="tmdSmbd" mx={"5px"}>
              {token}
            </Typography>
            <ExpandMoreIcon />
          </ButtonBase>
        </Box>
        <Box
          sx={{
            justifyContent: "space-between",
            mt: "10px",
            display: "flex",
            alignItems: "center",
            p: "10px 10px",
            borderRadius: "10px",
            border: (theme) =>
              theme.palette.mode === "light"
                ? `1px solid #CBCBCB`
                : "1px solid #545B71",
          }}
        >
          <InputBase
            placeholder="Enter value"
            value={parseFloat(tokenValue) > 0.0 ? parseFloat(tokenValue) : ""}
            //for testing
            // value={parseFloat(tokenValue)}
            onChange={handleSetTokenValue}
            type="number"
          />
          <Chip
            label="MAX"
            color="primary"
            variant={toggleMax ? "contained" : "outlined"}
            onClick={handleClick}
          />
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", mt: "5px" }}
        >
          <Typography variant="txsReg" sx={{ color: "#EDF7FF" }}>
            {isFetching ? (
              <Box sx={{ mx: "10px", width: "60px", height: "30px" }}>
                <Box className="loaderInrcValue"></Box>
              </Box>
            ) : (tokenValue <= 0) | (tokenValue == null) ? (
              `Enter ${token || "Crypto"} Value`
            ) : (
              `$${(tokenValue * data[cryptoMap[token]]["usd"]).toFixed(3)}`
            )}
          </Typography>

          {isBalanceLoading ? (
            <Box sx={{ mx: "10px", width: "60px", height: "10px" }}>
              <Box className="loaderInrcValue"></Box>
            </Box>
          ) : (
            <Typography variant="txsReg" sx={{ color: "#EDF7FF" }}>
              {`Balance: ${balance - tokenValue} ${token}`}
            </Typography>
          )}
        </Box>
      </Box>
      <Button
        variant={tokenValue | (tokenValue === 0) ? "contained" : "outlined"}
        size="large"
        sx={{ py: "10px", width: "100%", mt: "20px" }}
        disableElevation
        disabled={(tokenValue <= 0) | (tokenValue == null) ? true : false}
        //for testing
        //disabled={false}
      >
        Preview
      </Button>
    </Box>
  );
};

export default InitiateWalletTransfer;
