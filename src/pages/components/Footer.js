const Footer = () => {
    return ( 
        <>
<div className="footer-home2 pt-4 pb-0">
        <div className="container-fluid">
          <div className="wrapper pb-4 justify-content-start">
            <h4 className="heading-h4 ethoz-head me-md-4">
              Get Latest Updated from iToken Foundation
            </h4>
            <ul className="icon-ul">
              <li className="icon-li">
                <a
                  href="https://t.me/OStoken"
                  target="_blank"
                  className="icon-a"
                >
                  <svg
                    className="icon"
                    width={32}
                    height={32}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11 16.859l11.24 9.89a1 1 0 001.635-.527l4.702-20.516a1 1 0 00-1.34-1.154l-23.07 9.063a1 1 0 00.17 1.911L11 16.86zM11 16.86L28.014 4.57"
                      stroke="#999"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.613 21.799l-3.906 3.906A1 1 0 0111 24.998v-8.14"
                      stroke="#999"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <img
          className="shape1"
          src="assets/img/Squares-shape2-home2.svg"
          alt="Squares"
        />
        <img
          className="shape2"
          src="assets/img/Squares-shape1-home2.svg"
          alt="Squares"
        />
      </div>
      <div className="copy-otr-home2">
        <div className="container-fluid">
          <div className="copy-inr">
            <a href="#top" className="logo-otr">
              <img
                className="logo"
                src="assets/opensea.svg"
                alt="brand-logo"
                style={{ height: 30, width: 30 }}
              />
            </a>
            <div className="copy-name body-s">
              Copyright © 2021 by iToken.foundation
            </div>
            <div className="all-rights">
              <p className="all body-s">All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
        </>
     );
}
 
export default Footer;