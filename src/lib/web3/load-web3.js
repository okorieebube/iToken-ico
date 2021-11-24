import Web3 from "web3";

// front-api to load web3 connection
export const loadWeb3 = async () => {
  return new Promise((resolve, reject) => {
    let web3;
    try {
      if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        // window.ethereum.enable();
        console.log("Connected to an Ethereum browser...");
      } else {
        let provider = new Web3.providers.HttpProvider("http://127.0.0.1:9545");
        web3 = new Web3(provider);
        console.log("Connected to localhost...");
      }
      resolve(web3);
    } catch (err) {
      reject(err);
      console.log(err);
    }
  });
};

// loads all accounts in current metamask network into our project
export const loadAccounts = async (web3) => {
  const ethereum = await window.ethereum;
  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  // console.log({ logged_in: accounts[0] });
  return accounts[0];
};

export const loadNetwork = async (web3) => {
  let network = web3.eth.net.getNetworkType()
  return network
  // console.log(network)
}