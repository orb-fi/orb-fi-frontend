const chaiID = {
  production: {
    ethereum: "0x1",
    bnbchain: "0x38",
    binance: "0x38",
    polygon: "0x89",
    bitgert: "0x7F08",
  },
  development: {
    ethereum: "0x5",
    bnbchain: "0x61",
    binance: "0x61",
    polygon: "0x13881",
    bitgert: "0x1A4",
  },
};
export default chaiID[process.env.NODE_ENV];
