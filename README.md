# Art Gallery
Welcome to a platform dedicated to discovering, showcasing, buying, and selling art. The platform allows artists to exhibit their work while giving art enthusiasts an accessible way to explore and purchase artworks.

## Data model
| Field | Type | Notes |
|---|---|---|
| title | text | required, max 100 chars |
| available | boolean | toggled from the list, default true |
| type | fixed values | Painting, Illustration, Digital Art |
| category | relation | Landscape, Abstract, Animals |
| user | relation | the owner of the item (from week 11) |

Sample data used across all stages:

1. Sunset Landscape, available, Painting
2. Silent Forest, sold, Digital Art
3. Abstract Flowers, available, Painting

## How to run
Open `index.html` in a browser. No build step, no server.

Open the browser console (F12 or Ctrl + Shift + J) to view the JavaScript test results.

## Stage 2: data logic
Plain JavaScript, no DOM. `artworks.js` contains the artwork array and functions for listing titles, counting available artworks, searching, adding, toggling availability, and deleting artworks.

The functions use immutable operations, keeping the original array unchanged. Results and validation messages are displayed in the browser console.

## AI usage
| Tool | Used for |
|---|---|
| ChatGPT | Adapting the Stage 1 HTML structure and project requirements to the Art Gallery theme |
| ChatGPT | Understanding JavaScript array methods, implementing data logic, and verifying Stage 2 console results |

Details per stage: see the ai-log/ folder.

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [ ] Stage 3: Vite and React project