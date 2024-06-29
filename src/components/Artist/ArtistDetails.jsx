import React, { useState, useEffect } from 'react';
import '../../styles/reset.scss';
import '../../styles/Artist.scss';
import '../../styles/ArtistIntroduction.css';
import { FaMailBulk, FaInstagram } from 'react-icons/fa';
const ArtistDetails = () => {
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
  return (
    <>
      <div className="content">
        <div className="artist-introduction">
          <h1 className="artist">Artist</h1>
          {artistData && (
            <div className="artist-info">
              <div className="card card0">
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
          )}
        </div>
      </div>
    </>
  );
};
export default ArtistDetails;
