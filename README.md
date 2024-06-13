# Food Recipe Project

The Food Recipe Project is a web-based application designed to provide a platform for users to share and discover culinary recipes. This project allows users to browse, search, and view recipes contributed by an admin, fostering a community around shared culinary interests.

## Features

- **User Authentication and Authorization**: Secure registration and login using JWT.
- **Recipe Management**: Admin-only functionality to create, update, and delete recipes.
- **Categorization and Search**: Categorize recipes and search based on keywords, categories, and ingredients.
- **Favorites**: Users can mark recipes as favorites for easy access.
- **User Interaction**: Users can view detailed recipe information and add personal notes.

## Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL, Knex.js
- **Authentication**: JSON Web Tokens (JWT)
- **Documentation**: Swagger
- **Development**: Nodemon for automatic server restarts

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL
- npm or yarn

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/bunsalcoder/web-service-food-recipe.git
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up the database:
    - Create a PostgreSQL database.
    - Update the `knexfile.js` with your database configuration.

4. Run migrations:
    ```sh
    npm run migrate:latest
    ```

5. Seed the database (optional):
    ```sh
    npm run seed:run
    ```

### Running the Project

1. Start the development server with Nodemon:
    ```sh
    npm run start:dev
    ```

2. The server will start on `http://localhost:3000`.

### API Documentation

The project uses Swagger for API documentation. Once the server is running, you can access the Swagger documentation at `http://localhost:3000/api-docs`.

### Example Endpoints

- **Get All Recipes**: `GET /recipe`
- **Create Recipe** (Admin only): `POST /recipe`
- **Update Recipe** (Admin only): `PUT /recipe/:id`
- **Delete Recipe** (Admin only): `DELETE /recipe/:id`
- **Get Recipe Details**: `GET /recipe/:id/detail`

