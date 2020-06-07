This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 저작권

- copyright를 박아놨긴 한데 가져다 쓸 사람은 쓰세요. 이 개떡같은 소스를 가져다 쓸 사람이 있을진 모르겠지만...


## 메모장

Spread: 사이트 접속시 보여지는 컨텐츠(글들 쫙 그냥 뿌려줌)
GraphQL을 써볼까...


## 개선할 점(생각나는대로 추가)

- home page의 category 순서 변경 가능하게
  - 네이버 뉴스 페이지에서 순서 변경하는거처럼

- flux로 되어있는 마크다운 에디터를 redux로 바꾸기

- isShared 걷어내기
  - 이거 편집 금지 옵션으로 쓰고 있었으니 그냥 글 편집모드 플래그로 쓰면 될 듯? 재활용 개이득

- mysql 말고 postgresql 쓰기

- 스프레드에서 뿌리는 레이아웃을 리니어나 카드 뭐 이런걸로 선택 가능하게 하면 좋을듯?

- 섹셔닝 태그에 hn 태그 정리하기

- 레이아웃(Header, Footer, etc...) 비율 -> fix size(& 반응형 추가)

- 코드 스플리팅
  - ssr


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
