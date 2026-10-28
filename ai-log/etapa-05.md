# Stage 5: AI log

## Tools
- ChatGPT

## Key requests

### 1. Understanding useState
- **Asked:** Explain how useState works in React, why it is needed instead of a regular array, and why state must be updated using functions such as map() and filter().
- **Got:** An explanation of how React tracks state changes, updates the interface, and uses immutable operations to create new arrays.
- **Changed or rejected:** Applied useState to the artwork list and used immutable updates for changing availability and deleting artworks.

### 2. Understanding props and events
- **Asked:** Explain how components communicate through props and how onChange and onClick events allow users to interact with the artwork cards.
- **Got:** An explanation of how functions are passed from App to ArtworkList and ArtworkCard, and how events trigger state updates.
- **Changed or rejected:** Adapted the event handlers to the existing artwork components while preserving the gallery layout.

### 3. Understanding light and dark mode
- **Asked:** Explain how React can switch between light and dark mode using state, the data-theme attribute, and CSS variables.
- **Got:** An explanation of how the selected theme is stored in state and how CSS variables control the appearance of the page.
- **Changed or rejected:** Adapted the theme toggle to the existing green, brown, and gold color palette.

## What I learned / what did not work

I learned how React manages state and automatically updates the interface when data changes. I understood why immutable operations are important and how props and event handlers connect different components.

I also learned how CSS variables and the data-theme attribute can be used to switch between themes.

Initially, useState was placed outside the App component, which caused an error. Moving it inside the component fixed the problem.