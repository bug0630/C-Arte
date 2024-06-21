// import '../../styles/reset.css';
import '../../styles/Artist.scss';
import '../../styles/ArtistIntroduction.css';
const Recommend = () => {
  return (
    <>
      <div className="otherArtist">
        <h1 className="otherArtistRecommend">Recommend</h1>
        <br />
        <br />
        <div id="columns">
          <figure>
            <img src="/images/art_img/img7.webp" alt="" />
            <figcaption>청록색으로 물든 아름다운 정원을 담은 작품</figcaption>
          </figure>

          <figure>
            <img src="/images/art_img/img8.webp" alt="" />
            <figcaption>밤하늘을 묘사한 걸작</figcaption>
          </figure>

          <figure>
            <img src="/images/art_img/img9.webp" alt="" />
            <figcaption>레오나르도 다 빈치에 의한 상징적인 초상화</figcaption>
          </figure>

          <figure>
            <img src="/images/art_img/img10.webp" alt="" />
            <figcaption>살바도르 달리의 초현실주의적 걸작</figcaption>
          </figure>

          <figure>
            <img src="/images/art_img/img11.webp" alt="" />
            <figcaption>바로크 예술의 대표적인 작품 중 하나</figcaption>
          </figure>

          <figure>
            <img src="/images/art_img/img12.webp" alt="" />
            <figcaption>일상적인 장면을 사실적으로 묘사한 작품</figcaption>
          </figure>

          <figure>
            <img src="/images/art_img/img13.webp" alt="" />
            <figcaption>
              전쟁 후 고향으로 돌아오는 장병의 모습을 묘사한 작품
            </figcaption>
          </figure>

          <figure>
            <img src="/images/art_img/img14.webp" alt="" />
            <figcaption>
              푸른 정글 속에서 동물들의 생동감 넘치는 모습을 담은 작품
            </figcaption>
          </figure>

          <figure>
            <img src="/images/art_img/img15.webp" alt="" />
            <figcaption>
              햇살이 드는 창가에서의 한 소녀의 모습을 담은 작품
            </figcaption>
          </figure>
        </div>
      </div>
    </>
  );
};
export default Recommend;
