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
  symbol: "CMDX",

  commodo: {
    appId: 3,
    cswapAppId: 1,
    numberOfTopAssets: 3,
    websiteUrl: "https://app.commodo.one",
    cswapUrl: "https://app.cswap.one",
    rewardsUrl: "https://docs.commodo.one/rewards",
    atomCmdxPoolId: 1,
  },

  cSwap: {
    appId: 1,
    masterPoolId: 1,
    websiteUrl: "https://app.cswap.one",
    networkTag: "mainnet",
  },
  harbor: {
    title: "Harbor Protocol",
    websiteUrl: "https://app.harborprotocol.one",
    appId: 2,
    governanceContractAddress: "comdex17p9rzwnnfxcjp32un9ug7yhhzgtkhvl9jfksztgw5uh69wac2pgs4jg6dx.",
    lockingContractAddress: "comdex1nc5tatafv6eyq7llkr2gv50ff9e22mnf70qgjlv737ktmt4eswrqdfklyz",
    airdropContractAddress: "comdex1xt4ahzz2x8hpkc0tk6ekte9x6crw4w6u0r67cyt3kz9syh24pd7s6erldv",
    harborAirdropApiUrl: "http://3.7.255.161",
    harborDashboardTVLApiUrl: "https://stat.comdex.one"
  },
};
