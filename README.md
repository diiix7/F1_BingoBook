# F1BingoBook Backend

This repository contains the backend for the F1BingoBook application, a sports betting app for Formula 1 fans. The backend is developed using Node.js, Express.js, and MongoDB.

## Prerequisites

- Node.js (v16.20.2)
- MongoDB (v5.0.16)

## Installation

1. Clone this repository to your local machine:

   ```git clone https://github.com/LoickAdjiwanou/F1BingoBook-backend.git```

2. Install project dependencies:

    ```cd F1BingoBook-backend```

    ```npm install```

3. Set up environment variables:

    Create a .env file at the project's root and configure the necessary environment variables, such as MongoDB configuration and secret keys.
    
    ```MONGODB_URI=your-mongodb-uri```
    ```SECRET_KEY=your-secret-key```

4. Starting the Server
    To start the server, use the following command:

    ```npm start```

The server will run on the default port 3000.

## API Routes

The backend exposes several API routes for the React Native application:

1. /api/user/signup: Allows users to sign up.

2 ./api/user/signin: Allows users to sign in.

3. More to come

Refer to the backend source code for more details on each route.

## Contribution

Contributions are welcome! If you want to contribute to this project, make sure to follow these steps:

1. Fork this repository.

2. Create a branch for your feature:

```git checkout -b feature/feature-name```

3. Commit your changes:

```git commit -m 'Add new feature)```

4. Push your branch:

```git push origin feature/feature-name)```

5. Open a Pull Request to the main branch of this repository.


## License

This project is licensed under the MIT License. Please refer to the LICENSE file for more details.
