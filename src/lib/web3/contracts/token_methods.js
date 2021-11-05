import iToken from "../../../abis/iToken.json";
const Web3 = require("web3");
const web3 = new Web3("http://127.0.0.1:9545");
var networkId, deployedNetwork;

(async () => {
  networkId = await web3.eth.net.getId();
  deployedNetwork = iToken.networks[networkId];
})();





export const totalSupply = async () => {
  const contract = new web3.eth.Contract(iToken.abi, deployedNetwork.address);
  return await contract.methods.totalSupply().call();
  // return res;
};

export const name = async () => {
  const contract = new web3.eth.Contract(iToken.abi, deployedNetwork.address);
  return await contract.methods.name().call();
  // return res;
};

export const symbol = async () => {
  const contract = new web3.eth.Contract(iToken.abi, deployedNetwork.address);
  return await contract.methods.symbol().call();
  // return res;
};

export const decimals = async () => {
  const contract = new web3.eth.Contract(iToken.abi, deployedNetwork.address);
  return await contract.methods.decimals().call();
  // return res;
};

export const contract_address = async () => {
  const contract = new web3.eth.Contract(iToken.abi, deployedNetwork.address);
  return await contract.options.address;
  // return res;
};
