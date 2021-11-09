// import { token_contract } from "../../lib/web3/contracts/load_contracts";
import { rate, wallet } from "../../lib/web3/contracts/crowdsale_methods";
import { loadWeb3 } from "../../lib/web3/load-web3";

export const CrowdsaleService = {
  fetch_details: async () => {
    const WEB3 = await loadWeb3();
    let _rate = await rate(WEB3);
    let _wallet = await wallet(WEB3);

    let contract_details = {
      _rate,
      _wallet,
    };
    console.log(contract_details);
    return contract_details;
  },
};
