# ⭐book-mark-server
Mobile과 Tablet, 노트북을 바꿔가면서 쓰는 생활 속에   
각 기기에 있는 즐겨찾기를 공유하지 못하는 불편함을 해결하고자   
웹 서비스로 개발하였습니다.

<br>

- 해당 프로젝트의 Back-End 부분입니다. [(Front-End 보러가기)](https://github.com/wogha95/book-mark)
- 개인 프로젝트
- 개발기간 : 2021.12

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

## 📝리팩토링

### 1. REST API 적용
|변경 전|변경 후|
|:-------:|:-------:|
|post + registerUser|post + user|
|post + updateUser|put + password|
|post + deleteUser|put + user|
|post + bookmark|post + bookmarks|
|post + createBookmark|post + bookmark|
|post + editBookmark|put + name-address|
|post + deleteBookmark|put + bookmark|
|post + updateStar|put + star|


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
3. config.js과 동일하게 Mysql DB connection을 생성합니다.
4. ERD 설계와 동일하게 table을 생성합니다.
5. book-mark/bookmark 에서 `npm run build` 실행
6. book-mark-server/server 에서 `npm start` 실행
7. 브라우저 주소창에 `localhost:3000` 으로 접속

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
