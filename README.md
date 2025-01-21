
# Login Module

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Project Structure](#project-structure)
- [Login Functionality](#login-functionality)
- [Working](#working)
---

## Overview
This project demonstrates a simple and functional login module built using **React.js** and **Tailwind CSS**. The module provides email-password-based authentication with form validation and error handling. Users can log in with predefined credentials and be redirected to a dashboard.

## Features

- **Email and Password Login**: Supports login with predefined credentials.
- **Form Validation**: Real-time validation for email format and required fields.
- **Error Handling**: Displays error messages for incorrect login attempts or invalid inputs.
- **Routing**: Uses React Router for navigation between the login page and dashboard.

## Technologies Used

- React.js
- Tailwind CSS
- React Router
- Validator.js (for email validation)

## Setup and Installation

### Prerequisites
- Node.js and npm installed on your system.
- Basic knowledge of React.js.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Project Structure

```
src/
├── Components/
│   ├── Header.js
│   ├── Footer.js
├── Login.js
├── Dashboard.js
├── App.js
├── index.js
```

- **Header.js**: Displays the application header.
- **Footer.js**: Displays the footer.
- **Login.js**: Handles user authentication and form validation.
- **Dashboard.js**: Placeholder page displayed after successful login.
- **App.js**: Main component that manages routing and layout.

## Login Functionality

### Hardcoded Credentials
The following users are available for testing:

| Email              | Password       |
|--------------------|----------------|
| suraj@gmail.com    | suraj@123      |
| mediversal@gmail.com | mediversal@123 |
| patna@gmail.com    | patna@123      |
| nit@gmail.com      | nit@123        |

### Validation
- **Email Validation**: Ensures that the input follows a valid email format.
- **Required Fields**: Checks that both email and password fields are filled.

### Error Handling
- Alerts for missing input fields.
- Alerts for unregistered users attempting to log in.

## Working

1. User enters their email and password.
2. The form validates the email format and checks that both fields are filled.
3. The input credentials are compared against the predefined user list.
4. If credentials match, the user is redirected to the dashboard.
5. If credentials are incorrect, an error message is displayed.

### Code Highlights

**Validation with `validator.js`**:
```javascript
if (name === "email" && !validator.isEmail(user.email)) {
  setEmailError("Please enter valid Email!");
} else {
  setEmailError("Valid Email :)");
}
```

**Credential Verification**:
```javascript
for (let i = 0; i < verifiedUser.length; i++) {
  if (verifiedUser[i].email === user.email && verifiedUser[i].password === user.password) {
    registered = true;
  }
}
```

**Navigation on Success**:
```javascript
if (registered) {
  navigate('/dashboard');
} else {
  alert("You are not a registered User. First please register and try again!!!");
}
```

