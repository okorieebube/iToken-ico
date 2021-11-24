import Crowdsale from "./components/Crowdsale";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTokenDetails } from "../providers/redux/_actions/token-actions";
import { fetchCrowdsaleDetails } from "../providers/redux/_actions/crowdsale-actions";
import AboutToken from "./components/AboutToken";
import { loadWeb3 } from "../lib/web3/load-web3";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";
import Airdrop from "./components/Airdrop";

const Home = () => {
  const dispatch = useDispatch();

  const { success: token } = useSelector((state) => state.FetchTokenArtifact);
  const [tokenDetails, setTokenDetails] = useState({});

  const { data: crowdsale } = useSelector(
    (state) => state.FetchCrowdsaleArtifact
  );
  const [crowdsaleDetails, setCrowdsaleDetails] = useState({});


  useEffect(() => {
    token && setTokenDetails(token);
  }, [token]);

  useEffect(() => {
    if (crowdsale) {
      console.log(crowdsale);
    }

    crowdsale && setCrowdsaleDetails(crowdsale);
  }, [crowdsale]);

  useEffect(() => {
    dispatch(fetchTokenDetails());
    dispatch(fetchCrowdsaleDetails());
  }, []);

  return (
    <div>
      <div className="loader" />
      <Hero crowdsaleDetails={crowdsaleDetails} tokenDetails={tokenDetails} />
      <AboutToken tokenDetails={tokenDetails} />
      <Crowdsale
        crowdsaleDetails={crowdsaleDetails}
        tokenDetails={tokenDetails}
      />
      <Airdrop />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default Home;
