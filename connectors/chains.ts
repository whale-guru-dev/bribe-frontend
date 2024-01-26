export const SupportedChainIds = {
  1: "ethereum",
  3: "ropsten",
  4: "rinkeby",
  10: "optimism",
  42: "kovan",
  1337: "localhost",
  31337: "localhost",
  42161: "arbitrum",
};

export type SupportedChainIDs = 1 | 3 | 4 | 10 | 42 | 1337 | 31337 | 42161;

export const getChainNameByID = (chainID: SupportedChainIDs): string => {
  return SupportedChainIds[chainID] || "ethereum";
};
