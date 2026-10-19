# Stage 3: AI log

## Tools
- ChatGPT

## Key requests

### 1. Understanding data placement in React
- **Asked:** Why is the `artworks` array declared outside the `App()` component instead of inside it, and how does this affect React rendering?
- **Got:** An explanation of how React re-renders components and why declaring static data outside the component prevents unnecessary array recreation.
- **Changed or rejected:** I kept the array outside the component because the artwork data is static at this stage. I also understood that dynamic data will require state management in later stages.

### 2. Understanding JSON rendering in JSX
- **Asked:** What does `JSON.stringify(artworks, null, 2)` do in App.jsx, and why is it placed inside a `<pre>` element?
- **Got:** An explanation of how `JSON.stringify()` converts the artwork data into formatted text and how the `<pre>` element preserves spaces and line breaks.
- **Changed or rejected:** I kept the JSON display because Stage 3 requires the data to be shown as raw text instead of cards.

### 3. Running and checking the application
- **Asked:** How can I check if my React application runs correctly?
- **Got:** Instructions for starting the Vite development server, opening the application in the browser and checking the displayed JSON data.
- **Changed or rejected:** I corrected the terminal path by entering the `frontend` folder before running npm commands.

## What I learned / what did not work

I learned how React components use JavaScript data to display information and why static arrays can be declared outside the main component. I also understood how to display objects as formatted JSON using `JSON.stringify()` and `<pre>`. Initially, I had trouble running npm commands from the wrong folder, but I solved the issue by navigating to `frontend`. The application now displays the artwork data correctly.