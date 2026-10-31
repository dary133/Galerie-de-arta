
# Art Gallery

Art Gallery is a web application dedicated to discovering, showcasing, buying and selling artworks. It allows artists to present their creations and visitors to explore different types of art. The project is developed progressively for the Web Technologies course.

## Data model

| Field | Type | Notes |
|---|---|---|
| id | integer | Unique identifier for each artwork |
| title | text | Artwork title, maximum 100 characters in the data model |
| sold | boolean | `true` for sold and `false` for available |
| artwork_type | fixed values | Painting, Illustration, Digital Art |
| image | text | Path to the artwork image in the React application |
| category | relation (planned) | Landscape, Abstract, Animals |
| user | relation (planned) | Artwork owner, intended for Week 11 |

### Original sample data

1. Sunset Landscape — available — Painting
2. Silent Forest — sold — Digital Art
3. Abstract Flowers — available — Painting

These three artworks are used in the HTML/CSS mockup and the plain JavaScript exercises. The React version uses the properties `sold` and `artwork_type`, while Stage 2 uses `available` and `type`. In the React gallery, Silent Forest is classified as Painting.

### React gallery

The React application initially displays 12 artworks, of which 11 are available and one is sold.

The artwork collection contains Sunset Landscape, Silent Forest, Abstract Flowers, Pink Blossoms, Forgotten Knight, Panther, Gold Panther, Tropical Bloom, Whispering Woods, Mythical Forest, Sakura Mountain and Coastal Path.

The initial artwork data is defined in `frontend/src/App.jsx`.

## How to run

### HTML/CSS and JavaScript mockup (Stages 1–2)

Open `mockup/index.html` in a browser.

Stage 2 JavaScript results and validation messages can be viewed in the browser developer console (F12).

The mockup's Add artwork form is visual only; the data addition function is demonstrated separately in JavaScript.

### React application (Stages 3–5)

From the project root, run:

```bash
cd frontend
npm install
npm run dev
```

Open the URL provided by Vite (usually `http://localhost:5173/`).

The production build command is `npm run build`, executed from `frontend/`.

## Stage 1: static mockup

The HTML/CSS mockup includes a header, a visual Add artwork form with a title field and artwork type selection, and three artwork cards.

A sold artwork is displayed differently from available artworks.

The main layout has two columns on desktop and one column below 700 px.

The design uses CSS variables, hover effects, visible keyboard focus and a dark theme.

## Stage 2: JavaScript data logic

`mockup/artworks.js` contains the initial data and functions for listing titles, counting available artworks, searching by title, adding artworks, changing availability and deleting artworks.

Input validation rejects empty titles and invalid artwork types.

The operations return new arrays without modifying the original data.

Tests print their results in the browser console, without DOM manipulation.

## Stage 3: Vite and React

The application was migrated to Vite and React in the `frontend/` folder.

The initial artwork data was placed in `App.jsx`, and the header displayed the application name and a counter calculated from the array.

The data was initially rendered as formatted JSON.

The mockup's CSS was reused and adapted to a single main column.

## Stage 4: components

The gallery uses `ArtworkList` and `ArtworkCard` as separate React components.

`ArtworkList` receives the artworks through props and renders the cards with `map()` and unique keys.

`ArtworkCard` receives the data of an individual artwork and displays its title, type, image and availability.

An empty list displays a message, and sold artworks have a different appearance.

## Stage 5: local state and events

The artwork list is managed with `useState` in `App.jsx`.

Checkboxes change the Sold/Available status, and Delete buttons remove artworks.

Updates use immutable operations such as `map()` and `filter()`, while the header counter is recalculated from the current list.

A theme button switches between light and dark mode using React state and the `data-theme` attribute.

Additional interface features include:

- Filters for Painting, Illustration and Digital Art.
- Search by artwork title with suggestions.
- Enlarged artwork previews that preserve image proportions.
- A Painting on Clothes section with videos of hand-painted clothing.
- Artwork images presented with transparent backgrounds where applicable.

Artwork state and theme selection are not saved permanently and return to their initial values after a page refresh.

The React gallery does not yet include the Add artwork form.

## AI usage

| Tool | Used for |
|---|---|
| ChatGPT | Understanding HTML and CSS structure, Grid, Flexbox, responsive layouts, focus styles and dark mode in Stage 1 |
| ChatGPT | Understanding JavaScript array methods, validation, immutable updates and console testing in Stage 2 |
| ChatGPT | Understanding Vite and React, project organization and rendering formatted JSON in Stage 3 |
| ChatGPT | Understanding components, props, `map()`, unique keys and conditional rendering in Stage 4 |
| ChatGPT | Understanding `useState`, event handlers, theme switching, artwork search, image presentation and transparent backgrounds in Stage 5 |

Detailed AI logs are available in `ai-log/etapa-01.md`, `ai-log/etapa-02.md`, `ai-log/etapa-03.md`, `ai-log/etapa-04.md` and `ai-log/etapa-05.md`.

## Verification checklists

The tables document the requirements for Stages 1–5. Each row identifies the corresponding implementation or documentation and a method for verifying it.

### Stage 1 checklist

| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S1-R1 | Project description, data model, sample data and run instructions | [README.md](https://github.com/dary133/Galerie-de-arta/blob/main/README.md#L2-L46) | Read README |
| S1-R2 | AI usage documented in README | [AI usage](https://github.com/dary133/Galerie-de-arta/blob/main/README.md#L70-L79) | Read AI usage section |
| S1-R3 | AI log for Stage 1 | [etapa-01.md](https://github.com/dary133/Galerie-de-arta/blob/5a680d93f8d06ff63f3ccc3113cdbae388384fb0/ai-log/etapa-01.md) | Read AI log |
| S1-R4 | Header, Add artwork form and three distinct cards | [index.html](https://github.com/dary133/Galerie-de-arta/blob/ef93cb37bbeb7d91584ff49e7c2a45865a84c8dd/mockup/index.html#L13-L179) | Open mockup |
| S1-R5 | Sold artwork has distinct visual styling | [Sold card CSS](https://github.com/dary133/Galerie-de-arta/blob/5a680d93f8d06ff63f3ccc3113cdbae388384fb0/mockup/style.css#L380-L386) | Inspect sold card |
| S1-R6 | Two columns on desktop; one below 700 px | [Desktop layout](https://github.com/dary133/Galerie-de-arta/blob/5a680d93f8d06ff63f3ccc3113cdbae388384fb0/mockup/style.css#L187-L197), [Mobile layout](https://github.com/dary133/Galerie-de-arta/blob/5a680d93f8d06ff63f3ccc3113cdbae388384fb0/mockup/style.css#L544-L550) | Resize browser above and below 700 px |
| S1-R7 | Visible focus and readable dark mode | [Focus](https://github.com/dary133/Galerie-de-arta/blob/5a680d93f8d06ff63f3ccc3113cdbae388384fb0/mockup/style.css#L531-L535), [Dark mode](https://github.com/dary133/Galerie-de-arta/blob/5a680d93f8d06ff63f3ccc3113cdbae388384fb0/mockup/style.css#L592-L633) | Use Tab and test dark system theme |
| S1-R8 | Mockup published in Git history | [Mockup commit](https://github.com/dary133/Galerie-de-arta/commit/957e576cd2bc6536deb1a7dc48aa3ec34c6aa2eb) | Inspect commit history |

### Stage 2 checklist

| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S2-R1 | JavaScript linked to HTML and console output on page load | [index.html](https://github.com/dary133/Galerie-de-arta/blob/ef93cb37bbeb7d91584ff49e7c2a45865a84c8dd/mockup/index.html#L7-L12) | Open page and inspect Console (F12) |
| S2-R2 | At least three artworks with ID, title, status and fixed type | [Artwork data](https://github.com/dary133/Galerie-de-arta/blob/ef93cb37bbeb7d91584ff49e7c2a45865a84c8dd/mockup/artworks.js#L1-L27) | Read initial array |
| S2-R3 | List, count, search, add, toggle and delete functions | [Functions](https://github.com/dary133/Galerie-de-arta/blob/ef93cb37bbeb7d91584ff49e7c2a45865a84c8dd/mockup/artworks.js#L30-L111), [Tests](https://github.com/dary133/Galerie-de-arta/blob/ef93cb37bbeb7d91584ff49e7c2a45865a84c8dd/mockup/artworks.js#L114-L171) | Check console results |
| S2-R4 | Reject empty title and invalid artwork type | [Validation](https://github.com/dary133/Galerie-de-arta/blob/ef93cb37bbeb7d91584ff49e7c2a45865a84c8dd/mockup/artworks.js#L65-L88), [Tests](https://github.com/dary133/Galerie-de-arta/blob/ef93cb37bbeb7d91584ff49e7c2a45865a84c8dd/mockup/artworks.js#L174-L182) | Inspect validation messages in Console |
| S2-R5 | Original array remains unchanged after adding | [Immutability test](https://github.com/dary133/Galerie-de-arta/blob/ef93cb37bbeb7d91584ff49e7c2a45865a84c8dd/mockup/artworks.js#L136-L154) | Compare initial and new array lengths |
| S2-R6 | Stage 2 README section and AI log | [README Stage 2](https://github.com/dary133/Galerie-de-arta/blob/main/README.md#L52-L54), [etapa-02.md](https://github.com/dary133/Galerie-de-arta/blob/5a680d93f8d06ff63f3ccc3113cdbae388384fb0/ai-log/etapa-02.md) | Read both documents |
| S2-R7 | JavaScript logic published in Git history | [Stage 2 commit](https://github.com/dary133/Galerie-de-arta/commit/957e576cd2bc6536deb1a7dc48aa3ec34c6aa2eb) | Inspect commit history |

### Stage 3 checklist

| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S3-R1 | Vite development server starts | [package.json](https://github.com/dary133/Galerie-de-arta/blob/7b005317d987d36899a9962a8bdbc83326867998/frontend/package.json) | Run `npm install` and `npm run dev` |
| S3-R2 | Application name and data-derived counter | [App.jsx](https://github.com/dary133/Galerie-de-arta/blob/7b005317d987d36899a9962a8bdbc83326867998/frontend/src/App.jsx#L23-L42) | Run Stage 3 version and inspect header |
| S3-R3 | Project-specific sample data | [Initial array](https://github.com/dary133/Galerie-de-arta/blob/7b005317d987d36899a9962a8bdbc83326867998/frontend/src/App.jsx#L2-L21) | Compare with sample data |
| S3-R4 | Stage 1 CSS styles reused in React | [App.css](https://github.com/dary133/Galerie-de-arta/blob/7b005317d987d36899a9962a8bdbc83326867998/frontend/src/App.css) | Compare mockup and React appearance |
| S3-R5 | Dependencies ignored and production build available | [.gitignore](https://github.com/dary133/Galerie-de-arta/blob/7b005317d987d36899a9962a8bdbc83326867998/frontend/.gitignore#L10-L12), [package.json](https://github.com/dary133/Galerie-de-arta/blob/7b005317d987d36899a9962a8bdbc83326867998/frontend/package.json) | Check repository and run `npm run build` |
| S3-R6 | Stage 3 README section and AI log | [README Stage 3](https://github.com/dary133/Galerie-de-arta/blob/main/README.md#L56-L58), [etapa-03.md](https://github.com/dary133/Galerie-de-arta/blob/5a680d93f8d06ff63f3ccc3113cdbae388384fb0/ai-log/etapa-03.md) | Read both documents |
| S3-R7 | Vite/React project published in Git history | [React commit](https://github.com/dary133/Galerie-de-arta/commit/7b005317d987d36899a9962a8bdbc83326867998) | Inspect commit history |

### Stage 4 checklist

| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S4-R1 | Separate reusable React components | [Components folder](https://github.com/dary133/Galerie-de-arta/tree/5626f1e9757bf5f98d25650e15743cfd128ee216/frontend/src/components) | Open components folder |
| S4-R2 | ArtworkCard receives artwork through props | [ArtworkCard.jsx](https://github.com/dary133/Galerie-de-arta/blob/5626f1e9757bf5f98d25650e15743cfd128ee216/frontend/src/components/ArtworkCard.jsx#L1-L21) | Read component props |
| S4-R3 | List rendered using `map()` and stable `key` | [ArtworkList.jsx](https://github.com/dary133/Galerie-de-arta/blob/5626f1e9757bf5f98d25650e15743cfd128ee216/frontend/src/components/ArtworkList.jsx#L1-L16) | Read code and inspect Console |
| S4-R4 | Message shown for an empty artwork list | [ArtworkList.jsx](https://github.com/dary133/Galerie-de-arta/blob/5626f1e9757bf5f98d25650e15743cfd128ee216/frontend/src/components/ArtworkList.jsx#L4-L9) | Test with an empty array |
| S4-R5 | Sold status changes artwork card appearance | [ArtworkCard.jsx](https://github.com/dary133/Galerie-de-arta/blob/5626f1e9757bf5f98d25650e15743cfd128ee216/frontend/src/components/ArtworkCard.jsx#L4-L14), [App.css](https://github.com/dary133/Galerie-de-arta/blob/5626f1e9757bf5f98d25650e15743cfd128ee216/frontend/src/App.css#L425-L435) | Inspect sold card styling |
| S4-R6 | Stage 4 README section and AI log | [README Stage 4](https://github.com/dary133/Galerie-de-arta/blob/main/README.md#L60-L62), [etapa-04.md](https://github.com/dary133/Galerie-de-arta/blob/5a680d93f8d06ff63f3ccc3113cdbae388384fb0/ai-log/etapa-04.md) | Read both documents |
| S4-R7 | Stage 4 published in Git history | [Stage 4 commit](https://github.com/dary133/Galerie-de-arta/commit/5626f1e9757bf5f98d25650e15743cfd128ee216) | Inspect commit history |

### Stage 5 checklist

| ID | Requirement | Where (permalink) | How to check |
|---|---|---|---|
| S5-R1 | Artwork list managed in parent `useState` | [App.jsx](https://github.com/dary133/Galerie-de-arta/blob/ef93cb37bbeb7d91584ff49e7c2a45865a84c8dd/frontend/src/App.jsx#L37-L42) | Read state declaration |
| S5-R2 | Checkbox toggles status and card styling | [App.jsx](https://github.com/dary133/Galerie-de-arta/blob/ef93cb37bbeb7d91584ff49e7c2a45865a84c8dd/frontend/src/App.jsx#L44-L53), [ArtworkCard.jsx](https://github.com/dary133/Galerie-de-arta/blob/ef93cb37bbeb7d91584ff49e7c2a45865a84c8dd/frontend/src/components/ArtworkCard.jsx#L1-L35) | Click artwork checkbox |
| S5-R3 | Delete removes the selected artwork | [App.jsx](https://github.com/dary133/Galerie-de-arta/blob/ef93cb37bbeb7d91584ff49e7c2a45865a84c8dd/frontend/src/App.jsx#L55-L60), [ArtworkCard.jsx](https://github.com/dary133/Galerie-de-arta/blob/ef93cb37bbeb7d91584ff49e7c2a45865a84c8dd/frontend/src/components/ArtworkCard.jsx#L39-L47) | Click Delete |
| S5-R4 | Header counter derived from the artwork list | [Counter](https://github.com/dary133/Galerie-de-arta/blob/ef93cb37bbeb7d91584ff49e7c2a45865a84c8dd/frontend/src/App.jsx#L69-L72), [Header](https://github.com/dary133/Galerie-de-arta/blob/ef93cb37bbeb7d91584ff49e7c2a45865a84c8dd/frontend/src/App.jsx#L103-L108) | Toggle or delete and inspect header count |
| S5-R5 | Immutable state updates using `map()` and `filter()` | [App.jsx](https://github.com/dary133/Galerie-de-arta/blob/ef93cb37bbeb7d91584ff49e7c2a45865a84c8dd/frontend/src/App.jsx#L44-L60) | Read state update handlers |
| S5-R6 | Light/dark toggle with React state and `data-theme` | [App.jsx](https://github.com/dary133/Galerie-de-arta/blob/ef93cb37bbeb7d91584ff49e7c2a45865a84c8dd/frontend/src/App.jsx#L30-L67), [App.css](https://github.com/dary133/Galerie-de-arta/blob/ef93cb37bbeb7d91584ff49e7c2a45865a84c8dd/frontend/src/App.css#L870-L888) | Toggle light/dark mode |
| S5-R7 | React Console, README and Stage 5 AI log | [README Stage 5](https://github.com/dary133/Galerie-de-arta/blob/main/README.md#L64-L68), [etapa-05.md](https://github.com/dary133/Galerie-de-arta/blob/5a680d93f8d06ff63f3ccc3113cdbae388384fb0/ai-log/etapa-05.md) | Inspect Console and read documentation |
| S5-R8 | Stage 5 published in Git history | [Stage 5 commit](https://github.com/dary133/Galerie-de-arta/commit/ef93cb37bbeb7d91584ff49e7c2a45865a84c8dd) | Inspect commit history |

## Status

- [x] Stage 1: static mockup
- [x] Stage 2: JavaScript data logic
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [x] Stage 5: local state and events
- [ ] Stage 6: loading data from a mock API
