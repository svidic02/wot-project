# WOT-projekat

This project is a web application for managing users, orders, foods, and tags. Below is an overview of implemented and planned features.

## Table of Contents

- [References](#references)
- [Installation](#installation)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Environment Variables](#environment-variables)
- [Admin Features](#admin-features)
  - [Users Management](#admin-users-management)
  - [Foods Management](#admin-foods-management)
  - [Tags Management](#admin-tags-management)
- [User Features](#user-features)
- [Global Features](#global-features)

## References

- [CodeWithNasir - Admin Dashboard Tutorial](https://www.youtube.com/watch?v=H9Vp0G--u-Y&list=PLpaspowtqj-f9-5g2Rc1dWm1n2_nNfIl6&index=15&ab_channel=CodeWithNasir)

## Installation

### Frontend

1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm start
   ```
   - The frontend runs on `http://localhost:3000`.

### Backend

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend server:
   ```bash
   npm run dev
   ```
   - The backend runs on `http://localhost:5000`.

### Environment Variables
1. Createa .env file in the backend folder:
   ```bash
   MONGO_URI=
   JWT_SECRET=
   
   ```

## Admin Features

### Users Management

#### Implemented:

- Admins can view all users
- Admins can delete users
- Admins can edit users
- Admins can add users

### Foods Management

#### Implemented:

- Admins can view all meals
- Admins can add foods
- Admins can remove foods
- Admins can edit foods

### Orders Management

#### Implemented:

- Admins can view all orders

### Tags Management

#### Implemented:

- Admins can view all tags

#### To-Do:

- Admins can add tags
- Admins can remove tags
- Admins can edit tags

## User Features

### To-Do:

- Users can view all the orders they have made
- Users can rate foods
- Users can track their orders
- Users can star foods
- Users can view their order history

## Global Features

### Implemented:

- Dark mode
- Exception handling (e.g., empty cart, not logged in)

### To-Do:

- Upload profile pictures
- More detailed description for foods when viewing the FoodPage
- Redesign all foods (images, descriptions, ratings, tags)
- Redesign UI
