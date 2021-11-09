import iToken from "../../../abis/iToken.json";





export const totalSupply = async (web3) => {
  let networkId = await web3.eth.net.getId();
  let deployedNetwork = iToken.networks[networkId];
  const contract = new web3.eth.Contract(iToken.abi, deployedNetwork.address);
  return await contract.methods.totalSupply().call();
  // return res;
};

export const name = async (web3) => {
  let networkId = await web3.eth.net.getId();
  let deployedNetwork = iToken.networks[networkId];
  const contract = new web3.eth.Contract(iToken.abi, deployedNetwork.address);
  return await contract.methods.name().call();
  // return res;
};

export const symbol = async (web3) => {
  let networkId = await web3.eth.net.getId();
  let deployedNetwork = iToken.networks[networkId];
  const contract = new web3.eth.Contract(iToken.abi, deployedNetwork.address);
  return await contract.methods.symbol().call();
  // return res;
};

export const decimals = async (web3) => {
  let networkId = await web3.eth.net.getId();
  let deployedNetwork = iToken.networks[networkId];
  const contract = new web3.eth.Contract(iToken.abi, deployedNetwork.address);
  return await contract.methods.decimals().call();
  // return res;
};

export const contract_address = async (web3) => {
  let networkId = await web3.eth.net.getId();
  let deployedNetwork = iToken.networks[networkId];
  const contract = new web3.eth.Contract(iToken.abi, deployedNetwork.address);
  return await contract.options.address;
  // return res;
};
