
## Features

- Login
- Authentication


## Run Locally

Clone the project

```bash
  https://github.com/shanukajain/AirTicketBooking.git
```

Go to the project directory

```bash
  cd AirTicketBooking
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Tech Stack

**Backend:**  nodejs | Express | MongoDB 
## Use All Api at deployed link

https://drab-cyan-bear-cap.cyclic.app/

## API Reference

#### POST User register

```http
  POST /api/register
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `User info (name,email,password)` | `Json` | New User |

#### Post Login

```http
  post /api/login
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Email && password`      | `Json` | **Required**.  Register  |

#### Get All flights details

```http
  Get /api/flights
```
#### Get All flights details by Id

```http
  Get /api/flights/id
```

| Parameters | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Id`      | `string` | **Required**.  Login  |

#### Post flights details

```http
  post /api/flights
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `All the info of flights`      | `Json` | **Required**.  login  |

#### Upadte flights details

```http
  patch api/flights/:id
```

| Body | Parameters     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Upadted info`      | `id` | **Required**.  Login  |

#### delete the flight

```http
  patch api/flights/:id
```

| Parameters | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**.  Login  |


#### Booking

```http
  Post /api/booking
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `flights user id`      | `Json` | **Required**.  Login  |


#### Get the all the details of booking with users and flights
```http
 Get /api/dashboard

