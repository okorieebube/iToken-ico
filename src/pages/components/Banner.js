const Banner = ({tokenDetails, crowdsaleDetails}) => {
    let { _totalSupply, _name, _symbol, _decimals, _contract_address } = tokenDetails;
    let { _rate } = crowdsaleDetails;
    return ( 
        
        <div>
            <div className="hero-mainn justify-content-center mb-0">
        <div className="container-fluid max-width-1000">
          <div className="hero-inr pt-2">
            <div className="row row-custom">
              <div
                className="col-12 col-content-otr"
                style={{ width: "100% !important" }}
              >
                <div className="col-content-inr">
                  <div className="head-otr">
                    <h1 className="heading-h1 heading titleGreathorned text-center mt-lg-5">    
                      <span>{_name}</span> ({_symbol}) <span>Token Airdrop</span> 
                      
                    </h1>
                  </div>
                  <div className="row w-100 flex-row boxes-main justify-content-center">
                    <div className="col-sm-8 col-md-7 col-lg-6 auction-main order-md-2 my-2 mx-2 mx-lg-3">
                      <p className="body-mb acution">Airdrop Ending</p>
                      <div className="timer">
                        <div className="hours-main main count_down_days">
                          <p className="heading-h2 time-inr number">00</p>
                          <p className="hours-p body-mb">Days</p>
                        </div>
                        <div className="hours-main main count_down_hours">
                          <p className="heading-h2 time-inr number">00</p>
                          <p className="hours-p body-mb">Hours</p>
                        </div>
                        <div className="minutes-main main count_down_minutes">
                          <p className="heading-h2 time-inr number">00</p>
                          <p className="seconds-p body-mb">Mins</p>
                        </div>
                        <div className="seconds-main main count_down_seconds">
                          <p className="heading-h2 time-inr number">00</p>
                          <p className="seconds-p body-mb">Secs</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-8 col-md-4 col-lg-5 bid-main d-none d-sm-block order-md-1 my-2 mx-2 mx-lg-3">
                      <p className="bid body-mb">Crowdsale Price</p>
                      <h3 className="heading-h2 bid-head">{_rate} {_symbol}</h3>
                      <p className="dollor body-mb">= 1 ETH</p>
                    </div>
                  </div>
                  <div className="action-otr justify-content-center">
                    <a
                      href="#airdrop"
                      data-scroll
                      className="btn-outline2 btn-wallet order-lg-2 my-2 mx-2 mx-lg-3"
                    >
                      Airdrop
                    </a>
                    <a
                      href="#presale"
                      data-scroll
                      className="btn-fill btn-create order-lg-1 my-2 mx-2 mx-lg-3"
                    >
                      Crowdsale
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          <img
            className="shape"
            src="assets/img/svg/home2-shape.svg"
            alt="shape"
          />
        </div>
      
     );
}
 
export default Banner;