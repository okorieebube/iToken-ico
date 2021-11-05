const AboutToken = ({tokenDetails}) => {
    let { _totalSupply, _name, _symbol, _decimals, _contract_address } = tokenDetails;
    return ( 
        
      <div
      id="token"
      className="call-to-action-home2 justify-content-center my-5"
    >
      <div className="container-fluid">
        <div className="call-to-action p-4 p-md-5 mb-3 text-shadow">
          <div className="wrapper row">
            <div className="col-lg-7 col-xl-6">
              <h2 className="heading-h2 heading">{_name} ({_symbol}) Token</h2>
              <p className="text-muted body-m mb-2">
                {_name} is the world’s first &amp; largest NFT (Non-Fungible
                Token) marketplace on the Ethereum network. Now, iToken has
                issued ERC20 token {_symbol} based on the Ethereum chain, that 
                will be sold through a minted crowdsale. The open-source smart 
                contract code has been publicized.
              </p>
              <p className="text-muted body-m mb-2">
                25% OS tokens for trading airdrop, distributed to active users
                of the iToken. 15% OS tokens for community airdrop,
                distributed to community users for free. For specific airdrop
                details, please visit the iToken Foundation website
                (https://iToken.foundation). 25% OS tokens for pre-sale, and
                the pre-sale price is 1 ETH = 10,000 OS. After the pre-sale
                ends, OS will be listed on exchanges such as Binance, Huobi
                and Coinbase.
              </p>
              <h2 className="heading-h4">Smart Contract</h2>
              <ul>
                <li className="my-1 d-flex align-items-center">
                  <i className="icofont-star text-primary" />
                  <span className="text-muted mx-2">Token Symbol</span>
                  <span className="text-primary">{_symbol}</span>
                </li>
                <li className="my-1 d-flex align-items-center">
                  <i className="icofont-truck-loaded text-primary" />
                  <span className="text-muted mx-2 text-nowrap">
                    Contract Address
                  </span>
                  <span className="text-primary text-break copy">
                    {_contract_address}
                  </span>
                  <a
                    href="https://etherscan.io/token/0x671167fFA438C87F134395d68b820d5a42202214"
                    target="_blank"
                    className="ms-2"
                  >
                    <i className="icofont-external-link text-primary" />
                  </a>
                </li>
                <li className="my-1 d-flex align-items-center">
                  <i className="icofont-bullhorn text-primary" />
                  <span className="text-muted mx-2">Decimals</span>
                  <span className="text-primary">{_decimals}</span>
                </li>
                <li className="my-1 d-flex align-items-center">
                  <i className="icofont-box text-primary" />
                  <span className="text-muted mx-2">Current Total Supply</span>
                  <span className="text-primary">{_totalSupply}</span>
                </li>
                <li className="my-1 d-flex align-items-center">
                  <i className="icofont-globe text-primary" />
                  <span className="text-muted mx-2">Blockchain</span>
                  <span className="text-primary">Ethereum ERC20</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="img-otr">
            <div className="img-inr">
              <div className="col-img-inr">
                <img
                  className="about-img img-fluid"
                  src="assets/img/4.png"
                  alt="img"
                />
              </div>
              <div className="col-img-inr">
                <img
                  className="about-img img-fluid"
                  src="assets/img/5.png"
                  alt="img"
                />
              </div>
              <div className="col-img-inr">
                <img
                  className="about-img img-fluid"
                  src="assets/img/6.png"
                  alt="img"
                />
              </div>
            </div>
            <div className="img-inr">
              <div className="col-img-inr">
                <img
                  className="about-img img-fluid"
                  src="assets/img/7.png"
                  alt="img"
                />
              </div>
              <div className="col-img-inr">
                <img
                  className="about-img img-fluid"
                  src="assets/img/8.png"
                  alt="img"
                />
              </div>
              <div className="col-img-inr">
                <img
                  className="about-img img-fluid"
                  src="assets/img/9.png"
                  alt="img"
                />
              </div>
            </div>
            <div className="img-inr d-none d-xl-block">
              <div className="col-img-inr">
                <img
                  className="about-img img-fluid"
                  src="assets/img/1.png"
                  alt="img"
                />
              </div>
              <div className="col-img-inr">
                <img
                  className="about-img img-fluid"
                  src="assets/img/3.png"
                  alt="img"
                />
              </div>
              <div className="col-img-inr">
                <img
                  className="about-img img-fluid"
                  src="assets/img/2.png"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default AboutToken;