# Inventory Management System

## Overview

This is a full-stack **Inventory Management System** designed to streamline and optimize inventory processes. The project consists of two main components:

- **Client (Frontend) 🖥️**
- **Server (Backend) 🌐**

---

## Features

- 📦 **Inventory Management**: Add, edit, and delete inventory items.  
- 🔒 **Authentication**: Secure login and registration system.  
- 🗄️ **Database Integration**: Seamless connection to a database for storing and retrieving inventory data.  
- 📱💻 **Responsive Design**: User-friendly interface compatible with all devices.

---

## Project Structure

### 1. Client (Frontend)

The frontend is built with modern JavaScript frameworks (likely React) and contains the following:

<pre> ```plaintext client/ ├── .env # Environment variables ├── .gitignore # Git ignored files ├── package.json # Project metadata and dependencies ├── public/ # Static assets (HTML, images) └── src/ # Source code (components, styles, logic) ``` </pre>

### 2. Server (Backend)

The backend is built using Node.js and Express, structured as follows:

<pre> ```plaintext server/ ├── .env # Environment variables ├── config/ # Configuration files (e.g., DB settings) ├── controllers/ # Business logic for API handling ├── middlewares/ # Middleware functions ├── models/ # Database schema definitions ├── routes/ # RESTful API endpoint definitions ├── seed.js # Initial database seeding script ├── index.js # Server entry point └── vercel.json # Deployment config (for Vercel) ``` </pre>

---

## Installation and Setup

### Prerequisites

- Node.js and npm installed on your system 🛠️  
- MongoDB for database functionality 🗄️ (or update `.env` with your preferred DB)

### Steps

1. **Clone the Repository**:

```bash
git clone <repository-url>
cd Inventory-management-main
```

2. **Setup Server:**:

```bash
cd ../server
npm install
npm run dev
```

3. **Setup Client:**:

```bash
cd ../client
npm install
npm start
```

4. **Access the Application:**:
    Open your browser and navigate to:

```bash
http://localhost:3000
```

