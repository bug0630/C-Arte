import { Link } from 'react-router-dom';
export default function MonthArtist() {
  return (
    <div className="artMonth">
      <h2>Artist of the Month</h2>
      <div className="artistInfo2">
        {' '}
        <div className="picture">
          <img
            className="artistPhoto"
            src="images/artist_img/artist1.webp"
            alt="artist"
          ></img>
        </div>
        <div className="artistComment">
          <h3>김세동</h3>
          <p>
            김세동 작가는 현대 미술 분야에서 주목받고 있는 젊은 작가입니다. 그의
            작품은 독창적이고 예측할 수 없는 시각 언어를 통해 현대 사회의 다양한
            이슈와 감정을 다룹니다. 김세동 작가는 전통적인 미술 양식을
            현대적으로 해석하며, 자신만의 독특한 스타일과 표현력으로 관객들에게
            감동과 영감을 전달합니다. 그의 작품은 대담하고 실험적인 요소를
            가지고 있으며, 현대 사회의 다양한 문화적, 정치적, 사회적 이슈에 대한
            비판적 시각을 담아냅니다. 미술을 통해 복잡한 감정과 사상을 전달하는
            데 주력하며, 자신만의 독특한 시각과 명확한 표현력을 바탕으로 현대
            예술계에서 두각을 나타내고 있습니다. 그의 작품은 다채로운 매체와
            형식을 활용하여 다양한 주제를 다루며, 이를 통해 관객들에게 깊은
            사유와 공감을 일으킵니다. 미술계에서 중요한 위치를 차지할 것으로
            기대되며, 그의 작품은 계속해서 예술적인 혁신과 인간적인 메시지를
            전달할 것으로 기대됩니다.
          </p>
          <Link to="/artist">
            <button>작품 보러가기</button>
          </Link>
        </div>
      </div>
      <ul className="artMonthList">
        <li>
          <Link to="/">
            <img src="images/art_img/img4.webp" alt="arts"></img>
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="images/art_img/img5.webp" alt="arts"></img>
          </Link>
        </li>{' '}
        <li>
          <Link to="/">
            <img src="images/art_img/img6.webp" alt="arts"></img>
          </Link>
        </li>
      </ul>
    </div>
  );
}
