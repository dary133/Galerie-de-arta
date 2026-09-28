# <Galerie de arta>
<Welcome to a platform dedicated to discovering, showcasing, buying, and selling art. The platform allows artists to exhibit their work while giving art enthusiasts an accessible way to explore and purchase artworks.>
## Data model
| Field | Type | Notes |
| ----------- | ------------ | ------------------------------------ |
| title | text | required, max 100 chars |
| sold | boolean | toggled from the list, default false |
| artwork_type | fixed values | Painting, Drawing, Digital Art |
| category | relation | Landscape, Abstract, Animals |
| user | relation | the owner of the item (from week 11) |
Sample data used across all stages:
1. Sunset Landscape, active, painting
2. Golden Leopard, done, painting
3. Abstract Flowers, active, painting
## How to run
Open `index.html` in a browser. No build step, no server.
## AI usage
| Tool | Used for |
| -------------- | ----------------------------------------- |
| ChatGPT | <what exactly, e.g. CSS Grid, stage 1> |
Details per stage: see the ai-log/ folder.
## Status
- [x] Stage 1: static mockup
☐ Stage 2: data logic in JavaScript
