import chainID from "./../data/chainID";

export const changeMetamaskNetwork = async (network) => {
  try {
    const currentChainId = await window.ethereum.request({
      method: "eth_chainId",
    });
    if (currentChainId !== chainID[network]) {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: chainID[network] }],
      });
    }
  } catch (error) {
    if (error.code === 4902) alert("Please add the network");
  }
};
