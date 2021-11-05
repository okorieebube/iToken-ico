// import { token_contract } from "../../lib/web3/contracts/load_contracts";
import {
    rate,
    wallet
  } from "../../lib/web3/contracts/crowdsale_methods";
  
  export  const CrowdsaleService = {
  
    fetch_details: async () => {
      let _rate = await rate();
      let _wallet = await wallet();
      
      let contract_details = {
        _rate,
        _wallet,
      };
      return contract_details;
    },
  
  
  };
  