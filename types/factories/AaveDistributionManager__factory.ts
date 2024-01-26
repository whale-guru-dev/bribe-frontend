/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  Overrides,
  BigNumberish,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AaveDistributionManager,
  AaveDistributionManagerInterface,
} from "../AaveDistributionManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "emissionManager",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "distributionDuration",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "emission",
        type: "uint256",
      },
    ],
    name: "AssetConfigUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "AssetIndexUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "UserIndexUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "DISTRIBUTION_END",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "EMISSION_MANAGER",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PRECISION",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "assets",
    outputs: [
      {
        internalType: "uint128",
        name: "emissionPerSecond",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "lastUpdateTimestamp",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "emissionPerSecond",
            type: "uint128",
          },
          {
            internalType: "uint256",
            name: "totalStaked",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "underlyingAsset",
            type: "address",
          },
        ],
        internalType: "struct DistributionTypes.AssetConfigInput[]",
        name: "assetsConfigInput",
        type: "tuple[]",
      },
    ],
    name: "configureAssets",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "getUserAssetData",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b50604051610a7f380380610a7f83398101604081905261002f916100c0565b610046814261005f60201b6103671790919060201c565b6080525060601b6001600160601b03191660a0526100f8565b6000828201838110156100b9576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b600080604083850312156100d2578182fd5b82516001600160a01b03811681146100e8578283fd5b6020939093015192949293505050565b60805160a05160601c61094d6101326000398061015c528061031752508061012a52806104ad52806104e95280610516525061094d6000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80633373ee4c14610067578063919cd40f14610090578063aaf5eb6814610098578063b2a5dbfa146100ad578063cbcbb507146100c2578063f11b8188146100d7575b600080fd5b61007a61007536600461079b565b6100f9565b60405161008791906108df565b60405180910390f35b61007a610128565b6100a061014c565b60405161008791906108e8565b6100c06100bb3660046107cd565b610151565b005b6100ca610315565b6040516100879190610864565b6100ea6100e5366004610781565b610339565b604051610087939291906108bb565b6001600160a01b0380821660009081526020818152604080832093861683526002909301905220545b92915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b601281565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146101a25760405162461bcd60e51b815260040161019990610878565b60405180910390fd5b60005b818110156103105760008060008585858181106101be57fe5b90506060020160400160208101906101d69190610781565b6001600160a01b03166001600160a01b03168152602001908152602001600020905061023b84848481811061020757fe5b905060600201604001602081019061021f9190610781565b8286868681811061022c57fe5b905060600201602001356103c8565b5083838381811061024857fe5b61025e926020606090920201908101915061083d565b81546fffffffffffffffffffffffffffffffff19166001600160801b039190911617815583838381811061028e57fe5b90506060020160400160208101906102a69190610781565b6001600160a01b03167f87fa03892a0556cb6b8f97e6d533a150d4d55fcbf275fff5fa003fa636bcc7fa8585858181106102dc57fe5b6102f2926020606090920201908101915061083d565b6040516102ff91906108a7565b60405180910390a2506001016101a5565b505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600060208190529081526040902080546001909101546001600160801b0380831692600160801b9004169083565b6000828201838110156103c1576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b6001820154825460009190600160801b90046001600160801b0316428114156103f3575090506103c1565b845460009061040e9084906001600160801b03168488610485565b905082811461046257808660010181905550866001600160a01b03167f5777ca300dfe5bead41006fbce4389794dbc0ed8d6cccebfaf94630aa04184bc8260405161045991906108df565b60405180910390a25b85546001600160801b03428116600160801b029116178655925050509392505050565b6000831580610492575081155b806104a5575042836001600160801b0316145b806104d957507f0000000000000000000000000000000000000000000000000000000000000000836001600160801b031610155b156104e5575083610584565b60007f000000000000000000000000000000000000000000000000000000000000000042116105145742610536565b7f00000000000000000000000000000000000000000000000000000000000000005b9050600061054d826001600160801b03871661058c565b905061057f8761057986610573670de0b6b3a764000061056d8c886105ce565b906105ce565b90610627565b90610367565b925050505b949350505050565b60006103c183836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610669565b6000826105dd57506000610122565b828202828482816105ea57fe5b04146103c15760405162461bcd60e51b81526004018080602001828103825260218152602001806108f76021913960400191505060405180910390fd5b60006103c183836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610700565b600081848411156106f85760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156106bd5781810151838201526020016106a5565b50505050905090810190601f1680156106ea5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000818361074f5760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156106bd5781810151838201526020016106a5565b50600083858161075b57fe5b0495945050505050565b80356001600160a01b038116811461077c57600080fd5b919050565b600060208284031215610792578081fd5b6103c182610765565b600080604083850312156107ad578081fd5b6107b683610765565b91506107c460208401610765565b90509250929050565b600080602083850312156107df578182fd5b823567ffffffffffffffff808211156107f6578384fd5b818501915085601f830112610809578384fd5b813581811115610817578485fd5b86602060608302850101111561082b578485fd5b60209290920196919550909350505050565b60006020828403121561084e578081fd5b81356001600160801b03811681146103c1578182fd5b6001600160a01b0391909116815260200190565b60208082526015908201527427a7262cafa2a6a4a9a9a4a7a72fa6a0a720a3a2a960591b604082015260600190565b6001600160801b0391909116815260200190565b6001600160801b039384168152919092166020820152604081019190915260600190565b90815260200190565b60ff9190911681526020019056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a2646970667358221220254103a18ee9679c98be1c47f0a48a209a7a56e59be2cd567a78d16d2518e38364736f6c63430007050033";

type AaveDistributionManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AaveDistributionManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AaveDistributionManager__factory extends ContractFactory {
  constructor(...args: AaveDistributionManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    emissionManager: string,
    distributionDuration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AaveDistributionManager> {
    return super.deploy(
      emissionManager,
      distributionDuration,
      overrides || {}
    ) as Promise<AaveDistributionManager>;
  }
  getDeployTransaction(
    emissionManager: string,
    distributionDuration: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      emissionManager,
      distributionDuration,
      overrides || {}
    );
  }
  attach(address: string): AaveDistributionManager {
    return super.attach(address) as AaveDistributionManager;
  }
  connect(signer: Signer): AaveDistributionManager__factory {
    return super.connect(signer) as AaveDistributionManager__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AaveDistributionManagerInterface {
    return new utils.Interface(_abi) as AaveDistributionManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AaveDistributionManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AaveDistributionManager;
  }
}