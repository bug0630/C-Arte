import { Link } from 'react-router-dom';
import '../../styles/header.css';
import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.svg';
import { FaSearch, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import DropDownProfile from '../dropdownProfile/DropDownProfile';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom/dist';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [openProfile, setOpenProfile] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoggedIn(Boolean(localStorage.getItem('isLoggedIn')));
  }, [isLoggedIn]);

  const handleProfileClick = () => {
    setOpenProfile(!openProfile);
  };

  const handleAuctionClick = (event) => {
    if (!isLoggedIn) {
      event.preventDefault();
      alert('로그인이 필요합니다.');
      navigate('/login');
    }
  };

  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsNavOpen(true);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      navigate(`/search?query=${searchText}`);
    }
  };

  const isDesktop = useMediaQuery({
    query: '(min-width: 900px)',
  });

  return (
    <>
      <header>
        <div className={`nav ${isNavOpen ? 'none' : ''}`}>
          <Link to={'/'}>
            <img src={logo} alt="logo" className="logo" />
          </Link>
          {(isDesktop || isNavOpen) && (
            <ul id="text" className={`navbar ${isSearchOpen ? 'active' : ''}`}>
              <li>
                <Link
                  to={'/auctionlist'}
                  className="link"
                  onClick={handleAuctionClick}
                >
                  경매
                </Link>
              </li>
              <li>
                <Link to={'/search?query='} className="link">
                  모든 작품
                </Link>
              </li>
              <li>
                <Link to={'/artist'} className="link">
                  이 달의 작가
                </Link>
              </li>
            </ul>
          )}
          <div className="search-login">
            {isSearchOpen && (
              <input
                className="input"
                type="text"
                placeholder="검색..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            )}
            <div className="search-icon" onClick={toggleSearch}>
              <FaSearch />
            </div>
            {isLoggedIn ? (
              <div className="profileImage" onClick={handleProfileClick}>
                <FaUser className="user-icon" />
                {openProfile && (
                  <DropDownProfile
                    setIsLoggedIn={setIsLoggedIn}
                    setOpenProfile={setOpenProfile}
                  />
                )}
              </div>
            ) : (
              <Link className="lab-btn" to="/login">
                로그인
              </Link>
            )}
          </div>
          <div id="mobile" onClick={handleClick}>
            {isNavOpen ? (
              <FaTimes className="mobileicon" />
            ) : (
              <FaBars className="mobileicon" />
            )}
          </div>
        </div>
      </header>
    </>
  );
}
