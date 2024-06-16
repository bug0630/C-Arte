import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import '../../styles/footer.css';
import { SiKakaotalk, SiFacebook, SiInstagram } from 'react-icons/si';
export default function Footer() {
  return (
    <>
      <footer>
        <div className="container-footer">
          <div className="footerlogo">
            <img src={logo} alt="logo" />
          </div>

          <div className="row">
            <div className="useful-link">
              <h2>Useful Links</h2>
              <div className="use-links">
                <Link to={'/auctionlist'}>경매 리스트</Link>
                <Link to={'/artist'}>이달의 작가</Link>
                <Link to={'/search?query='}>작품 상세</Link>
              </div>
            </div>

            <div className="social-links">
              <h2>Social</h2>
              <div className="social-icons">
                <div>
                  <SiKakaotalk /> KakaoTalk
                </div>
                <div>
                  <SiFacebook /> Facebook
                </div>
                <div>
                  <SiInstagram /> Instagram
                </div>
              </div>
            </div>
          </div>

          <div className="address">
            <h2>Contact Us</h2>
            <div className="address-links">
              <li className="address1">주소: 서울 강동구 고덕로 429 5층</li>
              <li>문의전화: 1577-8888</li>
              <li>이메일: carte@gmail.com</li>
            </div>
          </div>
        </div>
        <div className="copy-right-sec">©Copyright C'Arte Corp</div>
      </footer>
    </>
  );
}
