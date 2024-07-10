# C'Arte

https://bug0630.github.io/C-Arte/
## 목적

미술가와 작품을 소개하고 경매에 참가해 입찰할 수 있는 미술품 경매플랫폼

## 작업과정

5인 팀 프로젝트

작업기간 3주

사용기술: React, SASS, Redux

담당: 메인페이지, 헤더, 푸터, 검색페이지

각 페이지 반응형 진행중


## 사용한 폰트

<table>
  <tr>
    <th>한글</th>
    <th>영문</th>
    <th>컬러</th>
  </tr>
  <tr>
    <td>Noto Serif Korea</td>
    <td style="font-family: 'Baskerville', serif;">Baskerville</td>
    <td style="background-color: #aa8453;">
      <img src="https://via.placeholder.com/150/aa8453/FFFFFF?text=%23aa8453" width="100" height="100" alt="#aa8453">
    </td>
  </tr>
</table>

중세 미술품부터 현대 미술품까지 다양한 시대의 작품을 함께 소개하기 위해 고전적인 아름다움을 지닌 Baskerville과 클래식하고 세련된 느낌의 Noto Serif Korean을 함께 사용



## 페이지


| 메인 | 로그인 | 검색 | 경매 | 작가 | 
|---|---|---| ---|---|
| <img src="git img/1201/screencapture-bug0630-github-io-C-Arte-2024-06-25-17_28_35.png" width="400"> | <img src="git img/1201/screencapture-bug0630-github-io-C-Arte-2024-06-25-17_21_10 (1).png" width="400"> | <img src="git img/1201/screencapture-bug0630-github-io-C-Arte-2024-06-25-17_31_54.png" width="400"> | <img src="git img/1201/screencapture-bug0630-github-io-C-Arte-2024-06-25-17_33_36.png" width="400"> |<img src="git img/1201/screencapture-bug0630-github-io-C-Arte-2024-06-25-17_36_51.png" width="400">|

## 헤더


### 1201~
 <img src="git img/헤더/screencapture-bug0630-github-io-C-Arte-2024-07-05-12_42_52 (1).png">
 
### 801~1200
 <img src="git img/헤더/screencapture-bug0630-github-io-C-Arte-2024-07-05-12_45_15 (1).png"> 
 
### ~800
 
 <img src="git img/헤더/screencapture-bug0630-github-io-C-Arte-2024-07-05-12_47_12 (1).png" height="100"> 

media query
- 반응형으로 디자인 변경

## 캐러셀

### 메인
<img src="git img/캐러셀/screencapture-bug0630-github-io-C-Arte-2024-06-25-16_44_08.png">

### 작가페이지 캐러셀
<img src="git img/캐러셀/screencapture-bug0630-github-io-C-Arte-2024-07-09-17_14_43 (2).png">
map() 함수를 사용해 캐러셀 컴포넌트를 구현

3개의 이미지가 보여지는 캐러셀을 구현하였고 2번째의 이미지에 overflow속성을 사용해 중앙의 이미지만 보여지는 캐러셀로 활용 가능

## 로그인

<img src="git img/로그인/screencapture-bug0630-github-io-C-Arte-2024-07-10-16_02_44.png">

useeffect훅을 사용해 id를 저장 <br>
defaultValue로 설정

