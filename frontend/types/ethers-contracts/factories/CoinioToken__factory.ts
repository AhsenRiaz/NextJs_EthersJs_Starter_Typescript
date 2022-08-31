/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CoinioToken, CoinioTokenInterface } from "../CoinioToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200272c3803806200272c83398181016040528101906200003791906200057e565b818181600390805190602001906200005192919062000331565b5080600490805190602001906200006a92919062000331565b5050506200008d62000081620000d760201b60201c565b620000df60201b60201c565b620000cf33620000a2620001a560201b60201c565b60ff16600a620000b3919062000790565b620f4240620000c39190620007e1565b620001ae60201b60201c565b5050620009b5565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60006012905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000221576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200021890620008a3565b60405180910390fd5b62000235600083836200032760201b60201c565b8060026000828254620002499190620008c5565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620002a09190620008c5565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000307919062000933565b60405180910390a362000323600083836200032c60201b60201c565b5050565b505050565b505050565b8280546200033f906200097f565b90600052602060002090601f016020900481019282620003635760008555620003af565b82601f106200037e57805160ff1916838001178555620003af565b82800160010185558215620003af579182015b82811115620003ae57825182559160200191906001019062000391565b5b509050620003be9190620003c2565b5090565b5b80821115620003dd576000816000905550600101620003c3565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200044a82620003ff565b810181811067ffffffffffffffff821117156200046c576200046b62000410565b5b80604052505050565b600062000481620003e1565b90506200048f82826200043f565b919050565b600067ffffffffffffffff821115620004b257620004b162000410565b5b620004bd82620003ff565b9050602081019050919050565b60005b83811015620004ea578082015181840152602081019050620004cd565b83811115620004fa576000848401525b50505050565b600062000517620005118462000494565b62000475565b905082815260208101848484011115620005365762000535620003fa565b5b62000543848285620004ca565b509392505050565b600082601f830112620005635762000562620003f5565b5b81516200057584826020860162000500565b91505092915050565b60008060408385031215620005985762000597620003eb565b5b600083015167ffffffffffffffff811115620005b957620005b8620003f0565b5b620005c7858286016200054b565b925050602083015167ffffffffffffffff811115620005eb57620005ea620003f0565b5b620005f9858286016200054b565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b6001851115620006915780860481111562000669576200066862000603565b5b6001851615620006795780820291505b8081029050620006898562000632565b945062000649565b94509492505050565b600082620006ac57600190506200077f565b81620006bc57600090506200077f565b8160018114620006d55760028114620006e05762000716565b60019150506200077f565b60ff841115620006f557620006f462000603565b5b8360020a9150848211156200070f576200070e62000603565b5b506200077f565b5060208310610133831016604e8410600b8410161715620007505782820a9050838111156200074a576200074962000603565b5b6200077f565b6200075f84848460016200063f565b9250905081840481111562000779576200077862000603565b5b81810290505b9392505050565b6000819050919050565b60006200079d8262000786565b9150620007aa8362000786565b9250620007d97fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff84846200069a565b905092915050565b6000620007ee8262000786565b9150620007fb8362000786565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161562000837576200083662000603565b5b828202905092915050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006200088b601f8362000842565b9150620008988262000853565b602082019050919050565b60006020820190508181036000830152620008be816200087c565b9050919050565b6000620008d28262000786565b9150620008df8362000786565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000917576200091662000603565b5b828201905092915050565b6200092d8162000786565b82525050565b60006020820190506200094a600083018462000922565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200099857607f821691505b60208210811415620009af57620009ae62000950565b5b50919050565b611d6780620009c56000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063715018a611610097578063a9059cbb11610066578063a9059cbb146102c5578063dd62ed3e146102f5578063f2fde38b14610325578063fcd3533c1461034157610100565b8063715018a61461024f5780638da5cb5b1461025957806395d89b4114610277578063a457c2d71461029557610100565b8063313ce567116100d3578063313ce567146101a157806339509351146101bf57806340c10f19146101ef57806370a082311461021f57610100565b806306fdde0314610105578063095ea7b31461012357806318160ddd1461015357806323b872dd14610171575b600080fd5b61010d610371565b60405161011a919061121d565b60405180910390f35b61013d600480360381019061013891906112d8565b610403565b60405161014a9190611333565b60405180910390f35b61015b610426565b604051610168919061135d565b60405180910390f35b61018b60048036038101906101869190611378565b610430565b6040516101989190611333565b60405180910390f35b6101a961045f565b6040516101b691906113e7565b60405180910390f35b6101d960048036038101906101d491906112d8565b610468565b6040516101e69190611333565b60405180910390f35b610209600480360381019061020491906112d8565b61049f565b6040516102169190611333565b60405180910390f35b61023960048036038101906102349190611402565b610501565b604051610246919061135d565b60405180910390f35b610257610549565b005b61026161055d565b60405161026e919061143e565b60405180910390f35b61027f610587565b60405161028c919061121d565b60405180910390f35b6102af60048036038101906102aa91906112d8565b610619565b6040516102bc9190611333565b60405180910390f35b6102df60048036038101906102da91906112d8565b610690565b6040516102ec9190611333565b60405180910390f35b61030f600480360381019061030a9190611459565b6106b3565b60405161031c919061135d565b60405180910390f35b61033f600480360381019061033a9190611402565b61073a565b005b61035b60048036038101906103569190611499565b6107be565b6040516103689190611333565b60405180910390f35b60606003805461038090611508565b80601f01602080910402602001604051908101604052809291908181526020018280546103ac90611508565b80156103f95780601f106103ce576101008083540402835291602001916103f9565b820191906000526020600020905b8154815290600101906020018083116103dc57829003601f168201915b5050505050905090565b60008061040e61081f565b905061041b818585610827565b600191505092915050565b6000600254905090565b60008061043b61081f565b90506104488582856109f2565b610453858585610a7e565b60019150509392505050565b60006012905090565b60008061047361081f565b905061049481858561048585896106b3565b61048f9190611569565b610827565b600191505092915050565b60006104a9610cff565b60008214156104ed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104e49061160b565b60405180910390fd5b6104f78383610d7d565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610551610cff565b61055b6000610edd565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606004805461059690611508565b80601f01602080910402602001604051908101604052809291908181526020018280546105c290611508565b801561060f5780601f106105e45761010080835404028352916020019161060f565b820191906000526020600020905b8154815290600101906020018083116105f257829003601f168201915b5050505050905090565b60008061062461081f565b9050600061063282866106b3565b905083811015610677576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066e9061169d565b60405180910390fd5b6106848286868403610827565b60019250505092915050565b60008061069b61081f565b90506106a8818585610a7e565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610742610cff565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156107b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a99061172f565b60405180910390fd5b6107bb81610edd565b50565b60006107c8610cff565b6000831161080b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108029061179b565b60405180910390fd5b6108158284610fa3565b6001905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610897576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161088e9061182d565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610907576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108fe906118bf565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516109e5919061135d565b60405180910390a3505050565b60006109fe84846106b3565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610a785781811015610a6a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a619061192b565b60405180910390fd5b610a778484848403610827565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610aee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae5906119bd565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b5e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5590611a4f565b60405180910390fd5b610b6983838361117a565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610bef576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610be690611ae1565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610c829190611569565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610ce6919061135d565b60405180910390a3610cf984848461117f565b50505050565b610d0761081f565b73ffffffffffffffffffffffffffffffffffffffff16610d2561055d565b73ffffffffffffffffffffffffffffffffffffffff1614610d7b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d7290611b4d565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ded576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610de490611bb9565b60405180910390fd5b610df96000838361117a565b8060026000828254610e0b9190611569565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e609190611569565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610ec5919061135d565b60405180910390a3610ed96000838361117f565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611013576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161100a90611c4b565b60405180910390fd5b61101f8260008361117a565b60008060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050818110156110a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161109c90611cdd565b60405180910390fd5b8181036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260008282546110fc9190611cfd565b92505081905550600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051611161919061135d565b60405180910390a36111758360008461117f565b505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156111be5780820151818401526020810190506111a3565b838111156111cd576000848401525b50505050565b6000601f19601f8301169050919050565b60006111ef82611184565b6111f9818561118f565b93506112098185602086016111a0565b611212816111d3565b840191505092915050565b6000602082019050818103600083015261123781846111e4565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061126f82611244565b9050919050565b61127f81611264565b811461128a57600080fd5b50565b60008135905061129c81611276565b92915050565b6000819050919050565b6112b5816112a2565b81146112c057600080fd5b50565b6000813590506112d2816112ac565b92915050565b600080604083850312156112ef576112ee61123f565b5b60006112fd8582860161128d565b925050602061130e858286016112c3565b9150509250929050565b60008115159050919050565b61132d81611318565b82525050565b60006020820190506113486000830184611324565b92915050565b611357816112a2565b82525050565b6000602082019050611372600083018461134e565b92915050565b6000806000606084860312156113915761139061123f565b5b600061139f8682870161128d565b93505060206113b08682870161128d565b92505060406113c1868287016112c3565b9150509250925092565b600060ff82169050919050565b6113e1816113cb565b82525050565b60006020820190506113fc60008301846113d8565b92915050565b6000602082840312156114185761141761123f565b5b60006114268482850161128d565b91505092915050565b61143881611264565b82525050565b6000602082019050611453600083018461142f565b92915050565b600080604083850312156114705761146f61123f565b5b600061147e8582860161128d565b925050602061148f8582860161128d565b9150509250929050565b600080604083850312156114b0576114af61123f565b5b60006114be858286016112c3565b92505060206114cf8582860161128d565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061152057607f821691505b60208210811415611534576115336114d9565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611574826112a2565b915061157f836112a2565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156115b4576115b361153a565b5b828201905092915050565b7f49434f3a20616d6f756e74206973203000000000000000000000000000000000600082015250565b60006115f560108361118f565b9150611600826115bf565b602082019050919050565b60006020820190508181036000830152611624816115e8565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b600061168760258361118f565b91506116928261162b565b604082019050919050565b600060208201905081810360008301526116b68161167a565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b600061171960268361118f565b9150611724826116bd565b604082019050919050565b600060208201905081810360008301526117488161170c565b9050919050565b7f436f696e696f546f6b656e3a20616d6f756e7420697320300000000000000000600082015250565b600061178560188361118f565b91506117908261174f565b602082019050919050565b600060208201905081810360008301526117b481611778565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b600061181760248361118f565b9150611822826117bb565b604082019050919050565b600060208201905081810360008301526118468161180a565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006118a960228361118f565b91506118b48261184d565b604082019050919050565b600060208201905081810360008301526118d88161189c565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b6000611915601d8361118f565b9150611920826118df565b602082019050919050565b6000602082019050818103600083015261194481611908565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b60006119a760258361118f565b91506119b28261194b565b604082019050919050565b600060208201905081810360008301526119d68161199a565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611a3960238361118f565b9150611a44826119dd565b604082019050919050565b60006020820190508181036000830152611a6881611a2c565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611acb60268361118f565b9150611ad682611a6f565b604082019050919050565b60006020820190508181036000830152611afa81611abe565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000611b3760208361118f565b9150611b4282611b01565b602082019050919050565b60006020820190508181036000830152611b6681611b2a565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000611ba3601f8361118f565b9150611bae82611b6d565b602082019050919050565b60006020820190508181036000830152611bd281611b96565b9050919050565b7f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360008201527f7300000000000000000000000000000000000000000000000000000000000000602082015250565b6000611c3560218361118f565b9150611c4082611bd9565b604082019050919050565b60006020820190508181036000830152611c6481611c28565b9050919050565b7f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60008201527f6365000000000000000000000000000000000000000000000000000000000000602082015250565b6000611cc760228361118f565b9150611cd282611c6b565b604082019050919050565b60006020820190508181036000830152611cf681611cba565b9050919050565b6000611d08826112a2565b9150611d13836112a2565b925082821015611d2657611d2561153a565b5b82820390509291505056fea2646970667358221220aca494d18c105036568d3c29f6416382d71ef268b3b16cb31077eacdde7e18ff64736f6c63430008090033";

type CoinioTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CoinioTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CoinioToken__factory extends ContractFactory {
  constructor(...args: CoinioTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CoinioToken> {
    return super.deploy(
      _name,
      _symbol,
      overrides || {}
    ) as Promise<CoinioToken>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  override attach(address: string): CoinioToken {
    return super.attach(address) as CoinioToken;
  }
  override connect(signer: Signer): CoinioToken__factory {
    return super.connect(signer) as CoinioToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CoinioTokenInterface {
    return new utils.Interface(_abi) as CoinioTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CoinioToken {
    return new Contract(address, _abi, signerOrProvider) as CoinioToken;
  }
}