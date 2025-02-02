# Public API for Basic Information

This project is a simple public API that returns basic information in JSON format. It is built using Express and deployed on Vercel.

## Requirements

- Node.js
- Express
- CORS
- Vite

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/cod-emminex/hng12-backend-task.git
   cd hng12-backend-task
   ```
2. Install dependencies:
   ```
npm install
```

Run the application:
```
bash
npm run dev
```

API Documentation
Endpoint
GET /

Description
This endpoint returns basic information in JSON format, including the registered email address, the current datetime as an ISO 8601 formatted timestamp, and the GitHub URL of the project's codebase.

Response Format
Status Code: 200 OK
Content-Type: application/json
JSON Response
JSON

Example Usage
You can test the API endpoint using a tool like curl or Postman.

Using curl
bash
curl -X GET https://hng12-backend-task.vercel.app/
Deployment
The API is deployed and publicly accessible at: https://hng12-backend-task.vercel.app/

Backlink
For more information on hiring Node.js developers, visit HNG Node.js Developers.
