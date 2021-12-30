# ⭐book-mark-server
Mobile, Tablet, Desktop, Public PC 등 다양한 환경에서 자신만의 즐겨찾기를 이용하기 위해 개발하였습니다.

<br>

해당 프로젝트의 Back-End 부분입니다.

<br>

## ⚙Environment
- Express 4.16.1

<br>

## 🛠Library
- mysql2

<br>

## 📃ERD 설계
<img src='./img/bookmarkDB.png'>

<br>

## ✔핵심 기능
(작성 예정)

<br>

## ❗트러블 슈팅
<details>
<summary>상세 내용 확인</summary>
<div markdown="1">

div 에 markdown attribute 를 1 로 
하는 이유는 div 안에서
markdown 을 사용하기 위해서 입니다.


</div>
</details>

<br>

## 💻Usage
```
├── book-mark
│   └── bookmark (FE development)
└── book-mark-server
    └── server (BE development)
        └── db
            └── config.js (Database Setting file)
``` 
**이용하시기 위해선 [book-mark](https://github.com/wogha95/book-mark)와 [book-mark-server](https://github.com/wogha95/book-mark-server)가 필요합니다.**

1. 빈 폴더에 [book-mark](https://github.com/wogha95/book-mark)와 [book-mark-server](https://github.com/wogha95/book-mark-server)를 clone합니다.
2. book-mark-server/server/db/config.js 작성합니다.
3. book-mark/bookmark 에서 `npm run build` 실행
4. book-mark-server/server 에서 `npm start` 실행
5. 브라우저 주소창에 `localhost:3000` 으로 접속

<br>

## 📸실행 화면
|                 | Mobile | PC |
|:---------------:|--------|----|
| login           |<img src='./img/mobile_login.gif'>|<img src='./img/PC_login.gif'>|
| create User     |<img src='./img/mobile_createUser.gif'>|<img src='./img/PC_createUser.gif'>|
| update User     |<img src='./img/mobile_updateUser.gif'>|<img src='./img/PC_updateUser.gif'>|
| delete User     |<img src='./img/mobile_deleteUser.gif'>|<img src='./img/PC_deleteUser.gif'>|
| create Bookmark |<img src='./img/mobile_createBookmark.gif'>|<img src='./img/PC_createBookmark.gif'>|
| update Bookmark |<img src='./img/mobile_updateBookmark.gif'>|<img src='./img/PC_updateBookmark.gif'>|
| delete Bookmark |<img src='./img/mobile_deleteBookmark.gif'>|<img src='./img/PC_deleteBookmark.gif'>|
| update Star     |<img src='./img/mobile_updateStar.gif'>|<img src='./img/PC_updateStar.gif'>|

<br>
