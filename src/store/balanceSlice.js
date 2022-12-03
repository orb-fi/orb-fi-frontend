import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ethers } from "ethers";
import erc20abi from "./../data/erc20abi.json";

import tokenAddress from "./../data/tokenAddress";
import networkRPC from "./../data/networkRPC";

const nativeTokenName = {
  ethereum: "ETH",
  binance: "BNB",
  bnbchain: "BNB",
  bitgert: "BIRSE",
  polygon: "MATIC",
};

const initialState = {
  currentNetwork: null,
  loading: false,
  data: {},
  error: null,
};

export const fetchBalance = createAsyncThunk(
  "balance/fetchBalance",
  async ({ address, network }) => {
    let provider;

    if (network === "tron") {
      console.log("fetchBalance of trx", address, network);
    } else {
      provider = new ethers.providers.JsonRpcProvider(networkRPC[network]);
      const balance = await provider.getBalance(address);
      const balanceInEthers = ethers.utils
        .formatUnits(balance.toString(), 18)
        .toString();

      return { network, balance: balanceInEthers };
    }
  }
);

export const fetchTokenBalance = createAsyncThunk(
  "balance/fetchTokenBalance",
  async ({ address, network, asset }) => {
    let provider;
    if (network === "tron") {
      // console.log("fetchBalance of tron assets:", address, network, asset);
    } else {
      provider = new ethers.providers.JsonRpcProvider(networkRPC[network]);
      const Token = new ethers.Contract(
        tokenAddress[network][asset],
        erc20abi,
        provider
      );
      const balance = await Token.balanceOf(address);
      const decimals = await Token.decimals();
      const formatedBalance = ethers.utils.formatUnits(balance, decimals);
      return {
        address,
        network,
        asset,
        balance: formatedBalance,
      };
    }
  }
);

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // FETCH NATIVE BALANCE
    builder.addCase(fetchBalance.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchBalance.fulfilled, (state, action) => {
      state.loading = false;
      const { network, balance } = action.payload;
      state.data[network] = {
        ...state.data[network],
        [nativeTokenName[network]]: balance,
      };
    });
    builder.addCase(fetchBalance.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });

    builder.addCase(fetchTokenBalance.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchTokenBalance.fulfilled, (state, action) => {
      const { network, asset, balance } = action.payload;
      state.loading = false;
      state.data[network] = { ...state.data[network], [asset]: balance };
    });

    builder.addCase(fetchTokenBalance.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

// export const {} = balanceSlice.actions;

export default balanceSlice.reducer;
