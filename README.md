# Employee Management System

This is a **React + Vite + TypeScript** project styled with **Tailwind CSS**. The application allows user authentication, dashboard visualization, and complete CRUD (create, read, update, delete) functionality for managing employees.

## Features

- **Login System**: Authenticate users.
- **Dashboard**: Provides insights and key metrics.
- **User Management**:
    - Add, edit, and delete users.
    - View and sort the user list.
- **Responsive Design**: Created for both desktop and mobile layouts.

---

## Technologies Used

- **React**: Component-based UI development.
- **TypeScript**: Static typing for better maintainability.
- **Vite**: Build tool.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Router DOM**: For navigation.
- **Context API**: For state management.
- **LocalForage**: For storage.
- **Match Sorter** & **Sort-By**: For efficient sorting and filtering.

---

## Folder Structure

The project follows a modular and organized folder structure:

```
plaintext
Copy code
src/
├── App/                      # Root application component
├── assets/                   # Images and static assets
├── components/               # Reusable UI components
│   ├── alert/                # Alert and Input form components
│   ├── common/               # Shared buttons, inputs, and selects
│   ├── core/                 # Interfaces, storage logic, and types
│   ├── dashboard/            # Dashboard-specific components
│   ├── layout/               # Desktop and mobile layouts
│   ├── login/                # Login components
│   ├── modal/                # Modal component
│   ├── pagination/           # Pagination component
│   └── users/                # User-related UI components
├── constants/                # Static data like table columns and sidebar
├── container/                # Main app container
├── context/                  # Context API for user management
├── pages/                    # Page-specific components
│   ├── login/                # Login page
│   ├── dashboard/            # Dashboard page
│   ├── users/                # User list page
│   ├── createUser/           # Create user page
│   └── editUser/             # Edit user page
└── styles/                   # Tailwind styles and configuration

```

---

## Getting Started

### Prerequisites

- **npm**: For package management

### Installation

1. **Create the project**:
    
    ```bash
    
    npm create vite@latest
    ```
    
2. **Navigate to the project folder** and install dependencies:
    
    ```bash
    
    npm install
    ```
    
3. **Install additional libraries**:
    
    ```bash
    
    npm install react-router-dom localforage match-sorter sort-by
    ```
    
4. **Start the development server**:
    
    ```bash
    
    npm run dev
    ```
    

---

## Key Components

### Login Page

Located at `src/pages/login`.

Handles user authentication and redirects to the dashboard upon successful login.

### Dashboard

Located at `src/pages/dashboard`.

Displays system metrics and other key information.

### User Management

Located at `src/pages/users`, `src/pages/createUser`, and `src/pages/editUser`.

Includes features to view, add, edit, and delete users.

### Context API

Located at `src/context/userContext.tsx`.

Provides a global state for managing user data across the application.

---

## Tailwind CSS

This project is styled using Tailwind CSS. The configuration can be customized in `tailwind.config.js`.

---