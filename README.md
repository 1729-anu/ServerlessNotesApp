# Serverless Notes App

This is a simple serverless backend for a notes application using AWS Lambda, API Gateway, and DynamoDB.

## Features

- Create, retrieve, and delete notes
- Serverless architecture using AWS services
- Simple REST API endpoints

## Tech Stack

- AWS Lambda
- AWS API Gateway
- DynamoDB
- Node.js
- Postman (for API testing)

## API Endpoints

| Method | Endpoint        | Description          |
|--------|------------------|----------------------|
| POST   | `/notes`         | Create a new note    |
| GET    | `/notes`         | Retrieve all notes   |
| DELETE | `/notes/{noteId}`| Delete a note by ID  |

## Postman

You can find the Postman collection in the `postman/` folder.

## Deployment Instructions

This project uses the Serverless Framework.

### Prerequisites

- AWS CLI configured
- Node.js installed
- Serverless Framework installed (`npm install -g serverless`)

### Deploy

```bash
cd backend
serverless deploy
```
