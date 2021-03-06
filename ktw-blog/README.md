This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Start

- create .env.development * .env.production
```
REACT_APP_SERVER_URL="YOUR_SERVER_URL"
REACT_APP_SALT_NUMBER=YOUR_CRYPTO_SALT_ITERATE_NUMBER
```

## 개선할 점(생각나는대로 추가)

- home page의 category 순서 변경 가능하게
  - 네이버 뉴스 페이지에서 순서 변경하는거처럼

- flux로 되어있는 마크다운 에디터를 redux로 바꾸기

- isShared 걷어내기
  - 이거 편집 금지 옵션으로 쓰고 있었으니 그냥 글 편집모드 플래그로 쓰면 될 듯? 재활용 개이득

- mysql -> postgresql 변경하기

- 스프레드에서 뿌리는 레이아웃을 리니어나 카드 뭐 이런걸로 선택 가능하게 하면 좋을듯?

- 마크다운 에디터에서 마우스로 블록 드래그 동작 구현하기

- 글, 태그 검색 인풋 추가
  - 모든 태그 모아놓은 영역 추가하기

- 소켓 서버 열어두고 실시간 글 업데이트 알림 기능도 있으면 좋을 듯
  - Notification에 연결해놓고 관심있는 유저 등록해놓으면 그 유저 글 업데이트 시에 알려주기

- 각 셀마다 마지막 커서 위치 저장하기

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
