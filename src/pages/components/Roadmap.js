const Roadmap = () => {
    return ( 
        <div
        id="roadmap"
        className="work-main-home2 justify-content-center"
        style={{
          backgroundImage: "url(assets/img/svg/footer-circles1.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right",
        }}
      >
        <div className="container-fluid max-width-1000">
          <div className="wrapper">
            <h3 className="head heading-h3">Introduce</h3>
          </div>
          <div className="row-work justify-content-center">
            <div className="shadow py-3 px-4 mb-4" style={{ borderRadius: 24 }}>
              <div className="heading-h4" />
              <ul className="text-muted">
                <li>
                  <span className="text-primary me-2">●</span>
                  Quantity: 5,000,000 OS (25%)
                </li>
                <li>
                  <span className="text-primary me-2">●</span>
                  Whitelist: iToken will take a snapshot of data based on the
                  two dimensions of address transaction activity and transaction
                  volume at 20:30 (UTC+8) on September 27, 2021. OS tokens will
                  be allocated to iToken’s historical users according to the
                  snapshot. So if you have traded in iToken before, you are on
                  the list to be rewarded.
                </li>
                <li>
                  <span className="text-primary me-2">●</span>
                  Time and quantity: OS tokens will be distributed to the
                  whitelisted addresses at 20:30 (UTC+8) on October 13, 2021.
                  Whitelisted addresses can claim airdrop reward on the official
                  website (iToken.io). The reward for a single address is 10-50
                  OS tokens.
                </li>
              </ul>
            </div>
            <div className="shadow py-3 px-4 mb-4" style={{ borderRadius: 24 }}>
              <div className="heading-h4">Pre-sale</div>
              <ul className="text-muted">
                <li>
                  <span className="text-primary me-2">●</span>
                  Pre-sale quantity: 5,000,000 OS (25%)
                </li>
                <li>
                  <span className="text-primary me-2">●</span>
                  Pre-sale price: 1 ETH = 10,000 OS. The minimum purchase is 0.1
                  ETH, and the maximum purchase is 10 ETH (the pre-sale quantity
                  is limited, and the excess ETH will be automatically
                  returned).
                </li>
                <li>
                  <span className="text-primary me-2">●</span>
                  Pre-sale rules: The system will start the pre-sale at 20:30
                  (UTC+8) on September 27, 2021, and the pre-sale time is 15
                  days. Use your wallet to send ETH to the pre-sale address, and
                  the system will immediately send the corresponding amount of
                  OS tokens to your wallet. The quantity of OS tokens for
                  pre-sale is limited, and the quota is sorted according to the
                  arrival time of ETH, first come first served.
                </li>
              </ul>
            </div>
            <div className="shadow py-3 px-4 mb-4" style={{ borderRadius: 24 }}>
              <div className="heading-h4">iToken(ITK) Tokenomics</div>
              <ul className="text-muted">
                <li>
                  <span className="text-primary me-2">●</span>
                  Total supply: 20,000,000 OS
                </li>
                <li>
                  <span className="text-primary me-2">●</span>
                  Total circulation: 13,000,000 OS
                </li>
                <li>
                  <span className="text-primary me-2">●</span>
                  Airdrop for historical user: 5,000,000 OS (25%)
                </li>
                <li>
                  <span className="text-primary me-2">●</span>
                  Community airdrop: 3,000,000 OS (15%)
                </li>
                <li>
                  <span className="text-primary me-2">●</span>
                  Pre-sale: 5,000,000 OS (25%)
                </li>
                <li>
                  <span className="text-primary me-2">●</span>
                  Future development: 3,000,000 OS (35%)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default Roadmap;