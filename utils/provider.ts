import {ethers} from "ethers";
import {providers} from "@0xsequence/multicall";
import IPFS from "ipfs-mini";
import {MulticallProvider} from "@0xsequence/multicall/dist/declarations/src/providers";

const networks = {
  1: process.env.RPC_URL_1!,
  42: process.env.RPC_URL_42!,
  1337: "hardhat-node-default.x5nxj1.on-rio.io",
  31337: "localhost:8545",
};

const protocol =
  typeof window != "undefined" && window?.location?.protocol
    ? window?.location?.protocol
    : "https:";

const providerMap = {
  1: new providers.MulticallProvider(
    new ethers.providers.StaticJsonRpcProvider(networks[1]),
  ),
  42: new providers.MulticallProvider(
    new ethers.providers.StaticJsonRpcProvider(networks[42]),
  ),
  1337: new providers.MulticallProvider(
    new ethers.providers.StaticJsonRpcProvider(protocol + "//" + networks[1337]),
  ),
  31337: new providers.MulticallProvider(
    new ethers.providers.StaticJsonRpcProvider(protocol + "//" + networks[31337]),
  ),
};

export const provider = (chainId?: number): MulticallProvider => {
  return providerMap[chainId || 1];
};

export const ipfsClient = new IPFS({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});
