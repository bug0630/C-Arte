import React from 'react';
import Available from '../components/Search/Available';
import SearchTab from '../components/Search/SearchTab';
import Result from '../components/Search/Result';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import '../styles/Search.scss';

export default function Search() {
  return (
    <div>
      <Header />
      <div className="searchLab">
        <SearchTab />
        <Available />
        <Result />
      </div>
      <Footer />
    </div>
  );
}
