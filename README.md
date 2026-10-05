# Art Gallery
Welcome to a platform dedicated to discovering, showcasing, buying, and selling art. The platform allows artists to exhibit their work while giving art enthusiasts an accessible way to explore and purchase artworks.
## Data model
| Field | Type | Notes |
| ----------- | ------------ | ------------------------------------ |
| title | text | required, max 100 chars |
| sold | boolean | toggled from the list, default false |
| artwork_type | fixed values | Painting, Illustration, Digital Art |
| category | relation | Landscape, Abstract, Animals |
| user | relation | the owner of the item (from week 11) |
Sample data used across all stages:
1. Sunset Landscape, available, Painting
2. Silent Forest, sold, Digital Art
3. Abstract Flowers, available, Painting
## How to run
Open `index.html` in a browser. No build step, no server.
## AI usage
| Tool | Used for |
| -------------- | ----------------------------------------- |
| ChatGPT | Adapting the stage 1 html structure and project requirements to the Art Gallery theme |
Details per stage: see the ai-log/ folder.
## Status
- [x] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript
