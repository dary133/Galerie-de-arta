# Stage 4: AI log

## Tools
- ChatGPT

## Key requests

### 1. Understanding React components and props
- **Asked:** What are React components and props, and how are they used to display data in a web application?
- **Got:** An explanation of how components divide the interface into reusable parts and how props allow data to be passed from a parent component to a child component.
- **Changed or rejected:** Applied these concepts to Art Gallery by creating separate components for displaying individual artworks and the entire artwork list.

### 2. Displaying artworks using React components
- **Asked:** How can I use map() and props to display my artworks automatically instead of showing the data as JSON?
- **Got:** Guidance on using map() to generate artwork cards, assigning a unique key to each card, and connecting the components to App.jsx.
- **Changed or rejected:** Replaced the JSON display with artwork cards while keeping the existing design and adding a message for an empty list.

### 3. Testing the React application
- **Asked:** How can I check if my React components work correctly and identify possible errors?
- **Got:** Instructions for testing an empty array, changing the sold status, checking the browser console, and running npm run build.
- **Changed or rejected:** Tested the different cases, verified that the console had no React warnings, and corrected the background image path to remove a build warning.

## What I learned / what did not work

I learned how React components work and how props are used to pass data between them.

I understood how map() generates multiple cards from an array and why each card needs a unique key.

I also learned how conditional rendering displays different content depending on the artwork's status.

During testing, I encountered a background image path warning, which I corrected before successfully building the application.