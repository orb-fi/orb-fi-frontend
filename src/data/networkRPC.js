const rpc = {
  development: {
    ethereum: "https://rpc.ankr.com/eth_goerli",
    binance: "https://rpc.ankr.com/bsc_testnet_chapel",
    bnbchain: "https://rpc.ankr.com/bsc_testnet_chapel",
    polygon: "https://rpc.ankr.com/polygon_mumbai",
    bitgert: "https://rpc.ankr.com/optimism_testnet",
    tron: "https://api.nileex.io/",
  },
  production: {
    ethereum: "https://rpc.ankr.com/eth",
    binance: "https://rpc.ankr.com/bsc",
    bnbchain: "https://rpc.ankr.com/bsc",
    polygon: "https://rpc.ankr.com/polygon",
    bitgert: "https://chainrpc.com",
    tron: "https://rpc.ankr.com/http/tron",
  },
};

export default rpc[process.env.NODE_ENV];
