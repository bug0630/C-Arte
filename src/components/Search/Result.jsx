import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Result.scss';
import { useSearch } from '../../pages/Search';

export default function Result() {
  const [artData, setArtData] = useState([]);
  const searchQuery = useSearch(); // useSearch 훅으로 검색어 가져오기

  useEffect(() => {
    fetchArtData();
  }, []);

  const fetchArtData = () => {
    fetch(process.env.PUBLIC_URL + '/data/art.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setArtData(data);
      })
      .catch((error) => {
        console.error('Error fetching art data:', error);
      });
  };

  const filteredArtData = artData.filter((item) => {
    if (
      item.title &&
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return true;
    }

    if (
      item.category &&
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return true;
    }

    if (
      item.artist_name &&
      item.artist_name.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return true;
    }

    return false;
  });

  return (
    <div>
      <ul className="resultCard">
        {filteredArtData.map((item) => (
          <Link to={`/artdetail/${item.id}`} key={item.id}>
            {' '}
            <li key={item.id}>
              <img src={item.art_img[0]} alt={item.title}></img>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
              <p className="artistName">Artist: {item.artist_name}</p>
              <p className="price">Price: {item.price}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
