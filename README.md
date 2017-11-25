# MovieApp

webpack.config.prod.js: 개발 서버 전용 설정
webpack.config.dev.js: 프로젝트를 완성하고 배포하게 될 때 빌드하는 과정에서 사용되는 환경설정 파일

- style-loader: 스타일을 불러와서 페이지에서 활성화
- css-loader: import와 url()문들을 webpack의 require 기능을 통하여 처리
- postcss-loader: 벤더프리픽스를 자동으로 붙여줌
