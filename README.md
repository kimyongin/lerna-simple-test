# lerna-simple-test

- 설명
servers.console 과 servers.sender 는 domains.greeter 에 대한 종속성을 가지고 있다.
domains.greeter 는 domains.generator 에 대한 종속성을 가지고 있다.

- 실행
npm install -g lerna
npm run bootstrap // npx lerna bootstrap --hoist 수행함
npm run start-sender
