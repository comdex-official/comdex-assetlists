export const envConfig = {
  rpc: "https://devnet.rpc.comdex.one",
  rest: "https://devnet.rest.comdex.one",
  chainId: "test-1",
  coinDenom: "CMDX",
  coinMinimalDenom: "ucmdx",
  coinDecimals: 6,
  prefix: "comdex",
  coinType: 118,
  chainName: "Comdex Test Chain",
  explorerUrlToTx: "https://dev-explorer.comdex.one/transactions/{txHash}",
  apiUrl: "https://test-stat.comdex.one",
  comdexStakingUrl: "https://comdex.omniflix.co/stake",
  webSocketApiUrl: "wss://devnet.rpc.comdex.one/websocket",

  commodo: {
    appId: 3,
    cswapAppId: 2,
    numberOfTopAssets: 3,
    cswapUrl: "https://devnet.cswap.one",
    rewardsUrl: "https://docs.commodo.one/rewards",
    atomCmdxPoolId: 1,
  },

  cSwap: {
    appId: 1,
    masterPoolId: 1,
    networkTag: "Devnet",
  },
};
