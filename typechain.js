const { runTypeChain, glob } = require("typechain");

async function main() {
  const cwd = process.cwd();
  // find all files matching the glob
  const allFiles = glob(cwd, [
    `./node_modules/@aave/governance-v2/artifacts/contracts/governance/**.sol/!(*.dbg.json)`,
    `./node_modules/@aave/safety-module/artifacts/contracts/stake/**.sol/!(*.dbg.json)`,
    `/Users/duchenethibaut/advanced-blockchain/bribe-protocol/artifacts/contracts/**.sol/!(*.dbg.json)`,
    `/Users/duchenethibaut/advanced-blockchain/bribe-protocol/artifacts/contracts/helper/**.sol/!(*.dbg.json)`,
    `/Users/duchenethibaut/advanced-blockchain/bribe-protocol/artifacts/contracts/staking/**.sol/!(*.dbg.json)`,
    `./node_modules/@openzeppelin/contracts/build/contracts/ERC20.json`,
  ]);

  const result = await runTypeChain({
    cwd,
    filesToProcess: allFiles,
    allFiles,
    outDir: "types",
    target: "ethers-v5",
  });
}

main().catch(console.error);
