
# Lite Notes

A minimalist note-taking app designed for capturing your thoughts on the go. Built with React, Node.js, Express, and Firebase.

## Features

* Markdown-powered notes for distraction-free writing
* Cloud synchronization across devices
* Simple organization with folders or tags
* Offline access

## Installation

**Prerequisites:**

* Node.js and npm (or yarn)
* A Firebase project with Firestore enabled

**Steps:**

1. Clone the repository:

   ```bash
   git clone https://github.com/adjanour/lite-notes
   ```

2. Install dependencies:

   ```bash
   cd lite-notes
   npm install # or yarn install
   ```

3. Create a `.env` file in the project root and add your Firebase project configuration (see "Environment Variables" section below).
4. Start the development server:

   ```bash
   npm start # or yarn start
   ```

## Environment Variables

Create a `.env` file in the project root. **Do not commit this to Git!**.  Add your Firebase credentials:

   ```bash
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
   REACT_APP_FIREBASE_PROJECT_ID=your-project-id
   # ... other Firebase config variables
   ```

## Deployment

* **Frontend:** Build your React project and deploy to a static hosting provider (Netlify, Vercel, GitHub Pages, etc.).
* **Backend:** Deploy your Node.js/Express server to a suitable platform (Heroku, AWS, etc.).

## Contributing

We welcome contributions to Lite Notes! Please refer to the CONTRIBUTING.md file for guidelines.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
