# Bribe frontend

This is an attempt at integration bribe protocol smart contracts with this [design guideline]("https://www.figma.com/file/2P7wMCegKTNvXP8wP6hG4Z/Bribe-Protocol?node-id=0%3A1")
Only Aave pool are integrated for now

The types folder contains all protocol smart contracts as typescript classes, generated using typechain.

## Getting started

Connect to metamask, create a custom network:

- name: call it bribe,
- RPC URL: "https://hardhat-node-default.x5nxj1.on-rio.io"
- mnemonic: "test test test test test test test test test test test junk"
- chainID: 1337

OR

Connect to kovan
mnemonic: index jazz case model survey neglect motor way lyrics verb sound river

the 2 first accounts have interacted with the protocol
## Run the frontend

- npm run dev
