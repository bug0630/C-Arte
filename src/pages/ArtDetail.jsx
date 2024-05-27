import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Recommend from '../components/Artist/Recommend';
import ProductDetail from '../components/Art/ProductDetail';

export default function ArtDetail(props) {
  return (
    <div>
      <Header />
      <ProductDetail />
      <Recommend />
      <Footer />
    </div>
  );
}
