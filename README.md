Inventory Management System

Overview

This is a full-stack inventory management system designed to streamline and optimize the management of inventory processes. The project consists of two main components:

Client (Frontend) 🖥️

Server (Backend) 🌐

Features

Inventory Management: Add, edit, and delete inventory items. 📦

Authentication: Secure login and registration. 🔒

Database Integration: Seamless connection to a database for storing and retrieving inventory data. 🗄️

Responsive Design: User-friendly interface compatible with all devices. 📱💻

Project Structure

1. Client (Frontend)

The frontend is built with modern JavaScript frameworks (likely React) and contains the following:

.env: Environment variables for API URLs and other settings.

.gitignore: Specifies files ignored by Git.

package.json: Details dependencies and available scripts.

public: Contains static assets (e.g., HTML and images).

src: Main source code directory for components, styles, and logic.



2. Server (Backend)

The backend is built using Node.js and Express, with the following structure:

.env: Environment variables for database connection and secrets.

config: Configuration files for the application (e.g., database settings).

controllers: Business logic for handling API requests.

middlewares: Functions that run before API requests reach controllers.

models: Database models/schema definitions.

routes: Defines RESTful API endpoints.

seed.js: Script to seed the database with initial data.

Index.js: Main entry point of the server application.

vercel.json: Configuration file for deploying to Vercel.
  


Installation and Setup

Prerequisites

Node.js and npm installed on your system. 🛠️

MongoDB for database functionality (or adjust .env for your preferred database). 🗄️

Steps

Clone the repository:

git clone <repository-url>
cd Inventory-management-main

Setup Client:

cd client
npm install
npm start

Setup Server:

cd server
npm install
npm run dev

Open the application in your browser at http://localhost:<PORT>. 🌐

Deployment

The project can be deployed using platforms like Vercel (for frontend) and a Node.js-compatible cloud service (for backend).

Steps

Deploy the client using Vercel:

vercel --prod

Deploy the backend to a cloud service of your choice (e.g., AWS, Heroku, etc.).
