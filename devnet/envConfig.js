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
  apiUrl: "https://testnet-stat.comdex.one",
  comdexStakingUrl: "https://comdex.omniflix.co/stake",
  WebSocketApiUrl: "wss://rpc.comdex.one/websocket",

  commodo: {
    title: "Commodo",
    websiteUrl: "https://devnet.commodo.one",
    appId: 3,
    cswapAppId: 2,
    numberOfTopAssets: 3,
    cswapUrl: "https://staging.cswap.one",
    rewardsUrl: "https://docs.commodo.one/rewards",
    atomCmdxPoolId: 1,
  },
  
  cSwap: {
    title: "cSwap Exchange",
    websiteUrl: "https://devnet.cswap.one",
    appId: 1,
    masterPoolId: 1,
    networkTag: "Devnet",
  },
};
