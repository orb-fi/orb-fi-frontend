import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wallets: ["metamask"],
  metamask: null,
  currentWallet: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    requestWallet: (state, action) => {
      const { wallet, address } = action.payload;
      state[wallet] = address;
    },
    setCurrentWallet: (state, action) => {
      const { wallet } = action.payload;
      state.currentWallet = wallet;
    },
    disconnectWalet: (state, action) => {
      state.currentWallet = null;
      state.wallets.forEach((wallet) => {
        state[wallet] = null;
      });
    },
  },

  extraReducers: (builder) => {},
});

export const { disconnectWalet, requestWallet, setCurrentWallet } =
  authSlice.actions;

export default authSlice.reducer;
