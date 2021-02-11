# KevolWriter Blog Server

## Start

`yarn install`

create dev.env or prod.env
```
DB_HOST=WRITE
DB_DATABASE=YOUR
DB_USER=DB
DB_PASSWORD=INFO
SALT_NUMBER=SALT_ITERATE_NUMBER
SESSION_SECRET=YOUR_SESSION_SECRET_STRING
SESSION_SECURE=IF_DEV_FALSE_IF_PROD_TRUE
REDIS_PORT=YOUR_REDIS_PORT
REDIS_SERVER="YOUR_REDIS_SERVER_IP"
```

modify dotenv loader in /bin/www

## Todo

- post 공유 기능
  - db에 uuid 저장하고, 그 uuid를 url에 담아서 오면 열람 가능하게

- accessToken 생성 방식 변경하기
