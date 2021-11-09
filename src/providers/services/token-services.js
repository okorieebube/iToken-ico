// import { token_contract } from "../../lib/web3/contracts/load_contracts";
import {
  symbol,
  totalSupply,
  name,
  decimals,
  contract_address,
} from "../../lib/web3/contracts/token_methods";
import { loadWeb3 } from "../../lib/web3/load-web3";

export const TokenService = {
  fetch_details: async () => {
    const WEB3 = await loadWeb3();
    let _totalSupply = await totalSupply(WEB3);
    let _name = await name(WEB3);
    let _symbol = await symbol(WEB3);
    let _decimals = await decimals(WEB3);
    let _contract_address = await contract_address(WEB3);

    let contract_details = {
      _totalSupply,
      _name,
      _symbol,
      _decimals,
      _contract_address,
    };
    return contract_details;
  },
};
