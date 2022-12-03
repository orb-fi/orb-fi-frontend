const token = {
  production: {
    ethereum: {
      USDT: "0xdac17f958d2ee523a2206206994597c13d831ec7",
      USDC: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      BUSD: "0x4fabb145d64652a948d72533023f6e7a623c7c53",
    },
    polygon: {
      USDT: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
      USDC: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
      BUSD: "0xdab529f40e671a1d4bf91361c21bf9f0c9712ab7",
    },
    binance: {
      USDT: "0x55d398326f99059ff775485246999027b3197955",
      USDC: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
      BUSD: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    },
    bnbchain: {
      USDT: "0x55d398326f99059ff775485246999027b3197955",
      USDC: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
      BUSD: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    },
    bitgert: {
      USDT: "0xde14b85cf78f2add2e867fee40575437d5f10c06",
      USDC: "0xcf2df9377a4e3c10e9ea29fdb8879d74c27fcde7",
      BUSD: "",
      INRC: "0xb0ED36aA4Dd8309842342199C4Bbfb9841bA408A",
      CHAIT: "0xc66Ef0AE83F9fE6a0BB1d188391Ed921a3F11d40",
    },
    tron: {
      USDT: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
      USDC: "",
      BUSD: "",
    },
  },
  development: {
    ethereum: {
      USDT: "0x50395411df03ebDAe16b328D71f5E7C82e7074F3",
      USDC: "0x4D86353d21Ae2898c868C579E81fc64e004ca1ca",
      BUSD: "0x9F8Ed9E16d6d17Ab861d0A24f89838E49af00eC4",
    },
    maticmum: {
      USDT: "0x50395411df03ebDAe16b328D71f5E7C82e7074F3",
      USDC: "0x4D86353d21Ae2898c868C579E81fc64e004ca1ca",
      BUSD: "0x9F8Ed9E16d6d17Ab861d0A24f89838E49af00eC4",
    },
    polygon: {
      USDT: "0x50395411df03ebDAe16b328D71f5E7C82e7074F3",
      USDC: "0x4D86353d21Ae2898c868C579E81fc64e004ca1ca",
      BUSD: "0x9F8Ed9E16d6d17Ab861d0A24f89838E49af00eC4",
    },
    binance: {
      USDT: "0x50395411df03ebDAe16b328D71f5E7C82e7074F3",
      USDC: "0x4D86353d21Ae2898c868C579E81fc64e004ca1ca",
      BUSD: "0x9F8Ed9E16d6d17Ab861d0A24f89838E49af00eC4",
    },
    bnbchain: {
      USDT: "0x50395411df03ebDAe16b328D71f5E7C82e7074F3",
      USDC: "0x4D86353d21Ae2898c868C579E81fc64e004ca1ca",
      BUSD: "0x9F8Ed9E16d6d17Ab861d0A24f89838E49af00eC4",
    },
    bitgert: {
      USDT: "0x50395411df03ebDAe16b328D71f5E7C82e7074F3",
      USDC: "0x4D86353d21Ae2898c868C579E81fc64e004ca1ca",
      BUSD: "",
      INRC: "0x8d87dA771833C395ae715dd2230D9263925d595b",
      CHAIT: "0xD7FAd17A25Bc87f9693282A8cB059211D64B4026",
    },
    tron: {
      USDT: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
      USDC: "",
      BUSD: "",
    },
  },
};

export default token[process.env.NODE_ENV];
