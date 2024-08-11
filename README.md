# Order Matching System - Backend

## Overview
This is the backend component of the Order Matching System project. It provides APIs for managing orders, including creating and retrieving pending and completed orders. The backend is built using Node.js and Express.js and uses SQLite as the database.

## Features
- RESTful API endpoints for orders
- CORS and body-parser middleware
- SQLite database integration

## Getting Started

### Prerequisites
- Node.js (v22.5.1)
- SQLite

### Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create and initialize the database:
    ```sh
    node database.js
    ```

### Configuration
- The server runs on port 5000 by default. You can change this in the `server.js` file.

### Running the Server

Start the server with:
```sh
npm start

The server will be available at http://localhost:5000.

### API Endpoints

GET /api/pending_orders - Retrieve all pending orders
POST /api/pending_orders - Create a new pending order
GET /api/completed_orders - Retrieve all completed orders
POST /api/completed_orders - Create a new completed order
Testing
To test the API endpoints, you can use tools like Postman or curl.

### Error Handling

Ensure proper error handling and logging to troubleshoot issues.
Check server logs for detailed error messages.

### License

This project is licensed under the MIT License - see the LICENSE file for details.

### Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.
