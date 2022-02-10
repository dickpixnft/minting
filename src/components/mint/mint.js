import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

//import Assets
import MintGif from "../../assets/about.gif";
import YButton from "../basic/YButton";

import { BsFileMinusFill, BsFilePlusFill } from "react-icons/bs";

//import CSS
import "./mint.css";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";
function Mint() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [feedback, setFeedback] = useState("");
  const [claimingNft, setClaimingNft] = useState(false);
  const [mintNum, setMintNum] = useState(0);
  const claimNFTs = (_amount) => {
    _amount = document.getElementById("inputBox").textContent;
    if (_amount <= 0) {
      return;
    }
    setFeedback("Minting your Official DickPix NFT...");
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(blockchain.account, _amount)
      // ********
      // You can change the line above to
      // .whiteListMint(blockchain.account, _amount) if you want only whitelisted
      // users to be able to mint through your website!
      // And after you're done with whitelisted users buying from your website,
      // You can switch it back to .mint(blockchain.account, _amount).
      // ********
      .send({
        gasLimit: 285000 * _amount,
        to: "0x7181d2038B849A18145eb153b8bEFC552e52c37A", // the address of your contract
        from: blockchain.account,
        value: blockchain.web3.utils.toWei(
          (0.0401 * _amount).toString(),
          "ether"
        ),
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback(
          "Sorry, something went wrong. Check your transaction on Etherscan to find out what happened!"
        );
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback("Your BooCrew NFT has been successfully minted!");
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  const plus_num = () => {
    // const {mintNum} = this.state;
    if (mintNum >= 25) return;
    setMintNum(mintNum + 1);
    // if (mintNum == 25) return;
  };
  const minus_num = () => {
    // const {mintNum} = this.state;
    if (mintNum <= 0) return;
    setMintNum(mintNum - 1);
  };
  return (
    <div className="mint-control" id="mint">
      <Container>
        <Row>
          <Col md={6} xs={12} className="mint-image">
            <img src={MintGif} alt="mint gif" />
          </Col>
          <Col md={6} xs={12} className="mint-description">
            <header style={{ fontWeight: 0 }}>
              MINT YOUR <text style={{ color: "white" }}>DICK PIX</text>
              <br /> ABOUT <text style={{ color: "white" }}>THE DICKS:</text>
            </header>
            <p style={{ textAlign: "center" }}>
              3000 total supply. 777 of the Dicks are Legendary NFTs. They are
              the only 1/1 hand-drawn originals in the entire collection. The
              remaining 2,223 fall into 3 categories: Super Rare, Rare, and
              Common. There are 703 Super Rare Dicks in Black &amp; White, 743
              Rare Dicks in Gold, and 777 Common Dicks in 3D.
              <br />
              <br />
              <header style={{ fontWeight: 0 }}>
                BAG OF DICKS{" "}
                <text style={{ color: "white" }}>COLLECTION GAME</text>
              </header>
              The “Bag of Dicks” game is like a trading card game. Buy and trade
              with other holders to get a complete set of dicks. A complete set
              must contain all versions of a Legendary dick. Possible
              combinations range from 2-4 matching dicks in a set. For example,
              you must hold all 4 versions (1 Legendary, 1 Super Rare, 1 Rare,
              and 1 Common) of the Snoop Dogg dick to make a complete Snoop set.
              <br />
              <text style={{ fontStyle: "italic" }}>
                All “Bag of Dicks” holders will be rewarded with exclusive
                airdrops, giveaways, prizes, and more!
              </text>
              <br />
              
            </p>

            <div className="number-control">
              <BsFileMinusFill
                color="white"
                size={40}
                onClick={() => minus_num()}
              />
              <span id="inputBox">{mintNum}</span>
              <BsFilePlusFill
                color="white"
                size={40}
                onClick={() => plus_num()}
              />
            </div>
            <p style={{ marginTop: 0, marginBottom: 0 }}>0.04 ETH + Gas</p>
            {blockchain.account === "" || blockchain.smartContract === null ? (
              <div className="flex-column">
                <button
                  className="ybutton"
                  onClick={(e) => {
                    console.log("--------");
                    e.preventDefault();
                    dispatch(connect());
                    getData();
                  }}
                >
                  CONNECT
                </button>
                <a
                style={{ color: "white", textAlign: "center" }}
                href="https://etherscan.io/address/0x7181d2038b849a18145eb153b8befc552e52c37a"
              >
                0x7181d2038B849A18145eb153b8bEFC552e52c37A
              </a>
                {blockchain.errorMsg !== "" ? (
                  <div
                    style={{
                      textAlign: "center",
                      fontSize: 20,
                      color: "white",
                    }}
                  >
                    {blockchain.errorMsg}
                  </div>
                ) : null}
              </div>
            ) : (
              <button
                className="ybutton"
                onClick={(e) => {
                  e.preventDefault();
                  claimNFTs(1);
                  getData();
                }}
              >
                {claimingNft ? "BUSY" : "MINT"}
              </button>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Mint;
