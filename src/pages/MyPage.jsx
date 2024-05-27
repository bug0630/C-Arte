import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import '../../src/styles/Mypage.css';
import React, { useRef, useState, useEffect } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';

export default function MyPage() {
  const [id, setId] = useState(localStorage.getItem('id') || '');
  const [name, setName] = useState(localStorage.getItem('name') || '');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [address, setAddress] = useState(localStorage.getItem('address') || '');
  const [number, setNumber] = useState(localStorage.getItem('number') || '');
  const [date, setDate] = useState(localStorage.getItem('date') || '');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [image, setImage] = useState(localStorage.getItem('image') || '');
  const inputRef = useRef();

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      localStorage.setItem('image', reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    localStorage.setItem('id', id);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('address', address);
    localStorage.setItem('number', number);
    localStorage.setItem('date', date);
  }, [id, name, email, address, number, date]);

  const handlePasswordReset = () => {
    if (password === confirmPassword) {
      localStorage.setItem('password', password);
      alert('회원님 정보 수정 되었습니다');
    } else {
      alert('비밀번호가 일치하지 않습니다');
    }
  };

  return (
    <>
      <Header />
      <div className="Mypage">
        <h2>회원 정보</h2>
        <div className="UserImg">
          <div onClick={handleImageClick}>
            {image ? (
              <img src={image} alt="user" className="img-display-after" />
            ) : (
              <FaRegUserCircle size={100} className="img-display-before" />
            )}
            <input
              type="file"
              ref={inputRef}
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          </div>
        </div>
        <table border={1}>
          <colgroup>
            <col style={{ width: '190px' }} />
            <col style={{ width: 'auto' }} />
          </colgroup>
          <tbody>
            <tr>
              <th scope="row">아이디</th>
              <td>
                <input
                  className="input-box"
                  type="text"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">이름</th>
              <td>
                <input
                  className="input-box"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">이메일</th>
              <td>
                <input
                  className="input-box"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">주소</th>
              <td>
                <input
                  className="input-box"
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">휴대전화</th>
              <td>
                <input
                  className="input-box"
                  type="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">생년월일</th>
              <td>
                <input
                  className="input-box"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">새 비밀번호</th>
              <td>
                <input
                  className="input-box"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">비밀번호 확인</th>
              <td>
                <input
                  className="input-box"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={handlePasswordReset}>회원정보 수정</button>
      </div>
      <Footer />
    </>
  );
}
