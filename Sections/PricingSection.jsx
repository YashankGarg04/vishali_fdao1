import React, { useState } from "react";
import styled from "styled-components";
import Card from "../Components/Cards";
import { InnerLayout } from "../styles/Layout";
import fetchData from "../card2";

const Ambassador_data = fetchData("https://api.npoint.io/ded71005c9bbc9df5a82");
const Novice_data = fetchData("https://api.npoint.io/f860acbd45e8fcccaf75");
const Lancer_data = fetchData("https://api.npoint.io/bd2165560d52ee08d690");

const PaymentSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState(null);

  const openModal = (type) => {
    setShowModal(true);
    switch (type) {
      case "novice":
        setSelectedCardData(Novice_data);
        break;
      case "ambassador":
        setSelectedCardData(Ambassador_data);
        break;
      case "lancer":
        setSelectedCardData(Lancer_data);
        break;
      default:
        setSelectedCardData([]);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <PaymentStyled id="pricing">
      <InnerLayout>
        <div>
          <h3 className="small-heading" style={{ color: "white" }}>
            An exceptional service, <span>at the right price</span>
          </h3>
        </div>
        <div className="card-con">
          <CardWrapper onClick={() => openModal("novice")}>
            <Card
              account={"Novice"}
              amount={"$0"}
              text={"Manage your business with a simple and efficient account."}
              imgSrc={"https://i.postimg.cc/1R0ppF3g/lancer.png"}
              backgroundColor={"#212235"}
              button={"Get Started"}
            />
          </CardWrapper>
          <CardWrapper onClick={() => openModal("ambassador")}>
            <Card
              account={"Ambassador"}
              amount={"$10"}
              text={"Manage your business with a simple and efficient account."}
              imgSrc={"https://i.postimg.cc/sxhnxH5H/nft.png"}
              button={"Get Started"}
            />
          </CardWrapper>
          <CardWrapper onClick={() => openModal("lancer")}>
            <Card
              account={"Lancer"}
              amount={"$10"}
              text={"Manage your business with a simple and efficient account."}
              imgSrc={
                "https://i.postimg.cc/qR9cwft4/ambasdoor-removebg-preview.png"
              }
              backgroundColor={
                "radial-gradient(closest-side, #ff0000, #800080)"
              }
              button={"Get Started"}
            />
          </CardWrapper>
        </div>
        {showModal && (
          <Modal>
            <ModalContent>
              <Leftarrow style={{ marginTop: "0px" }} onClick={closeModal}>
                ⬅
              </Leftarrow>
              {selectedCardData.map((card, index) => (
                <StyledBox key={index}>
                  <img src={card.image} alt={card.name} />
                  <h2>{card.name}</h2>
                  <p>{card.description}</p>
                  <report_container className = 'report'>
                  <a
                    className="report"
                    href={card.button3Link}
                    style={{ gridColumn: "2", gridRow: "3", marginLeft: "0px" , height: "80px"}}
                  >
                    <img src="https://i.postimg.cc/NjV14tSk/pngtree-vector-report-icon-png-image-516310.jpg" alt="report logo" />
                  </a>
                  </report_container>

                  <div className="links-container">
                    <a style={{ marginLeft: "0px" }} href={card.button1Link}>
                      <img
                        src="https://i.postimg.cc/ZnCghHHh/64cebc6c19c2fe31de94c78e-X-vector-logo-download.png"
                        alt="twitter logo"
                      />
                    </a>
                    <a href={card.button2Link}>
                      <img
                        src="https://i.postimg.cc/vTk5pZ1z/Screenshot-2024-05-09-005531.png"
                        alt="near social logo"
                      />
                    </a>
                  </div>
                </StyledBox>
              ))}
            </ModalContent>
          </Modal>
        )}
      </InnerLayout>
    </PaymentStyled>
  );
};

const PaymentStyled = styled.section`
  .card-con {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;
    padding-top: 6.4rem;
  }

  @media screen and (max-width: 980px) {
    .card-con {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 689px) {
    .card-con {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const CardWrapper = styled.div`
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(255, 165, 0, 0.5);
  z-index: 1000;
`;

const ModalContent = styled.div`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80%;
  transform: translate(-50%, -50%);
  text-align: center;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
  max-height: 80vh;
`;

const Leftarrow = styled.button`
  background-color: transparent;
  color: white;
  left: 10px;
  font-size: 3rem;
  padding: 5px;
  background-color: transparent;
  cursor: pointer;
  padding: 5px;
  position: absolute;
`;
const StyledBox = styled.div`
  margin-top: 70px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto auto auto;

  img {
    width: 150px;
    height: 150px;
    grid-row: 1 / span 3;
  }

  h2 {
    color: black;
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 5px;
    grid-column: 2 / span 8;
    grid-row: 1;
  }

  p {
    font-size: 14px;
    color: #888;
    text-align: center;
    font-size: 18px;
    grid-column: 2 / span 8;
    grid-row: 2 / span 1;
  }

  .report {
    height: 80px;
  }
  .report img {
    height: 50px;
    width: 50px;
    border-radius: 20px;
    margin-top: 15px;
  }

  

  .links-container {
    grid-column: 3 / span 4;
    grid-row: 3;
    display: flex;
    height: 80px;
    justify-content: flex-end;
    align-items: center;
  }

  .links-container a {
    margin-left: 10px;
  }

  .links-container img {
    width: 50px;
    border: 1px solid black;
    height: 50px;
    border-radius: 20px;
  }
`;

export default PaymentSection;
