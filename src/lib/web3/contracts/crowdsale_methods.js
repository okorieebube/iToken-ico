import crowdsale from "../../../abis/iTokenCrowdSale.json";
const Web3 = require("web3");
const web3 = new Web3("http://127.0.0.1:9545");
var networkId, deployedNetwork;

(async () => {
  networkId = await web3.eth.net.getId();
  deployedNetwork = crowdsale.networks[networkId];
})();




// 1 ETH equals rate
export const rate = async () => {
  const contract = new web3.eth.Contract(crowdsale.abi, deployedNetwork.address);
  return await contract.methods.rate().call();
};

// wallet to pay to
export const wallet = async () => {
    const contract = new web3.eth.Contract(crowdsale.abi, deployedNetwork.address);
    return await contract.methods.wallet().call();
  };
  