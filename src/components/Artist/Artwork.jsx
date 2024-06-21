// import '../../styles/reset.css';
import '../../styles/Artist.scss';
import '../../styles/ArtistIntroduction.css';
import Carousel from '../Carousel';

const Artwork = () => {
  const images = [
    require('../Main/img/ai-24-05-pc.jpg'),
    require('../Main/img/am-24-04-pc-3.jpg'),
    require('../Main/img/am-24-05-pc.jpg'),
    require('../Main/img/pc-mb-4.jpg'),
  ];
  const comments = ['', '', '', ''];
  const pageLinks = ['/artist', '/auction', '', ''];
  return (
    <>
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
    </>
  );
};
export default Artwork;
