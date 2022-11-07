# Credit Card System

## Available Scripts

In the project directory, you can run:

### `npm run start`
### `npm run dev` 
### `npm run test` 
### `npm run start:prod` 

API ROUTES

http://localhost:3001/api/v1/card-process | GET \
http://localhost:3001/api/v1/card-process | POST 
```sh
{
    "id": null,
    "name": "User",
    "cardNumber": "4111111111111111",
    "balance": 0,
    "limit": 1500
}
```

http://localhost:3001/api/v1/cardType/{Card Number} e.g.: 5105105105105100 | GET
