# comdex network asset lists

To get the assets listed on comdex networks please open a pull request on the following networks :

1. Test net : add the assets information to get it listed on comdex test net.

2. Main net : add the assets information to get it listed on comdex main net

Append the information as per the sample json provided below : 

 ```shell
 
 {
      "chainId": "theta-testnet-001",
      "chainName": "Cosmos Hub Test",
      "rpc": "https://devnet.cswap.one/vega",
      "rest": "https://devnet.cswap.one/vega-rest",
      "coinDenom": "ATOM",
      "coinMinimalDenom": "uatom",
      "coinDecimals": 6,
      "coinType": 118,
      "prefix": "cosmos",
      "channel": "channel-547",
      "comdexChannel": "channel-2",
      "ibcDenomHash": "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
      "logoURI": "https://raw.githubusercontent.com/osmosis-labs/assetlists/main/images/atom.svg",
      "coinGeckoId": "cosmos",
      "explorerUrlToTx": "https://explorer.theta-testnet.polypore.xyz/transactions/{txHash}"
   },
 ```
