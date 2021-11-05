const Web3 = require("web3");
const { ropsten_node, ganache_node, PRV_KEY_1 } = require("../../tests/test-artifacts");
const web3 = new Web3(ganache_node);
const fs = require("fs");
var Tx = require("ethereumjs-tx").Transaction;
require("dotenv").config();
const privateKey1 = Buffer.from(PRV_KEY_1, "hex");

module.exports = {
    transfer,
    new_contract_instance,
    deploy_contract_object,
    contract_artifact,
    transaction
};




async function new_contract_instance(contractABI, contract_address) {
    let contract = new web3.eth.Contract(contractABI, contract_address);
    return contract;
}

async function deploy_contract_object(from, bytecodeWithEncodedParameters) {
    let txCount = await web3.eth.getTransactionCount(from);
    const txObject = {
        // gasPrice: await web3.utils.toHex(web3.eth.getGasPrice() ), // Determines the gas price in the network currently
        // gasLimit: await web3.utils.toHex(web3.eth.estimateGas({ bytecodeWithEncodedParameters }) ),
        // data: process.env.BYTE_CODE,
        data: bytecodeWithEncodedParameters,
        nonce: web3.utils.toHex(txCount),
        from: from,
        gasLimit: web3.utils.toHex("2000000"),
        gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
    };
    return txObject;
}

async function transfer(
    contract,
    address_from,
    address_to,
    amt_in_eth,
    contract_address
) {
    let amt_in_wei = web3.utils.toWei(amt_in_eth, "ether");
    let txCount = await web3.eth.getTransactionCount(address_from);
    const txObject = {
        nonce: web3.utils.toHex(txCount),
        gasLimit: web3.utils.toHex(800000), // Raise the gas limit to a much higher amount
        gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
        to: contract_address,
        data: await contract.methods.transfer(address_to, amt_in_wei).encodeABI(),
    };

    const tx = new Tx(txObject);
    tx.sign(privateKey1);

    //   console.log(tx);return;
    const serializedTx = tx.serialize();
    const raw = "0x" + serializedTx.toString("hex");

    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        console.log({ err: err, txHash: txHash });
    });
}

async function contract_artifact(file_name){
    let rawCodeFs = await fs.readFileSync(
        `${"../../server/build/contracts/"}${file_name}.json`
        // 'test-artifacts.js'
      );
    //   console.log(rawCodeFs);return;
      let rawcode = await JSON.parse(rawCodeFs.toString());
      return rawcode;
}


async function transaction(
    contract,
    address_from,
    amt_in_eth,
    contract_address,
    data,
    USER_PRV_KEY
) {
    let amt_in_wei = await web3.utils.toWei(amt_in_eth, "ether");
    let txCount = await web3.eth.getTransactionCount(address_from);
    const txObject = {
        from: address_from,
        value: web3.utils.toHex(amt_in_wei),
        nonce: web3.utils.toHex(txCount),
        // gasLimit: web3.utils.toHex("800000"), // Raise the gas limit to a much higher amount
        // gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
        to: contract_address,
        data: data,
        gasPrice: await web3.utils.toHex(web3.eth.getGasPrice() ), // Determines the gas price in the network currently
        gasLimit: await web3.utils.toHex(web3.eth.estimateGas({ data }) ),
    };

    const tx = new Tx(txObject);
    tx.sign(USER_PRV_KEY);

    const serializedTx = tx.serialize();
    const raw = "0x" + serializedTx.toString("hex");
    //   console.log(raw);return;

    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        console.log({ err: err, txHash: txHash });
        // return { err: err, txHash: txHash };
    });
}