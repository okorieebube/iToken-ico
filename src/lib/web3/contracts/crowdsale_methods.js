import crowdsale from "../../../abis/iTokenCrowdSale.json";

// 1 ETH equals rate
export const rate = async (web3) => {
  let networkId = await web3.eth.net.getId();
  let deployedNetwork = crowdsale.networks[networkId];

  try {
    const contract = new web3.eth.Contract(
      crowdsale.abi,
      deployedNetwork.address
    );
    return await contract.methods.rate().call();
  } catch (error) {
    return error;
  }
};

// wallet to pay to
export const wallet = async (web3) => {
  let networkId = await web3.eth.net.getId();
  let deployedNetwork = crowdsale.networks[networkId];
  try {
    const contract = new web3.eth.Contract(
      crowdsale.abi,
      deployedNetwork.address
    );
    return await contract.methods.wallet().call();
  } catch (err) {
    return err;
  }
};

export const buyTokens = async (web3, amt) => {
  console.log('calling services...')
  let networkId = await web3.eth.net.getId();
  let deployedNetwork = crowdsale.networks[networkId];
  try {
    const contract = new web3.eth.Contract(
      crowdsale.abi,
      deployedNetwork.address
    );
    return await contract.methods.buyTokens(amt).send();
  } catch (err) {
    return err;
  }
};

