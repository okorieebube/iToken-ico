import Web3 from "web3";

// front-api to load web3 connection
export const loadWeb3 = () => {
  return new Promise((resolve, reject) => {
    window.addEventListener("load", async () => {
      let web3;
      try {
        // if (window.ethereum) {
        //   web3 = new Web3(window.ethereum);
        //   await window.ethereum.enable();
        //   console.log("Connected to an Ethereum browser...");
        // } else if (window.web3) {
        //   web3 = new Web3(window.web3.currentProvider);
        //   console.log("Connected to metamask...");
        // } else {
          let provider = new Web3.providers.HttpProvider(
            "http://127.0.0.1:9545"
          );
          web3 = new Web3(provider);
          console.log("Connected to localhost...");
        // }
        //   console.log("kirk...",web3);
        resolve(web3);
      } catch (err) {
        reject(err);
        console.log(err);
      }
    });
  });
};
