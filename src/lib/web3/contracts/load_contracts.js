import iToken from "../../../abis/iToken.json"
const Web3 = require("web3");
const web3 = new Web3("http://127.0.0.1:9545");




export const token_contract = async () => {
    
    try {
        const networkId = await web3.eth.net.getId();
        const deployedNetwork = iToken.networks[networkId];
        const contract = new web3.eth.Contract(
          iToken.abi,
          deployedNetwork.address
        );
        return contract;

    } catch (err) {
        console.log(err)
    }
};

