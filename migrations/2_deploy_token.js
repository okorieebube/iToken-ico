const iToken = artifacts.require("iToken");
const iTokenCrowdsale = artifacts.require("iTokenCrowdsale");

// const eventsContract = artifacts.require("eventsContract");

module.exports = async function (deployer, network, accounts) {
  const NAME = "iToken",
    SYMBOL = "ITK",
    DECIMALS = 18;

  //  how many of the token can you get for one Ether
  const RATE = 500;
  const WALLET = accounts[0];

  // Deploy a single contract with constructor arguments
  await deployer.deploy(iToken, NAME, SYMBOL, DECIMALS);
  const ITK = await iToken.deployed();

  await deployer.deploy(iTokenCrowdsale, RATE, WALLET, ITK.address);
  const iTkCrowdsale = await iTokenCrowdsale.deployed();

  // transfer the minter role from this contract (the default)
  // to the crowdsale, so it can mint tokens
  await ITK.addMinter(iTkCrowdsale.address);
  ITK.renounceMinter();
};
