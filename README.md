
# Art Gallery

Welcome to a platform dedicated to discovering, showcasing, buying, and selling art. The platform allows artists to exhibit their work while giving art enthusiasts an accessible way to explore and purchase artworks.

## Data model

| Field | Type | Notes |
|---|---|---|
| id | integer | unique identifier for each artwork |
| title | text | required, max 100 chars |
| sold | boolean | true if sold, default false |
| artwork_type | fixed values | Painting, Illustration, Digital Art |
| category | relation | Landscape, Abstract, Animals |
| user | relation | the owner of the item (from week 11) |

Sample data used across all stages:

1. Sunset Landscape, available, Painting
2. Silent Forest, sold, Digital Art
3. Abstract Flowers, available, Painting

## How to run

The React application is located in the `frontend/` folder.

Run the following commands in the terminal:

1. `cd frontend`
2. `npm install`
3. `npm run dev`

Open the local address displayed in the terminal (usually `http://localhost:5173/`).

The previous HTML, CSS, and JavaScript versions are preserved in the `mockup/` folder.

## Stage 2: data logic

Plain JavaScript, no DOM. `artworks.js` contains the artwork array and functions for listing titles, counting available artworks, searching, adding, toggling availability, and deleting artworks.

The functions use immutable operations, keeping the original array unchanged. Results and validation messages are displayed in the browser console.

## Stage 3: Vite and React project

The application was migrated to React using Vite and is now located in the `frontend/` folder.

The artwork data was moved into `App.jsx`, and the header displays the total number of artworks and the number of available artworks calculated from the array.

The CSS styles from Stage 1 were reused, while the artwork data was temporarily displayed as JSON.

## Stage 4: components

The artwork list is now rendered dynamically using two React components:

- `ArtworkList` receives the artwork array through props and uses `map()` to render a card for each artwork.
- `ArtworkCard` receives a single artwork through props and displays its title, artwork type, and availability status.

Each card uses a unique `key` based on the artwork ID.

The application displays a message when the artwork list is empty. The appearance of each card changes depending on its sold status.

## AI usage

| Tool | Used for |
|---|---|
| ChatGPT | Adapting the Stage 1 HTML structure and project requirements to the Art Gallery theme |
| ChatGPT | Understanding JavaScript array methods, implementing data logic, and verifying Stage 2 console results |
| ChatGPT | Understanding the Vite and React project structure and adapting the application for Stage 3 |
| ChatGPT | Creating React components, understanding props, map and key, and testing the artwork list in Stage 4 |

Details per stage: see the `ai-log/` folder.

## Status

- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [ ] Stage 5: local state and events
