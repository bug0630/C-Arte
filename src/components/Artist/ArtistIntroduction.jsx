import React, { useState, useEffect } from 'react';
import '../../styles/reset.scss';
import '../../styles/Artist.scss';
import '../../styles/ArtistIntroduction.css';
import { FaMailBulk, FaInstagram } from 'react-icons/fa';
import Carousel from '../Carousel';

const ArtistIntroduction = () => {
  const [artistData, setartistData] = useState([]);

  useEffect(() => {
    fetchArtData();
  }, []);

  const fetchArtData = () => {
    fetch(process.env.PUBLIC_URL + '/data/artist.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setartistData(data);
      })
      .catch((error) => {
        console.error('Error fetching art data:', error);
      });
  };

  const images = [
    require('../Main/img/carousel1.jpg'),
    require('../Main/img/carousel2.jpg'),
    require('../Main/img/carousel3.jpg'),
    require('../Main/img/carousel4.jpg'),
  ];
  const comments = ['', '', '', ''];
  const pageLinks = ['/artist', '/auction', '', ''];

  return (
    <>
      {/* 배너 */}
      <div className="heroEffects">
        <div className="bg">
          <div className="arrow bouncy">
            <svg height="25" width="50">
              <polygon
                points="0,0 25,10 50,0 25,25"
                fill="rgba(255,255,255,.5)"
                strokeWidth="0"
                stroke="rgba(255,255,255,.3)"
              />
            </svg>
          </div>
          <div className="titleBanner centerV">
            <div>
              <div className="text">
                <h1>이 달의 작가</h1>
                <p>There is no must in art because art is free</p>
              </div>
            </div>
          </div>
        </div>
        <div className="shade"></div>
      </div>
      <div className="content">
        <div className="artist-introduction">
          <h1 className="artist">Artist</h1>
          {artistData.length > 0 && artistData[0] ? (
            <div className="artist-info">
              <div className="cardHeading card0">
                <div className="border">
                  <h2 className="artist-name">{artistData[0].artist_name}</h2>
                  <h2>{artistData[0].birthdate}</h2>
                </div>
              </div>
              <div className="details">
                <div className="detailsContent">
                  <div className="detailsHeading">
                    <div className="detailsHeadingContent">
                      <h1 className="artist-name">
                        {artistData[0].artist_name}
                      </h1>
                      <br />
                      <div className="Email">
                        <p>
                          <FaMailBulk className="iconEmail" />
                          {artistData[0].email}
                        </p>
                      </div>
                      <div className="instagram-link">
                        <p>
                          {' '}
                          <FaInstagram className="icon" />
                          <a
                            href={artistData[0].insta_link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Instagram
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="artistIntro">
                    <h2 className="artistIntroTitle">Introduction</h2>
                    <br />
                    <div className="artistDescription">
                      <p>{artistData[0].description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p>Loading artist data...</p>
          )}
        </div>

        {/* 카로셀 */}
        <div className="gallery">
          <h1 className="artworks">Art Works</h1>
          <br />
          <br />
          <div className="artworksCarousel">
            <Carousel
              images={images}
              comments={comments}
              pageLinks={pageLinks}
            ></Carousel>
          </div>
        </div>

        <div className="otherArtist">
          <h1 className="otherArtistRecommend">Recommend</h1>
          <br />
          <br />
          <div id="columns">
            <figure>
              <img
                src="https://bug0630.github.io/C-Arte/images/art_img/img7.webp"
                alt=""
              />
              <figcaption>청록색으로 물든 아름다운 정원을 담은 작품</figcaption>
            </figure>
            <figure>
              <img
                src="https://bug0630.github.io/C-Arte/images/art_img/img8.webp"
                alt=""
              />
              <figcaption>밤하늘을 묘사한 걸작</figcaption>
            </figure>
            <figure>
              <img
                src="https://bug0630.github.io/C-Arte/images/art_img/img9.webp"
                alt=""
              />
              <figcaption>레오나르도 다 빈치에 의한 상징적인 초상화</figcaption>
            </figure>
            <figure>
              <img
                src="https://bug0630.github.io/C-Arte/images/art_img/img10.webp"
                alt=""
              />
              <figcaption>살바도르 달리의 초현실주의적 걸작</figcaption>
            </figure>
            <figure>
              <img
                src="https://bug0630.github.io/C-Arte/images/art_img/img11.webp"
                alt=""
              />
              <figcaption>바로크 예술의 대표적인 작품 중 하나</figcaption>
            </figure>
            <figure>
              <img
                src="https://bug0630.github.io/C-Arte/images/art_img/img12.webp"
                alt=""
              />
              <figcaption>일상적인 장면을 사실적으로 묘사한 작품</figcaption>
            </figure>
            <figure>
              <img
                src="https://bug0630.github.io/C-Arte/images/art_img/img13.webp"
                alt=""
              />
              <figcaption>
                전쟁 후 고향으로 돌아오는 장병의 모습을 묘사한 작품
              </figcaption>
            </figure>
            <figure>
              <img src="C-Arte/images/art_img/img14.webp" alt="" />
              <figcaption>
                푸른 정글 속에서 동물들의 생동감 넘치는 모습을 담은 작품
              </figcaption>
            </figure>
            <figure>
              <img src="C-Arte/images/art_img/img15.webp" alt="" />
              <figcaption>
                햇살이 드는 창가에서의 한 소녀의 모습을 담은 작품
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtistIntroduction;
