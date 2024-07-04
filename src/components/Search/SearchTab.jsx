import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import SelectBox from './SelectBox';

// const artSolt = [
//   { value: 'new', name: '신작품' },
//   { value: 'low', name: '낮은가격' },
//   { value: 'high', name: '높은가격' },
// ];

export default function SearchTab() {
  const [queryString, setQueryString] = useState('');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('query');
    setQueryString(query || '');
  }, [location.search]);

  return (
    <div className="searchTab">
      <p>{queryString ? `${queryString} 검색 결과` : '전체 검색 결과'}</p>
      {/* <SelectBox options={artSolt} /> */}
    </div>
  );
}
