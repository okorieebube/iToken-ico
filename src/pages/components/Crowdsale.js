import Validator from "validatorjs";
import React, { useState } from "react";
import { __crowdsale } from "../../lib/validation/schema/crowdsale-schema";
import toast from "react-hot-toast";
import {MapFormErrors, ToastFormErrors} from "../../lib/validation/handlers/error-handlers"

const Crowdsale = ({ crowdsaleDetails, tokenDetails }) => {
  const [formErrors, setFormErrors] = useState({});
  let { _rate, _wallet } = crowdsaleDetails;
  let { _totalSupply } = tokenDetails;
  const { rules, attributes } = __crowdsale;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const values = Object.fromEntries(data.entries());
    // console.log(values);
    let validation = new Validator(values, rules);

    validation.setAttributeNames(attributes);

    validation.fails(() => {
      setFormErrors(MapFormErrors(validation.errors.errors));
      console.log(formErrors)
      toast.error(formErrors)
      
      // ToastFormErrors(formErrors)
    });

    if (validation.passes()) {
      console.log("passed");
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
              <p className="text-danger fs-12 mt-1">
                {formErrors.password?.message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crowdsale;
