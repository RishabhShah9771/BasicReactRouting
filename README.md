  
## Overview

This project demonstrates the basics of routing in a React application using `react-router-dom`. Routing allows you to navigate between different components or pages in a single-page application (SPA) without reloading the page.

## Important Topics Covered

### 1. Setting Up React Router

- Installing `react-router-dom`:
  ```bash
  npm install react-router-dom
  ```
- Importing necessary components:
  ```js
  import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
  ```

### 2. Defining Routes

- Using the `<Routes>` and `<Route>` components to map URLs to React components:
  ```js
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
  ```

### 3. Navigation with Links

- Using the `<Link>` component for navigation without page reloads:
  ```js
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </nav>
  ```

### 4. Nested Routing

- Rendering child routes inside parent components:
  ```js
  <Route path="/dashboard" element={<Dashboard />}>
    <Route path="profile" element={<Profile />} />
    <Route path="settings" element={<Settings />} />
  </Route>
  ```

### 5. Route Parameters

- Accessing dynamic segments in the URL:
  ```js
  <Route path="/users/:userId" element={<UserProfile />} />
  ```
  - Example: Navigating to `/users/123` renders the `UserProfile` component for user with ID 123.

### 6. Redirects and Navigation

- Programmatically navigating using `useNavigate`:
  ```js
  import { useNavigate } from 'react-router-dom';
  const navigate = useNavigate();
  // Example: navigate to home after form submission
  navigate('/');
  ```

## Example Folder Structure

```
/src
  /components
    Home.js
    About.js
    Contact.js
  App.js
  index.js
```

## Summary

This project is a starting point for learning how to implement client-side routing in React applications. It covers route definitions, navigation, nested routes, and dynamic parameters with practical examples.
