export const envConfig = {
  rpc: "https://test2-rpc.comdex.one",
  rest: "https://test2-rest.comdex.one",
  chainId: "comdex-test2",
  coinDenom: "CMDX",
  coinMinimalDenom: "ucmdx",
  coinDecimals: 6,
  prefix: "comdex",
  coinType: 118,
  chainName: "Comdex Test Chain",
  explorerUrlToTx: "https://test2-explorer.comdex.one/transactions/{txHash}",
  apiUrl: "https://testnet-stat.comdex.one",
  comdexStakingUrl: "https://comdex.omniflix.co/stake",
  webSocketApiUrl: "wss://testnet2rpc.comdex.one/websocket",
  symbol: "CMDX",

  commodo: {
    appId: 3,
    cswapAppId: 1,
    numberOfTopAssets: 3,
    websiteUrl: "https://testnet.commodo.one",
    cswapUrl: "https://staging.cswap.one",
    rewardsUrl: "https://docs.commodo.one/rewards",
    atomCmdxPoolId: 1,
  },

  cSwap: {
    appId: 1,
    masterPoolId: 1,
    websiteUrl: "https://testnet.cswap.one",
    networkTag: "testnet2",
  },
  
  harbor: {
    title: "Harbor Protocol",
    websiteUrl: "https://testnet.harborprotocol.one",
    appId: 2,
    governanceContractAddress: "comdex1qwlgtx52gsdu7dtp0cekka5zehdl0uj3fhp9acg325fvgs8jdzksjvgq6q",
    lockingContractAddress: "comdex1ghd753shjuwexxywmgs4xz7x2q732vcnkm6h2pyv9s6ah3hylvrqfy9rd8",
    airdropContractAddress: "comdex1gya5c9y6yehyps5kz9vt2dptgkncvvx76mf05jext4axh9x6vpxql3vu9v",
    harborAirdropApiUrl: "http://3.7.255.161",
    harborDashboardTVLApiUrl: "https://testnet-stat.comdex.one"
  },
};
