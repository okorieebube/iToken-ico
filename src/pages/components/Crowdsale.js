import Validator from "validatorjs";
import React, { useState } from "react";
import { __crowdsale } from "../../lib/validation/schema/crowdsale-schema";
import {
  MapFormErrorsInArr,
  ToastFormErrors,
} from "../../lib/validation/handlers/error-handlers";
import { useDispatch } from 'react-redux'
import { buyTokens } from "../../providers/redux/_actions/crowdsale-actions";

const Crowdsale = ({ crowdsaleDetails, tokenDetails }) => {
  let { _rate, _wallet } = crowdsaleDetails;
  let { _totalSupply } = tokenDetails;
  const { rules, attributes } = __crowdsale;
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const values = Object.fromEntries(data.entries());
    console.log(values);
    let validation = new Validator(values, rules);

    validation.setAttributeNames(attributes);

    if (validation.fails()) {
      ToastFormErrors(MapFormErrorsInArr(validation.errors.errors));
    }

    if (validation.passes()) {
      console.log("passed");
      dispatch(buyTokens(values.amount));
    }
  };
  return (
    <div
      id="presale"
      className="live-acution-home2 justify-content-center"
      style={{ padding: "30px 0 50px 0 !important" }}
    >
      <div className="container-fluid max-width-1000">
        <div className="live-auction-inr">
          <div className="heading-otr">
            <div className="head-otr">
              <span className="dot" />
              <h3 className="heading heading-h3">Crowdsale is Live</h3>
            </div>
          </div>
          <span className="line" />
          <div>
            <p className="mb-2">Minted supply: {_totalSupply}</p>
            <p className="mb-2">
              Crowdsale address:
              <span className="text-primary copy text-break">
                {_wallet}
              </span>{" "}
              <a className="copy d-inline-block" text={_wallet} href>
                <i className="icofont-ui-copy" />
              </a>
            </p>
            <p className="mb-2">Crowdsale price: 1 ETH = {_rate} ITK</p>
            <p className="mb-2">
              *The minimum purchase is 0.1 ETH, and the maximum purchase is 10
              ETH.
            </p>
            <p className="mb-2">Enter the amount of ETH below</p>

            <div
              id="airdrop-block"
              className="row row-work justify-content-center"
              // style={{ float: "left" }}
            >
              <div className="col-12 col-sm-10 col-md-8 col-lg-8 is-pulled-left">
                <form
                  id="airdrop-form"
                  data-lpignore="true"
                  onSubmit={handleSubmit}
                >
                  {/* <input name="ref" type="hidden" defaultValue /> */}
                  <div className="input-group">
                    <input
                      name="amount"
                      className="input form-control"
                      type="number"
                      placeholder="Input ETH amount"
                    />
                    <button type="submit" className="btn btn-fill py-2">
                      Purchase
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crowdsale;
