export const envConfig = {
  rpc: "https://rpc.comdex.one",
  rest: "https://rest.comdex.one",
  chainId: "comdex-1",
  coinDenom: "CMDX",
  coinMinimalDenom: "ucmdx",
  coinDecimals: 6,
  prefix: "comdex",
  coinType: 118,
  chainName: "Comdex",
  explorerUrlToTx: "https://www.mintscan.io/comdex/txs/{txHash}",
  apiUrl: "https://stat.comdex.one",
  comdexStakingUrl: "https://comdex.omniflix.co/stake",
  webSocketApiUrl: "wss://rpc.comdex.one/websocket",

  commodo: {
    appId: 3,
    cswapAppId: 1,
    numberOfTopAssets: 3,
    cswapUrl: "https://app.cswap.one",
    rewardsUrl: "https://docs.commodo.one/rewards",
    atomCmdxPoolId: 1,
  },

  cSwap: {
    appId: 1,
    masterPoolId: 1,
    networkTag: "mainnet",
  },
};
