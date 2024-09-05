# Real-Time Chat Application In MERN

## Overview

This **Real-Time Chat Application** is developed using the **MERN Stack** (MongoDB, Express, React, and Node.js) with real-time communication enabled through **Socket.IO**. The project is designed to provide a fast and interactive messaging experience where users can chat with each other in real-time.

## Features

- Real-time messaging using **Socket.IO**
- User authentication and authorization
- Interactive and responsive UI designed with **Tailwind CSS** and **DaisyUI**
- Navigation handled with **React Router DOM**
- Backend API built with **Express** and **Mongoose** for database operations
- Supports multiple chat rooms

## Tech Stack

### Frontend

- **React.js**: Core framework for building the user interface.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **DaisyUI**: Tailwind CSS components for a responsive design.
- **React Router DOM**: For seamless navigation between pages.
- **Socket.IO**: Enables real-time, bidirectional communication between client and server.

### Backend

- **Node.js**: JavaScript runtime for building the server.
- **Express.js**: Web framework for handling API requests.
- **MongoDB**: NoSQL database to store user and message data.
- **Mongoose**: ODM library to interact with MongoDB.
- **Socket.IO**: For real-time communication between client and server.

## Installation

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14 or higher)
- **MongoDB**

### Steps to Run Locally

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Rafiqdevhub/PRODIGY_FS_04.git
   cd PRODIGY_FS_04
   ```

# Install dependencies for backend

cd frontend
npm install

# Install dependencies for frontend

cd ../backend
npm install

# .env

MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret

# Start the frontend

cd frontend
npm run dev

# Start the frontend app

cd ../frontend
npm run dev
