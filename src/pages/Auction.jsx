import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import '../styles/auction.css';
import artData from '../data/auction.json';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import AuctionCountdown from '../components/Auction/AuctionCountdown';

const AuctionPage = () => {
  // 커튼 요소를 참조하기 위한 ref 생성
  const curtainRef = useRef(null);

  // 커튼 애니메이션이 종료되면 커튼을 숨기는 함수
  const hideCurtain = () => {
    // 커튼 요소가 존재하고 애니메이션이 끝나면
    if (curtainRef.current) {
      // 커튼 숨기기
      curtainRef.current.style.display = 'none';
    }
  };

  // 컴포넌트가 마운트된 후 애니메이션이 종료되면 커튼을 숨기도록 설정
  useEffect(() => {
    // 애니메이션 지속 시간 (8초) 후에 커튼 숨기기 함수 호출
    const timeoutId = setTimeout(hideCurtain, 5000); // 8초는 애니메이션 지속 시간과 동일해야 합니다.

    // 컴포넌트 언마운트 시 타임아웃 클리어
    return () => clearTimeout(timeoutId);
  }, []); // 컴포넌트가 처음 렌더링될 때만 호출
  const [showModal, setShowModal] = useState(false);
  const [showBidSubmittedModal, setShowBidSubmittedModal] = useState(false);
  const [bidDetails, setBidDetails] = useState({
    amount: '',
    name: '',
    email: '',
    phone: '',
  });

  const { artId } = useParams();
  const [selectedArt, setSelectedArt] = useState(null);
  const handleSelectArt = (artId) => {
    const auction = artData.find((item) => item.id === Number(artId));
    setSelectedArt(auction);
  };
  useEffect(() => {
    // Select the first artwork initially
    if (artData.length > 0) {
      handleSelectArt(artId);
    }
  }, [artId]);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleCloseBidSubmittedModal = () => setShowBidSubmittedModal(false);
  const handleShowBidSubmittedModal = () => setShowBidSubmittedModal(true);

  const handleBidSubmit = () => {
    handleCloseModal();
    handleShowBidSubmittedModal();
    // You can perform additional actions here, such as sending bid details to the server
  };

  // Calculate remainingche time function
  // function calculateRemainingTime(endTime) {
  //   const currentTime = new Date().getTime();
  //   const remaining = Math.max(0, endTime - currentTime); // Ensure remaining time is not negative
  //   return remaining;
  // }

  // Update remaining time every second
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setRemainingTime(calculateRemainingTime(auctionEndTime));
  //   }, 500);

  // Cleanup function to clear the interval when component unmounts
  return (
    <>
      <Header />

      <div className="auction-page">
        {/*------ curtain effect-------- */}
        <div className="outer">
          <div className="tcell">
            <div className="curtain-wrapper">
              <div className="curtain" ref={curtainRef}>
                <div className="panel-left"></div>
                <div className="panel-right"></div>
                <div className="jacket" title="Play"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="artwork-container">
          {selectedArt && (
            <>
              <div className="artwork-img-section">
                <img
                  src={selectedArt.bid_art_img ? selectedArt.bid_art_img : ''}
                  className="artwork-image"
                  alt=" artwork"
                />
              </div>
              <div className="artwork-info">
                <h2 className="artwork-title">{selectedArt.bid_art_title}</h2>
                <h3 className="artist">Artist: {selectedArt.artist}</h3>
                <p className="description">
                  Description: {selectedArt.description}
                </p>

                <div className="price-section">
                  <div>
                    Estimated Price:
                    <span className="price-value">
                      ${selectedArt.bid_estimate_price}
                    </span>
                  </div>
                  <div>
                    Starting Price:
                    <span className="price-value">
                      ${selectedArt.bid_starting_price}
                    </span>
                  </div>
                </div>

                <div key={selectedArt.id}>
                  <p>Published Year: {selectedArt.published_year}</p>
                  <p> Bid Code:{selectedArt.bid_code}</p>
                  <p>Date: {selectedArt.bid_date}</p>

                  {/* <div className="bid-section">
            <p className="bid-label">Price: {selectedArt.price}</p>
          </div>  */}
                </div>

                {/* <div className="timer-container">
          <div className="timer-frame"> 
            <p className="remaining-time">Closing:{formatRemainingTime(remainingTime)}</p>
          </div>
        </div> */}
                <AuctionCountdown />
                {bidDetails.amount && (
                  <div className="bid-details">
                    <h4>Your Bid Details:</h4>
                    <p>
                      <strong>Amount:</strong> ${bidDetails.amount}
                    </p>
                    <p>
                      <strong>Name:</strong> {bidDetails.name}
                    </p>
                  </div>
                )}
                <button className="bid-button" onClick={handleShowModal}>
                  Place your bid
                </button>
              </div>
            </>
          )}
        </div>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Place Your Bid</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="mb-3">
                <label htmlFor="bidAmount" className="form-label">
                  경매 가격
                </label>
                <div className="input-group">
                  <span className="input-group-text">₩</span>
                  <input
                    type="text"
                    className="form-control"
                    id="bidAmount"
                    value={bidDetails.amount}
                    onChange={(e) =>
                      setBidDetails({ ...bidDetails, amount: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="bidderName" className="form-label">
                  성함
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="bidderName"
                  value={bidDetails.name}
                  onChange={(e) =>
                    setBidDetails({ ...bidDetails, name: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="bidderEmail" className="form-label">
                  이메일
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="bidderEmail"
                  value={bidDetails.email}
                  onChange={(e) =>
                    setBidDetails({ ...bidDetails, email: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="bidderPhone" className="form-label">
                  전화번호
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="bidderPhone"
                  value={bidDetails.phone}
                  onChange={(e) =>
                    setBidDetails({ ...bidDetails, phone: e.target.value })
                  }
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleBidSubmit}>
              Submit Bid
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={showBidSubmittedModal}
          onHide={handleCloseBidSubmittedModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Bid Submitted</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div style={{ textAlign: 'center' }}>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/successful-bid-3-613041.png"
                alt="Success Icon"
                style={{ width: '100px', marginBottom: '20px' }}
              />
              <h4>Congratulations!</h4>
              <p>입찰서가 성공적으로 제출되었습니다!</p>
            </div>
            {bidDetails.amount && (
              <div className="bid-details">
                <h4>Your Bid Details:</h4>
                <p>
                  <strong>Amount:</strong> ${bidDetails.amount}
                </p>
                <p>
                  <strong>Name:</strong> {bidDetails.name}
                </p>
                <p>
                  <strong>Email:</strong> {bidDetails.email}
                </p>
                <p>
                  <strong>Phone:</strong> {bidDetails.phone}
                </p>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleCloseBidSubmittedModal}>
              닫기
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <Footer />
    </>
  );
};

export default AuctionPage;
