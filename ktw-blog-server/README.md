# KevolWriter Blog Server

## Start

`yarn install`

create dev.env or prod.env
```
DB_HOST=WRITE
DB_DATABASE=YOUR
DB_USER=DB
DB_PASSWORD=INFO
SESSION_SECRET=YOUR_SESSION_SECRET_STRING
SESSION_SECURE=IF_DEV_FALSE_IF_PROD_TRUE
```

modify dotenv loader in /bin/www
