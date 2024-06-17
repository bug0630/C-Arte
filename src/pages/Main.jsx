import Carousel from '../components/Carousel';
import MonthArtist from '../components/Main/MonthArtist';
import BestArt from '../components/Main/BestArt';
import New from '../components/Main/New';
import Sell from '../components/Main/Sell';
import '../styles/Main.scss';
import '../styles/BestArt.scss';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

export default function Main() {
  const images = [
    require('../img/img13.webp'),
    require('../img/MonthArtistbg.webp'),
    require('../img/hammer-1707731_1280.webp'),
    require('../img/the_last_supper.webp'),
  ];
  const comments = ['이달의 작가', '경매', '근대미술', '현대미술'];

  const pageLinks = [
    '/artist',
    '/auctionlist',
    '/search?query=근대미술',
    '/search?query=현대미술',
  ];
  return (
    <>
      <Header />
      <div className="mainLab">
        <div className="mainCarousel">
          {' '}
          <Carousel
            images={images}
            comments={comments}
            pageLinks={pageLinks}
          ></Carousel>
        </div>
        <MonthArtist images={images}></MonthArtist>
        <BestArt></BestArt>
        <New></New>
        <Sell></Sell>
      </div>
      <Footer />
    </>
  );
}
