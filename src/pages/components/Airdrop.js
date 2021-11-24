const Airdrop = () => {
    return ( 
        <div
        id="airdrop"
        className="work-main-home2 justify-content-center"
        style={{
          backgroundImage: "url(assets/img/svg/footer-circles2.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top left",
        }}
      >
        <div className="container-fluid max-width-1000">
          <div className="wrapper">
            <h3 className="head heading-h3">Airdrop</h3>
          </div>
          <div
            id="airdrop-block"
            className="row row-work justify-content-center"
          >
            <div className="col-12 col-sm-10 col-md-9 col-lg-8">
              <form id="airdrop-form" data-lpignore="true">
                <input name="ref" type="hidden" defaultValue />
                <div className="input-group">
                  <input
                    name="address"
                    className="input form-control"
                    type="text"
                    placeholder="Input your ETH address"
                  />
                  <button type="submit" className="btn btn-fill py-2">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default Airdrop;