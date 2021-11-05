// import { token_contract } from "../../lib/web3/contracts/load_contracts";
import {
  symbol,
  totalSupply,
  name,
  decimals,
  contract_address,
} from "../../lib/web3/contracts/token_methods";

export  const TokenService = {

  fetch_details: async () => {
    let _totalSupply = await totalSupply();
    let _name = await name();
    let _symbol = await symbol();
    let _decimals = await decimals();
    let _contract_address = await contract_address();
    
    let contract_details = {
      _totalSupply,
      _name,
      _symbol,
      _decimals,
      _contract_address
    };
    return contract_details;
  },


};
