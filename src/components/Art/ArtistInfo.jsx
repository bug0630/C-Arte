import React, { useState, useEffect } from 'react';
import '../../styles/ArtDetail.css';
import productsData from '../../data/art.json';
import { FaMailBulk, FaInstagram } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const ArtistInfo = (props) => {
  const { artistId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productData = productsData.find(
      (product) => product.id === parseInt(artistId)
    );
    setProduct(productData);
  }, [artistId]);

  return (
    <div className="artist_detail">
      <div className="infoItemArt">
        <div className="infoLabel">작품 소개</div>
        <div className="infoValue">{product && product.description}</div>
      </div>

      <div className="artistInfoSession">
        <img
          src={product && product.profile_img}
          alt=""
          className="artistInfo_img"
        />
        <div className="artistInfo">
          <div className="infoItem">
            <div className="artistInfo_name">
              {product && product.artist_name}
            </div>
          </div>

          <div className="Email">
            <p>
              <FaMailBulk className="iconEmail" />
              {product && product.email}
            </p>
          </div>

          <div className="instagram-link">
            <p>
              {' '}
              <FaInstagram className="icon" />
              <a
                href={product && product.insta_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistInfo;
