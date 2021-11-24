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

export const buyTokens = async (web3, amt, user) => {
  console.log("buying token...");
  let networkId = await web3.eth.net.getId();
  let deployedNetwork = crowdsale.networks[networkId];
  try {
    const contract = new web3.eth.Contract(
      crowdsale.abi,
      deployedNetwork.address
    );
    let amt_in_bn = web3.utils.toBN(amt);
    let buyTokens = await contract.methods
      .buyTokens(user)
      .send({ from: user, value: amt_in_bn, gas: 5500000 });
    console.log(buyTokens);
    if (buyTokens.transactionHash) {
      return { error: false, message: "ITK Tokens purchased successfully" };
    }
  } catch (err) {
    return { error: true, message: err.message };
  }
};
