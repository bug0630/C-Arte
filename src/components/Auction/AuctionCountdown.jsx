import React, { useState, useEffect } from 'react';

function AuctionCountdown() {
  const [timeLeft, setTimeLeft] = useState('');
  const [auctionStarted, setAuctionStarted] = useState(false);

  useEffect(() => {
    const auctionStartTime = new Date('2024-05-17T14:00:00'); // 경매 시작 시간 설정
    const auctionEndTime = new Date(auctionStartTime);
    auctionEndTime.setHours(auctionEndTime.getHours() + 2); // 경매 종료 시간은 경매 시작 시간으로부터 1시간 후로 설정

    const calculateTimeLeft = () => {
      const currentTime = new Date();
      const difference = auctionStartTime - currentTime;

      if (difference <= 0) {
        setAuctionStarted(true);

        const differenceToEnd = auctionEndTime - currentTime;
        if (differenceToEnd > 0) {
          const seconds = Math.floor((differenceToEnd / 1000) % 60);
          const minutes = Math.floor((differenceToEnd / 1000 / 60) % 60);
          const hours = Math.floor(differenceToEnd / (1000 * 60 * 60));

          setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
        } else {
          setTimeLeft('경매 종료');
        }
      } else {
        const seconds = Math.floor((difference / 1000) % 60);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const hours = Math.floor(difference / (1000 * 60 * 60));

        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
      }
    };

    calculateTimeLeft(); // 처음 렌더링 시에도 시간 계산
    const timer = setInterval(calculateTimeLeft, 1000); // 1초마다 업데이트

    return () => clearInterval(timer); // 컴포넌트가 언마운트되면 타이머 해제
  }, []);

  return (
    <div>
      <div style={{ color: auctionStarted ? 'red' : 'black' }}>{timeLeft}</div>
    </div>
  );
}

export default AuctionCountdown;
