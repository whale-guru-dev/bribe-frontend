/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MockAaveGovernanceWithTokens,
  MockAaveGovernanceWithTokensInterface,
} from "../MockAaveGovernanceWithTokens";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "createProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getGovernanceStrategy",
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
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "getProposalById",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "creator",
            type: "address",
          },
          {
            internalType: "contract IExecutorWithTimelock",
            name: "executor",
            type: "address",
          },
          {
            internalType: "address[]",
            name: "targets",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "values",
            type: "uint256[]",
          },
          {
            internalType: "string[]",
            name: "signatures",
            type: "string[]",
          },
          {
            internalType: "bytes[]",
            name: "calldatas",
            type: "bytes[]",
          },
          {
            internalType: "bool[]",
            name: "withDelegatecalls",
            type: "bool[]",
          },
          {
            internalType: "uint256",
            name: "startBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endBlock",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "executionTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "forVotes",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "againstVotes",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "executed",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "canceled",
            type: "bool",
          },
          {
            internalType: "address",
            name: "strategy",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "ipfsHash",
            type: "bytes32",
          },
        ],
        internalType:
          "struct MockAaveGovernanceWithTokens.ProposalWithoutVotes",
        name: "p",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
    ],
    name: "getProposalState",
    outputs: [
      {
        internalType: "enum MockAaveGovernanceWithTokens.ProposalState",
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "getVotingPowerAt",
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
    name: "receiptAaveToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "receiptstkAaveToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "receiptAaveToken_",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "receiptstkAaveToken_",
        type: "address",
      },
    ],
    name: "setReceiptTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "proposalId",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "support",
        type: "bool",
      },
    ],
    name: "submitVote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610a05806100206000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80635a43dc00116100665780635a43dc001461015f578063612c56fa146101725780639080936f14610184578063c999b5dc146101a4578063eaeded5f146101b757600080fd5b806306be3e8e146100a357806330e787e3146100c25780633656de211461010057806340e58ee5146101205780634e17f0b61461014c575b600080fd5b305b6040516001600160a01b0390911681526020015b60405180910390f35b6100fe6100d03660046105d4565b600280546001600160a01b039384166001600160a01b03199182161790915560038054929093169116179055565b005b61011361010e36600461060c565b6101d8565b6040516100b99190610828565b6100fe61012e36600461060c565b6000908152600160208190526040909120805460ff19169091179055565b6003546100a5906001600160a01b031681565b6100fe61016d36600461060c565b6103bf565b6100fe61018036600461063c565b5050565b61019761019236600461060c565b610402565b6040516100b991906107ed565b6002546100a5906001600160a01b031681565b6101ca6101c53660046105a9565b61042e565b6040519081526020016100b9565b6102816040518061022001604052806000815260200160006001600160a01b0316815260200160006001600160a01b031681526020016060815260200160608152602001606081526020016060815260200160608152602001600081526020016000815260200160008152602001600081526020016000815260200160001515815260200160001515815260200160006001600160a01b03168152602001600080191681525090565b6040805161022081018252838152600060208083018290528284018290528351828152808201855260608401528351828152808201855260808401528351828152908101909352909160a08301916102e9565b60608152602001906001900390816102d45790505b508152602001600060405190808252806020026020018201604052801561032457816020015b606081526020019060019003908161030f5790505b5081526020016000604051908082528060200260200182016040528015610355578160200160208202803683370190505b50815260008481526020818152604080832054828501819052878452929091529091019061038590611858610996565b815260006020820181905260408201819052606082018190526080820181905260a0820181905260c0820181905260e09091015292915050565b6103ef6040518060400160405280600f81526020016e10dc99585d19481c1bdc9c1bdcd85b608a1b815250610542565b6000908152602081905260409020439055565b600081815260016020819052604082205460ff161515141561042657506001919050565b506002919050565b600354604080516318160ddd60e01b815290516000926001600160a01b0316916318160ddd916004808301926020929190829003018186803b15801561047357600080fd5b505afa158015610487573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ab9190610624565b600260009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b1580156104f957600080fd5b505afa15801561050d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105319190610624565b61053b9190610996565b9392505050565b610585816040516024016105569190610815565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b179052610588565b50565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b600080604083850312156105bb578182fd5b82356105c6816109ba565b946020939093013593505050565b600080604083850312156105e6578182fd5b82356105f1816109ba565b91506020830135610601816109ba565b809150509250929050565b60006020828403121561061d578081fd5b5035919050565b600060208284031215610635578081fd5b5051919050565b6000806040838503121561064e578182fd5b8235915060208301358015158114610601578182fd5b6000815180845260208085019450808401835b8381101561069c5781516001600160a01b031687529582019590820190600101610677565b509495945050505050565b6000815180845260208085019450808401835b8381101561069c5781511515875295820195908201906001016106ba565b600082825180855260208086019550808260051b840101818601855b8481101561072257601f198684030189526107108383516107a2565b988401989250908301906001016106f4565b5090979650505050505050565b6000815180845260208085019450848260051b8601828601855b858110156107225783830389526107618383516107a2565b98850198925090840190600101610749565b6000815180845260208085019450808401835b8381101561069c57815187529582019590820190600101610786565b60008151808452815b818110156107c7576020818501810151868301820152016107ab565b818111156107d85782602083870101525b50601f01601f19169290920160200192915050565b602081016008831061080f57634e487b7160e01b600052602160045260246000fd5b91905290565b60208152600061053b60208301846107a2565b60208152815160208201526000602083015161084f60408401826001600160a01b03169052565b5060408301516001600160a01b0381166060840152506060830151610220806080850152610881610240850183610664565b91506080850151601f19808685030160a087015261089f8483610773565b935060a08701519150808685030160c08701526108bc848361072f565b935060c08701519150808685030160e08701526108d984836106d8565b935060e087015191506101008187860301818801526108f885846106a7565b90880151610120888101919091528801516101408089019190915288015161016080890191909152880151610180808901919091528801516101a08089019190915288015190945091506101c090506109548187018315159052565b86015190506101e06109698682018315159052565b8601519050610200610985868201836001600160a01b03169052565b959095015193019290925250919050565b600082198211156109b557634e487b7160e01b81526011600452602481fd5b500190565b6001600160a01b038116811461058557600080fdfea26469706673582212200aff6f1e88e7bba32f1ca64038b97ee8498bd5894af3289a2c2864ff30773e6864736f6c63430008040033";

type MockAaveGovernanceWithTokensConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockAaveGovernanceWithTokensConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockAaveGovernanceWithTokens__factory extends ContractFactory {
  constructor(...args: MockAaveGovernanceWithTokensConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockAaveGovernanceWithTokens> {
    return super.deploy(
      overrides || {}
    ) as Promise<MockAaveGovernanceWithTokens>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockAaveGovernanceWithTokens {
    return super.attach(address) as MockAaveGovernanceWithTokens;
  }
  connect(signer: Signer): MockAaveGovernanceWithTokens__factory {
    return super.connect(signer) as MockAaveGovernanceWithTokens__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockAaveGovernanceWithTokensInterface {
    return new utils.Interface(_abi) as MockAaveGovernanceWithTokensInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockAaveGovernanceWithTokens {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockAaveGovernanceWithTokens;
  }
}
