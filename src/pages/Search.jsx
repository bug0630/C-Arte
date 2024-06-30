import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setSearchQuery } from '../store/action';
import Available from '../components/Search/Available';
import SearchTab from '../components/Search/SearchTab';
import Result from '../components/Search/Result';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import '../styles/Search.scss';

export default function Search() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchQuery(query)); // 검색어 업데이트
  }, [query, dispatch]);

  return (
    <div>
      <Header />
      <div className="searchLab">
        <SearchTab />
        <Available></Available>
        <Result></Result>
      </div>
      <Footer></Footer>
    </div>
  );
}
