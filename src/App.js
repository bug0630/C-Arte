import { Route, Routes } from 'react-router';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import './styles/reset.css';
import Auction from './pages/Auction';
import Search from './pages/Search';
import ArtistInfo from './pages/ArtistInfo';
import LoginRegister from './pages/LoginRegister';
import MyPage from './pages/MyPage';
import Header from '../src/components/header/Header';
import ArtDetail from './pages/ArtDetail';
import AuctionList from './pages/AuctionList';
import Artist from './pages/Artist';
import Footer from './components/footer/Footer';
import ProductDetail from './components/Art/ProductDetail';
import Cart from '../src/pages/Cart';
import CartList from '../src/components/CartList/CartList';
import AddressInput from '../src/components/AddressInput/AddressInput';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<LoginRegister />} />
        <Route path="/header" element={<Header />}></Route>
        <Route path="/footer" element={<Footer />}></Route>
        <Route path="/mypage" element={<MyPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/auction/:artId" element={<Auction />} />
        <Route path="/search" element={<Search></Search>}></Route>
        <Route path="/artistinfo" element={<ArtistInfo />}></Route>
        <Route path="/artdetail/:artistId" element={<ArtDetail />}></Route>
        <Route path="/auctionlist" element={<AuctionList />}></Route>
        <Route path="/artist" element={<Artist />}></Route>
        <Route path="/productdetail" element={<ProductDetail />}></Route>
        <Route path="/cartlist" element={<CartList />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/address" element={<AddressInput />}></Route>
      </Routes>
    </div>
  );
}

export default App;
